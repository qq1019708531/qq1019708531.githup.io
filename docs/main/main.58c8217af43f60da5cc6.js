(()=>{"use strict";var t={114:(t,e,n)=>{n.d(e,{Z:()=>o});class o{constructor(t){this.el=t.el,this.oldtext=this.el.innerHTML,this.text=this.oldtext,this.textCount=t.textCount,this.findAllButtonText=t.findAllButtonText,this.showFindAllButton=t.showFindAllButton,this.flag}subText(){this.text=this.text.substring(0,this.textCount)+"...",this.el.innerHTML=this.text}addButton(){let t=document.createElement("a"),e=this;t.innerText="查看",t.style.cssText="color:blue;cursor:pointer;",this.el.appendChild(t),t.onclick=function(){e.flag=!e.flag,e.el.childNodes[0].textContent=e.flag?e.oldtext:e.text,this.textContent=e.flag?"收起内容":e.findAllButtonText}}exec(){this.subText(),this.showFindAllButton&&(this.addButton(),this.el.querySelector("a").innerHTML=this.findAllButtonText?this.findAllButtonText:"查看")}}}},e={};function n(o){var l=e[o];if(void 0!==l)return l.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{new(n(114).Z)({el:document.querySelector(".content"),textCount:200,findAllButtonText:"查看内容",showFindAllButton:!0}).exec(),document.querySelector(".index-content h2").onclick=function(){console.log(this.dataset.id),window.location.href=`fristpage.html?id=${this.dataset.id}`};let t=document.querySelectorAll(".center-top_left span"),e=document.querySelectorAll(".center-mid div");for(let n=0;n<t.length;n++)t[n].index=n,t[n].onclick=function(){for(let n=0;n<e.length;n++)e[n].style.display="none",t[n].classList.remove("border-bottom");e[this.index].style.display="block",this.classList.add("border-bottom")}})()})();