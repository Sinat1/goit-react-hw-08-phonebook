"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[450],{2450:function(t,e,n){n.r(e),n.d(e,{default:function(){return P}});var a,r=n(2791),s=n(9434),c="ContactForm_contactForm__y0Rca",i="ContactForm_formLabel__TSwxK",o="ContactForm_formInput__GszVU",l="ContactForm_formBtn__qZGY3",u=n(3634),m=n(6916),d=function(t){return t.contacts.items},p=function(t){return t.contacts.isLoading},_=function(t){return t.contacts.error},f=function(t){return t.filter},h=(0,m.P1)([d,f],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),b=n(184),v=function(){var t=(0,s.I0)(),e=(0,s.v9)(d);return(0,b.jsxs)("form",{className:c,onSubmit:function(n){n.preventDefault();var a=n.target.elements,r=a.name.value,s=a.number.value,c=e.find((function(t){return t.name===r}));n.target.reset();var i=e.find((function(t){return t.number===s}));return c?alert("".concat(c.name," is already in contacts")):i?alert("".concat(i.phone," is already in contacts")):t((0,u.uK)({name:r,number:s}))},children:[(0,b.jsxs)("label",{className:i,children:["Name",(0,b.jsx)("input",{className:o,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,b.jsxs)("label",{className:i,children:["Number",(0,b.jsx)("input",{className:o,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,b.jsx)("button",{className:l,type:"submit",children:"Add contact"})]})},x="ContactList_contactList__UFVCg",j="ContactList_contactList__item__2K2vx",C="ContactList_contactList__btn__Q+Zz6",N=function(){var t=(0,s.I0)(),e=(0,s.v9)(h);return(0,b.jsx)("ul",{className:x,children:e.map((function(e){return(0,b.jsxs)("li",{className:j,children:[e.name,": ",e.number,(0,b.jsx)("button",{className:C,type:"button",onClick:function(){return n=e.id,void t((0,u.GK)(n));var n},children:"Delete"})]},e.id)}))})},g="Filter_filterLabel__+pnW-",y="Filter_filterInput__1Cysk",w=n(4808),L=function(){var t=(0,s.v9)(f),e=(0,s.I0)();return(0,b.jsxs)("label",{className:g,children:["Find contacts by name",(0,b.jsx)("input",{className:y,type:"text",value:t.value,onChange:function(t){var n=t.target.value;e((0,w.M6)(n))}})]})},k=n(8402),F=n(168),A=n(6444).ZP.div(a||(a=(0,F.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 100vh;\n  margin-left: auto;\n  margin-right: auto;\n"]))),Z=function(){return(0,b.jsx)(A,{children:(0,b.jsx)(k.no,{visible:!0,height:"150",width:"150",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper"})})},z="App_app__6Ra7L",I="App_pageTitle__naQ4s",K="App_wrapper__50AJ9",P=function(){var t=(0,s.I0)(),e=(0,s.v9)(p),n=(0,s.v9)(_);return(0,r.useEffect)((function(){t((0,u.yF)())}),[t]),(0,b.jsxs)("div",{className:z,children:[(0,b.jsx)("h1",{className:I,children:"Phonebook"}),(0,b.jsx)(v,{}),(0,b.jsx)("h2",{children:"Contacts"}),e&&!n&&(0,b.jsx)(Z,{}),(0,b.jsxs)("div",{className:K,children:[(0,b.jsx)(L,{}),(0,b.jsx)(N,{})]})]})}}}]);
//# sourceMappingURL=450.bb127072.chunk.js.map