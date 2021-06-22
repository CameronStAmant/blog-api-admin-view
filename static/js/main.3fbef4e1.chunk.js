(this["webpackJsonpadmin-view"]=this["webpackJsonpadmin-view"]||[]).push([[0],{28:function(e,t,r){},29:function(e,t,r){},38:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r.n(n),o=r(20),c=r.n(o),a=(r(28),r(2)),i=r(5),d=r(3),u=(r(29),r(6)),l=r.n(u),b=r(10),j=r(0),h=function(e){return Object(j.jsx)("div",{className:"display: grid grid-cols-3 col-span-3 row-start-1 bg-green-100 py-2",children:Object(j.jsxs)("ul",{className:"display: grid col-start-1 col-span-full grid-flow-col place-items-center text-center",children:[Object(j.jsx)("li",{className:"border-solid border-4 border-green-200 rounded-md bg-green-200 hover:bg-green-300 hover:border-green-300 w-5/6 active:bg-green-400 active:border-green-400 shadow-sm",children:Object(j.jsx)(i.c,{to:"/",className:"display: block",children:"Home"})}),!e.authState&&Object(j.jsx)("li",{className:"sm:col-start-3 lg:col-start-4 bordber-solid border-4 border-green-200 rounded-md bg-green-200 hover:bg-green-300 hover:border-green-300 w-5/6 active:bg-green-400 active:border-green-400 shadow-sm",children:Object(j.jsx)(i.c,{to:"/login",className:"display: block",children:"Login"})}),e.authState&&Object(j.jsx)("li",{className:"sm:col-start-4 lg:col-start-5 border-solid border-4 border-green-200 rounded-md bg-green-200 hover:bg-green-300 hover:border-green-300 w-5/6 active:bg-green-400 active:border-green-400 shadow-sm",children:Object(j.jsx)(i.c,{to:"/logout",className:"display: block",children:"Log out"})})]})})},p=function(){return Object(j.jsxs)("ul",{className:"display: grid grid-cols-3 text-center py-2 row-start-3 col-span-full",children:[Object(j.jsx)("li",{children:"Privacy"}),Object(j.jsx)("li",{children:"About"}),Object(j.jsx)("li",{children:"Contact us"})]})},m=function(e){return Object(j.jsxs)("div",{className:"display: grid grid-cols-3 grid-rows-layout min-h-screen grid-flow-col p-0 m-0 list-none",children:[Object(j.jsx)(h,{authState:e.authState}),e.children,Object(j.jsx)(p,{})]})},g=function(e){var t=Object(n.useState)(null),r=Object(a.a)(t,2),s=r[0],o=r[1],c=Object(n.useState)(!1),u=Object(a.a)(c,2),h=u[0],p=u[1],g=(Object(d.g)(),function(e,t){e.preventDefault();var r={method:"PUT",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("user")},body:JSON.stringify({title:t.title,body:t.body,published:!t.published})};fetch("https://serene-waters-04286.herokuapp.com/posts/"+t.id,r).then((function(e){p(!h)}))});return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(l.a.mark((function e(){var t,r,n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://serene-waters-04286.herokuapp.com/posts",{mode:"cors"});case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,n=r.posts,s=n.map((function(e){return Object(j.jsxs)("li",{className:"display: grid box-border border-2 shadow-sm rounded-md gap-4 border-green-200 mx-2 auto-rows-min",children:[Object(j.jsx)(i.b,{to:"/posts/"+e.id,children:Object(j.jsx)("p",{className:"m-14 text-center text-xl font-semibold",children:e.title})}),Object(j.jsxs)("div",{className:"display: grid mb-8",children:[Object(j.jsxs)("p",{children:["Published: ",e.published.toString()]}),Object(j.jsx)("form",{onSubmit:function(t){return g(t,e)},children:Object(j.jsx)("input",{className:"border-solid border-4 border-green-200 rounded-md bg-green-200 hover:bg-green-300 hover:border-green-300 w-2/6 active:bg-green-400 active:border-green-400 shadow-sm",type:"submit",id:"togglePublish",value:"Toggle"})})]})]},e.title)})),o(s);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[h]),Object(j.jsx)(m,{authState:e.authState,children:Object(j.jsxs)("div",{className:"display: grid grid-rows-home auto-rows-min row-start-2 col-span-full",children:[Object(j.jsxs)("div",{className:"row-start-1 place-self-center min-h-px col-span-full text-2xl font-semibold text-center",children:[Object(j.jsx)("h2",{children:"Welcome to the blog admin site!"}),Object(j.jsx)(i.b,{to:"/posts/new",children:Object(j.jsx)("button",{type:"button",className:"border-solid border-4 border-green-200 rounded-md bg-green-200 hover:bg-green-300 hover:border-green-300 w-2/6 active:bg-green-400 active:border-green-400 shadow-sm",children:"New Post"})})]}),Object(j.jsx)("ul",{className:"display: grid grid-flow-row md:grid-cols-2 row-start-2 lg:grid-cols-3 col-span-full gap-y-4 h-full text-center auto-rows-min",children:s||""})]})})};var f=function(e){return Object(j.jsx)("div",{children:Object(j.jsx)(g,{authState:e.authState})})},O=function(e){var t=Object(n.useState)(null),r=Object(a.a)(t,2),s=r[0],o=r[1],c=Object(n.useState)(null),i=Object(a.a)(c,2),u=i[0],l=i[1],b=Object(d.g)(),h=Object(n.useState)(null),p=Object(a.a)(h,2),g=p[0],f=p[1];return Object(j.jsx)(m,{children:Object(j.jsx)("div",{className:"display: grid col-start-1 grid-rows-6 col-span-full row-start-2 place-content-center",children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault();var r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:s,password:u,adminSite:!0})};fetch("https://serene-waters-04286.herokuapp.com/login",r).then((function(e){return e.json()})).then((function(t){void 0!==t.token?(window.localStorage.setItem("user",t.token),e.authRefresh(!0),b.push("/")):f(t.message)}))},className:"text-center row-start-3",children:[Object(j.jsx)("label",{htmlFor:"username-field",children:"Username:"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:" input w-48 border-2 border-green-200 rounded-md  focus:border-green-500",type:"text",id:"username-field",name:"username",autoComplete:"on",value:s||"",onChange:function(e){return o(e.target.value)},required:!0}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{htmlFor:"password-field",children:"Password:"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:" input w-48 border-2 border-green-200 rounded-md  focus:border-green-500",type:"password",id:"password-field",name:"password",autoComplete:"on",value:u||"",onChange:function(e){return l(e.target.value)},required:!0}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:" bg-green-100 rounded-md mt-2 w-48 hover:bg-green-200 cursor-pointer",type:"submit",id:"loginButton",value:"Login"}),g&&Object(j.jsx)("p",{className:"row-start-4",children:g})]})})})},x=function(e){return Object(n.useEffect)((function(){e.authRefresh(!0),window.localStorage.removeItem("user")}),[]),Object(j.jsx)("div",{children:!e.authState&&Object(j.jsx)(d.a,{to:"/login"})})},v=r(23),w=r(22),y=r(37).DateTime,S=function(e){var t=Object(n.useState)([]),r=Object(a.a)(t,2),s=r[0],o=r[1],c=Object(n.useState)(!1),d=Object(a.a)(c,2),u=d[0],h=d[1],p=function(t,r){t.preventDefault();var n={method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("user")}};fetch("https://serene-waters-04286.herokuapp.com/posts/"+e.postid+"/comments/"+r,n).then((function(){o([]),h(!u)}))},m=function(){var t=Object(b.a)(l.a.mark((function t(){var r,n,s,c,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://serene-waters-04286.herokuapp.com/posts/"+e.postid+"/comments",{mode:"cors"});case 2:return r=t.sent,t.next=5,r.json();case 5:n=t.sent,s=Object(w.a)(n.comments);try{for(a=function(){var t,r=c.value;t=Object(j.jsxs)("div",{className:"box-border border-solid m-2 shadow-md p-1 display: grid gap-2 grid-rows-2 grid-cols-2 auto-rows-min-content justify-self-stretch border-2 border-green-200 rounded-md ",id:r._id,children:[Object(j.jsx)("h4",{className:"justify-self-start",children:r.author.username}),Object(j.jsx)("p",{className:"justify-self-end",children:y.fromISO(r.timestamp).toLocaleString(y.DATETIME_MED)}),Object(j.jsx)("p",{className:"row-start-2 col-span-full",children:r.body}),Object(j.jsxs)("div",{className:"justify-self-end space-x-3 col-start-2",children:[Object(j.jsx)(i.b,{to:"/posts/"+e.postid+"/comments/"+r._id+"/edit",children:Object(j.jsx)("button",{type:"button",className:"border-solid border-4 border-green-200 rounded-md bg-green-200 hover:bg-green-300 hover:border-green-300 w-auto active:bg-green-400 active:border-green-400 shadow-sm",children:"Edit"})}),Object(j.jsx)("button",{type:"button",className:"border-solid border-4 border-green-200 rounded-md bg-green-200 hover:bg-green-300 hover:border-green-300 w-auto active:bg-green-400 active:border-green-400 shadow-sm",onClick:function(e){return p(e,r._id)},children:"Delete"})]})]},r._id),o((function(e){return[].concat(Object(v.a)(e),[t])}))},s.s();!(c=s.n()).done;)a()}catch(d){s.e(d)}finally{s.f()}case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){m()}),[u]),Object(j.jsx)("div",{className:"justify-self-stretch my-14",children:s})},N=function(e){var t=Object(n.useState)(null),r=Object(a.a)(t,2),s=r[0],o=r[1],c=Object(d.i)().id,u=Object(d.g)();return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(l.a.mark((function e(){var t,r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://serene-waters-04286.herokuapp.com/posts/"+c,{mode:"cors"});case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,n=r.post,o(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(j.jsx)(m,{authState:e.authState,children:Object(j.jsxs)("div",{className:"display: grid grid-rows-post auto-rows-auto row-start-2 col-span-full",children:[Object(j.jsxs)("div",{className:"display: grid grid-rows-postTitle",children:[Object(j.jsxs)("div",{className:"row-start-1 place-self-center col-span-full text-2xl font-semibold text-center display: grid",children:[Object(j.jsx)("h2",{children:s?s.title:""}),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"space-x-3",children:[Object(j.jsx)(i.b,{to:Object(d.h)().pathname+"/edit",children:Object(j.jsx)("button",{type:"button",className:"border-solid border-4 border-green-200 rounded-md bg-green-200 hover:bg-green-300 hover:border-green-300 w-auto active:bg-green-400 active:border-green-400 shadow-sm",children:"Edit"})}),Object(j.jsx)("button",{type:"button",className:"border-solid border-4 border-green-200 rounded-md bg-green-200 hover:bg-green-300 hover:border-green-300 w-auto active:bg-green-400 active:border-green-400 shadow-sm",onClick:function(e){e.preventDefault();var t={method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("user")},body:JSON.stringify({post:c})};fetch("https://serene-waters-04286.herokuapp.com/posts/"+c,t).then((function(){u.push("/")}))},children:"Delete"})]})})]}),Object(j.jsxs)("p",{className:"mx-2 px-1",children:[" ",s?s.body:""]})]}),Object(j.jsx)(S,{postid:c})]})})},k=function(e){var t=Object(n.useState)(null),r=Object(a.a)(t,2),s=r[0],o=r[1],c=Object(n.useState)(null),i=Object(a.a)(c,2),u=i[0],h=i[1],p=Object(n.useState)(!1),g=Object(a.a)(p,2),f=g[0],O=g[1],x=Object(n.useState)(null),v=Object(a.a)(x,2),w=v[0],y=v[1],S=Object(d.i)().id;return Object(n.useEffect)((function(){void 0===S||function(){var e=Object(b.a)(l.a.mark((function e(){var t,r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://serene-waters-04286.herokuapp.com/posts/"+S+"/edit",{mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("user")}});case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,n=r.post,o(n.title),h(n.body);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[S]),Object(j.jsxs)(m,{authState:e.authState,children:[null!==w&&Object(j.jsx)(d.a,{to:w}),!0===f&&null===w&&Object(j.jsx)(d.a,{from:"/posts/:id/edit",to:"/posts/"+S}),Object(j.jsx)("div",{className:"justify-self-stretch col-span-full row-start-2 h-full",children:Object(j.jsxs)("form",{className:"mt-14 mx-2 text-center",onSubmit:function(t){if(t.preventDefault(),void 0===S){var r={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("user")},body:JSON.stringify({author:e.userId,title:s,body:u})};fetch("https://serene-waters-04286.herokuapp.com/posts/",r).then((function(e){return e.json()})).then((function(e){return y(e.url)})).catch((function(e){console.log("The fetch error is: "+e)}))}else{var n={method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("user")},body:JSON.stringify({title:s,body:u})};fetch("https://serene-waters-04286.herokuapp.com/posts/"+S,n).then((function(){return O(!0)}))}},children:[Object(j.jsx)("label",{children:"Title: "}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"box-border border-2 shadow-sm rounded-md gap-4 border-green-200 auto-rows-min w-full",type:"text",name:"title",value:s||"",onChange:function(e){return o(e.target.value)},required:!0}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{children:"Body: "}),Object(j.jsx)("br",{}),Object(j.jsx)("textarea",{className:"box-border border-2 shadow-sm rounded-md gap-4 border-green-200 auto-rows-min w-full h-screen",rows:"20",name:"body",value:u||"",onChange:function(e){return h(e.target.value)},required:!0}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"submit",className:"border-solid border-4 border-green-200 rounded-md bg-green-200 hover:bg-green-300 hover:border-green-300 w-2/6 active:bg-green-400 active:border-green-400 shadow-sm",value:"Submit"})]})})]})},T=function(e){var t=Object(n.useState)(null),r=Object(a.a)(t,2),s=r[0],o=r[1],c=Object(d.i)(),i=c.id,u=c.commentId,h=Object(d.g)();return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(l.a.mark((function e(){var t,r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://serene-waters-04286.herokuapp.com/posts/"+i+"/comments/"+u+"/edit",{mode:"cors",headers:{Authorization:"Bearer "+localStorage.getItem("user")}});case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,n=r.comment,o(n.body);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i,u]),Object(j.jsx)(m,{authState:e.authState,children:Object(j.jsx)("div",{className:"justify-self-stretch gap-4 col-span-full row-start-2",children:Object(j.jsxs)("form",{className:"mt-14 mx-2 text-center h-auto",onSubmit:function(e){e.preventDefault();var t={method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("user")},body:JSON.stringify({body:s})};fetch("https://serene-waters-04286.herokuapp.com/posts/"+i+"/comments/"+u,t).then((function(){h.push("/posts/"+i)}))},children:[Object(j.jsx)("label",{children:"Body: "}),Object(j.jsx)("br",{}),Object(j.jsx)("textarea",{className:"box-border border-2 shadow-sm rounded-md gap-4 border-green-200 auto-rows-min w-full",rows:"20",name:"body",value:s||"",onChange:function(e){return o(e.target.value)},required:!0}),Object(j.jsx)("input",{type:"submit",id:"commentSubmit",className:"border-solid border-4 border-green-200 rounded-md bg-green-200 hover:bg-green-300 hover:border-green-300 w-2/6 active:bg-green-400 active:border-green-400 shadow-sm",value:"Submit"})]})})})},I=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),r=t[0],s=t[1],o=Object(n.useState)(null),c=Object(a.a)(o,2),u=c[0],l=c[1],b=Object(n.useState)(!1),h=Object(a.a)(b,2),p=h[0],m=h[1];return Object(n.useEffect)((function(){!function(){var e={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("user")}};localStorage.getItem("user")?fetch("https://serene-waters-04286.herokuapp.com/auth",e).then((function(e){return e.json()})).then((function(e){s(e.response),l(e.userId),m(!1)})):(s(!1),l(null),m(!1))}()}),[p]),Object(j.jsxs)(i.a,{forceRefresh:!0,children:[!r&&!localStorage.getItem("user")&&Object(j.jsx)("div",{children:Object(j.jsxs)(d.d,{children:[Object(j.jsx)(d.b,{exact:!0,path:"/",render:function(){return Object(j.jsx)(O,{authRefresh:function(e){return m(e)}})}}),Object(j.jsx)(d.b,{exact:!0,path:"/login",render:function(){return Object(j.jsx)(O,{authRefresh:function(e){return m(e)}})}}),Object(j.jsx)(d.a,{to:"/login"})]})}),r&&localStorage.getItem("user")&&Object(j.jsxs)(d.d,{children:[Object(j.jsx)(d.b,{exact:!0,path:"/",render:function(){return Object(j.jsx)(f,{authState:r})}}),Object(j.jsx)(d.b,{exact:!0,path:"/login",render:function(){return Object(j.jsx)(O,{authRefresh:function(e){return m(e)}})}}),Object(j.jsx)(d.b,{exact:!0,path:"/logout",render:function(){return Object(j.jsx)(x,{authState:r,authRefresh:function(e){return m(e)}})}}),Object(j.jsx)(d.b,{exact:!0,path:"/posts/new",render:function(){return Object(j.jsx)(k,{authState:r,userId:u})}}),Object(j.jsx)(d.b,{exact:!0,path:"/posts/:id",render:function(){return Object(j.jsx)(N,{authState:r})}}),Object(j.jsx)(d.b,{exact:!0,path:"/posts/:id/edit",render:function(){return Object(j.jsx)(k,{authState:r})}}),Object(j.jsx)(d.b,{exact:!0,path:"/posts/:id/comments/:commentId/edit",render:function(){return Object(j.jsx)(T,{authState:r})}})]})]})};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.3fbef4e1.chunk.js.map