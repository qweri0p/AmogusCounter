import{P as p,S as g,W as y,O as h,T as L,B as x,M as A,A as v,a as S,b as u,c as b,d as z,e as M}from"./vendor.4422493e.js";const P=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};P();var I="assets/sus.3f692199.png",O="assets/amogus.62300a27.ogg";let i;const c=new p(90,window.innerWidth/window.innerHeight,.1,1e3),l=new g,d=new y({canvas:document.getElementById("c"),antialias:!0});c.position.z=30;d.setPixelRatio(window.devicePixelRatio);window.addEventListener("resize",m);const W=new h(c,d.domElement),B=new L().load(I),E=new x(1,1,1),F=new A({map:B}),N=new v(16777215);l.add(N);localStorage.getItem("sussus")?i=Number(localStorage.getItem("sussus")):i=0;Array(i).fill().forEach(f);function f(){const o=new S(E,F),[n,r,s]=Array(3).fill().map(()=>u.randFloatSpread(360));o.rotation.x=n,o.rotation.y=r,o.rotation.z=s;const[e,t,a]=Array(3).fill().map(()=>u.randFloatSpread(30));o.position.x=e,o.position.y=t,o.position.z=a,l.add(o)}function m(){c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),d.setSize(window.innerWidth,window.innerHeight)}m();function w(){requestAnimationFrame(w),d.render(l,c),W.update()}w();setInterval(()=>{document.onkeydown=function(o){if(o.keyCode!==32)return;const n=new b,r=new z(n),s=new M;f(),i++,localStorage.setItem("sussus",i),s.load(O,function(e){r.setBuffer(e),r.setVolume(.5),r.play()}),console.log(i)}},1);
