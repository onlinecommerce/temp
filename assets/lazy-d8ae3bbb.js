import{ax as ae,p as x,g as V,ah as _t,af as kt,ae as je,V as re,r as L,al as Fe,x as oe,w as D,aj as pt,a as W,d,ay as J,ar as qe,az as Ee,c as l,F as Xe,q as Re,m as H,e as G,Q as he,t as N,f as wt,T as Ue,o as xt,a9 as It,b as Ye,y as Bt,ai as Vt,n as Tt,ac as $t,R as Lt,j as Je,aA as zt,h as p,I as M,aB as Et,aC as Rt,aD as ye,am as Pt,aE as At,aF as Pe,$ as Qe,a0 as Ze,aG as Nt,aH as Ae,D as be,ap as Ot,i as se,B as Ce,s as Dt,v as Mt}from"./index-498837ff.js";const Ke=["top","bottom"],Wt=["start","end","left","right"];function Ht(e,a){let[n,t]=e.split(" ");return t||(t=ae(Ke,n)?"start":ae(Wt,n)?"top":"center"),{side:Ne(n,a),align:Ne(t,a)}}function Ne(e,a){return e==="start"?a?"right":"left":e==="end"?a?"left":"right":e}function xn(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function In(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function Bn(e){return{side:e.align,align:e.side}}function Vn(e){return ae(Ke,e.side)?"y":"x"}const z=x({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function Se(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return V()({name:n??_t(kt(e.replace(/__/g,"-"))),props:{tag:{type:String,default:a},...z()},setup(t,i){let{slots:s}=i;return()=>{var r;return je(t.tag,{class:[e,t.class],style:t.style},(r=s.default)==null?void 0:r.call(s))}}})}function E(e){const a=re("useRender");a.render=e}function Gt(e){const a=L(),n=L();if(Fe){const t=new ResizeObserver(i=>{e==null||e(i,t),i.length&&(n.value=i[0].contentRect)});oe(()=>{t.disconnect()}),D(a,(i,s)=>{s&&(t.unobserve(s),n.value=void 0),i&&t.observe(i)},{flush:"post"})}return{resizeRef:a,contentRect:pt(n)}}const _e=x({border:[Boolean,Number,String]},"border");function ke(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();return{borderClasses:d(()=>{const t=J(e)?e.value:e.border,i=[];if(t===!0||t==="")i.push(`${a}--border`);else if(typeof t=="string"||t===0)for(const s of String(t).split(" "))i.push(`border-${s}`);return i})}}const jt=[null,"default","comfortable","compact"],Q=x({density:{type:String,default:"default",validator:e=>jt.includes(e)}},"density");function ue(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();return{densityClasses:d(()=>`${a}--density-${e.density}`)}}const pe=x({elevation:{type:[Number,String],validator(e){const a=parseInt(e);return!isNaN(a)&&a>=0&&a<=24}}},"elevation");function we(e){return{elevationClasses:d(()=>{const n=J(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}const Z=x({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function K(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();return{roundedClasses:d(()=>{const t=J(e)?e.value:e.rounded,i=[];if(t===!0||t==="")i.push(`${a}--rounded`);else if(typeof t=="string"||t===0)for(const s of String(t).split(" "))i.push(`rounded-${s}`);return i})}}const j=x({tag:{type:String,default:"div"}},"tag");function xe(e){return qe(()=>{const a=[],n={};return e.value.background&&(Ee(e.value.background)?n.backgroundColor=e.value.background:a.push(`bg-${e.value.background}`)),e.value.text&&(Ee(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):a.push(`text-${e.value.text}`)),{colorClasses:a,colorStyles:n}})}function ie(e,a){const n=d(()=>({text:J(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:i}=xe(n);return{textColorClasses:t,textColorStyles:i}}function Oe(e,a){const n=d(()=>({background:J(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:i}=xe(n);return{backgroundColorClasses:t,backgroundColorStyles:i}}const Ft=["elevated","flat","tonal","outlined","text","plain"];function Ie(e,a){return l(Xe,null,[e&&l("span",{key:"overlay",class:`${a}__overlay`},null),l("span",{key:"underlay",class:`${a}__underlay`},null)])}const ce=x({color:String,variant:{type:String,default:"elevated",validator:e=>Ft.includes(e)}},"variant");function Be(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();const n=d(()=>{const{variant:s}=Re(e);return`${a}--variant-${s}`}),{colorClasses:t,colorStyles:i}=xe(d(()=>{const{variant:s,color:r}=Re(e);return{[["elevated","flat"].includes(s)?"background":"text"]:r}}));return{colorClasses:t,colorStyles:i,variantClasses:n}}const et=x({divided:Boolean,..._e(),...z(),...Q(),...pe(),...Z(),...j(),...H(),...ce()},"v-btn-group"),De=V()({name:"VBtnGroup",props:et(),setup(e,a){let{slots:n}=a;const{themeClasses:t}=G(e),{densityClasses:i}=ue(e),{borderClasses:s}=ke(e),{elevationClasses:r}=we(e),{roundedClasses:u}=K(e);he({VBtn:{height:"auto",color:N(e,"color"),density:N(e,"density"),flat:!0,variant:N(e,"variant")}}),E(()=>l(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,s.value,i.value,r.value,u.value,e.class],style:e.style},n))}}),qt=x({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Xt=x({value:null,disabled:Boolean,selectedClass:String},"group-item");function Ut(e,a){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=re("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=wt();Ue(Symbol.for(`${a.description}:id`),i);const s=xt(a,null);if(!s){if(!n)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${a.description}`)}const r=N(e,"value"),u=d(()=>s.disabled.value||e.disabled);s.register({id:i,value:r,disabled:u},t),oe(()=>{s.unregister(i)});const o=d(()=>s.isSelected(i)),v=d(()=>o.value&&[s.selectedClass.value,e.selectedClass]);return D(o,f=>{t.emit("group:selected",{value:f})}),{id:i,isSelected:o,toggle:()=>s.select(i,!o.value),select:f=>s.select(i,f),selectedClass:v,value:r,disabled:u,group:s}}function Yt(e,a){let n=!1;const t=It([]),i=Ye(e,"modelValue",[],c=>c==null?[]:tt(t,Tt(c)),c=>{const m=Qt(t,c);return e.multiple?m:m[0]}),s=re("useGroup");function r(c,m){const S=c,y=Symbol.for(`${a.description}:id`),_=$t(y,s==null?void 0:s.vnode).indexOf(m);_>-1?t.splice(_,0,S):t.push(S)}function u(c){if(n)return;o();const m=t.findIndex(S=>S.id===c);t.splice(m,1)}function o(){const c=t.find(m=>!m.disabled);c&&e.mandatory==="force"&&!i.value.length&&(i.value=[c.id])}Bt(()=>{o()}),oe(()=>{n=!0});function v(c,m){const S=t.find(y=>y.id===c);if(!(m&&(S!=null&&S.disabled)))if(e.multiple){const y=i.value.slice(),C=y.findIndex(h=>h===c),_=~C;if(m=m??!_,_&&e.mandatory&&y.length<=1||!_&&e.max!=null&&y.length+1>e.max)return;C<0&&m?y.push(c):C>=0&&!m&&y.splice(C,1),i.value=y}else{const y=i.value.includes(c);if(e.mandatory&&y)return;i.value=m??!y?[c]:[]}}function f(c){if(e.multiple&&Lt('This method is not supported when using "multiple" prop'),i.value.length){const m=i.value[0],S=t.findIndex(_=>_.id===m);let y=(S+c)%t.length,C=t[y];for(;C.disabled&&y!==S;)y=(y+c)%t.length,C=t[y];if(C.disabled)return;i.value=[t[y].id]}else{const m=t.find(S=>!S.disabled);m&&(i.value=[m.id])}}const b={register:r,unregister:u,selected:i,select:v,disabled:N(e,"disabled"),prev:()=>f(t.length-1),next:()=>f(1),isSelected:c=>i.value.includes(c),selectedClass:d(()=>e.selectedClass),items:d(()=>t),getItemIndex:c=>Jt(t,c)};return Ue(a,b),b}function Jt(e,a){const n=tt(e,[a]);return n.length?e.findIndex(t=>t.id===n[0]):-1}function tt(e,a){const n=[];for(let t=0;t<e.length;t++){const i=e[t];i.value!=null?a.find(s=>Vt(s,i.value))!=null&&n.push(i.id):a.includes(t)&&n.push(i.id)}return n}function Qt(e,a){const n=[];for(let t=0;t<e.length;t++){const i=e[t];a.includes(i.id)&&n.push(i.value!=null?i.value:t)}return n}const nt=Symbol.for("vuetify:v-btn-toggle");V()({name:"VBtnToggle",props:{...et(),...qt()},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;const{isSelected:t,next:i,prev:s,select:r,selected:u}=Yt(e,nt);return E(()=>{const[o]=De.filterProps(e);return l(De,Je({class:["v-btn-toggle",e.class]},o,{style:e.style}),{default:()=>{var v;return[(v=n.default)==null?void 0:v.call(n,{isSelected:t,next:i,prev:s,select:r,selected:u})]}})}),{next:i,prev:s,select:r}}});const F=V(!1)({name:"VDefaultsProvider",props:{defaults:Object,disabled:Boolean,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,a){let{slots:n}=a;const{defaults:t,disabled:i,reset:s,root:r,scoped:u}=zt(e);return he(t,{reset:s,root:r,scoped:u,disabled:i}),()=>{var o;return(o=n.default)==null?void 0:o.call(n)}}});const Zt=["x-small","small","default","large","x-large"],de=x({size:{type:[String,Number],default:"default"}},"size");function ve(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();return qe(()=>{let n,t;return ae(Zt,e.size)?n=`${a}--size-${e.size}`:e.size&&(t={width:p(e.size),height:p(e.size)}),{sizeClasses:n,sizeStyles:t}})}const Kt=x({color:String,start:Boolean,end:Boolean,icon:M,...z(),...de(),...j({tag:"i"}),...H()},"v-icon"),ne=V()({name:"VIcon",props:Kt(),setup(e,a){let{attrs:n,slots:t}=a,i;t.default&&(i=d(()=>{var b,c;const f=(b=t.default)==null?void 0:b.call(t);if(f)return(c=f.filter(m=>m.type===Rt&&m.children&&typeof m.children=="string")[0])==null?void 0:c.children}));const{themeClasses:s}=G(e),{iconData:r}=Et(i||e),{sizeClasses:u}=ve(e),{textColorClasses:o,textColorStyles:v}=ie(N(e,"color"));return E(()=>l(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",s.value,u.value,o.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[u.value?void 0:{fontSize:p(e.size),height:p(e.size),width:p(e.size)},v.value,e.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>{var f;return[(f=t.default)==null?void 0:f.call(t)]}})),{}}});function at(e,a){const n=L(),t=L(!1);if(ye){const i=new IntersectionObserver(s=>{e==null||e(s,i),t.value=!!s.find(r=>r.isIntersecting)},a);oe(()=>{i.disconnect()}),D(n,(s,r)=>{r&&(i.unobserve(r),t.value=!1),s&&i.observe(s)},{flush:"post"})}return{intersectionRef:n,isIntersecting:t}}const en=V()({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...z(),...de(),...j({tag:"div"}),...H()},setup(e,a){let{slots:n}=a;const t=20,i=2*Math.PI*t,s=L(),{themeClasses:r}=G(e),{sizeClasses:u,sizeStyles:o}=ve(e),{textColorClasses:v,textColorStyles:f}=ie(N(e,"color")),{textColorClasses:b,textColorStyles:c}=ie(N(e,"bgColor")),{intersectionRef:m,isIntersecting:S}=at(),{resizeRef:y,contentRect:C}=Gt(),_=d(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),h=d(()=>Number(e.width)),k=d(()=>o.value?Number(e.size):C.value?C.value.width:Math.max(h.value,32)),I=d(()=>t/(1-h.value/k.value)*2),T=d(()=>h.value/k.value*I.value),P=d(()=>p((100-_.value)/100*i));return Pt(()=>{m.value=s.value,y.value=s.value}),E(()=>l(e.tag,{ref:s,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":S.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},r.value,u.value,v.value,e.class],style:[o.value,f.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:_.value},{default:()=>[l("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${I.value} ${I.value}`},[l("circle",{class:["v-progress-circular__underlay",b.value],style:c.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":T.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),l("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":T.value,"stroke-dasharray":i,"stroke-dashoffset":P.value},null)]),n.default&&l("div",{class:"v-progress-circular__content"},[n.default({value:_.value})])]})),{}}});const me=Symbol("rippleStop"),tn=80;function Me(e,a){e.style.transform=a,e.style.webkitTransform=a}function ge(e){return e.constructor.name==="TouchEvent"}function st(e){return e.constructor.name==="KeyboardEvent"}const nn=function(e,a){var b;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,i=0;if(!st(e)){const c=a.getBoundingClientRect(),m=ge(e)?e.touches[e.touches.length-1]:e;t=m.clientX-c.left,i=m.clientY-c.top}let s=0,r=.3;(b=a._ripple)!=null&&b.circle?(r=.15,s=a.clientWidth/2,s=n.center?s:s+Math.sqrt((t-s)**2+(i-s)**2)/4):s=Math.sqrt(a.clientWidth**2+a.clientHeight**2)/2;const u=`${(a.clientWidth-s*2)/2}px`,o=`${(a.clientHeight-s*2)/2}px`,v=n.center?u:`${t-s}px`,f=n.center?o:`${i-s}px`;return{radius:s,scale:r,x:v,y:f,centerX:u,centerY:o}},le={show(e,a){var m;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((m=a==null?void 0:a._ripple)!=null&&m.enabled))return;const t=document.createElement("span"),i=document.createElement("span");t.appendChild(i),t.className="v-ripple__container",n.class&&(t.className+=` ${n.class}`);const{radius:s,scale:r,x:u,y:o,centerX:v,centerY:f}=nn(e,a,n),b=`${s*2}px`;i.className="v-ripple__animation",i.style.width=b,i.style.height=b,a.appendChild(t);const c=window.getComputedStyle(a);c&&c.position==="static"&&(a.style.position="relative",a.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),Me(i,`translate(${u}, ${o}) scale3d(${r},${r},${r})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),Me(i,`translate(${v}, ${f}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const a=e.getElementsByClassName("v-ripple__animation");if(a.length===0)return;const n=a[a.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const t=performance.now()-Number(n.dataset.activated),i=Math.max(250-t,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var u;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((u=n.parentNode)==null?void 0:u.parentNode)===e&&e.removeChild(n.parentNode)},300)},i)}};function it(e){return typeof e>"u"||!!e}function U(e){const a={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[me])){if(e[me]=!0,ge(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(a.center=n._ripple.centered||st(e),n._ripple.class&&(a.class=n._ripple.class),ge(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{le.show(e,n,a)},n._ripple.showTimer=window.setTimeout(()=>{var t;(t=n==null?void 0:n._ripple)!=null&&t.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},tn)}else le.show(e,n,a)}}function We(e){e[me]=!0}function $(e){const a=e.currentTarget;if(a!=null&&a._ripple){if(window.clearTimeout(a._ripple.showTimer),e.type==="touchend"&&a._ripple.showTimerCommit){a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null,a._ripple.showTimer=window.setTimeout(()=>{$(e)});return}window.setTimeout(()=>{a._ripple&&(a._ripple.touched=!1)}),le.hide(a)}}function lt(e){const a=e.currentTarget;a!=null&&a._ripple&&(a._ripple.showTimerCommit&&(a._ripple.showTimerCommit=null),window.clearTimeout(a._ripple.showTimer))}let Y=!1;function rt(e){!Y&&(e.keyCode===Pe.enter||e.keyCode===Pe.space)&&(Y=!0,U(e))}function ot(e){Y=!1,$(e)}function ut(e){Y&&(Y=!1,$(e))}function ct(e,a,n){const{value:t,modifiers:i}=a,s=it(t);if(s||le.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=i.center,e._ripple.circle=i.circle,At(t)&&t.class&&(e._ripple.class=t.class),s&&!n){if(i.stop){e.addEventListener("touchstart",We,{passive:!0}),e.addEventListener("mousedown",We);return}e.addEventListener("touchstart",U,{passive:!0}),e.addEventListener("touchend",$,{passive:!0}),e.addEventListener("touchmove",lt,{passive:!0}),e.addEventListener("touchcancel",$),e.addEventListener("mousedown",U),e.addEventListener("mouseup",$),e.addEventListener("mouseleave",$),e.addEventListener("keydown",rt),e.addEventListener("keyup",ot),e.addEventListener("blur",ut),e.addEventListener("dragstart",$,{passive:!0})}else!s&&n&&dt(e)}function dt(e){e.removeEventListener("mousedown",U),e.removeEventListener("touchstart",U),e.removeEventListener("touchend",$),e.removeEventListener("touchmove",lt),e.removeEventListener("touchcancel",$),e.removeEventListener("mouseup",$),e.removeEventListener("mouseleave",$),e.removeEventListener("keydown",rt),e.removeEventListener("keyup",ot),e.removeEventListener("dragstart",$),e.removeEventListener("blur",ut)}function an(e,a){ct(e,a,!1)}function sn(e){delete e._ripple,dt(e)}function ln(e,a){if(a.value===a.oldValue)return;const n=it(a.oldValue);ct(e,a,n)}const vt={mounted:an,unmounted:sn,updated:ln},Ve=x({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Te(e){return{dimensionStyles:d(()=>({height:p(e.height),maxHeight:p(e.maxHeight),maxWidth:p(e.maxWidth),minHeight:p(e.minHeight),minWidth:p(e.minWidth),width:p(e.width)}))}}const He={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},$e=x({location:String},"location");function Le(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:t}=Qe();return{locationStyles:d(()=>{if(!e.location)return{};const{side:s,align:r}=Ht(e.location.split(" ").length>1?e.location:`${e.location} center`,t.value);function u(v){return n?n(v):0}const o={};return s!=="center"&&(a?o[He[s]]=`calc(100% - ${u(s)}px)`:o[s]=0),r!=="center"?a?o[He[r]]=`calc(100% - ${u(r)}px)`:o[r]=0:(s==="center"?o.top=o.left="50%":o[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",o.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),o})}}const rn=V()({name:"VProgressLinear",props:{absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...z(),...$e({location:"top"}),...Z(),...j(),...H()},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;const t=Ye(e,"modelValue"),{isRtl:i}=Qe(),{themeClasses:s}=G(e),{locationStyles:r}=Le(e),{textColorClasses:u,textColorStyles:o}=ie(e,"color"),{backgroundColorClasses:v,backgroundColorStyles:f}=Oe(d(()=>e.bgColor||e.color)),{backgroundColorClasses:b,backgroundColorStyles:c}=Oe(e,"color"),{roundedClasses:m}=K(e),{intersectionRef:S,isIntersecting:y}=at(),C=d(()=>parseInt(e.max,10)),_=d(()=>parseInt(e.height,10)),h=d(()=>parseFloat(e.bufferValue)/C.value*100),k=d(()=>parseFloat(t.value)/C.value*100),I=d(()=>i.value!==e.reverse),T=d(()=>e.indeterminate?"fade-transition":"slide-x-transition"),P=d(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function O(g){if(!S.value)return;const{left:w,right:B,width:R}=S.value.getBoundingClientRect(),A=I.value?R-g.clientX+(B-R):g.clientX-w;t.value=Math.round(A/R*C.value)}return E(()=>l(e.tag,{ref:S,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&y.value,"v-progress-linear--reverse":I.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},m.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?p(_.value):0,"--v-progress-linear-height":p(_.value),...r.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:k.value,onClick:e.clickable&&O},{default:()=>[e.stream&&l("div",{key:"stream",class:["v-progress-linear__stream",u.value],style:{...o.value,[I.value?"left":"right"]:p(-_.value),borderTop:`${p(_.value/2)} dotted`,opacity:P.value,top:`calc(50% - ${p(_.value/4)})`,width:p(100-h.value,"%"),"--v-progress-linear-stream-to":p(_.value*(I.value?1:-1))}},null),l("div",{class:["v-progress-linear__background",v.value],style:[f.value,{opacity:P.value,width:p(e.stream?h.value:100,"%")}]},null),l(Ze,{name:T.value},{default:()=>[e.indeterminate?l("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(g=>l("div",{key:g,class:["v-progress-linear__indeterminate",g,b.value],style:c.value},null))]):l("div",{class:["v-progress-linear__determinate",b.value],style:[c.value,{width:p(k.value,"%")}]},null)]}),n.default&&l("div",{class:"v-progress-linear__content"},[n.default({value:k.value,buffer:h.value})])]})),{}}}),ft=x({loading:[Boolean,String]},"loader");function mt(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();return{loaderClasses:d(()=>({[`${a}--loading`]:e.loading}))}}function on(e,a){var t;let{slots:n}=a;return l("div",{class:`${e.name}__loader`},[((t=n.default)==null?void 0:t.call(n,{color:e.color,isActive:e.active}))||l(rn,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const un=["static","relative","fixed","absolute","sticky"],gt=x({position:{type:String,validator:e=>un.includes(e)}},"position");function ht(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();return{positionClasses:d(()=>e.position?`${a}--${e.position}`:void 0)}}function Tn(){var e,a;return(a=(e=re("useRouter"))==null?void 0:e.proxy)==null?void 0:a.$router}function yt(e,a){const n=Nt("RouterLink"),t=d(()=>!!(e.href||e.to)),i=d(()=>(t==null?void 0:t.value)||Ae(a,"click")||Ae(e,"click"));if(typeof n=="string")return{isLink:t,isClickable:i,href:N(e,"href")};const s=e.to?n.useLink(e):void 0;return{isLink:t,isClickable:i,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&d(()=>{var r,u;return e.exact?(r=s.isExactActive)==null?void 0:r.value:(u=s.isActive)==null?void 0:u.value}),href:d(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const bt=x({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let fe=!1;function $n(e,a){let n=!1,t,i;Fe&&(be(()=>{window.addEventListener("popstate",s),t=e==null?void 0:e.beforeEach((r,u,o)=>{fe?n?a(o):o():setTimeout(()=>n?a(o):o()),fe=!0}),i=e==null?void 0:e.afterEach(()=>{fe=!1})}),Ot(()=>{window.removeEventListener("popstate",s),t==null||t(),i==null||i()}));function s(r){var u;(u=r.state)!=null&&u.replaced||(n=!0,setTimeout(()=>n=!1))}}function cn(e,a){D(()=>{var n;return(n=e.isActive)==null?void 0:n.value},n=>{e.isLink.value&&n&&a&&be(()=>{a(!0)})},{immediate:!0})}const dn=x({active:{type:Boolean,default:void 0},symbol:{type:null,default:nt},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:M,appendIcon:M,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},text:String,..._e(),...z(),...Q(),...Ve(),...pe(),...Xt(),...ft(),...$e(),...gt(),...Z(),...bt(),...de(),...j({tag:"button"}),...H(),...ce({variant:"elevated"})},"VBtn"),Ln=V()({name:"VBtn",directives:{Ripple:vt},props:dn(),emits:{"group:selected":e=>!0},setup(e,a){let{attrs:n,slots:t}=a;const{themeClasses:i}=G(e),{borderClasses:s}=ke(e),{colorClasses:r,colorStyles:u,variantClasses:o}=Be(e),{densityClasses:v}=ue(e),{dimensionStyles:f}=Te(e),{elevationClasses:b}=we(e),{loaderClasses:c}=mt(e),{locationStyles:m}=Le(e),{positionClasses:S}=ht(e),{roundedClasses:y}=K(e),{sizeClasses:C,sizeStyles:_}=ve(e),h=Ut(e,e.symbol,!1),k=yt(e,n),I=d(()=>{var g;return e.active!==void 0?e.active:k.isLink.value?(g=k.isActive)==null?void 0:g.value:h==null?void 0:h.isSelected.value}),T=d(()=>(h==null?void 0:h.disabled.value)||e.disabled),P=d(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),O=d(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});return cn(k,h==null?void 0:h.select),E(()=>{var q,ze;const g=k.isLink.value?"a":e.tag,w=!!(e.prependIcon||t.prepend),B=!!(e.appendIcon||t.append),R=!!(e.icon&&e.icon!==!0),A=(h==null?void 0:h.isSelected.value)&&(!k.isLink.value||((q=k.isActive)==null?void 0:q.value))||!h||((ze=k.isActive)==null?void 0:ze.value);return se(l(g,{type:g==="a"?void 0:"button",class:["v-btn",h==null?void 0:h.selectedClass.value,{"v-btn--active":I.value,"v-btn--block":e.block,"v-btn--disabled":T.value,"v-btn--elevated":P.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},i.value,s.value,A?r.value:void 0,v.value,b.value,c.value,S.value,y.value,C.value,o.value,e.class],style:[A?u.value:void 0,f.value,m.value,_.value,e.style],disabled:T.value||void 0,href:k.href.value,onClick:ee=>{var X;T.value||((X=k.navigate)==null||X.call(k,ee),h==null||h.toggle())},value:O.value},{default:()=>{var ee;return[Ie(!0,"v-btn"),!e.icon&&w&&l("span",{key:"prepend",class:"v-btn__prepend"},[t.prepend?l(F,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},t.prepend):l(ne,{key:"prepend-icon",icon:e.prependIcon},null)]),l("span",{class:"v-btn__content","data-no-activator":""},[!t.default&&R?l(ne,{key:"content-icon",icon:e.icon},null):l(F,{key:"content-defaults",disabled:!R,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var X;return[((X=t.default)==null?void 0:X.call(t))??e.text]}})]),!e.icon&&B&&l("span",{key:"append",class:"v-btn__append"},[t.append?l(F,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},t.append):l(ne,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&l("span",{key:"loader",class:"v-btn__loader"},[((ee=t.loader)==null?void 0:ee.call(t))??l(en,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Ce("ripple"),!T.value&&e.ripple,null]])}),{}}});const vn=V()({name:"VCardActions",props:z(),setup(e,a){let{slots:n}=a;return he({VBtn:{variant:"text"}}),E(()=>{var t;return l("div",{class:["v-card-actions",e.class],style:e.style},[(t=n.default)==null?void 0:t.call(n)])}),{}}});function fn(e){return{aspectStyles:d(()=>{const a=Number(e.aspectRatio);return a?{paddingBottom:String(1/a*100)+"%"}:void 0})}}const mn=V()({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...z(),...Ve()},setup(e,a){let{slots:n}=a;const{aspectStyles:t}=fn(e),{dimensionStyles:i}=Te(e);return E(()=>{var s;return l("div",{class:["v-responsive",e.class],style:[i.value,e.style]},[l("div",{class:"v-responsive__sizer",style:t.value},null),(s=n.additional)==null?void 0:s.call(n),n.default&&l("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}});function gn(e,a){if(!ye)return;const n=a.modifiers||{},t=a.value,{handler:i,options:s}=typeof t=="object"?t:{handler:t,options:{}},r=new IntersectionObserver(function(){var b;let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0;const v=(b=e._observe)==null?void 0:b[a.instance.$.uid];if(!v)return;const f=u.some(c=>c.isIntersecting);i&&(!n.quiet||v.init)&&(!n.once||f||v.init)&&i(f,u,o),f&&n.once?Ct(e,a):v.init=!0},s);e._observe=Object(e._observe),e._observe[a.instance.$.uid]={init:!1,observer:r},r.observe(e)}function Ct(e,a){var t;const n=(t=e._observe)==null?void 0:t[a.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[a.instance.$.uid])}const hn={mounted:gn,unmounted:Ct},yn=hn,bn=x({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),te=(e,a)=>{let{slots:n}=a;const{transition:t,...i}=e,{component:s=Ze,...r}=typeof t=="object"?t:{};return je(s,Je(typeof t=="string"?{name:t}:r,i),n)},St=V()({name:"VImg",directives:{intersect:yn},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...z(),...bn()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,a){let{emit:n,slots:t}=a;const i=L(""),s=L(),r=L(e.eager?"loading":"idle"),u=L(),o=L(),v=d(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),f=d(()=>v.value.aspect||u.value/o.value||0);D(()=>e.src,()=>{b(r.value!=="idle")}),D(f,(g,w)=>{!g&&w&&s.value&&C(s.value)}),Dt(()=>b());function b(g){if(!(e.eager&&g)&&!(ye&&!g&&!e.eager)){if(r.value="loading",v.value.lazySrc){const w=new Image;w.src=v.value.lazySrc,C(w,null)}v.value.src&&be(()=>{var w,B;if(n("loadstart",((w=s.value)==null?void 0:w.currentSrc)||v.value.src),(B=s.value)!=null&&B.complete){if(s.value.naturalWidth||m(),r.value==="error")return;f.value||C(s.value,null),c()}else f.value||C(s.value),S()})}}function c(){var g;S(),r.value="loaded",n("load",((g=s.value)==null?void 0:g.currentSrc)||v.value.src)}function m(){var g;r.value="error",n("error",((g=s.value)==null?void 0:g.currentSrc)||v.value.src)}function S(){const g=s.value;g&&(i.value=g.currentSrc||g.src)}let y=-1;function C(g){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const B=()=>{clearTimeout(y);const{naturalHeight:R,naturalWidth:A}=g;R||A?(u.value=A,o.value=R):!g.complete&&r.value==="loading"&&w!=null?y=window.setTimeout(B,w):(g.currentSrc.endsWith(".svg")||g.currentSrc.startsWith("data:image/svg+xml"))&&(u.value=1,o.value=1)};B()}const _=d(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),h=()=>{var B;if(!v.value.src||r.value==="idle")return null;const g=l("img",{class:["v-img__img",_.value],src:v.value.src,srcset:v.value.srcset,alt:e.alt,sizes:e.sizes,ref:s,onLoad:c,onError:m},null),w=(B=t.sources)==null?void 0:B.call(t);return l(te,{transition:e.transition,appear:!0},{default:()=>[se(w?l("picture",{class:"v-img__picture"},[w,g]):g,[[Mt,r.value==="loaded"]])]})},k=()=>l(te,{transition:e.transition},{default:()=>[v.value.lazySrc&&r.value!=="loaded"&&l("img",{class:["v-img__img","v-img__img--preload",_.value],src:v.value.lazySrc,alt:e.alt},null)]}),I=()=>t.placeholder?l(te,{transition:e.transition,appear:!0},{default:()=>[(r.value==="loading"||r.value==="error"&&!t.error)&&l("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,T=()=>t.error?l(te,{transition:e.transition,appear:!0},{default:()=>[r.value==="error"&&l("div",{class:"v-img__error"},[t.error()])]}):null,P=()=>e.gradient?l("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,O=L(!1);{const g=D(f,w=>{w&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{O.value=!0})}),g())})}return E(()=>se(l(mn,{class:["v-img",{"v-img--booting":!O.value},e.class],style:[{width:p(e.width==="auto"?u.value:e.width)},e.style],aspectRatio:f.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>l(Xe,null,[l(h,null,null),l(k,null,null),l(P,null,null),l(I,null,null),l(T,null,null)]),default:t.default}),[[Ce("intersect"),{handler:b,options:e.options},null,{once:!0}]])),{currentSrc:i,image:s,state:r,naturalWidth:u,naturalHeight:o}}}),Cn=x({start:Boolean,end:Boolean,icon:M,image:String,...z(),...Q(),...Z(),...de(),...j(),...H(),...ce({variant:"flat"})},"v-avatar"),Ge=V()({name:"VAvatar",props:Cn(),setup(e,a){let{slots:n}=a;const{themeClasses:t}=G(e),{colorClasses:i,colorStyles:s,variantClasses:r}=Be(e),{densityClasses:u}=ue(e),{roundedClasses:o}=K(e),{sizeClasses:v,sizeStyles:f}=ve(e);return E(()=>l(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,i.value,u.value,o.value,v.value,r.value,e.class],style:[s.value,f.value,e.style]},{default:()=>{var b;return[e.image?l(St,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?l(ne,{key:"icon",icon:e.icon},null):(b=n.default)==null?void 0:b.call(n),Ie(!1,"v-avatar")]}})),{}}}),Sn=Se("v-card-subtitle"),_n=Se("v-card-title"),kn=V()({name:"VCardItem",props:{appendAvatar:String,appendIcon:M,prependAvatar:String,prependIcon:M,subtitle:String,title:String,...z(),...Q()},setup(e,a){let{slots:n}=a;return E(()=>{var v;const t=!!(e.prependAvatar||e.prependIcon),i=!!(t||n.prepend),s=!!(e.appendAvatar||e.appendIcon),r=!!(s||n.append),u=!!(e.title||n.title),o=!!(e.subtitle||n.subtitle);return l("div",{class:["v-card-item",e.class],style:e.style},[i&&l("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?l(F,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},n.prepend):t&&l(Ge,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),l("div",{class:"v-card-item__content"},[u&&l(_n,{key:"title"},{default:()=>{var f;return[((f=n.title)==null?void 0:f.call(n))??e.title]}}),o&&l(Sn,{key:"subtitle"},{default:()=>{var f;return[((f=n.subtitle)==null?void 0:f.call(n))??e.subtitle]}}),(v=n.default)==null?void 0:v.call(n)]),r&&l("div",{key:"append",class:"v-card-item__append"},[n.append?l(F,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},n.append):s&&l(Ge,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),pn=Se("v-card-text"),zn=V()({name:"VCard",directives:{Ripple:vt},props:{appendAvatar:String,appendIcon:M,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:M,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,..._e(),...z(),...Q(),...Ve(),...pe(),...ft(),...$e(),...gt(),...Z(),...bt(),...j(),...H(),...ce({variant:"elevated"})},setup(e,a){let{attrs:n,slots:t}=a;const{themeClasses:i}=G(e),{borderClasses:s}=ke(e),{colorClasses:r,colorStyles:u,variantClasses:o}=Be(e),{densityClasses:v}=ue(e),{dimensionStyles:f}=Te(e),{elevationClasses:b}=we(e),{loaderClasses:c}=mt(e),{locationStyles:m}=Le(e),{positionClasses:S}=ht(e),{roundedClasses:y}=K(e),C=yt(e,n),_=d(()=>e.link!==!1&&C.isLink.value),h=d(()=>!e.disabled&&e.link!==!1&&(e.link||C.isClickable.value));return E(()=>{const k=_.value?"a":e.tag,I=!!(t.title||e.title),T=!!(t.subtitle||e.subtitle),P=I||T,O=!!(t.append||e.appendAvatar||e.appendIcon),g=!!(t.prepend||e.prependAvatar||e.prependIcon),w=!!(t.image||e.image),B=P||g||O,R=!!(t.text||e.text);return se(l(k,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":h.value},i.value,s.value,r.value,v.value,b.value,c.value,S.value,y.value,o.value,e.class],style:[u.value,f.value,m.value,e.style],href:C.href.value,onClick:h.value&&C.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var A;return[w&&l("div",{key:"image",class:"v-card__image"},[t.image?l(F,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):l(St,{key:"image-img",cover:!0,src:e.image},null)]),l(on,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),B&&l(kn,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),R&&l(pn,{key:"text"},{default:()=>{var q;return[((q=t.text)==null?void 0:q.call(t))??e.text]}}),(A=t.default)==null?void 0:A.call(t),t.actions&&l(vn,null,{default:t.actions}),Ie(h.value,"v-card")]}}),[[Ce("ripple"),h.value&&e.ripple]])}),{}}}),En=x({eager:Boolean},"lazy");function Rn(e,a){const n=L(!1),t=d(()=>n.value||e.eager||a.value);D(a,()=>n.value=!0);function i(){e.eager||(n.value=!1)}return{isBooted:n,hasContent:t,onAfterLeave:i}}export{ht as $,yt as A,Be as B,Te as C,Ie as D,Ge as E,Tn as F,Ne as G,rn as H,yn as I,en as J,kn as K,on as L,te as M,Yt as N,Xt as O,En as P,Ut as Q,vt as R,Rn as S,Gt as T,qt as U,ne as V,de as W,ve as X,$e as Y,gt as Z,Le as _,ft as a,nt as a0,Ht as a1,xn as a2,In as a3,Bn as a4,Vn as a5,$n as a6,Z as b,Se as c,mt as d,K as e,Oe as f,ie as g,bn as h,Q as i,ue as j,Ln as k,zn as l,z as m,_n as n,pn as o,j as p,_e as q,pe as r,ke as s,we as t,E as u,St as v,F as w,Ve as x,bt as y,ce as z};
