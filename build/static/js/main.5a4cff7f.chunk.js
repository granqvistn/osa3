(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{20:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(2),o=t.n(c),u=t(15),a=t.n(u),r=(t(20),t(6)),i=t(3),s=t(4),l=t.n(s),d="https://mysterious-hamlet-35771.herokuapp.com/api/persons",h=function(){return l.a.get(d)},j=function(e){return l.a.post(d,e)},f=function(e){return l.a.delete("https://mysterious-hamlet-35771.herokuapp.com/api/persons/".concat(e))},b=function(e){return l.a.put("https://mysterious-hamlet-35771.herokuapp.com/api/persons/".concat(e.id),e)},m=t(0),p=function(e){return Object(m.jsx)("form",{children:Object(m.jsxs)("div",{children:["filter shown with",Object(m.jsx)("input",{value:e.filterText,onChange:e.handleFilter})]})})},O=function(e){return Object(m.jsxs)("form",{onSubmit:e.checkName,children:[Object(m.jsxs)("div",{children:["name: ",Object(m.jsx)("input",{value:e.name,onChange:e.handleNameChange})]}),Object(m.jsxs)("div",{children:["number: ",Object(m.jsx)("input",{value:e.number,onChange:e.handleNumChange})]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{type:"submit",children:"add"})})]})},x=function(e){return Object(m.jsx)("div",{children:e.personsToShow.map((function(n,t){return Object(m.jsx)(g,{person:n,poista:e.poista},t)}))})},g=function(e){return Object(m.jsxs)("p",{children:[" ",e.person.name," ",e.person.number," ",Object(m.jsx)("button",{onClick:function(){return e.poista(e.person.id)},children:"delete"})]})},v=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],o=n[1],u=Object(c.useState)(""),a=Object(i.a)(u,2),s=a[0],l=a[1],d=Object(c.useState)(""),g=Object(i.a)(d,2),v=g[0],w=g[1],C=Object(c.useState)(!0),S=Object(i.a)(C,2),T=S[0],y=S[1],k=Object(c.useState)(""),N=Object(i.a)(k,2),F=N[0],L=N[1],D=Object(c.useState)(null),I=Object(i.a)(D,2),P=I[0],B=I[1],E=Object(c.useState)(null),J=Object(i.a)(E,2),M=J[0],q=J[1];Object(c.useEffect)((function(){z()}),[]);var z=function(){h().then((function(e){return o(e.data)}))},A=function(e){var n=e.msg;return null===n?null:Object(m.jsx)("div",{className:"error",children:n})},G=function(e){var n=e.msg;return null===n?null:Object(m.jsx)("div",{className:"success",children:n})},H=function(e){var n={name:s,number:v};o(t.concat(n)),l(""),w(""),j(n).then((function(e){o(t.concat(e.data)),q("".concat(n.name," was added successfully!")),setTimeout((function(){q(null)}),5e3)})).catch((function(e){B("Could not add new person"),setTimeout((function(){B(null)}),5e3),console.log(e)}))},K=T?t:t.filter((function(e){return e.name.toLowerCase().includes(F.toLocaleLowerCase())}));return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Phonebook"}),Object(m.jsx)(A,{msg:P}),Object(m.jsx)(G,{msg:M}),Object(m.jsx)(p,{filterText:F,handleFilter:function(e){L(e.target.value),e.target.value.length>=1?y(!1):y(!0)}}),Object(m.jsx)("h3",{children:"add new"}),Object(m.jsx)(O,{name:s,number:v,checkName:function(e){if(e.preventDefault(),t.filter((function(e){return e.name===s})).length>0){if(window.confirm("".concat(s," is already added to phonebook, replace the number with a new one?"))){var n=t.find((function(e){return e.name===s})),c=Object(r.a)(Object(r.a)({},n),{},{number:v});b(c).then((function(e){o(t.map((function(n){return n.id!==c.id?n:e.data}))),q("".concat(c.name," number was changed successfully!")),setTimeout((function(){q(null)}),5e3),l(""),w("")})).catch((function(e){B("Information of ".concat(c.name," has already been removed from the server")),setTimeout((function(){B(null)}),5e3),z(),console.log(e),l(""),w("")}))}}else H(e)},handleNameChange:function(e){l(e.target.value)},handleNumChange:function(e){w(e.target.value)}}),Object(m.jsx)("h3",{children:"Numbers"}),Object(m.jsx)(x,{personsToShow:K,persons:t,poista:function(e){window.confirm("Do you want to delete?")&&f(e).then((function(n){o(t.filter((function(n){return n.id!==e}))),q("Delete was done successfully!"),setTimeout((function(){q(null)}),5e3)})).catch((function(e){B("Could not delete person"),setTimeout((function(){B(null)}),5e3),console.log(e)}))}})]})},w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(n){var t=n.getCLS,c=n.getFID,o=n.getFCP,u=n.getLCP,a=n.getTTFB;t(e),c(e),o(e),u(e),a(e)}))};a.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root")),w()}},[[40,1,2]]]);
//# sourceMappingURL=main.5a4cff7f.chunk.js.map