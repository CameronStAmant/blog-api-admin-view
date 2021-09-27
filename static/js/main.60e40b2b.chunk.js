(this["webpackJsonpadmin-view"]=this["webpackJsonpadmin-view"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(19),a=n.n(c),o=(n(28),n(2)),l=n(4),i=n(3),u=(n(29),n(6)),d=n.n(u),j=n(10),b=n(0);var h=function(e){return Object(b.jsx)(l.c,{to:e.link,className:"display: block",children:Object(b.jsx)("li",{className:"sm:col-start-3 lg:col-start-4 border-solid border-4 border-cyan rounded-md bg-cyan hover:bg-hover-cyan hover:border-hover-cyan active:bg-cyan active:border-cyan shadow-sm px-md text-base",children:e.text})})},m=function(e){return Object(b.jsx)("div",{className:"grid grid-cols-3 row-start-1 bg-dark-cyan py-2 text-white text-center text-lg mb-6 bg-gradient-to-t from-dark-cyan to-dark-green",children:Object(b.jsxs)("ul",{className:"flex justify-between space-x-3 col-span-full grid-flow-col place-items-center mx-4 p-smd",children:[Object(b.jsx)(h,{link:"/",text:"Home"}),Object(b.jsxs)("div",{children:[!e.authState&&Object(b.jsx)(h,{link:"/login",text:"Login"}),e.authState&&Object(b.jsx)(h,{link:"/logout",text:"Log out"})]})]})})},x=function(){return Object(b.jsxs)("ul",{className:"flex text-center content-evenly mx-4 pt-lg row-start-3 col-span-full",children:[Object(b.jsx)("li",{className:"flex-1",children:"Privacy"}),Object(b.jsx)("li",{className:"flex-1",children:"About"}),Object(b.jsx)("li",{className:"flex-1",children:"Contact us"})]})},f=function(e){return Object(b.jsx)("div",{className:"bg-gray-600 min-h-screen",children:Object(b.jsxs)("div",{className:"grid grid-rows-layout p-0 m-0 list-none max-w-screen-xl mx-auto min-h-screen bg-gray-100",children:[Object(b.jsx)(m,{authState:e.authState}),e.children,Object(b.jsx)(x,{})]})})},p="https://serene-waters-04286.herokuapp.com";var O=function(e){return Object(b.jsx)(l.b,{to:"/posts/"+e.post.id,children:Object(b.jsxs)("div",{className:"grid auto-rows-post filter drop-shadow-lg",children:[Object(b.jsx)("div",{className:"overflow-hidden h-postCoverPhoto",children:Object(b.jsx)("img",{className:"w-full rounded-tl-md rounded-tr-md",src:e.post?p+"/uploads/"+e.post.coverPhoto:"",alt:"Post Cover"})}),Object(b.jsx)("div",{className:"text-2xl font-semibold flex-grow px-md rounded-bl-md rounded-br-md bg-white -mt-1 pb-1 text-cyan",children:e.post.title})]})})};var v=function(e){return Object(b.jsx)("button",{onClick:e.onClick,className:"border-solid border-4 rounded-md shadow-sm  px-md text-base text-white ".concat("red"===e.color?"border-dark-red bg-dark-red hover:bg-hover-dark-red hover:border-hover-dark-red active:bg-dark-red active:border-dark-red":"border-cyan bg-cyan hover:bg-hover-cyan hover:border-hover-cyan active:bg-cyan active:border-cyan"," ").concat(e.addonClasses),type:e.type?e.type:"button",children:e.value})},g=function(e){var t=Object(r.useState)(null),n=Object(o.a)(t,2),s=n[0],c=n[1],a=Object(r.useState)(!1),i=Object(o.a)(a,2),u=i[0],h=i[1],m=function(e,t){e.preventDefault();var n=new FormData;n.append("title",t.title),n.append("body",t.body),n.append("published",!t.published),n.append("coverPhoto",t.coverPhoto);var r={method:"PUT",mode:"cors",headers:{Authorization:"Bearer "+localStorage.getItem("user")},body:n};fetch(p+"/posts/"+t.id,r).then((function(e){h(!u)}))};return Object(r.useEffect)((function(){(function(){var e=Object(j.a)(d.a.mark((function e(){var t,n,r,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p+"/posts",{mode:"cors"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r=n.posts,s=r.map((function(e){return Object(b.jsxs)("li",{className:"box-border shadow-sm rounded-md h-full",children:[Object(b.jsx)(O,{post:e}),Object(b.jsxs)("div",{className:"bg-white justify-end px-4 pt-1 -mt-1 rounded-br-md relative",children:["true"===e.published.toString()&&Object(b.jsx)(v,{value:"Published",color:"green",addonClasses:"absolute right-5 -top-8",onClick:function(t){return m(t,e)}}),"false"===e.published.toString()&&Object(b.jsx)(v,{value:"Unpublished",color:"red",addonClasses:"absolute right-5 -top-8",onClick:function(t){return m(t,e)}})]})]},e.title)})),c(s);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),Object(b.jsx)(f,{authState:e.authState,children:Object(b.jsxs)("div",{className:"grid grid-rows-home row-start-2 mx-4",children:[Object(b.jsxs)("div",{className:"flex flex-col text-2xl font-semibold text-center",children:[Object(b.jsx)("h2",{className:"place-self-center text-3xl text-dark-cyan font-normal",children:"Welcome to the blog!"}),Object(b.jsx)("div",{children:Object(b.jsx)(l.b,{to:"/posts/new",children:Object(b.jsx)(v,{value:"New Post",color:"green"})})})]}),Object(b.jsx)("ul",{className:"grid md:grid-cols-2 auto-rows-min lg:grid-cols-3 gap-4",children:s||""})]})})};var y=function(e){return Object(b.jsx)("div",{children:Object(b.jsx)(g,{authState:e.authState})})};var w=function(e){return Object(b.jsx)("input",{className:"\n      border-2\n      box-border\n      border-cyan\n      focus:border-cyan\n      shadow-sm\n      block\n      mb-2\n      ".concat(e.addonClasses),type:e.type,id:e.id,name:e.name,autoComplete:"on",value:e.value,onChange:e.onChange,required:!0})},S=function(e){var t=Object(r.useState)(null),n=Object(o.a)(t,2),s=n[0],c=n[1],a=Object(r.useState)(null),l=Object(o.a)(a,2),u=l[0],d=l[1],j=Object(i.g)(),h=Object(r.useState)(null),m=Object(o.a)(h,2),x=m[0],O=m[1];return Object(b.jsx)(f,{children:Object(b.jsx)("div",{className:"grid place-content-center",children:Object(b.jsxs)("form",{className:"text-center",children:[Object(b.jsx)("label",{htmlFor:"username-field",children:"Username"}),Object(b.jsx)(w,{type:"text",id:"username-field",name:"username",value:s||"",onChange:function(e){return c(e.target.value)},addonClasses:"rounded-md m-auto"}),Object(b.jsx)("label",{htmlFor:"password-field",children:"Password"}),Object(b.jsx)(w,{type:"password",id:"password-field",name:"password",value:u||"",onChange:function(e){return d(e.target.value)},addonClasses:"rounded-md m-auto"}),Object(b.jsx)(v,{value:"Login",color:"green",type:"submit",onClick:function(t){t.preventDefault();var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:s,password:u,adminSite:!0})};fetch(p+"/login",n).then((function(e){return e.json()})).then((function(t){void 0!==t.token?(window.localStorage.setItem("user",t.token),e.authRefresh(!0),j.push("/")):O(t.message)}))}}),x&&Object(b.jsx)("p",{className:"row-start-4",children:x})]})})})},C=function(e){return Object(r.useEffect)((function(){e.authRefresh(!0),window.localStorage.removeItem("user")}),[]),Object(b.jsx)("div",{children:!e.authState&&Object(b.jsx)(i.a,{to:"/login"})})},N=n(23),k=n(22),I=n(37).DateTime,P=function(e){var t=function(t,r){t.preventDefault();var s={method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("user")}};fetch(p+"/posts/"+e.postid+"/comments/"+r,s).then((function(){n()}))},n=function(){var n=Object(j.a)(d.a.mark((function n(){var r,s,c,a,o,i;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(p+"/posts/"+e.postid+"/comments",{mode:"cors"});case 2:return r=n.sent,n.next=5,r.json();case 5:s=n.sent,c=[],a=Object(k.a)(s.comments);try{for(i=function(){var n,r=o.value;n=Object(b.jsxs)("div",{className:"box-border border-solid shadow-md p-smd grid gap-2 auto-rows-min border-2 border-cyan rounded-md mb-2",id:r._id,children:[Object(b.jsx)("h4",{className:"text-cyan font-bold",children:r.author.username}),Object(b.jsx)("p",{className:"italic text-sm",children:I.fromISO(r.timestamp).toLocaleString(I.DATETIME_MED)}),Object(b.jsx)("p",{className:"row-start-2",children:r.body}),Object(b.jsxs)("div",{className:"space-x-3",children:[Object(b.jsx)(l.b,{to:"/posts/"+e.postid+"/comments/"+r._id+"/edit",children:Object(b.jsx)(v,{value:"Edit",color:"green"})}),Object(b.jsx)(v,{value:"Delete",color:"green",onClick:function(e){return t(e,r._id)}})]})]},r._id),c=[].concat(Object(N.a)(c),[n])},a.s();!(o=a.n()).done;)i()}catch(u){a.e(u)}finally{a.f()}e.setComments(c);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(r.useEffect)((function(){n()}),[e.loadComments]),Object(b.jsx)("div",{className:"justify-self-stretch my-14",children:e.comments})};var T=function(e){return Object(b.jsx)("textarea",{className:"box-border border-2 shadow-sm rounded-md gap-4 border-cyan auto-rows-min w-full block mb-2",rows:"12",name:"body",value:e.value?e.value:"",onChange:e.onChange,required:!0})},E=function(e){var t=Object(r.useState)(null),n=Object(o.a)(t,2),s=n[0],c=n[1],a=Object(i.i)(),u=a.id,h=a.commentId,m=Object(i.g)(),x=Object(r.useState)(null),f=Object(o.a)(x,2),O=(f[0],f[1],function(){var t=Object(j.a)(d.a.mark((function t(n){var r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),void 0===h){t.next=6;break}r={method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("user")},body:JSON.stringify({body:s})},fetch(p+"/posts/"+u+"/comments/"+h,r).then((function(){m.push("/posts/"+u)})),t.next=11;break;case 6:return c={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("user")},body:JSON.stringify({author:e.userId,body:s})},t.next=9,fetch(p+"/posts/"+u+"/comments",c);case 9:e.setComments(),e.loadComments();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());return Object(r.useEffect)((function(){void 0!==h?function(){var e=Object(j.a)(d.a.mark((function e(){var t,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p+"/posts/"+u+"/comments/"+h+"/edit",{mode:"cors",headers:{Authorization:"Bearer "+localStorage.getItem("user")}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r=n.comment,c(r.body);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()():c(null)}),[u,h,e.comments]),Object(b.jsx)("div",{className:"justify-self-stretch gap-4 col-span-full row-start-2",children:Object(b.jsxs)("form",{className:"mt-14 text-center h-auto",children:[Object(b.jsx)("label",{children:"Comment"}),Object(b.jsx)("br",{}),Object(b.jsx)(T,{name:"body",value:s,onChange:function(e){return c(e.target.value)}}),Object(b.jsxs)("div",{className:"space-x-3",children:[h&&Object(b.jsx)(l.b,{to:"/posts/"+u,children:Object(b.jsx)(v,{value:"Cancel",color:"green"})}),Object(b.jsx)(v,{value:"Submit",color:"green",onClick:O})]})]})})},D=function(e){var t=Object(r.useState)(null),n=Object(o.a)(t,2),s=n[0],c=n[1],a=Object(i.i)().id,u=Object(i.g)(),h=Object(r.useState)(!1),m=Object(o.a)(h,2),x=m[0],O=m[1],g=Object(r.useState)([]),y=Object(o.a)(g,2),w=y[0],S=y[1];return Object(r.useEffect)((function(){(function(){var e=Object(j.a)(d.a.mark((function e(){var t,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p+"/posts/"+a,{mode:"cors"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r=n.post,c(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),Object(b.jsx)(f,{authState:e.authState,children:Object(b.jsxs)("div",{className:"display: grid auto-rows-min auto-rows-auto row-start-2 col-span-full mx-4",children:[Object(b.jsxs)("div",{className:"display: grid grid-rows-postTitle",children:[Object(b.jsxs)("div",{className:"row-start-1 place-self-center col-span-full text-2xl text-center display: grid",children:[Object(b.jsx)("h2",{className:"row-start-1 place-self-center text-3xl text-dark-cyan",children:s?s.title:""}),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"space-x-3",children:[Object(b.jsx)(l.b,{to:Object(i.h)().pathname+"/edit",children:Object(b.jsx)(v,{value:"Edit",color:"green"})}),Object(b.jsx)(v,{value:"Delete",color:"green",onClick:function(e){e.preventDefault();var t={method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("user")},body:JSON.stringify({post:a})};fetch(p+"/posts/"+a,t).then((function(){u.push("/")}))}})]})})]}),Object(b.jsx)("div",{className:"overflow-hidden h-postCoverPhoto rounded-md",children:Object(b.jsx)("img",{src:s?p+"/uploads/"+s.coverPhoto:"",alt:"Post Cover"})}),Object(b.jsxs)("p",{className:"mx-2 p-smd",children:[" ",s?s.body:""]})]}),Object(b.jsx)(E,{authState:e.authState,userId:e.userId,loadComments:function(){return O(!x)},setComments:function(){return S([])},comments:w}),Object(b.jsx)(P,{postid:a,loadComments:x,setComments:function(e){return S(e)},comments:w})]})})},A=function(e){var t=Object(r.useState)(null),n=Object(o.a)(t,2),s=n[0],c=n[1],a=Object(r.useState)(null),u=Object(o.a)(a,2),h=u[0],m=u[1],x=Object(r.useState)(null),O=Object(o.a)(x,2),g=O[0],y=O[1],S=Object(r.useState)(null),C=Object(o.a)(S,2),N=C[0],k=C[1],I=Object(r.useState)(!1),P=Object(o.a)(I,2),E=P[0],D=P[1],A=Object(r.useState)(null),B=Object(o.a)(A,2),z=B[0],R=B[1],L=Object(i.i)().id,U=function(e){e.preventDefault(),null===g?(m(e.target.files[0]),y(URL.createObjectURL(e.target.files[0]))):y(null)};return Object(r.useEffect)((function(){void 0===L||function(){var e=Object(j.a)(d.a.mark((function e(){var t,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p+"/posts/"+L+"/edit",{mode:"cors",headers:{Authorization:"Bearer "+localStorage.getItem("user")}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r=n.post,c(r.title),m(r.coverPhoto),y(p+"/uploads/"+r.coverPhoto),k(r.body);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[L]),Object(b.jsxs)(f,{authState:e.authState,children:[null!==z&&Object(b.jsx)(i.a,{to:z}),!0===E&&null===z&&Object(b.jsx)(i.a,{from:"/posts/:id/edit",to:"/posts/"+L}),Object(b.jsx)("div",{className:"justify-self-stretch col-span-full row-start-2 h-full",children:Object(b.jsxs)("form",{className:"mx-4 text-center",children:[Object(b.jsx)("label",{children:"Title"}),Object(b.jsx)(w,{type:"text",name:"title",value:s||"",onChange:function(e){return c(e.target.value)},addonClasses:"w-full rounded-md"}),Object(b.jsx)("label",{children:"Cover photo"}),g&&Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"overflow-hidden h-postCoverPhoto mb-2",children:Object(b.jsx)("img",{src:g,alt:"Cover"})}),Object(b.jsx)(v,{value:"Remove Image",color:"green",onClick:function(e){return U(e)}})]}),Object(b.jsx)("div",{className:"mb-2",children:null===g&&Object(b.jsx)(w,{type:"file",name:"coverPhoto",id:"coverPhoto",onChange:function(e){return U(e)},addonClasses:"border-none shadow-none m-auto"})}),Object(b.jsx)("label",{children:"Body"}),Object(b.jsx)(T,{value:N||"",onChange:function(e){return k(e.target.value)}}),Object(b.jsxs)("div",{className:"space-x-3",children:[void 0===L&&Object(b.jsx)(l.b,{to:"/",children:Object(b.jsx)(v,{value:"Cancel",color:"green"})}),void 0!==L&&Object(b.jsx)(l.b,{to:"/posts/"+L,children:Object(b.jsx)(v,{value:"Cancel",color:"green"})}),Object(b.jsx)(v,{value:"Submit",color:"green",onClick:function(t){if(t.preventDefault(),void 0===L){var n=new FormData;n.append("author",e.userId),n.append("title",s),n.append("body",N),n.append("coverPhoto",h);var r={method:"POST",headers:{Authorization:"Bearer "+localStorage.getItem("user")},body:n};fetch(p+"/posts/",r).then((function(e){return e.json()})).then((function(e){return R(e.url)})).catch((function(e){console.log("The fetch error is: "+e)}))}else{var c=new FormData;c.append("title",s),c.append("body",N),c.append("coverPhoto",h);var a={method:"PUT",headers:{Authorization:"Bearer "+localStorage.getItem("user")},body:c};fetch(p+"/posts/"+L,a).then((function(){return D(!0)}))}}})]})]})})]})},B=function(e){return Object(b.jsx)(f,{authState:e.authState,children:Object(b.jsx)("div",{className:"mx-4",children:Object(b.jsx)(E,{authState:e.authState,userId:e.userId,loadComments:function(){return e.setLoadComments(!e.loadComments)},setComments:function(){return e.setComments([])},comments:e.comments})})})},z=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(r.useState)(null),a=Object(o.a)(c,2),u=a[0],d=a[1],j=Object(r.useState)(!1),h=Object(o.a)(j,2),m=h[0],x=h[1];return Object(r.useEffect)((function(){!function(){var e={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("user")}};localStorage.getItem("user")?fetch(p+"/auth",e).then((function(e){return e.json()})).then((function(e){s(e.response),d(e.userId),x(!1)})):(s(!1),d(null),x(!1))}()}),[m]),Object(b.jsxs)(l.a,{forceRefresh:!0,children:[!n&&!localStorage.getItem("user")&&Object(b.jsx)("div",{children:Object(b.jsxs)(i.d,{children:[Object(b.jsx)(i.b,{exact:!0,path:"/",render:function(){return Object(b.jsx)(S,{authRefresh:function(e){return x(e)}})}}),Object(b.jsx)(i.b,{exact:!0,path:"/login",render:function(){return Object(b.jsx)(S,{authRefresh:function(e){return x(e)}})}}),Object(b.jsx)(i.a,{to:"/login"})]})}),n&&localStorage.getItem("user")&&Object(b.jsxs)(i.d,{children:[Object(b.jsx)(i.b,{exact:!0,path:"/",render:function(){return Object(b.jsx)(y,{authState:n})}}),Object(b.jsx)(i.b,{exact:!0,path:"/login",render:function(){return Object(b.jsx)(S,{authRefresh:function(e){return x(e)}})}}),Object(b.jsx)(i.b,{exact:!0,path:"/logout",render:function(){return Object(b.jsx)(C,{authState:n,authRefresh:function(e){return x(e)}})}}),Object(b.jsx)(i.b,{exact:!0,path:"/posts/new",render:function(){return Object(b.jsx)(A,{authState:n,userId:u})}}),Object(b.jsx)(i.b,{exact:!0,path:"/posts/:id",render:function(){return Object(b.jsx)(D,{authState:n,userId:u})}}),Object(b.jsx)(i.b,{exact:!0,path:"/posts/:id/edit",render:function(){return Object(b.jsx)(A,{authState:n})}}),Object(b.jsx)(i.b,{exact:!0,path:"/posts/:id/comments/:commentId/edit",render:function(){return Object(b.jsx)(B,{authState:n})}})]})]})};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(z,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.60e40b2b.chunk.js.map