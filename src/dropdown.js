import { Controller } from '@hotwired/stimulus'
import { transition } from './transition'

export default class extends Controller {
  static targets = ['menu', 'button', 'menuItem']
  static values = {
    open: { type: Boolean, default: false },
    closeOnEscape: { type: Boolean, default: true },
    closeOnClickOutside: { type: Boolean, default: true },
  }

  static classes = ['enter', 'enterFrom', 'enterTo', 'leave', 'leaveFrom', 'leaveTo', 'toggle']

  // lifecycle
  connect() {
    this.#initializeDropdownActions()
  }

  disconnect() {
    // lets make sure we don't cache with Turbo any open dropdowns
    this.openValue = false
  }

  // callbacks
  openValueChanged() {
    transition(this.menuTarget, this.openValue, this.transitionOptions)

    if (this.openValue === true && this.hasMenuItemTarget) {
      this.menuItemTargets[0].focus()
    }
  }

  // actions
  show() {
    this.openValue = true
  }

  hide(event) {
    // if the event is a click and the target is not inside the dropdown, then close it
    if (
      this.closeOnClickOutsideValue &&
      event.target.nodeType &&
      this.element.contains(event.target) === false &&
      this.openValue
    ) {
      this.openValue = false
    }

    // if the event is a keydown and the key is escape, then close it
    if (this.closeOnEscapeValue && event.key === 'Escape' && this.openValue) {
      this.openValue = false
    }
  }

  toggle() {
    this.openValue = !this.openValue
  }

  nextItem(event) {
    event.preventDefault()

    this.menuItemTargets[this.nextIndex].focus()
  }

  previousItem(event) {
    event.preventDefault()

    this.menuItemTargets[this.previousIndex].focus()
  }

  // getters and setters
  get currentItemIndex() {
    return this.menuItemTargets.indexOf(document.activeElement)
  }

  get nextIndex() {
    return Math.min(this.currentItemIndex + 1, this.menuItemTargets.length - 1)
  }

  get previousIndex() {
    return Math.max(this.currentItemIndex - 1, 0)
  }

  get transitionOptions() {
    // once the Class API default values are available, we can simplify this
    return {
      enter: this.hasEnterClass ? this.enterClass : 'transition ease-out duration-100',
      enterFrom: this.hasEnterFromClass ? this.enterFromClass : 'transform opacity-0 scale-95',
      enterTo: this.hasEnterToClass ? this.enterToClass : 'transform opacity-100 scale-100',
      leave: this.hasLeaveClass ? this.leaveClass : 'transition ease-in duration-75',
      leaveFrom: this.hasLeaveFromClass ? this.leaveFromClass : 'transform opacity-100 scale-100',
      leaveTo: this.hasLeaveToClass ? this.leaveToClass : 'transform opacity-0 scale-95',
      toggleClass: this.hasToggleClass ? this.toggleClass : 'hidden',
    }
  }

  // private

  #initializeDropdownActions() {
    // this will set the necessary actions on the dropdown element for it to work
    // data-action="click->dropdown#toggle click@window->dropdown#hide keydown.up->dropdown#previousItem keydown.down->dropdown#nextItem"
    // Note: If existing actions are already specified by the user, they will be preserved and augmented without any redundancy.

    const actions = this.element.dataset.action ? this.element.dataset.action.split(' ') : []
    actions.push('click->dropdown#toggle')
    actions.push('click@window->dropdown#hide')
    actions.push('keydown.up->dropdown#previousItem')
    actions.push('keydown.down->dropdown#nextItem')
    actions.push('keydown.esc->dropdown#hide')
    this.element.dataset.action = [...new Set(actions)].join(' ')
  }
}
