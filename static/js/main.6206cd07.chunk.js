(this["webpackJsonpadmin-view"]=this["webpackJsonpadmin-view"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(20),o=n.n(s),a=(n(28),n(2)),i=n(5),u=n(3),j=(n(29),n(6)),l=n.n(j),b=n(10),h=(n(31),n(32),n(0)),d=function(e){return Object(h.jsx)("div",{className:"header",children:Object(h.jsxs)("ul",{className:"headerNav",children:[Object(h.jsx)("li",{children:Object(h.jsx)(i.c,{to:"/",children:"Home"})}),!e.authState&&Object(h.jsx)("li",{children:Object(h.jsx)(i.c,{to:"/login",children:"Login"})}),e.authState&&Object(h.jsx)("li",{children:Object(h.jsx)(i.c,{to:"/logout",children:"Log out"})})]})})},p=(n(39),function(){return Object(h.jsx)("div",{className:"footer",children:Object(h.jsxs)("ul",{className:"footerNav",children:[Object(h.jsx)("li",{children:"Privacy"}),Object(h.jsx)("li",{children:"About"}),Object(h.jsx)("li",{children:"Contact us"})]})})}),O=(n(40),function(e){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(d,{authState:e.authState}),e.children,Object(h.jsx)(p,{})]})}),f=function(e){var t=Object(c.useState)(null),n=Object(a.a)(t,2),r=n[0],s=n[1],o=Object(c.useState)(!1),j=Object(a.a)(o,2),d=j[0],p=j[1],f=(Object(u.g)(),function(e,t){e.preventDefault();var n={method:"PUT",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("user")},body:JSON.stringify({title:t.title,body:t.body,published:!t.published})};fetch("https://serene-waters-04286.herokuapp.com/posts/"+t.id,n).then((function(e){p(!d)}))});return Object(c.useEffect)((function(){(function(){var e=Object(b.a)(l.a.mark((function e(){var t,n,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://serene-waters-04286.herokuapp.com/posts",{mode:"cors"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c=n.posts,r=c.map((function(e){return Object(h.jsxs)("li",{className:"postDetails",children:[Object(h.jsx)(i.b,{to:"/posts/"+e.id,children:e.title}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{children:["Published: ",e.published.toString()]}),Object(h.jsx)("form",{onSubmit:function(t){return f(t,e)},children:Object(h.jsx)("input",{type:"submit",id:"togglePublish",value:"Toggle"})})]})]},e.title)})),s(r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[d]),Object(h.jsx)(O,{authState:e.authState,children:Object(h.jsxs)("div",{className:"mainContentHome",children:[Object(h.jsxs)("div",{className:"homeBanner",children:[Object(h.jsx)("p",{children:"Welcome to the blog admin site!"}),Object(h.jsx)(i.b,{to:"/posts/new",children:Object(h.jsx)("button",{type:"button",children:"New Post"})})]}),Object(h.jsx)("ul",{className:"postIndex",children:r||""})]})})};var m=function(e){return Object(h.jsx)("div",{children:Object(h.jsx)(f,{authState:e.authState})})},x=(n(41),function(e){var t=Object(c.useState)(null),n=Object(a.a)(t,2),r=n[0],s=n[1],o=Object(c.useState)(null),i=Object(a.a)(o,2),j=i[0],l=i[1],b=Object(u.g)(),d=Object(c.useState)(null),p=Object(a.a)(d,2),f=p[0],m=p[1];return Object(h.jsx)(O,{children:Object(h.jsx)("div",{className:"mainContent",children:Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:r,password:j,adminSite:!0})};fetch("https://serene-waters-04286.herokuapp.com/login",n).then((function(e){return e.json()})).then((function(t){void 0!==t.token?(window.localStorage.setItem("user",t.token),e.authRefresh(!0),b.push("/")):m(t.message)}))},className:"login-form",children:[Object(h.jsx)("label",{htmlFor:"username-field",children:"Username:"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",id:"username-field",name:"username",autoComplete:"on",value:r||"",onChange:function(e){return s(e.target.value)},required:!0}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"password-field",children:"Password:"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"password",id:"password-field",name:"password",autoComplete:"on",value:j||"",onChange:function(e){return l(e.target.value)},required:!0}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"submit",id:"loginButton",value:"Login"}),f&&Object(h.jsx)("div",{children:f})]})})})}),v=function(e){return Object(c.useEffect)((function(){e.authRefresh(!0),window.localStorage.removeItem("user")}),[]),Object(h.jsx)("div",{children:!e.authState&&Object(h.jsx)(u.a,{to:"/login"})})},S=(n(42),n(23)),g=n(22),y=(n(43),n(44).DateTime),w=function(e){var t=Object(c.useState)([]),n=Object(a.a)(t,2),r=n[0],s=n[1],o=Object(c.useState)(!1),u=Object(a.a)(o,2),j=u[0],d=u[1],p=function(t,n){t.preventDefault();var c={method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("user")}};fetch("https://serene-waters-04286.herokuapp.com/posts/"+e.postid+"/comments/"+n,c).then((function(){s([]),d(!j)}))},O=function(){var t=Object(b.a)(l.a.mark((function t(){var n,c,r,o,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://serene-waters-04286.herokuapp.com/posts/"+e.postid+"/comments",{mode:"cors"});case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,r=Object(g.a)(c.comments);try{for(a=function(){var t,n=o.value;t=Object(h.jsxs)("div",{className:"commentLayout",id:n._id,children:[Object(h.jsx)("h4",{className:"commentAuthor",children:n.author.username}),Object(h.jsx)("p",{className:"commentTimestamp",children:y.fromISO(n.timestamp).toLocaleString(y.DATETIME_MED)}),Object(h.jsx)("p",{className:"commentBody",children:n.body}),Object(h.jsxs)("div",{className:"modifyComment",children:[Object(h.jsx)(i.b,{to:"/posts/"+e.postid+"/comments/"+n._id+"/edit",children:Object(h.jsx)("button",{type:"button",children:"Edit"})}),Object(h.jsx)("button",{type:"button",onClick:function(e){return p(e,n._id)},children:"Delete"})]}),Object(h.jsx)("br",{})]},n._id),s((function(e){return[].concat(Object(S.a)(e),[t])}))},r.s();!(o=r.n()).done;)a()}catch(u){r.e(u)}finally{r.f()}case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){O()}),[j]),Object(h.jsx)("div",{className:"Comment",children:r})},N=function(e){var t=Object(c.useState)(null),n=Object(a.a)(t,2),r=n[0],s=n[1],o=Object(u.i)().id,j=Object(u.g)();return Object(c.useEffect)((function(){(function(){var e=Object(b.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://serene-waters-04286.herokuapp.com/posts/"+o,{mode:"cors"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c=n.post,s(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),Object(h.jsx)(O,{authState:e.authState,children:Object(h.jsxs)("div",{className:"postLayout",children:[Object(h.jsxs)("div",{className:"post",children:[Object(h.jsx)("h2",{children:r?r.title:""}),Object(h.jsx)("br",{}),Object(h.jsx)(i.b,{to:Object(u.h)().pathname+"/edit",children:Object(h.jsx)("button",{type:"button",children:"Edit"})}),Object(h.jsx)("button",{type:"button",onClick:function(e){e.preventDefault();var t={method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("user")},body:JSON.stringify({post:o})};fetch("https://serene-waters-04286.herokuapp.com/posts/"+o,t).then((function(){j.push("/")}))},children:"Delete"}),Object(h.jsx)("br",{}),Object(h.jsxs)("p",{children:[" ",r?r.body:""]})]}),Object(h.jsx)(w,{postid:o})]})})},k=(n(45),function(e){var t=Object(c.useState)(null),n=Object(a.a)(t,2),r=n[0],s=n[1],o=Object(c.useState)(null),i=Object(a.a)(o,2),j=i[0],d=i[1],p=Object(c.useState)(!1),f=Object(a.a)(p,2),m=f[0],x=f[1],v=Object(c.useState)(null),S=Object(a.a)(v,2),g=S[0],y=S[1],w=Object(u.i)().id;return Object(c.useEffect)((function(){void 0===w||function(){var e=Object(b.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://serene-waters-04286.herokuapp.com/posts/"+w+"/edit",{mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("user")}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c=n.post,s(c.title),d(c.body);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[w]),Object(h.jsxs)(O,{authState:e.authState,children:[null!==g&&Object(h.jsx)(u.a,{to:g}),!0===m&&null===g&&Object(h.jsx)(u.a,{from:"/posts/:id/edit",to:"/posts/"+w}),Object(h.jsx)("div",{className:"postEditForm",children:Object(h.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),void 0===w){var n={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("user")},body:JSON.stringify({author:e.userId,title:r,body:j})};fetch("https://serene-waters-04286.herokuapp.com/posts/",n).then((function(e){return e.json()})).then((function(e){return y(e.url)})).catch((function(e){console.log("The fetch error is: "+e)}))}else{var c={method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("user")},body:JSON.stringify({title:r,body:j})};fetch("https://serene-waters-04286.herokuapp.com/posts/"+w,c).then((function(){return x(!0)}))}},children:[Object(h.jsx)("label",{children:"Title: "}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",name:"title",value:r||"",onChange:function(e){return s(e.target.value)},required:!0}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"Body: "}),Object(h.jsx)("br",{}),Object(h.jsx)("textarea",{name:"body",value:j||"",onChange:function(e){return d(e.target.value)},required:!0}),Object(h.jsx)("input",{type:"submit",id:"submitPostForm",value:"Submit"})]})})]})}),T=(n(46),function(e){var t=Object(c.useState)(null),n=Object(a.a)(t,2),r=n[0],s=n[1],o=Object(u.i)(),i=o.id,j=o.commentId,d=Object(u.g)();return Object(c.useEffect)((function(){(function(){var e=Object(b.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://serene-waters-04286.herokuapp.com/posts/"+i+"/comments/"+j+"/edit",{mode:"cors",headers:{Authorization:"Bearer "+localStorage.getItem("user")}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c=n.comment,s(c.body);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i,j]),Object(h.jsx)(O,{authState:e.authState,children:Object(h.jsx)("div",{className:"commentEditForm",children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("user")},body:JSON.stringify({body:r})};fetch("https://serene-waters-04286.herokuapp.com/posts/"+i+"/comments/"+j,t).then((function(){d.push("/posts/"+i)}))},children:[Object(h.jsx)("label",{children:"Body: "}),Object(h.jsx)("br",{}),Object(h.jsx)("textarea",{name:"body",value:r||"",onChange:function(e){return s(e.target.value)},required:!0}),Object(h.jsx)("input",{type:"submit",id:"commentSubmit",value:"Submit"})]})})})}),C=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(null),o=Object(a.a)(s,2),j=o[0],l=o[1],b=Object(c.useState)(!1),d=Object(a.a)(b,2),p=d[0],O=d[1];return Object(c.useEffect)((function(){!function(){var e={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("user")}};localStorage.getItem("user")?fetch("https://serene-waters-04286.herokuapp.com/auth",e).then((function(e){return e.json()})).then((function(e){r(e.response),l(e.userId),O(!1)})):(r(!1),l(null),O(!1))}()}),[p]),Object(h.jsxs)(i.a,{forceRefresh:!0,children:[!n&&!localStorage.getItem("user")&&Object(h.jsx)("div",{children:Object(h.jsxs)(u.d,{children:[Object(h.jsx)(u.b,{exact:!0,path:"/",render:function(){return Object(h.jsx)(x,{authRefresh:function(e){return O(e)}})}}),Object(h.jsx)(u.b,{exact:!0,path:"/login",render:function(){return Object(h.jsx)(x,{authRefresh:function(e){return O(e)}})}}),Object(h.jsx)(u.a,{to:"/login"})]})}),Object(h.jsxs)(u.d,{children:[Object(h.jsx)(u.b,{exact:!0,path:"/",render:function(){return Object(h.jsx)(m,{authState:n})}}),Object(h.jsx)(u.b,{exact:!0,path:"/login",render:function(){return Object(h.jsx)(x,{authRefresh:function(e){return O(e)}})}}),Object(h.jsx)(u.b,{exact:!0,path:"/logout",render:function(){return Object(h.jsx)(v,{authState:n,authRefresh:function(e){return O(e)}})}}),Object(h.jsx)(u.b,{exact:!0,path:"/posts/new",render:function(){return Object(h.jsx)(k,{authState:n,userId:j})}}),Object(h.jsx)(u.b,{exact:!0,path:"/posts/:id",render:function(){return Object(h.jsx)(N,{authState:n})}}),Object(h.jsx)(u.b,{exact:!0,path:"/posts/:id/edit",render:function(){return Object(h.jsx)(k,{authState:n})}}),Object(h.jsx)(u.b,{exact:!0,path:"/posts/:id/comments/:commentId/edit",render:function(){return Object(h.jsx)(T,{authState:n})}})]})]})};o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.6206cd07.chunk.js.map