import{u as J,i as ae,l as se,m as _,p as le,P as te,q as re,s as oe,k as S,v as C,x as ue,y as U,j as s,z as ie,R as I,A as ne,B as Ee,C as ce,D as Be,E as de,G as ve,H as me,I as Ae,J as he,K as H,L as pe,M as ye,N as De,O as P,Q as T,S as ge}from"./app-BBHf8-6T.js";const ke=["/","/portfolio.html","/demo/","/demo/disable.html","/demo/layout.html","/demo/markdown.html","/demo/page.html","/java/Java%E9%9B%86%E5%90%88.html","/commands/Docker%E5%91%BD%E4%BB%A4/01.Docker%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html","/commands/Mongo%E5%91%BD%E4%BB%A4/01.Mongo%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html","/commands/Mysql%E5%91%BD%E4%BB%A4/01.Mysql%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html","/commands/Oracle%E5%91%BD%E4%BB%A4/01.Oracle%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html","/commands/Rocketmq%E5%91%BD%E4%BB%A4/01.RocketMQ%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html","/commands/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%91%BD%E4%BB%A4/01.Linux%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html","/commands/%E7%BD%91%E7%BB%9C%E5%91%BD%E4%BB%A4/01.%E7%BD%91%E7%BB%9C%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html","/commands/%E9%98%B2%E7%81%AB%E5%A2%99%E5%91%BD%E4%BB%A4/01.%E9%98%B2%E7%81%AB%E5%A2%99%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html","/database/Mongo%E6%95%B0%E6%8D%AE%E5%BA%93/Mongo%E5%9F%BA%E7%A1%80.html","/database/Mysql%E6%95%B0%E6%8D%AE%E5%BA%93/Mysql%E5%9F%BA%E7%A1%80.html","/deploy/IOS%E9%83%A8%E7%BD%B2%E6%96%87%E6%A1%A3/01.M1%20Docker%E5%90%84%E5%BA%94%E7%94%A8%E5%AE%89%E8%A3%85.html","/java/Java%E5%9F%BA%E7%A1%80/Java%E5%9F%BA%E7%A1%80.html","/middleware/%20%E5%AE%B9%E5%99%A8%E5%8C%96%E6%8A%80%E6%9C%AF/Docker%E6%8A%80%E6%9C%AF/01.Docker%E4%BB%8B%E7%BB%8D.html","/404.html","/deploy/","/java/","/commands/Docker%E5%91%BD%E4%BB%A4/","/commands/","/commands/Mongo%E5%91%BD%E4%BB%A4/","/commands/Mysql%E5%91%BD%E4%BB%A4/","/commands/Oracle%E5%91%BD%E4%BB%A4/","/commands/Rocketmq%E5%91%BD%E4%BB%A4/","/commands/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%91%BD%E4%BB%A4/","/commands/%E7%BD%91%E7%BB%9C%E5%91%BD%E4%BB%A4/","/commands/%E9%98%B2%E7%81%AB%E5%A2%99%E5%91%BD%E4%BB%A4/","/database/Mongo%E6%95%B0%E6%8D%AE%E5%BA%93/","/database/","/database/Mysql%E6%95%B0%E6%8D%AE%E5%BA%93/","/deploy/IOS%E9%83%A8%E7%BD%B2%E6%96%87%E6%A1%A3/","/java/Java%E5%9F%BA%E7%A1%80/","/middleware/%20%E5%AE%B9%E5%99%A8%E5%8C%96%E6%8A%80%E6%9C%AF/Docker%E6%8A%80%E6%9C%AF/","/middleware/%20%E5%AE%B9%E5%99%A8%E5%8C%96%E6%8A%80%E6%9C%AF/","/middleware/"],fe="SEARCH_PRO_QUERY_HISTORY",h=J(fe,[]),Ce=()=>{const{queryHistoryCount:l}=H,t=l>0;return{enabled:t,queryHistory:h,addQueryHistory:r=>{t&&(h.value=Array.from(new Set([r,...h.value.slice(0,l-1)])))},removeQueryHistory:r=>{h.value=[...h.value.slice(0,r),...h.value.slice(r+1)]}}},b=l=>ke[l.id]+("anchor"in l?`#${l.anchor}`:""),He="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:$}=H,p=J(He,[]),Re=()=>{const l=$>0;return{enabled:l,resultHistory:p,addResultHistory:t=>{if(l){const r={link:b(t),display:t.display};"header"in t&&(r.header=t.header),p.value=[r,...p.value.slice(0,$-1)]}},removeResultHistory:t=>{p.value=[...p.value.slice(0,t),...p.value.slice(t+1)]}}},qe=l=>{const t=Be(),r=_(),R=de(),u=S(0),g=C(()=>u.value>0),v=ve([]);return me(()=>{const{search:m,terminate:q}=Ae(),y=he(E=>{const D=E.join(" "),{searchFilter:w=d=>d,splitWord:Q,suggestionsFilter:L,...A}=t.value;D?(u.value+=1,m(E.join(" "),r.value,A).then(d=>w(d,D,r.value,R.value)).then(d=>{u.value-=1,v.value=d}).catch(d=>{console.warn(d),u.value-=1,u.value||(v.value=[])})):v.value=[]},H.searchDelay-H.suggestDelay);U([l,r],([E])=>y(E),{immediate:!0}),pe(()=>{q()})}),{isSearching:g,results:v}};var Qe=ae({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(l,{emit:t}){const r=se(),R=_(),u=le(te),{enabled:g,addQueryHistory:v,queryHistory:m,removeQueryHistory:q}=Ce(),{enabled:y,resultHistory:E,addResultHistory:D,removeResultHistory:w}=Re(),Q=g||y,L=re(l,"queries"),{results:A,isSearching:d}=qe(L),o=oe({isQuery:!0,index:0}),c=S(0),B=S(0),O=C(()=>Q&&(m.value.length>0||E.value.length>0)),F=C(()=>A.value.length>0),M=C(()=>A.value[c.value]||null),Y=()=>{const{isQuery:e,index:a}=o;a===0?(o.isQuery=!e,o.index=e?E.value.length-1:m.value.length-1):o.index=a-1},z=()=>{const{isQuery:e,index:a}=o;a===(e?m.value.length-1:E.value.length-1)?(o.isQuery=!e,o.index=0):o.index=a+1},G=()=>{c.value=c.value>0?c.value-1:A.value.length-1,B.value=M.value.contents.length-1},K=()=>{c.value=c.value<A.value.length-1?c.value+1:0,B.value=0},N=()=>{B.value<M.value.contents.length-1?B.value+=1:K()},V=()=>{B.value>0?B.value-=1:G()},x=e=>e.map(a=>ge(a)?a:s(a[0],a[1])),W=e=>{if(e.type==="customField"){const a=ye[e.index]||"$content",[i,f=""]=De(a)?a[R.value].split("$content"):a.split("$content");return e.display.map(n=>s("div",x([i,...n,f])))}return e.display.map(a=>s("div",x(a)))},k=()=>{c.value=0,B.value=0,t("updateQuery",""),t("close")},X=()=>g?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},u.value.queryHistory),m.value.map((e,a)=>s("div",{class:["search-pro-result-item",{active:o.isQuery&&o.index===a}],onClick:()=>{t("updateQuery",e)}},[s(P,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:T,onClick:i=>{i.preventDefault(),i.stopPropagation(),q(a)}})]))])):null,Z=()=>y?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},u.value.resultHistory),E.value.map((e,a)=>s(I,{to:e.link,class:["search-pro-result-item",{active:!o.isQuery&&o.index===a}],onClick:()=>{k()}},()=>[s(P,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(i=>x(i)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:T,onClick:i=>{i.preventDefault(),i.stopPropagation(),w(a)}})]))])):null;return ue("keydown",e=>{if(l.isFocusing){if(F.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const a=M.value.contents[B.value];v(l.queries.join(" ")),D(a),r.push(b(a)),k()}}else if(y){if(e.key==="ArrowUp")Y();else if(e.key==="ArrowDown")z();else if(e.key==="Enter"){const{index:a}=o;o.isQuery?(t("updateQuery",m.value[a]),e.preventDefault()):(r.push(E.value[a].link),k())}}}}),U([c,B],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:l.queries.length?!F.value:!O.value}],id:"search-pro-results"},l.queries.length?d.value?s(ie,{hint:u.value.searching}):F.value?s("ul",{class:"search-pro-result-list"},A.value.map(({title:e,contents:a},i)=>{const f=c.value===i;return s("li",{class:["search-pro-result-list-item",{active:f}]},[s("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),a.map((n,ee)=>{const j=f&&B.value===ee;return s(I,{to:b(n),class:["search-pro-result-item",{active:j,"aria-selected":j}],onClick:()=>{v(l.queries.join(" ")),D(n),k()}},()=>[n.type==="text"?null:s(n.type==="title"?ne:n.type==="heading"?Ee:ce,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?s("div",{class:"content-header"},n.header):null,s("div",W(n))])])})])})):u.value.emptyResult:Q?O.value?[X(),Z()]:u.value.emptyHistory:u.value.emptyResult)}});export{Qe as default};
