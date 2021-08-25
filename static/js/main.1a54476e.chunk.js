(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{17:function(t,e,n){t.exports={list:"ContactList_list__3hbGS",item:"ContactList_item__3CmAt",name:"ContactList_name__22b0q",btn:"ContactList_btn__2m_E5"}},35:function(t,e,n){t.exports={input:"Filter_input__PKc42",btn:"Filter_btn__1vXzf"}},46:function(t,e,n){},8:function(t,e,n){t.exports={form:"ContactForm_form__3cjKB",label:"ContactForm_label__30xz_",input:"ContactForm_input__1MclA",btn:"ContactForm_btn__VuH5L"}},93:function(t,e,n){},94:function(t,e,n){"use strict";n.r(e);var c,a,r=n(0),o=n.n(r),i=n(13),u=n.n(i),s=n(16),b=n(5),l=n(4),j=n(3),d=Object(j.b)("contacts /fetchContactsRequest"),f=Object(j.b)("contacts/fetchContactsSuccess"),O=Object(j.b)("contact/fetchContactsError"),m=Object(j.b)("contacts / addContactRequest"),h=Object(j.b)("contacts/addContactSuccess"),p=Object(j.b)("contact/addContactError"),g=Object(j.b)("contacts / deleteContactRequest"),C=Object(j.b)("contacts/deleteContactSuccess"),x=Object(j.b)("contact/deleteContactError"),v=Object(j.b)("contacts/changeFilter"),_=Object(j.c)([],(c={},Object(b.a)(c,f,(function(t,e){return e.payload})),Object(b.a)(c,h,(function(t,e){var n=e.payload;return[].concat(Object(s.a)(t),[n])})),Object(b.a)(c,C,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),F=Object(j.c)(!1,(a={},Object(b.a)(a,m,(function(){return!0})),Object(b.a)(a,h,(function(){return!1})),Object(b.a)(a,p,(function(){return!1})),Object(b.a)(a,g,(function(){return!0})),Object(b.a)(a,C,(function(){return!1})),Object(b.a)(a,x,(function(){return!1})),Object(b.a)(a,d,(function(){return!0})),Object(b.a)(a,f,(function(){return!1})),Object(b.a)(a,O,(function(){return!1})),a)),L=Object(j.c)("",Object(b.a)({},v,(function(t,e){return e.payload}))),y=Object(j.c)(null,{}),w=Object(l.b)({items:_,filter:L,loading:F,error:y}),N=n(31),k=n.n(N),S=n(9),A=[].concat(Object(s.a)(Object(j.d)({serializableCheck:{ignoredActions:[S.a,S.f,S.b,S.c,S.d,S.e]}})),[k.a]),P=Object(j.a)({reducer:{contacts:w},middleware:A,devTools:!1}),q=n(7),z=(n(46),n(1));var E=function(t){var e=t.children;return Object(z.jsx)(z.Fragment,{children:Object(z.jsx)("h1",{children:e})})},B=n(22),D=n(33),T=n.n(D),R=function(){return Object(z.jsx)(T.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})},J=n(20),M=n.n(J),V=n(34),Z=n(11),I=n.n(Z);I.a.defaults.baseURL="https://61226d55d44628001705484b.mockapi.io";var K=function(){return function(){var t=Object(V.a)(M.a.mark((function t(e){var n,c;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(d()),t.prev=1,t.next=4,I.a.get("/contacts");case 4:n=t.sent,c=n.data,e(f(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(O(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},G=function(t){return function(e){e(m()),I.a.post("/contacts",t).then((function(t){var n=t.data;return e(h(n))})).catch((function(t){return e(p(t))}))}},H=function(t){return function(e){e(g),I.a.delete("/contacts/".concat(t)).then((function(){return e(C(t))})).catch((function(t){return e(x(t))}))}},U=n(21),X=n.n(U),$=n(14),Q=function(t){return t.contacts.items},W=function(t){return t.contacts.filter},Y={getLoading:function(t){return t.contacts.loading},getContacts:Q,getFilter:W,getVisibleContacts:Object($.a)([Q,W],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},tt=n(8),et=n.n(tt),nt=Object(q.b)((function(t){return{contacts:Y.getContacts(t),isLoading:Y.getLoading(t)}}),(function(t){return{onSubmit:function(e){return t(G(e))}}}))((function(t){var e=t.contacts,n=t.onSubmit,c=t.isLoading,a=Object(r.useState)(""),o=Object(B.a)(a,2),i=o[0],u=o[1],s=Object(r.useState)(""),b=Object(B.a)(s,2),l=b[0],j=b[1],d=X.a.generate(),f=X.a.generate(),O=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":u(c);break;case"number":j(c);break;default:return}};return Object(z.jsxs)(z.Fragment,{children:[c&&Object(z.jsx)(R,{}),Object(z.jsx)("form",{className:et.a.form,onSubmit:function(t){t.preventDefault(),function(t){if(e)return e.find((function(e){return e.name.toLowerCase()===t}))?(alert("".concat(t," is already in contacts")),!0):void 0}(i.toLowerCase())||(n({name:i,number:l}),u(""),j(""))},children:Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("label",{className:et.a.label,htmlFor:d,children:"Name:"}),Object(z.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",className:et.a.input,id:d,value:i,onChange:O,required:!0}),Object(z.jsx)("label",{className:et.a.label,htmlFor:f,children:"Number:"}),Object(z.jsx)("input",{type:"tel",name:"number",id:f,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",className:et.a.input,value:l,onChange:O,required:!0}),Object(z.jsx)("button",{type:"submit",className:et.a.btn,children:"Add contact"})]})})]})})),ct=n(17),at=n.n(ct),rt=function(t){var e=t.contacts,n=t.onDeleteContact,c=t.isLoading,a=Object(q.c)();return Object(r.useEffect)((function(){a(K())}),[a]),Object(z.jsxs)(z.Fragment,{children:[c&&Object(z.jsx)(R,{}),Object(z.jsx)("ul",{className:at.a.list,children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(z.jsxs)("li",{className:at.a.item,children:[Object(z.jsx)("span",{children:c}),Object(z.jsx)("span",{children:a}),Object(z.jsx)("button",{className:at.a.btn,type:"button",id:e,onClick:function(){return n(e)},children:"Delete"})]},e)}))})]})};rt.defaultProps={contacts:[]};var ot=Object(q.b)((function(t){return{contacts:Y.getVisibleContacts(t),isLoading:Y.getLoading(t)}}),(function(t){return{fetchContacts:function(){return t(K())},onDeleteContact:function(e){return t(H(e))}}}))(rt),it=n(2),ut=n.n(it),st=n(35),bt=n.n(st),lt=function(t){var e=t.value,n=t.onChange;return Object(z.jsxs)("div",{children:[Object(z.jsx)("p",{children:" Find contacts by name"}),Object(z.jsx)("input",{type:"text",className:bt.a.input,value:e,onChange:n})]})};lt.defaultProps={value:" "},lt.propsTypes={value:ut.a.string,onChange:ut.a.isPequired};var jt=Object(q.b)((function(t){return{value:Y.getFilter(t)}}),(function(t){return{onChange:function(e){return t(v(e.target.value))}}}))(lt);n(93);function dt(){return Object(z.jsxs)("div",{className:"App",children:[Object(z.jsx)(E,{children:"Phonebook"}),Object(z.jsx)(nt,{}),Object(z.jsx)(jt,{}),Object(z.jsx)(ot,{})]})}dt.defaultProps={totalContactsCount:null,visibleContactsCount:null};var ft=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,95)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),r(t),o(t)}))};u.a.render(Object(z.jsx)(o.a.StrictMode,{children:Object(z.jsx)(q.a,{store:P,children:Object(z.jsx)(dt,{})})}),document.getElementById("root")),ft()}},[[94,1,2]]]);
//# sourceMappingURL=main.1a54476e.chunk.js.map