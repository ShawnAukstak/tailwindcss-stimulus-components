import{Controller as t}from"@hotwired/stimulus";function e(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,s,i){return s&&e(t.prototype,s),i&&e(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,n(t,e)}function n(t,e){return n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(t,e)}var a=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}i(e,t);var n=e.prototype;return n.initialize=function(){this.hide()},n.connect=function(){var t=this;setTimeout(function(){t.show()},this.showAfter),this.hasDismissAfterValue&&setTimeout(function(){t.close()},this.dismissAfterValue)},n.close=function(){var t=this;this.hide(),setTimeout(function(){t.element.remove()},this.removeAfter)},n.show=function(){var t,e;(t=this.element.classList).add.apply(t,this.showClasses),(e=this.element.classList).remove.apply(e,this.hideClasses)},n.hide=function(){var t,e;(t=this.element.classList).add.apply(t,this.hideClasses),(e=this.element.classList).remove.apply(e,this.showClasses)},s(e,[{key:"removeAfter",get:function(){return this.hasRemoveDelayValue?this.removeDelayValue:1100}},{key:"showAfter",get:function(){return this.hasShowDelayValue?this.showDelayValue:200}}]),e}(t);a.values={dismissAfter:Number,showDelay:Number,removeDelay:Number},a.classes=["show","hide"];var o=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}i(e,t);var s=e.prototype;return s.connect=function(){this.timeout=null,this.duration=this.data.get("duration")||1e3},s.save=function(){var t=this;clearTimeout(this.timeout),this.timeout=setTimeout(function(){t.statusTarget.textContent="Saving...",Rails.fire(t.formTarget,"submit")},this.duration)},s.success=function(){this.setStatus("Saved!")},s.error=function(){this.setStatus("Unable to save!")},s.setStatus=function(t){var e=this;this.statusTarget.textContent=t,this.timeout=setTimeout(function(){e.statusTarget.textContent=""},2e3)},e}(t);o.targets=["form","status"];var r=/*#__PURE__*/function(t){function e(){for(var e,s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))||this)._onMenuButtonKeydown=function(t){switch(t.keyCode){case 13:case 32:t.preventDefault(),e.toggle()}},e}i(e,t);var n=e.prototype;return n.connect=function(){this.toggleClass=this.data.get("class")||"hidden",this.visibleClass=this.data.get("visibleClass")||null,this.invisibleClass=this.data.get("invisibleClass")||null,this.activeClass=this.data.get("activeClass")||null,this.enteringClass=this.data.get("enteringClass")||null,this.leavingClass=this.data.get("leavingClass")||null,this.hasButtonTarget&&this.buttonTarget.addEventListener("keydown",this._onMenuButtonKeydown),this.element.setAttribute("aria-haspopup","true")},n.disconnect=function(){this.hasButtonTarget&&this.buttonTarget.removeEventListener("keydown",this._onMenuButtonKeydown)},n.toggle=function(){this.openValue=!this.openValue},n.openValueChanged=function(){this.openValue?this._show():this._hide()},n._show=function(t){var e=this;setTimeout(function(){e.menuTarget.classList.remove(e.toggleClass),e.element.setAttribute("aria-expanded","true"),e._enteringClassList[0].forEach(function(t){e.menuTarget.classList.add(t)}.bind(e)),e._activeClassList[0].forEach(function(t){e.activeTarget.classList.add(t)}),e._invisibleClassList[0].forEach(function(t){return e.menuTarget.classList.remove(t)}),e._visibleClassList[0].forEach(function(t){e.menuTarget.classList.add(t)}),setTimeout(function(){e._enteringClassList[0].forEach(function(t){return e.menuTarget.classList.remove(t)})}.bind(e),e.enterTimeout[0]),"function"==typeof t&&t()}.bind(this))},n._hide=function(t){var e=this;setTimeout(function(){e.element.setAttribute("aria-expanded","false"),e._invisibleClassList[0].forEach(function(t){return e.menuTarget.classList.add(t)}),e._visibleClassList[0].forEach(function(t){return e.menuTarget.classList.remove(t)}),e._activeClassList[0].forEach(function(t){return e.activeTarget.classList.remove(t)}),e._leavingClassList[0].forEach(function(t){return e.menuTarget.classList.add(t)}),setTimeout(function(){e._leavingClassList[0].forEach(function(t){return e.menuTarget.classList.remove(t)}),"function"==typeof t&&t(),e.menuTarget.classList.add(e.toggleClass)}.bind(e),e.leaveTimeout[0])}.bind(this))},n.show=function(){this.openValue=!0},n.hide=function(t){!1===this.element.contains(t.target)&&this.openValue&&(this.openValue=!1)},s(e,[{key:"activeTarget",get:function(){return this.data.has("activeTarget")?document.querySelector(this.data.get("activeTarget")):this.element}},{key:"_activeClassList",get:function(){return this.activeClass?this.activeClass.split(",").map(function(t){return t.split(" ")}):[[],[]]}},{key:"_visibleClassList",get:function(){return this.visibleClass?this.visibleClass.split(",").map(function(t){return t.split(" ")}):[[],[]]}},{key:"_invisibleClassList",get:function(){return this.invisibleClass?this.invisibleClass.split(",").map(function(t){return t.split(" ")}):[[],[]]}},{key:"_enteringClassList",get:function(){return this.enteringClass?this.enteringClass.split(",").map(function(t){return t.split(" ")}):[[],[]]}},{key:"_leavingClassList",get:function(){return this.leavingClass?this.leavingClass.split(",").map(function(t){return t.split(" ")}):[[],[]]}},{key:"enterTimeout",get:function(){return(this.data.get("enterTimeout")||"0,0").split(",").map(function(t){return parseInt(t)})}},{key:"leaveTimeout",get:function(){return(this.data.get("leaveTimeout")||"0,0").split(",").map(function(t){return parseInt(t)})}}]),e}(t);r.targets=["menu","button"],r.values={open:Boolean};var l=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}i(e,t);var s=e.prototype;return s.connect=function(){this.toggleClass=this.data.get("class")||"hidden",this.backgroundId=this.data.get("backgroundId")||"modal-background",this.backgroundHtml=this.data.get("backgroundHtml")||this._backgroundHTML(),this.allowBackgroundClose="true"===(this.data.get("allowBackgroundClose")||"true"),this.preventDefaultActionOpening="true"===(this.data.get("preventDefaultActionOpening")||"true"),this.preventDefaultActionClosing="true"===(this.data.get("preventDefaultActionClosing")||"true")},s.disconnect=function(){this.close()},s.open=function(t){this.preventDefaultActionOpening&&t.preventDefault(),t.target.blur&&t.target.blur(),this.lockScroll(),this.containerTarget.classList.remove(this.toggleClass),this.data.get("disable-backdrop")||(document.body.insertAdjacentHTML("beforeend",this.backgroundHtml),this.background=document.querySelector("#"+this.backgroundId))},s.close=function(t){t&&this.preventDefaultActionClosing&&t.preventDefault(),this.unlockScroll(),this.containerTarget.classList.add(this.toggleClass),this.background&&this.background.remove()},s.closeBackground=function(t){this.allowBackgroundClose&&t.target===this.containerTarget&&this.close(t)},s.closeWithKeyboard=function(t){27!==t.keyCode||this.containerTarget.classList.contains(this.toggleClass)||this.close(t)},s._backgroundHTML=function(){return'<div id="'+this.backgroundId+'" class="fixed top-0 left-0 w-full h-full" style="background-color: '+this.backdropColorValue+'; z-index: 9998;"></div>'},s.lockScroll=function(){var t=window.innerWidth-document.documentElement.clientWidth;document.body.style.paddingRight=t+"px",this.saveScrollPosition(),document.body.classList.add("fixed","inset-x-0","overflow-hidden"),document.body.style.top="-"+this.scrollPosition+"px"},s.unlockScroll=function(){document.body.style.paddingRight=null,document.body.classList.remove("fixed","inset-x-0","overflow-hidden"),this.restoreScrollPosition(),document.body.style.top=null},s.saveScrollPosition=function(){this.scrollPosition=window.pageYOffset||document.body.scrollTop},s.restoreScrollPosition=function(){void 0!==this.scrollPosition&&(document.documentElement.scrollTop=this.scrollPosition)},e}(t);l.targets=["container"],l.values={backdropColor:{type:String,default:"rgba(0, 0, 0, 0.8)"}};var u=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}i(e,t);var n=e.prototype;return n.connect=function(){var t=this;this.activeTabClasses=(this.data.get("activeTab")||"active").split(" "),this.inactiveTabClasses=(this.data.get("inactiveTab")||"inactive").split(" "),this.anchor&&(this.index=this.tabTargets.findIndex(function(e){return e.id===t.anchor})),this.showTab()},n.change=function(t){t.preventDefault(),this.index=t.currentTarget.dataset.index?t.currentTarget.dataset.index:t.currentTarget.dataset.id?this.tabTargets.findIndex(function(e){return e.id==t.currentTarget.dataset.id}):this.tabTargets.indexOf(t.currentTarget),window.dispatchEvent(new CustomEvent("tsc:tab-change"))},n.showTab=function(){var t=this;this.tabTargets.forEach(function(e,s){var i,n,a,o,r=t.panelTargets[s];s===t.index?(r.classList.remove("hidden"),(i=e.classList).remove.apply(i,t.inactiveTabClasses),(n=e.classList).add.apply(n,t.activeTabClasses),e.id&&(location.hash=e.id)):(r.classList.add("hidden"),(a=e.classList).remove.apply(a,t.activeTabClasses),(o=e.classList).add.apply(o,t.inactiveTabClasses))})},s(e,[{key:"index",get:function(){return parseInt(this.data.get("index")||0)},set:function(t){this.data.set("index",t>=0?t:0),this.showTab()}},{key:"anchor",get:function(){return document.URL.split("#").length>1?document.URL.split("#")[1]:null}}]),e}(t);u.targets=["tab","panel"];var c=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}i(e,t);var s=e.prototype;return s.connect=function(){this.toggleClass=this.data.get("class")||"hidden"},s.toggle=function(t){t.preventDefault(),this.openValue=!this.openValue},s.hide=function(t){t.preventDefault(),this.openValue=!1},s.show=function(t){t.preventDefault(),this.openValue=!0},s.openValueChanged=function(){var t=this;this.toggleClass&&this.toggleableTargets.forEach(function(e){e.classList.toggle(t.toggleClass)})},e}(t);c.targets=["toggleable"],c.values={open:Boolean};var h=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}i(e,t);var s=e.prototype;return s.initialize=function(){this.contentTarget.setAttribute("style","transform:translate("+this.data.get("translateX")+", "+this.data.get("translateY")+");")},s.mouseOver=function(){this.contentTarget.classList.remove("hidden")},s.mouseOut=function(){this.contentTarget.classList.add("hidden")},e}(t);h.targets=["content"];var d=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}i(e,t);var s=e.prototype;return s._show=function(){var e=this;this.overlayTarget.classList.remove(this.toggleClass),t.prototype._show.call(this,function(){e._activeClassList[1].forEach(function(t){return e.overlayTarget.classList.add(t)}),e._invisibleClassList[1].forEach(function(t){return e.overlayTarget.classList.remove(t)}),e._visibleClassList[1].forEach(function(t){return e.overlayTarget.classList.add(t)}),setTimeout(function(){e._enteringClassList[1].forEach(function(t){return e.overlayTarget.classList.remove(t)})}.bind(e),e.enterTimeout[1])}.bind(this))},s._hide=function(){var e=this;this._leavingClassList[1].forEach(function(t){return e.overlayTarget.classList.add(t)}),t.prototype._hide.call(this,function(){setTimeout(function(){e._visibleClassList[1].forEach(function(t){return e.overlayTarget.classList.remove(t)}),e._invisibleClassList[1].forEach(function(t){return e.overlayTarget.classList.add(t)}),e._activeClassList[1].forEach(function(t){return e.overlayTarget.classList.remove(t)}),e._leavingClassList[1].forEach(function(t){return e.overlayTarget.classList.remove(t)}),e.overlayTarget.classList.add(e.toggleClass)}.bind(e),e.leaveTimeout[1])}.bind(this))},e}(r);d.targets=["menu","overlay"];var g=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}i(e,t);var n=e.prototype;return n.connect=function(){this.styleProperty=this.data.get("style")||"backgroundColor"},n.update=function(){this.preview=this.color},n._getContrastYIQ=function(t){return t=t.replace("#",""),(299*parseInt(t.substr(0,2),16)+587*parseInt(t.substr(2,2),16)+114*parseInt(t.substr(4,2),16))/1e3>=128?"#000":"#fff"},s(e,[{key:"preview",set:function(t){this.previewTarget.style[this.styleProperty]=t;var e=this._getContrastYIQ(t);"color"===this.styleProperty?this.previewTarget.style.backgroundColor=e:this.previewTarget.style.color=e}},{key:"color",get:function(){return this.colorTarget.value}}]),e}(t);g.targets=["preview","color"];export{a as Alert,o as Autosave,g as ColorPreview,r as Dropdown,l as Modal,h as Popover,d as Slideover,u as Tabs,c as Toggle};
//# sourceMappingURL=tailwindcss-stimulus-components.module.js.map
