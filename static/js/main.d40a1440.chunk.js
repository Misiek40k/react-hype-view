(this["webpackJsonpreact-hype-view"]=this["webpackJsonpreact-hype-view"]||[]).push([[0],[,function(e,t,n){e.exports={component:"InnerContainer_component__1WS4Q",large:"InnerContainer_large__1FGGJ",title:"InnerContainer_title__cEj3a",border:"InnerContainer_border__3r88Y",list:"InnerContainer_list__GssW5",fadeIn:"InnerContainer_fadeIn__2u_8f"}},,,function(e,t,n){e.exports={component:"Logo_component__C-FQd",item:"Logo_item__3iOvb",fadeIn:"Logo_fadeIn__3b6X1"}},function(e,t,n){e.exports={component:"Popup_component__3Vqn6",input:"Popup_input__2gQar",buttons:"Popup_buttons__35q7G",fadeIn:"Popup_fadeIn__2uIht"}},,function(e,t,n){e.exports={title:"Title_title__tG-D8",subtitle:"Title_subtitle__3uXjg",fadeIn:"Title_fadeIn__31xbj"}},function(e,t,n){e.exports={component:"Button_component__3_D9D",success:"Button_success__2Mttm",danger:"Button_danger__102QZ",large:"Button_large__1NUGx",medium:"Button_medium__AINac",small:"Button_small__2oSwY",line:"Button_line__2Wy6r",outerLine:"Button_outerLine__a1NBx",innerLine:"Button_innerLine__2rfLR",fadeIn:"Button_fadeIn__12tqz"}},function(e,t,n){e.exports={component:"Condition_component__3OL7H",small:"Condition_small__21BHi",large:"Condition_large__1Oeey",medium:"Condition_medium__3lKGV",fadeIn:"Condition_fadeIn__1cuZE"}},function(e,t,n){e.exports={item:"ContentItem_item__Q_qR5",option:"ContentItem_option__3k3t1",fadeIn:"ContentItem_fadeIn__3NQwV"}},function(e,t,n){e.exports={component:"ContentContainer_component__20ZDr",list:"ContentContainer_list__XGUHz",fadeIn:"ContentContainer_fadeIn__2LEJP"}},,,,,,,function(e,t,n){e.exports={component:"Header_component__1JTft",fadeIn:"Header_fadeIn__2SZHL"}},function(e,t,n){e.exports={header:"SectionHeader_header__17w7i",fadeIn:"SectionHeader_fadeIn__1R-PV"}},function(e,t,n){e.exports={component:"ItemOption_component__1HDmU",fadeIn:"ItemOption_fadeIn__23zDm"}},function(e,t,n){e.exports={component:"Select_component__2du-C",fadeIn:"Select_fadeIn__b6dtv"}},,,function(e,t,n){e.exports=n(30)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(14),c=n.n(o),r=n(15),l=n(16),m=n(22),u=n(17),s=n(23),p={txt:"HYP",icon:"bars"},d={title:"Zadanie rekrutacyjne"},_={title:"People",buttons:{size:{large:"large",medium:"medium",small:"small"},line:{true:"line",outer:"outerLine",inner:"innerLine"},variant:{success:"success",danger:"danger"},icon:{plus:"plus",minus:"minus",cancel:"ban"}},condition:{txt:{outer:"And",inner:"Or"},variant:{large:"large",medium:"medium",small:"small"}},popup:{item:"Add Item",option:"Add Option"},select:{label:"Chose item size: ",txt:{medium:"Medium",large:"Large"},variant:{medium:"medium",large:"large"}}},f=[{id:1,variant:"medium",title:"Age 40+"},{id:2,variant:"large",title:"Ethnicity",options:[{id:1,name:"Black"},{id:2,name:"Hispanic"}]},{id:3,variant:"medium",title:"Income yearly 45k USD+"}],v=function(e){var t=e.name;return i.a.createElement("i",{className:"fas fa-".concat(t)})},E=n(4),b=n.n(E),g=function(){var e=p;return i.a.createElement("div",{className:b.a.component},e.txt.split("").map((function(e,t){return i.a.createElement("span",{className:b.a.item,key:t},e)})),i.a.createElement("span",{className:b.a.item},i.a.createElement(v,{name:e.icon})))},I=n(7),O=n.n(I),j=function(e){var t=e.title,n=e.subtitle;return i.a.createElement(a.Fragment,null,t&&i.a.createElement("h1",{className:O.a.title},t),n&&i.a.createElement("h3",{className:O.a.subtitle},n))},h=n(18),C=n.n(h),N=function(){return i.a.createElement("header",{className:C.a.component},i.a.createElement(g,null),i.a.createElement(j,{title:d.title}))},x=n(12),k=n(6),S=n(3),y=n(19),B=n.n(y),L=function(e){var t=e.name;return i.a.createElement("h1",{className:B.a.header},t)},w=n(8),A=n.n(w),P=function(e){var t=e.variant,n=void 0===t?"":t,a=e.name,o=e.clickAction,c=e.id,r=e.option;return i.a.createElement("button",{className:A.a.component+n.split(" ").map((function(e){return" "+(A.a[e]||e)})).join(""),onClick:function(){return o(c,r)}},i.a.createElement(v,{name:a}))},z=n(2),H=function(e){var t=e.id,n=e.title,o=e.deleteItem,c=_.buttons;return i.a.createElement(a.Fragment,null,i.a.createElement(j,{subtitle:n}),i.a.createElement(P,{variant:"".concat(c.size.small," ").concat(c.variant.danger),name:c.icon.minus,clickAction:o,id:t}))},G=n(1),V=n.n(G),D={medium:H,large:function(e){var t=e.title,n=e.options,a=e.deleteItem,o=e.openPop,c=e.id,r=Object(z.a)(e,["title","options","deleteItem","openPop","id"]),l=_.buttons;return i.a.createElement("div",{className:V.a.large},i.a.createElement("div",{className:V.a.title},i.a.createElement("div",{className:V.a.border},i.a.createElement(j,{subtitle:t})),i.a.createElement(P,{variant:"".concat(l.size.small," ").concat(l.variant.danger),name:l.icon.minus,clickAction:a,id:c})),n&&i.a.createElement("ul",{className:V.a.list},n.map((function(e){return i.a.createElement(X,Object.assign({key:e.id,id:c,option:e,deleteItem:a},r))}))),i.a.createElement(P,{variant:"".concat(l.size.medium," ").concat(l.variant.success," ").concat(l.line.true," ").concat(l.line.inner),name:l.icon.plus,clickAction:o,id:c}))}},Q=function(e){var t=e.variant,n=Object(z.a)(e,["variant"]),a=D[t];return a?i.a.createElement("div",{className:V.a.component},i.a.createElement(a,n)):null},F=n(20),J=n.n(F),W=function(e){var t=e.id,n=e.option,a=e.deleteOption,o=_.buttons;return i.a.createElement("div",{className:J.a.component},i.a.createElement(j,{subtitle:n.name}),i.a.createElement(P,{variant:"".concat(o.size.small," ").concat(o.variant.danger),name:o.icon.minus,clickAction:a,id:t,option:n}))},Z=n(9),q=n.n(Z),T=function(e){var t=e.variant,n=void 0===t?"":t,a=e.name;return i.a.createElement("span",{className:q.a.component+n.split(" ").map((function(e){return" "+(q.a[e]||e)})).join("")},a)},U=n(10),R=n.n(U),X=function(e){var t=e.variant,n=e.option,a=Object(z.a)(e,["variant","option"]),o=_;return i.a.createElement("li",{className:n?R.a.option:R.a.item},i.a.createElement(T,{name:n?o.condition.txt.inner:o.condition.txt.outer,variant:n?o.condition.variant.small:t}),n?i.a.createElement(W,Object.assign({option:n},a)):i.a.createElement(Q,Object.assign({variant:t},a)))},Y=n(21),M=n.n(Y),K=function(e){var t=e.selectOption,n=e.setSelectOption,a=_.select;return i.a.createElement("div",{className:M.a.component},i.a.createElement("label",null,a.label,i.a.createElement("select",{value:t,onChange:function(e){return n(e.target.value)}},i.a.createElement("option",{value:a.variant.medium},a.txt.medium),i.a.createElement("option",{value:a.variant.large},a.txt.large))))},$=n(5),ee=n.n($),te=function(e){var t=e.editOption,n=e.closePop,a=e.addItem,o=e.addOption,c=e.selectOption,r=e.setSelectOption,l=e.inputValue,m=e.setInputValue,u=_,s=_.buttons;return i.a.createElement("div",{className:ee.a.component},i.a.createElement(j,{subtitle:t?u.popup.option:u.popup.item}),i.a.createElement("input",{type:"text",value:l,onChange:function(e){return m(e.target.value)},className:ee.a.input}),!t&&i.a.createElement(K,{selectOption:c,setSelectOption:r}),i.a.createElement("div",{className:ee.a.buttons},i.a.createElement(P,{variant:"".concat(s.size.medium," ").concat(s.variant.success),name:s.icon.plus,clickAction:t?o:a,id:t}),i.a.createElement(P,{variant:"".concat(s.size.medium," ").concat(s.variant.danger),name:s.icon.cancel,clickAction:n})))},ne=n(11),ae=n.n(ne),ie=function(){var e=_,t=_.buttons,n=Object(a.useState)(!1),o=Object(S.a)(n,2),c=o[0],r=o[1],l=Object(a.useState)(""),m=Object(S.a)(l,2),u=m[0],s=m[1],p=Object(a.useState)(null),d=Object(S.a)(p,2),v=d[0],E=d[1],b=Object(a.useState)(e.select.variant.medium),g=Object(S.a)(b,2),I=g[0],O=g[1],j=Object(a.useState)(f),h=Object(S.a)(j,2),C=h[0],N=h[1],y=function(e){e&&E(e),r(!0)},B=function(){r(!1),s(""),E(null)},w={openPop:y,deleteOption:function(e,t){var n=C.map((function(n){return n.id===e?Object(k.a)({},n,{options:n.options.filter((function(e){return e.id!==t.id}))}):n}));N(n)},deleteItem:function(e){var t=C.filter((function(t){return t.id!==e}));N(t)}},A={closePop:B,addItem:function(){var e={id:C.length?C.length+1:1,variant:I,title:u};N([].concat(Object(x.a)(C),[e])),B()},addOption:function(e){var t=C.map((function(t){return t.id===e?t.options?Object(k.a)({},t,{options:[].concat(Object(x.a)(t.options),[{id:t.options.length+1,name:u}])}):Object(k.a)({},t,{options:[{id:1,name:u}]}):t}));N(t),B()},editOption:v,selectOption:I,setSelectOption:O,inputValue:u,setInputValue:s};return i.a.createElement("section",{className:ae.a.component},i.a.createElement(L,{name:e.title}),i.a.createElement("ul",{className:ae.a.list},C.map((function(e){return i.a.createElement(X,Object.assign({key:e.id},w,e))}))),i.a.createElement(P,{variant:"".concat(t.size.large," ").concat(t.variant.success," ").concat(t.line.true," ").concat(t.line.outer),name:t.icon.plus,clickAction:y}),c?i.a.createElement(te,A):null)},oe=function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(a.Fragment,null,i.a.createElement(N,null),i.a.createElement("main",null,i.a.createElement(ie,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(29);c.a.render(i.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[24,1,2]]]);
//# sourceMappingURL=main.d40a1440.chunk.js.map