import{e as m,u as y,_ as P,o as h,c as f,a as o,t as i,p as D,d as H,f as S,r as k,g as d,w as u,h as l,i as C}from"./entry.d2479edf.js";import{u as I}from"./fetch.20f2bcad.js";const N=e=>Object.fromEntries(Object.entries(e).filter(([,s])=>s!==void 0)),T=(e,s)=>(a,t)=>(y(()=>e({...N(a),...t.attrs},t)),()=>{var c,n;return s?(n=(c=t.slots).default)==null?void 0:n.call(c):null}),$=m({name:"Title",inheritAttrs:!1,setup:T((e,{slots:s})=>{var t,c,n;return{title:((n=(c=(t=s.default)==null?void 0:t.call(s))==null?void 0:c[0])==null?void 0:n.children)||null}})}),w=m({name:"Head",inheritAttrs:!1,setup:(e,s)=>()=>{var a,t;return(t=(a=s.slots).default)==null?void 0:t.call(a)}});const x=e=>(D("data-v-97366438"),e=e(),H(),e),A={class:"card"},B={class:"grid grid-cols-2 gap-10"},M={class:"p-7"},O=["src"],V={class:"p-7"},j={class:"text-4xl my-7"},E={class:"text-xl my-7"},F=x(()=>o("h3",{class:"font-bold border-b-2 mb-4 p-b-2"},"Product Description:",-1)),U={class:"mb-7"},R=x(()=>o("button",{class:"btn"},[o("i",{class:"ai-shopping-cart"}),o("span",null," Add to cart ")],-1)),Y={__name:"ProductDetail",props:["product"],setup(e){return(s,a)=>{var t,c,n,r;return h(),f("div",A,[o("div",B,[o("div",M,[o("img",{src:(t=e.product)==null?void 0:t.image,aly:"",class:"mx-auto my-7"},null,8,O)]),o("div",V,[o("h2",j,i((c=e.product)==null?void 0:c.title),1),o("p",E,"Price - $"+i((n=e.product)==null?void 0:n.price),1),F,o("p",U,i((r=e.product)==null?void 0:r.description),1),R])])])}}},q=P(Y,[["__scopeId","data-v-97366438"]]),J={__name:"[id]",setup(e){const{id:s}=S().params,a=`https://fakestoreapi.com/products/${s}`,{data:t}=I(a,{key:s},"$H3OxYP9tuC");return(c,n)=>{const r=$,v=k("Meat"),b=w,g=q;return h(),f("div",null,[d(b,null,{default:u(()=>{var _;return[d(r,null,{default:u(()=>{var p;return[C("Nuxt-Shop | "+i((p=l(t))==null?void 0:p.title),1)]}),_:1}),d(v,{name:"description",content:(_=l(t))==null?void 0:_.description},null,8,["content"])]}),_:1}),d(g,{product:l(t)},null,8,["product"])])}}};export{J as default};
