(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{36:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){},76:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(28),r=s.n(n),i=s(7),l=s(3),o=s(18),j=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":case"UPDATE_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"UPDATE_START":return Object(o.a)(Object(o.a)({},e),{},{isFetching:!0});case"UPDATE_FAILURE":return{user:e.user,isFetching:!1,error:!0};case"LOGOUT":return{user:null,isFetching:!1,error:!1};default:return e}},u=s(0),b={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},d=Object(a.createContext)(b),p=function(e){var t=e.children,s=Object(a.useReducer)(j,b),c=Object(l.a)(s,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){localStorage.setItem("user",JSON.stringify(n.user))}),[n.user]),Object(u.jsx)(d.Provider,{value:{user:n.user,isFetching:n.isFetching,error:n.error,dispatch:r},children:t})},O=(s(36),s(29)),m=s.n(O).a.create({baseURL:"https://darkxenium-blogs.onrender.com/api/"}),h="https://darkxenium-blogs.onrender.com";function x(){var e=Object(a.useContext)(d),t=e.user,s=e.dispatch,c="".concat(h,"/images/");return Object(u.jsxs)("div",{className:"top",children:[Object(u.jsxs)("div",{className:"topLeft",children:[Object(u.jsx)("a",{href:"https://github.com/DarkXenium",children:Object(u.jsx)("i",{className:"topIcon fab fa-github-square"})}),Object(u.jsxs)("a",{href:"https://www.instagram.com/avinash.2077k/",children:[" ",Object(u.jsx)("i",{className:"topIcon fab fa-instagram-square"})]}),Object(u.jsxs)("a",{href:"https://www.linkedin.com/in/avinash-kumar-9246851b8/",children:[" ",Object(u.jsx)("i",{className:"topIcon fab fa-linkedin"})]})]}),Object(u.jsx)("div",{className:"topCenter",children:Object(u.jsxs)("ul",{className:"topList",children:[Object(u.jsx)("li",{className:"topListItem",children:Object(u.jsx)(i.b,{className:"link",to:"/",children:"HOME"})}),Object(u.jsx)("li",{className:"topListItem",children:Object(u.jsx)(i.b,{className:"link",to:"/write",children:"WRITE"})}),Object(u.jsx)("li",{className:"topListItem",onClick:function(){s({type:"LOGOUT"})},children:t&&"LOGOUT"})]})}),Object(u.jsx)("div",{className:"topRight",children:t?Object(u.jsx)(i.b,{to:"/settings",children:Object(u.jsx)("img",{className:"topImg",src:c+t.profilePic,alt:""})}):Object(u.jsxs)("ul",{className:"topList",children:[Object(u.jsx)("li",{className:"topListItem",children:Object(u.jsx)(i.b,{className:"toplink link",to:"/login",children:"LOGIN"})}),Object(u.jsx)("li",{className:"topListItem",children:Object(u.jsx)(i.b,{className:"toplink link",to:"/register",children:"REGISTER"})})]})})]})}var f=s(2),g=s(6),v=s(4);s(64);function N(){return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsxs)("div",{className:"headerTitles",children:[Object(u.jsx)("span",{className:"headerTitleSm",children:"A community of like minded individuals."}),Object(u.jsxs)("span",{className:"headerTitleLg",children:["DARK",Object(u.jsx)("b",{children:"XENIUM"})]})]}),Object(u.jsx)("img",{className:"headerImg",src:"images/wallpaper.jpg",alt:"A laptop workspace"})]})}s(65);function w(e){var t=e.post,s="".concat(h,"/images/");return Object(u.jsxs)("div",{className:"post",children:[Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"left",children:[t.photo&&Object(u.jsx)("img",{className:"postImg",src:s+t.photo,alt:""}),Object(u.jsx)("span",{className:"postTitle",children:Object(u.jsx)(i.b,{to:"/post/".concat(t._id),className:"link",children:t.title})}),Object(u.jsx)("span",{className:"postDate",children:new Date(t.createdAt).toDateString()})]}),Object(u.jsx)("div",{className:"right",children:Object(u.jsx)(i.b,{to:"/post/".concat(t._id),className:"link",children:Object(u.jsx)("p",{className:"postDesc",children:t.desc})})})]}),Object(u.jsx)("div",{className:"postInfo",children:Object(u.jsx)("div",{className:"postCats",children:t.categories.map((function(e){return Object(u.jsx)("span",{className:"postCat",children:e.name})}))})})]})}s(66);function I(e){var t=e.posts;return Object(u.jsx)("div",{className:"posts",children:t.map((function(e){return Object(u.jsx)(w,{post:e})}))})}s(67);function y(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(g.a)(Object(f.a)().mark((function e(){var t;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("".concat(h,"/categories"));case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(u.jsxs)("div",{className:"sidebar",children:[Object(u.jsxs)("div",{className:"sidebarItem",children:[Object(u.jsx)("span",{className:"sidebarTitle",children:"ABOUT ME"}),Object(u.jsx)("img",{id:"aboutImage",src:"images/giphy.gif",alt:""}),Object(u.jsx)("p",{children:"Hello there, I am Avinash Kumar and I believe that everyone is not equally talented or gifted but nobody is inferior either. I want to make a community of unique people and bring about a change in the world so that everyone sees each other as incomparable. A world of unique indviduals."})]}),Object(u.jsxs)("div",{className:"sidebarItem",children:[Object(u.jsx)("span",{className:"sidebarTitle",children:"CATEGORIES"}),Object(u.jsx)("ul",{className:"sidebarList",children:s.map((function(e){return Object(u.jsx)(i.b,{className:"link",to:"/?cat=".concat(e.name),children:Object(u.jsx)("li",{className:"sidebarListItem",children:e.name})})}))})]}),Object(u.jsxs)("div",{className:"sidebarItem",children:[Object(u.jsx)("span",{className:"sidebarTitle",children:"Check out my website and projects "}),Object(u.jsxs)("div",{className:"sidebarSocial",children:[Object(u.jsx)("a",{href:"http://avinash-kumar.netlify.com/",children:Object(u.jsx)("img",{className:"sidebarIcon",src:"images/portfolio.png",alt:""})}),Object(u.jsx)("a",{href:"https://pokemon-eclipse.netlify.app/",children:Object(u.jsx)("img",{className:"sidebarIcon",src:"images/pokemon.png",alt:""})})]})]})]})}s(68);function k(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),s=t[0],c=t[1],n=Object(v.f)().search;return Object(a.useEffect)((function(){var e=function(){var e=Object(g.a)(Object(f.a)().mark((function e(){var t;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("/posts"+n);case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(N,{}),Object(u.jsxs)("div",{className:"home",children:[Object(u.jsx)(I,{posts:s}),Object(u.jsx)(y,{})]})]})}s(69);function S(){var e=Object(a.useRef)(),t=Object(a.useRef)(),s=Object(a.useContext)(d),c=s.dispatch,n=s.isFetching,r=function(){var s=Object(g.a)(Object(f.a)().mark((function s(a){var n;return Object(f.a)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a.preventDefault(),c({type:"LOGIN_START"}),s.prev=2,s.next=5,m.post("/auth/login",{username:e.current.value,password:t.current.value});case 5:n=s.sent,c({type:"LOGIN_SUCCESS",payload:n.data}),s.next=12;break;case 9:s.prev=9,s.t0=s.catch(2),c({type:"LOGIN_FAILURE"});case 12:case"end":return s.stop()}}),s,null,[[2,9]])})));return function(e){return s.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"login",children:[Object(u.jsx)("span",{className:"loginTitle",children:"LOGIN"}),Object(u.jsxs)("form",{className:"loginForm",onSubmit:r,children:[Object(u.jsx)("label",{children:"Usermame"}),Object(u.jsx)("input",{ref:e,required:!0,className:"loginInput",type:"text",placeholder:"Enter your Username "}),Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("input",{required:!0,ref:t,className:"loginInput",type:"password",placeholder:"Enter your password "}),Object(u.jsx)("button",{className:"loginButton",type:"submit",disabled:n,children:"Login"})]})]})}s(70);function E(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(l.a)(n,2),i=r[0],o=r[1],j=Object(a.useState)(""),b=Object(l.a)(j,2),d=b[0],p=b[1],O=Object(a.useState)(!1),h=Object(l.a)(O,2),x=h[0],v=h[1],N=function(){var e=Object(g.a)(Object(f.a)().mark((function e(t){return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),v(!1),e.prev=2,e.next=5,m.post("/auth/register",{username:s,email:i,password:d});case 5:e.sent.data&&window.location.replace("/login"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),v(!0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{id:"register",className:"register",children:[Object(u.jsx)("span",{className:"registerTitle",children:"REGISTER"}),Object(u.jsxs)("form",{className:"registerForm",onSubmit:N,children:[Object(u.jsx)("label",{children:"Username"}),Object(u.jsx)("input",{onChange:function(e){return c(e.target.value)},className:"registerInput",type:"text",required:!0,placeholder:"Enter your username "}),Object(u.jsx)("label",{children:"Email"}),Object(u.jsx)("input",{onChange:function(e){return o(e.target.value)},className:"registerInput",type:"text",required:!0,placeholder:"Enter your email "}),Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("input",{onChange:function(e){return p(e.target.value)},className:"registerInput",type:"password",required:!0,placeholder:"Enter your password "}),Object(u.jsx)("button",{className:"registerButton",type:"submit",children:"Register"})]}),x&&Object(u.jsx)("span",{id:"error",children:"Something Went Wrong. User may already exist, please try logging in."})]})}s(71);function T(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(l.a)(n,2),i=r[0],o=r[1],j=Object(a.useState)(""),b=Object(l.a)(j,2),p=b[0],O=b[1],x=Object(a.useState)(""),v=Object(l.a)(x,2),N=v[0],w=v[1],I=Object(a.useState)(!1),k=Object(l.a)(I,2),S=k[0],E=k[1],T=Object(a.useContext)(d),C=T.user,P=T.dispatch,L="".concat(h,"/images/"),U=function(){var e=Object(g.a)(Object(f.a)().mark((function e(t){var a,c,n,r;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),P({type:"UPDATE_START"}),a={userId:C._id,username:i,email:p,password:N},!s){e.next=17;break}return c=new FormData,n=Date.now()+s.name,c.append("name",n),c.append("file",s),a.profilePic=n,e.prev=9,e.next=12,m.post("/upload",c);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log(e.t0);case 17:return e.prev=17,e.next=20,m.put("/users/"+C._id,a);case 20:r=e.sent,E(!0),P({type:"UPDATE_SUCCESS",payload:r.data}),e.next=28;break;case 25:e.prev=25,e.t1=e.catch(17),P({type:"UPDATE_FAILURE"});case 28:case"end":return e.stop()}}),e,null,[[9,14],[17,25]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"settings",children:[Object(u.jsxs)("div",{className:"settingsWrapper",children:[Object(u.jsx)("div",{className:"settingsTitle",children:Object(u.jsx)("span",{className:"settingsTitleUpdate",children:"Update Your Account"})}),Object(u.jsxs)("form",{className:"settingsForm",onSubmit:U,children:[Object(u.jsx)("label",{children:"Profile Picture"}),Object(u.jsxs)("div",{className:"settingsPP",children:[Object(u.jsx)("img",{className:"settingImg",src:s?URL.createObjectURL(s):L+C.profilePic,alt:"Please insert Your profile"}),Object(u.jsxs)("label",{htmlFor:"fileInput",children:[Object(u.jsx)("i",{className:"settingsPPIcon far fa-user-circle"})," "]}),Object(u.jsx)("input",{id:"fileInput",type:"file",style:{display:"none"},onChange:function(e){return c(e.target.files[0])},className:"settingsPPInput"})]}),Object(u.jsx)("label",{children:"Username"}),Object(u.jsx)("input",{type:"text",placeholder:"Enter new username",name:"name",onChange:function(e){return o(e.target.value)}}),Object(u.jsx)("label",{children:"Email"}),Object(u.jsx)("input",{type:"email",placeholder:"Enter new email address",name:"email",onChange:function(e){return O(e.target.value)}}),Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("input",{type:"password",placeholder:"Enter new password",name:"password",onChange:function(e){return w(e.target.value)}}),Object(u.jsx)("button",{className:"settingsSubmitButton",type:"submit",children:"Update"}),S&&Object(u.jsx)("span",{style:{color:"green",textAlign:"center",marginTop:"20px"},children:"Your Profile has been updated!"})]})]}),Object(u.jsx)(y,{})]})}s(72);function C(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(g.a)(Object(f.a)().mark((function e(){var t;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("".concat(h,"/categories"));case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(u.jsxs)("div",{className:"sidebar",children:[Object(u.jsx)("div",{className:"sidebarItem"}),Object(u.jsxs)("div",{className:"sidebarItem",children:[Object(u.jsx)("span",{className:"sidebarTitle",children:"CATEGORIES"}),Object(u.jsx)("ul",{className:"sidebarList",children:s.map((function(e){return Object(u.jsx)(i.b,{className:"link",to:"/?cat=".concat(e.name),children:Object(u.jsx)("li",{className:"sidebarListItem",children:e.name})})}))})]}),Object(u.jsxs)("div",{className:"sidebarItem",children:[Object(u.jsx)("span",{className:"sidebarTitle",children:"Check out my website and projects "}),Object(u.jsxs)("div",{className:"sidebarSocial",children:[Object(u.jsx)("a",{href:"http://avinash-kumar.netlify.com/",children:Object(u.jsx)("img",{className:"sidebarIcon",src:"../images/portfolio.png",alt:""})}),Object(u.jsx)("a",{href:"https://pokemon-eclipse.netlify.app/",children:Object(u.jsx)("img",{className:"sidebarIcon",src:"../images/pokemon.png",alt:""})})]})]})]})}s(73);function P(){var e=Object(v.f)().pathname.split("/")[2],t=Object(a.useState)({}),s=Object(l.a)(t,2),c=s[0],n=s[1],r="".concat(h,"/images/"),o=Object(a.useContext)(d).user,j=Object(a.useState)(""),b=Object(l.a)(j,2),p=b[0],O=b[1],x=Object(a.useState)(""),N=Object(l.a)(x,2),w=N[0],I=N[1],y=Object(a.useState)(!1),k=Object(l.a)(y,2),S=k[0],E=k[1],T=function(){var e=Object(g.a)(Object(f.a)().mark((function e(){return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.put("/posts/".concat(c._id),{username:o.username,title:p,desc:w});case 3:E(!1),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){var t=function(){var t=Object(g.a)(Object(f.a)().mark((function t(){var s;return Object(f.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.get("/posts/"+e);case 2:s=t.sent,n(s.data),O(s.data.title),I(s.data.desc);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e]);var C=function(){var e=Object(g.a)(Object(f.a)().mark((function e(){return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.delete("/posts/".concat(c._id),{data:{username:o.username}});case 3:window.location.replace("/"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"singlePost",children:Object(u.jsxs)("div",{className:"singlePostWrapper",children:[c.photo&&Object(u.jsx)("img",{className:"singlePostImg",src:r+c.photo,alt:""}),S?Object(u.jsx)("input",{type:"text",value:p,className:"singlePostTitleInput",autoFocus:!0,onChange:function(e){return O(e.target.value)}}):Object(u.jsxs)("h1",{className:"singlePostTitle",children:[p,c.username===(null===o||void 0===o?void 0:o.username)&&Object(u.jsxs)("div",{className:"singlePostEdit",children:[Object(u.jsx)("i",{className:"singlePostIcon far fa-edit",onClick:function(){return E(!0)}}),Object(u.jsx)("i",{className:"singlePostIcon far fa-trash-alt",onClick:C})]})]}),Object(u.jsxs)("div",{className:"singlePostInfo",children:[Object(u.jsxs)("span",{className:"singlePostAuthor",children:["Author:",Object(u.jsx)(i.b,{className:"link",to:"/?user=".concat(c.username),children:Object(u.jsx)("b",{children:c.username})})]}),Object(u.jsx)("span",{children:new Date(c.createdAt).toDateString()})]}),S?Object(u.jsx)("textarea",{className:"singlePostDescInput",value:w,onChange:function(e){return I(e.target.value)}}):Object(u.jsx)("p",{className:"singlePostDesc",children:w}),S&&Object(u.jsx)("button",{className:"singlePostButton",onClick:T,children:"Update"})]})})}s(74);function L(){return Object(u.jsxs)("div",{className:"single",children:[Object(u.jsx)(P,{}),Object(u.jsx)(C,{})]})}s(75);function U(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(l.a)(n,2),i=r[0],o=r[1],j=Object(a.useState)(null),b=Object(l.a)(j,2),p=b[0],O=b[1],h=Object(a.useContext)(d).user,x=function(){var e=Object(g.a)(Object(f.a)().mark((function e(t){var a,c,n;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a={username:h.username,title:s,desc:i},!p){e.next=15;break}return c=new FormData,n=Date.now()+p.name,c.append("name",n),c.append("file",p),a.photo=n,e.prev=8,e.next=11,m.post("/upload",c);case 11:e.next=15;break;case 13:e.prev=13,e.t0=e.catch(8);case 15:return e.prev=15,e.next=18,m.post("/posts",a);case 18:window.location.replace("/"),e.next=23;break;case 21:e.prev=21,e.t1=e.catch(15);case 23:case"end":return e.stop()}}),e,null,[[8,13],[15,21]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"write",children:[p&&Object(u.jsx)("img",{className:"writeImg",src:URL.createObjectURL(p),alt:""}),Object(u.jsxs)("form",{className:"writeForm",onSubmit:x,children:[Object(u.jsxs)("div",{className:"writeFormGroup",children:[Object(u.jsx)("label",{htmlFor:"fileInput",children:Object(u.jsx)("i",{className:"writeIcon fas fa-plus"})}),Object(u.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return O(e.target.files[0])}}),Object(u.jsx)("input",{type:"text",placeholder:"Title",className:"writeInput",autoFocus:!0,onChange:function(e){return c(e.target.value)}})]}),Object(u.jsx)("div",{className:"writeFormGroup",children:Object(u.jsx)("textarea",{placeholder:"Tell your story...",type:"text",className:"writeInput writeText",onChange:function(e){return o(e.target.value)}})}),Object(u.jsx)("button",{className:"writeSubmit",type:"submit",children:"Publish"}),Object(u.jsx)("span",{children:'Note: click on the "+" symbol to add image to your blog >>>'})]})]})}var A=function(){var e=Object(a.useContext)(d).user;return Object(u.jsxs)(i.a,{children:[Object(u.jsx)(x,{}),Object(u.jsxs)(v.c,{children:[Object(u.jsx)(v.a,{exact:!0,path:"/",children:Object(u.jsx)(k,{})}),Object(u.jsx)(v.a,{path:"/posts",children:Object(u.jsx)(k,{})}),Object(u.jsx)(v.a,{path:"/register",children:e?Object(u.jsx)(k,{}):Object(u.jsx)(E,{})}),Object(u.jsx)(v.a,{path:"/login",children:e?Object(u.jsx)(k,{}):Object(u.jsx)(S,{})}),Object(u.jsx)(v.a,{path:"/post/:postId",children:Object(u.jsx)(L,{})}),Object(u.jsx)(v.a,{path:"/write",children:e?Object(u.jsx)(U,{}):Object(u.jsx)(S,{})}),Object(u.jsx)(v.a,{path:"/settings",children:e?Object(u.jsx)(T,{}):Object(u.jsx)(S,{})})]})]})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(p,{children:Object(u.jsx)(A,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.d68192c3.chunk.js.map