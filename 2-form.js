import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a=document.querySelector(".feedback-form");let n={email:"",message:""};const r=(t,e)=>{try{localStorage.setItem(t,JSON.stringify(e))}catch(o){console.log(o)}},l=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.log(e)}},s=()=>{const t=l("feedback-form-state");if(t!==void 0){n=t;for(const e in t)a.elements[e].value=t[e]}};s();const m=t=>{const{target:{name:e,value:o}}=t;n[e]=o.trim(),r("feedback-form-state",n)},c=t=>{t.preventDefault();const{elements:{email:{value:{length:e}},message:{value:{length:o}}}}=a;e>0&o>0&&(console.log(n),a.reset(),n={email:"",message:""},localStorage.removeItem("feedback-form-state"))};a.addEventListener("input",m);a.addEventListener("submit",c);
//# sourceMappingURL=2-form.js.map
