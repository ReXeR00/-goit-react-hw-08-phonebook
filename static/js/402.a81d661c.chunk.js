"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[402],{4402:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a,o,i,s,c,u,l,p,d,f=t(9439),x=t(2791),g=t(9434),m=t(3634),h=function(n){return n.contacts.items},b=function(n){return n.filter},Z=function(n){return n.contacts.isLoading},v=function(n){return n.contacts.error},w=t(168),y=t(6822),j=y.Z.form(r||(r=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 30px;\n  align-items: center;\n"]))),k=y.Z.label(a||(a=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-size: 20px;\n  font-weight: 700;\n"]))),C=y.Z.input(o||(o=(0,w.Z)(["\n  width: 400px;\n  height: 35px;\n  border-radius: 4px;\n  border: none;\n  font-size: 20px;\n  font-weight: 600;\n  color: rgb(114, 114, 114);\n  padding: 5px 10px;\n  outline: transparent;\n"]))),z=y.Z.button(i||(i=(0,w.Z)(["\n  border-radius: 4px;\n  padding: 10px 30px;\n  border: none;\n  cursor: pointer;\n  font-weight: 600;\n\n  &:hover,\n  &:focus {\n    background-color: rgb(17, 189, 55);\n    color: #fff;\n    transform: scale(1.1);\n    transition: all 250ms;\n  }\n"]))),_=t(184),A=function(){var n=(0,g.v9)(h),e=(0,g.I0)(),t=(0,x.useState)(""),r=(0,f.Z)(t,2),a=r[0],o=r[1],i=(0,x.useState)(""),s=(0,f.Z)(i,2),c=s[0],u=s[1],l=function(n){var e=n.target,t=e.value;switch(e.name){case"name":o(t);break;case"number":u(t);break;default:return}};return(0,_.jsxs)(j,{onSubmit:function(t){t.preventDefault(),n.some((function(n){return n.name===a}))?window.alert("".concat(a," is already in your contacts")):(e((0,m.uK)({name:a,number:c})),o(""),u(""))},children:[(0,_.jsxs)(k,{children:["Name",(0,_.jsx)(C,{type:"text",name:"name",value:a,onChange:l,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,_.jsxs)(k,{children:["Number",(0,_.jsx)(C,{type:"tel",name:"number",value:c,onChange:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,_.jsx)(z,{type:"submit",children:"Add contact"})]})},I=y.Z.ul(s||(s=(0,w.Z)(["\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n  gap: 20px;\n"]))),L=y.Z.li(c||(c=(0,w.Z)(["\n  display: flex;\n  gap: 30px;\n  justify-content: space-between;\n  align-items: center;\n"]))),F=y.Z.p(u||(u=(0,w.Z)(["\n  font-weight: 700;\n  font-size: 18px;\n"]))),D=y.Z.button(l||(l=(0,w.Z)(["\n  cursor: pointer;\n  border-radius: 4px;\n  padding: 5px 20px;\n  border: none;\n  font-weight: 600;\n\n  &:hover,\n  &:focus {\n    background-color: rgb(255, 2, 2);\n    color: #fff;\n    transform: scale(1.1);\n    transition: all 250ms;\n  }\n"]))),N=function(){var n=(0,g.I0)(),e=(0,g.v9)(h),t=(0,g.v9)(b).toLowerCase(),r=e.filter((function(n){return n.name.toLowerCase().includes(t)}));return(0,x.useEffect)((function(){n((0,m.yF)())}),[n]),(0,_.jsx)(I,{children:r.map((function(e){var t=e.id,r=e.name,a=e.number;return(0,_.jsxs)(L,{children:[(0,_.jsxs)(F,{children:[r,": ",a]}),(0,_.jsx)(D,{type:"button",onClick:function(){return n((0,m.GK)(t))},children:"Delete"})]})}))})},S=t(1634),q=y.Z.label(p||(p=(0,w.Z)(["\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n  gap: 20px;\n  font-size: 19px;\n  font-weight: 600;\n  text-align: center;\n  text-shadow: 1px 1px 10px rgb(77, 77, 77);\n"]))),E=y.Z.input(d||(d=(0,w.Z)(["\n  width: 350px;\n  height: 30px;\n  border: none;\n  border-radius: 4px;\n  padding: 5px 10px;\n  font-size: 20px;\n  font-weight: 600;\n  outline: transparent;\n"])));function K(){var n=(0,g.I0)(),e=(0,g.v9)(b);return(0,_.jsxs)(q,{children:["Find contacts by name",(0,_.jsx)(E,{type:"text",name:e,value:e,onChange:function(e){n((0,S.T)(e.target.value))},placeholder:"Please write name"})]})}function P(){var n=(0,g.I0)(),e=(0,g.v9)(Z),t=(0,g.v9)(v);return(0,x.useEffect)((function(){n((0,m.yF)())}),[n]),(0,_.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"start"},children:[(0,_.jsx)(A,{}),(0,_.jsx)(K,{}),(0,_.jsx)("title",{children:"Contacts"}),e&&!t&&(0,_.jsx)("b",{style:{marginLeft:"auto",marginRight:"auto",marginTop:"10px"},children:"Loading..."}),(0,_.jsx)(N,{})]})}}}]);
//# sourceMappingURL=402.a81d661c.chunk.js.map