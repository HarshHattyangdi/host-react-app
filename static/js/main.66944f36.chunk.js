(this.webpackJsonpassessment=this.webpackJsonpassessment||[]).push([[0],{87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(17),a=c.n(s),j=c(19),r=c(7),i=c(2),l=c(3),o=c(20),b=c(21),d=new(function(){function e(){Object(o.a)(this,e),this.authenticated=void 0,this.authenticated=!1}return Object(b.a)(e,[{key:"login",value:function(e){this.authenticated=!0,e()}},{key:"logout",value:function(e){this.authenticated=!1,e()}},{key:"isAuthenticated",value:function(){return this.authenticated}}]),e}()),h=c(1),O=function(e){var t=e.component,c=Object(l.a)(e,["component"]);return Object(h.jsx)(r.b,Object(i.a)(Object(i.a)({},c),{},{render:function(e){return d.isAuthenticated()?Object(h.jsx)(t,Object(i.a)({},e)):Object(h.jsx)(r.a,{to:{pathname:"/",state:{from:e.location}}})}}))},x=c(12),u=c(91),m=c(92),g=c(50),f=c(95),p=c(94),v=Object(r.g)((function(e){var t=Object(n.useState)(" "),c=Object(x.a)(t,2),s=c[0],a=c[1];return Object(h.jsx)(u.a,{style:{marginTop:"10%"},children:Object(h.jsxs)(m.a,{children:[Object(h.jsx)(g.a,{md:3,lg:3}),Object(h.jsx)(g.a,{sm:12,md:6,lg:6,children:Object(h.jsx)(f.a,{className:"mt4",children:Object(h.jsxs)(p.a,{onSubmit:function(){console.log(s),d.login((function(){e.history.push("/content",s)}))},children:[Object(h.jsxs)(m.a,{children:[Object(h.jsx)(g.a,{md:2,lg:2}),Object(h.jsx)(g.a,{sm:12,md:8,lg:8,children:Object(h.jsxs)(p.a.Group,{className:"m-1 mr-1 ml-1 mt-5 p1",controlId:"formBasicEmail",children:[Object(h.jsx)(p.a.Label,{children:"Username"}),Object(h.jsx)(p.a.Control,{type:"text",placeholder:"Enter Username",required:!0,onChange:function(e){var t=e.target;return a(t.value)}})]})})]}),Object(h.jsxs)(m.a,{children:[Object(h.jsx)(g.a,{md:2,lg:2}),Object(h.jsx)(g.a,{sm:12,md:8,lg:8,children:Object(h.jsxs)(p.a.Group,{className:"m-1 mr-1 ml-1 mb-3 p1",controlId:"formBasicEmail",children:[Object(h.jsx)(p.a.Label,{children:"Password"}),Object(h.jsx)(p.a.Control,{type:"password",placeholder:"Enter Password",required:!0})]})})]}),Object(h.jsxs)(m.a,{children:[Object(h.jsx)(g.a,{md:2,lg:2}),Object(h.jsx)(g.a,{sm:12,md:8,lg:8,children:Object(h.jsx)(p.a.Group,{className:"m-1 mr-1 ml-1 mb-5 p1",controlId:"formValid",children:Object(h.jsx)(p.a.Control,{type:"submit",value:"Login",className:"btn btn-primary"})})})]})]})})})]})})})),y=c(30);var k=function(e){var t=e.user;return Object(h.jsx)(f.a,{className:"mt-5",children:Object(h.jsxs)(m.a,{children:[Object(h.jsx)(g.a,{sm:12,md:3,lg:3,children:Object(h.jsx)(f.a.Img,{variant:"top",src:t.picture.large,alt:""})}),Object(h.jsx)(g.a,{children:Object(h.jsxs)(f.a.Body,{children:[Object(h.jsx)(f.a.Title,{children:Object(h.jsxs)("p",{children:[t.name.first," ",t.name.last]})}),Object(h.jsx)("hr",{}),Object(h.jsxs)(f.a.Text,{children:[Object(h.jsx)(m.a,{children:Object(h.jsxs)(g.a,{children:[Object(h.jsx)(y.c,{}),"Phone : ",t.cell]})}),Object(h.jsx)(m.a,{children:Object(h.jsxs)(g.a,{children:[Object(h.jsx)(y.a,{}),"Email: ",t.email]})}),Object(h.jsx)(m.a,{children:Object(h.jsxs)(g.a,{children:[Object(h.jsx)(y.b,{}),"Address: ",t.location.street.number,",",t.location.street.name,", ",t.location.city,",",t.location.state]})})]})]})})]})})},C=c(35),T=c.n(C),B=c(51),E=c(93),L=c(96),N=Object(r.g)((function(e){return console.log(e),Object(h.jsxs)(E.a,{expand:"lg",variant:"light",bg:"light",children:[Object(h.jsx)(u.a,{fluid:!0,children:Object(h.jsxs)(E.a.Brand,{href:"#",children:["Hello ",e.history.location.state]})}),Object(h.jsx)(L.a,{variant:"outline-dark",onClick:function(){d.logout((function(){e.history.push("/")}))},children:"Logout"})]})})),w=c(18),I=c.n(w);var S=function(){return Object(h.jsx)(w.SkeletonTheme,{color:"#c7cdd6",highlightColor:"#909396",children:Object(h.jsx)(u.a,{fluid:!0,children:Object(h.jsxs)(m.a,{children:[Object(h.jsx)(g.a,{md:3,lg:3}),Object(h.jsx)(g.a,{sm:12,md:6,lg:6,children:Object(h.jsx)(f.a,{className:"mt-5",color:"#c7cdd6",children:Object(h.jsxs)(m.a,{children:[Object(h.jsx)(g.a,{sm:12,md:3,lg:3,children:Object(h.jsx)(I.a,{})}),Object(h.jsx)(g.a,{children:Object(h.jsxs)(f.a.Body,{children:[Object(h.jsx)(f.a.Title,{children:Object(h.jsx)(I.a,{})}),Object(h.jsx)(I.a,{}),Object(h.jsxs)(f.a.Text,{children:[Object(h.jsx)(m.a,{children:Object(h.jsx)(g.a,{children:Object(h.jsx)(I.a,{})})}),Object(h.jsx)(m.a,{children:Object(h.jsx)(g.a,{children:Object(h.jsx)(I.a,{})})}),Object(h.jsx)(m.a,{children:Object(h.jsx)(g.a,{children:Object(h.jsx)(I.a,{})})})]})]})})]})})})]})})})};var P=function(){var e=Object(n.useState)([]),t=Object(x.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(10),j=Object(x.a)(a,1)[0];return Object(n.useEffect)((function(){T.a.get("https://randomuser.me/api/?results=".concat(j,"&nat=us,dk,fr,gb")).then((function(e){return s(e.data.results)}))}),[j]),Object(h.jsxs)("div",{children:[Object(h.jsx)(N,{}),Object(h.jsx)(B.a,{dataLength:c.length,next:function(){setTimeout((function(){T.a.get("https://randomuser.me/api/?results=".concat(j,"&nat=us,dk,fr,gb")).then((function(e){return s(c.concat(e.data.results))}))}),1e3)},hasMore:!0,loader:Object(h.jsx)(S,{}),children:Object(h.jsxs)(m.a,{children:[Object(h.jsx)(g.a,{md:3,lg:3}),Object(h.jsx)(g.a,{sm:12,md:6,lg:6,children:c.map((function(e){return Object(h.jsx)(k,{user:e},e.login.uuid)}))})]})})]})};c(86),c(87);var F=function(){return Object(h.jsx)(j.a,{children:Object(h.jsxs)(r.d,{children:[Object(h.jsx)(r.b,{exact:!0,path:"/",component:v}),Object(h.jsx)(O,{exact:!0,path:"/content",component:P}),Object(h.jsx)(r.b,{exact:!0,path:"/*",component:v})]})})},A=(c(88),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,97)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,j=t.getTTFB;c(e),n(e),s(e),a(e),j(e)}))});a.a.render(Object(h.jsx)(j.a,{children:Object(h.jsx)(F,{})}),document.getElementById("root")),A()}},[[89,1,2]]]);
//# sourceMappingURL=main.66944f36.chunk.js.map