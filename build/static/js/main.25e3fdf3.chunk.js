(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{20:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(2),o=t.n(c),u=t(15),a=t.n(u),s=(t(20),t(6)),r=t(3),i=t(4),l=t.n(i),h="https://mysterious-hamlet-35771.herokuapp.com/api/persons",j=function(){return l.a.get(h)},d=function(e){return l.a.post(h,e)},f=function(e){return l.a.delete("https://mysterious-hamlet-35771.herokuapp.com/api/persons/".concat(e))},b=function(e){return l.a.put("https://mysterious-hamlet-35771.herokuapp.com/api/persons/".concat(e.id),e)},m=t(0),p=function(e){return Object(m.jsx)("form",{children:Object(m.jsxs)("div",{children:["filter shown with",Object(m.jsx)("input",{value:e.filterText,onChange:e.handleFilter})]})})},O=function(e){return Object(m.jsxs)("form",{onSubmit:e.checkName,children:[Object(m.jsxs)("div",{children:["name: ",Object(m.jsx)("input",{value:e.name,onChange:e.handleNameChange})]}),Object(m.jsxs)("div",{children:["number: ",Object(m.jsx)("input",{value:e.number,onChange:e.handleNumChange})]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{type:"submit",children:"add"})})]})},g=function(e){return Object(m.jsx)("div",{children:e.personsToShow.map((function(n,t){return Object(m.jsx)(x,{person:n,poista:e.poista},t)}))})},x=function(e){return Object(m.jsxs)("p",{children:[" ",e.person.name," ",e.person.number," ",Object(m.jsx)("button",{onClick:function(){return e.poista(e.person.id)},children:"delete"})]})},v=function(){var e=Object(c.useState)([]),n=Object(r.a)(e,2),t=n[0],o=n[1],u=Object(c.useState)(""),a=Object(r.a)(u,2),i=a[0],l=a[1],h=Object(c.useState)(""),x=Object(r.a)(h,2),v=x[0],w=x[1],C=Object(c.useState)(!0),S=Object(r.a)(C,2),y=S[0],T=S[1],k=Object(c.useState)(""),N=Object(r.a)(k,2),F=N[0],L=N[1],D=Object(c.useState)(null),I=Object(r.a)(D,2),J=I[0],P=I[1],B=Object(c.useState)(null),E=Object(r.a)(B,2),M=E[0],q=E[1];Object(c.useEffect)((function(){z()}),[]);var z=function(){j().then((function(e){return o(e.data)}))},A=function(e){var n=e.msg;return null===n?null:Object(m.jsx)("div",{className:"error",children:n})},G=function(e){var n=e.msg;return null===n?null:Object(m.jsx)("div",{className:"success",children:n})},H=function(e){var n={name:i,number:v};l(""),w(""),d(n).then((function(e){o(t.concat(e.data)),q("".concat(n.name," was added successfully!")),setTimeout((function(){q(null)}),5e3)})).catch((function(e){console.log(e.response),console.log(e.response.data),P(JSON.stringify(e.response.data)),setTimeout((function(){P(null)}),5e3),console.log(e)}))},K=y?t:t.filter((function(e){return e.name.toLowerCase().includes(F.toLocaleLowerCase())}));return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Phonebook"}),Object(m.jsx)(A,{msg:J}),Object(m.jsx)(G,{msg:M}),Object(m.jsx)(p,{filterText:F,handleFilter:function(e){L(e.target.value),e.target.value.length>=1?T(!1):T(!0)}}),Object(m.jsx)("h3",{children:"add new"}),Object(m.jsx)(O,{name:i,number:v,checkName:function(e){if(e.preventDefault(),t.filter((function(e){return e.name===i})).length>0){if(window.confirm("".concat(i," is already added to phonebook, replace the number with a new one?"))){var n=t.find((function(e){return e.name===i})),c=Object(s.a)(Object(s.a)({},n),{},{number:v});b(c).then((function(e){o(t.map((function(n){return n.id!==c.id?n:e.data}))),q("".concat(c.name," number was changed successfully!")),setTimeout((function(){q(null)}),5e3),l(""),w("")})).catch((function(e){P("Information of ".concat(c.name," has already been removed from the server")),setTimeout((function(){P(null)}),5e3),z(),console.log(e),l(""),w("")}))}}else H(e)},handleNameChange:function(e){l(e.target.value)},handleNumChange:function(e){w(e.target.value)}}),Object(m.jsx)("h3",{children:"Numbers"}),Object(m.jsx)(g,{personsToShow:K,persons:t,poista:function(e){window.confirm("Do you want to delete?")&&f(e).then((function(n){o(t.filter((function(n){return n.id!==e}))),q("Delete was done successfully!"),setTimeout((function(){q(null)}),5e3)})).catch((function(e){P("Could not delete person"),setTimeout((function(){P(null)}),5e3),console.log(e)}))}})]})},w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(n){var t=n.getCLS,c=n.getFID,o=n.getFCP,u=n.getLCP,a=n.getTTFB;t(e),c(e),o(e),u(e),a(e)}))};a.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root")),w()}},[[40,1,2]]]);
//# sourceMappingURL=main.25e3fdf3.chunk.js.map