(this["webpackJsonphw-final-app"]=this["webpackJsonphw-final-app"]||[]).push([[0],{169:function(e,t,a){},171:function(e,t,a){"use strict";a.r(t);var s,r=a(3),n=a.n(r),o=a(31),c=a.n(o),i=a(11),l=a(5),d={jwt:null,firstName:"",lastName:"",setAuthInfo:function(){},loading:!1},u=n.a.createContext(d),j=u.Provider,b=(u.Consumer,a(9)),x=a(0),p=function(){var e=function(e){var t=document.querySelector("html");"dark"!==e||(null===t||void 0===t?void 0:t.classList.contains("dark"))?(null===t||void 0===t||t.classList.remove("dark"),o("\ud83c\udf11")):(o("\u2600"),null===t||void 0===t||t.classList.add(e))},t=function(){var e=document.querySelector("html");return!!(null===e||void 0===e?void 0:e.classList.contains("dark"))},a=Object(r.useState)(t()?"\u2600":"\ud83c\udf11"),s=Object(i.a)(a,2),n=s[0],o=s[1],c=Object(r.useContext)(u);return Object(x.jsxs)("header",{className:"flex p-2 bg-blue-700 dark:bg-gray-800 justify-between",children:[Object(x.jsx)("div",{className:"flex",children:Object(x.jsxs)("ul",{className:"flex flex-wrap flex-row list-none",children:[Object(x.jsx)("li",{className:"flex-auto",children:Object(x.jsx)(b.b,{className:"block px-2 text-white ",to:"/",title:"Home",children:Object(x.jsx)("span",{className:"text-2xl animal"})})}),null===c.jwt?Object(x.jsx)(x.Fragment,{}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("li",{className:"flex-auto",children:Object(x.jsx)(b.c,{className:"block p-2 text-white dark:hover:bg-pink-100 dark:hover:text-black font-semibold",to:"/todos",children:"Todo list"})}),Object(x.jsx)("li",{className:"flex-auto",children:Object(x.jsx)(b.c,{className:"block p-2 text-white dark:hover:bg-pink-100 dark:hover:text-black font-semibold",to:"/categories",children:"Categories"})}),Object(x.jsx)("li",{className:"flex-auto",children:Object(x.jsx)(b.c,{className:"block p-2 text-white dark:hover:bg-pink-100 dark:hover:text-black font-semibold",to:"/priorities",children:"Priorities"})})]})]})}),Object(x.jsxs)("div",{className:"flex",children:[Object(x.jsx)("ul",{className:"flex flex-wrap flex-row list-none",children:null===c.jwt?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("li",{className:"flex-auto",children:Object(x.jsx)(b.c,{className:"block p-2 text-white hover:bg-pink-100 hover:text-black font-semibold",to:"/identity/login",children:"Login"})}),Object(x.jsx)("li",{className:"flex-auto",children:Object(x.jsx)(b.c,{className:"block p-2 text-white hover:bg-pink-100 hover:text-black font-semibold",to:"/identity/register",children:"Register"})})]}):Object(x.jsx)("li",{children:Object(x.jsx)("button",{onClick:function(){c.setAuthInfo(null,"","")},className:"block p-2 text-white hover:bg-pink-100 hover:text-black font-semibold",children:"Log Out"})})}),t()?Object(x.jsx)("button",{className:"text-white",onClick:function(){return e("")},children:n}):Object(x.jsx)("button",{onClick:function(){return e("dark")},children:n})]})]})},m=a(8),h=function(){var e=Object(r.useContext)(u);return Object(x.jsx)("div",{className:"flex flex-row justify-center text-white",children:Object(x.jsxs)("div",{className:"flex flex-col space-y-20",children:[Object(x.jsx)("div",{children:"Sadly, this page does not exist."}),Object(x.jsxs)("div",{className:"flex flex-row justify-evenly font-semibold",children:[Object(x.jsx)(b.b,{to:"/",children:"Home"}),"|",null===e.jwt?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(b.b,{to:"/identity/login",children:"Login"}),"|",Object(x.jsx)(b.b,{to:"/identity/register",children:"Register"})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(b.b,{to:"/todos",children:"Todo list"}),"|",Object(x.jsx)(b.b,{to:"/categories",children:"Categories"}),"|",Object(x.jsx)(b.b,{to:"/priorities",children:"Priorities"})]})]})]})})},f=a(6),v=a.n(f),g=a(10);!function(e){e.Loading="Loading...",e.Error="Error...",e.Ok="Ok"}(s||(s={}));var O=function(e){var t;switch(e.pageStatus.pageStatus){case s.Loading:return Object(x.jsx)("div",{className:"absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-gray-600 grid opacity-60 justify-center content-center ",children:Object(x.jsxs)("div",{className:"lds-ring",children:[Object(x.jsx)("div",{className:"dark:boder-white"}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{})]})});case s.Error:return Object(x.jsxs)("div",{id:"error",onClick:function(e){return function(e){var t;null===(t=document.querySelector("#error"))||void 0===t||t.classList.add("hidden")}()},className:"absolute top-0 bg-red-300 p-4 rounded-br-md",children:["Error ",e.pageStatus.statusCode,Object(x.jsx)("br",{}),Object(x.jsx)("ul",{children:null===(t=e.pageStatus.messages)||void 0===t?void 0:t.map((function(e){return Object(x.jsx)("li",{children:e})}))})]});default:return Object(x.jsx)(x.Fragment,{})}},w=a(35),N=a(79),C=a(36),k=a.n(C),y=function(){function e(){Object(w.a)(this,e)}return Object(N.a)(e,null,[{key:"getAxiosConfiguration",value:function(e){if(e)return{headers:{Authorization:"Bearer "+e}}}}]),e}();y._axios=k.a.create({baseURL:"https://taltech.akaver.com/api/v1/",headers:{"Content-Type":"application/json"}}),y.getAll=function(){var e=Object(g.a)(v.a.mark((function e(t,a){var s,r,n,o,c,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y._axios.get(t,y.getAxiosConfiguration(a));case 3:return s=e.sent,e.abrupt("return",{ok:s.status<=299,statusCode:s.status,data:s.data});case 7:return e.prev=7,e.t0=e.catch(0),i=e.t0,e.abrupt("return",{ok:!1,statusCode:null!==(r=null===(n=i.response)||void 0===n?void 0:n.status)&&void 0!==r?r:500,data:null===(o=i.response)||void 0===o?void 0:o.data,messages:null===(c=i.response)||void 0===c?void 0:c.data.messages});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),y.get=function(){var e=Object(g.a)(v.a.mark((function e(t,a,s){var r,n,o,c,i,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y._axios.get("".concat(t,"/").concat(a),y.getAxiosConfiguration(s));case 3:return r=e.sent,e.abrupt("return",{ok:r.status<=299,statusCode:r.status,data:r.data});case 7:return e.prev=7,e.t0=e.catch(0),l=e.t0,e.abrupt("return",{ok:!1,statusCode:null!==(n=null===(o=l.response)||void 0===o?void 0:o.status)&&void 0!==n?n:500,data:null===(c=l.response)||void 0===c?void 0:c.data,messages:null===(i=l.response)||void 0===i?void 0:i.data.messages});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a,s){return e.apply(this,arguments)}}(),y.post=function(){var e=Object(g.a)(v.a.mark((function e(t,a,s){var r,n,o,c,i,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y._axios.post(t,JSON.stringify(a),y.getAxiosConfiguration(s));case 3:return r=e.sent,e.abrupt("return",{ok:r.status<=299,statusCode:r.status,data:r.data});case 7:return e.prev=7,e.t0=e.catch(0),l=e.t0,e.abrupt("return",{ok:!1,statusCode:null!==(n=null===(o=l.response)||void 0===o?void 0:o.status)&&void 0!==n?n:500,data:null===(c=l.response)||void 0===c?void 0:c.data,messages:null===(i=l.response)||void 0===i?void 0:i.data.messages});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a,s){return e.apply(this,arguments)}}(),y.put=function(){var e=Object(g.a)(v.a.mark((function e(t,a,s,r){var n,o,c,i,l,d;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y._axios.put("".concat(t,"/").concat(s),JSON.stringify(a),y.getAxiosConfiguration(r));case 3:return n=e.sent,e.abrupt("return",{ok:n.status<=299,statusCode:n.status,data:n.data});case 7:return e.prev=7,e.t0=e.catch(0),d=e.t0,e.abrupt("return",{ok:!1,statusCode:null!==(o=null===(c=d.response)||void 0===c?void 0:c.status)&&void 0!==o?o:500,data:null===(i=d.response)||void 0===i?void 0:i.data,messages:null===(l=d.response)||void 0===l?void 0:l.data.messages});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a,s,r){return e.apply(this,arguments)}}(),y.delete=function(){var e=Object(g.a)(v.a.mark((function e(t,a,s){var r,n,o,c,i,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y._axios.delete("".concat(t,"/").concat(a),y.getAxiosConfiguration(s));case 3:return r=e.sent,e.abrupt("return",{ok:r.status<=299,statusCode:r.status,data:r.data});case 7:return e.prev=7,e.t0=e.catch(0),l=e.t0,e.abrupt("return",{ok:!1,statusCode:null!==(n=null===(o=l.response)||void 0===o?void 0:o.status)&&void 0!==n?n:500,data:null===(c=l.response)||void 0===c?void 0:c.data,messages:null===(i=l.response)||void 0===i?void 0:i.data.messages});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a,s){return e.apply(this,arguments)}}();var S=function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".";return"".concat(e.getDate()>9?e.getDate():"0"+e.getDate()).concat(t).concat(e.getMonth()+1>9?e.getMonth()+1:"0"+(e.getMonth()+1)).concat(t).concat(e.getFullYear())};return Object(x.jsx)("div",{className:"flex justify-center p-2 border-t border-b border-1",children:Object(x.jsxs)("div",{className:"flex flex-col sm:w-120 w-96 cursor-default",children:[Object(x.jsxs)("div",{className:"flex flex-row justify-between font-semibold text-white",children:[Object(x.jsx)("div",{className:"sm:w-2/4 w-2/3",children:"Task"}),Object(x.jsx)("div",{className:"sm:w-1/4 sm:block hidden",children:"Added"}),Object(x.jsx)("div",{className:"sm:w-1/4 w-1/3",children:"Due date"}),Object(x.jsx)("div",{className:"w-4"})]}),Object(x.jsx)("div",{className:"space-y-2",children:e.values.sort((function(e,t){var a,s;return e.isCompleted===t.isCompleted?new Date(null!==(a=e.dueDt)&&void 0!==a?a:"")<new Date(null!==(s=t.dueDt)&&void 0!==s?s:"")?-1:1:e.isCompleted?1:-1})).map((function(a){var s,r,n;return a.id===e.selectedTodo.id?Object(x.jsxs)("div",{className:"flex flex-row justify-between p-1 border rounded-md border-yellow-100 bg-yellow-200 text-black",children:[Object(x.jsxs)("div",{onClick:function(t){return e.selectedTodo.id===a.id?e.setSelectedTodo(L):e.setSelectedTodo(a)},className:"flex flex-row justify-between w-full",id:a.id,children:[Object(x.jsx)("div",{className:"sm:w-2/4  w-2/3",children:a.taskName}),Object(x.jsx)("div",{className:"sm:w-1/4 sm:block hidden",children:t(new Date(null!==(s=a.createdDt)&&void 0!==s?s:new Date))}),Object(x.jsx)("div",{className:"sm:w-1/4  w-1/3",children:t(new Date(a.dueDt))})]}),Object(x.jsx)("div",{children:Object(x.jsx)("input",{className:"h-4 w-4",type:"checkbox",checked:a.isCompleted,onChange:function(){e.setTodoCompletedValue(a)}})})]}):a.isCompleted?Object(x.jsxs)("div",{className:"flex flex-row justify-between p-1 border rounded-md border-white hover:bg-yellow-200 hover:text-black text-white opacity-30",children:[Object(x.jsxs)("div",{onClick:function(t){return e.selectedTodo.id===a.id?e.setSelectedTodo(L):e.setSelectedTodo(a)},className:"flex flex-row justify-between w-full",id:a.id,children:[Object(x.jsx)("div",{className:"sm:w-2/4  w-2/3",children:a.taskName}),Object(x.jsx)("div",{className:"sm:w-1/4 sm:block hidden",children:t(new Date(null!==(r=a.createdDt)&&void 0!==r?r:new Date))}),Object(x.jsx)("div",{className:"sm:w-1/4  w-1/3",children:t(new Date(a.dueDt))})]}),Object(x.jsx)("div",{children:Object(x.jsx)("input",{className:"h-4 w-4",type:"checkbox",checked:a.isCompleted,onChange:function(){e.setTodoCompletedValue(a)}})})]}):Object(x.jsxs)("div",{className:"flex flex-row justify-between p-1 border rounded-md border-white hover:bg-yellow-200 hover:text-black text-white",children:[Object(x.jsxs)("div",{onClick:function(t){return e.selectedTodo.id===a.id?e.setSelectedTodo(L):e.setSelectedTodo(a)},className:"flex flex-row justify-between w-full",id:a.id,children:[Object(x.jsx)("div",{className:"sm:w-2/4  w-2/3",children:a.taskName}),Object(x.jsx)("div",{className:"sm:w-1/4 sm:block hidden",children:t(new Date(null!==(n=a.createdDt)&&void 0!==n?n:new Date))}),Object(x.jsx)("div",{className:"sm:w-1/4  w-1/3",children:t(new Date(a.dueDt))})]}),Object(x.jsx)("div",{children:Object(x.jsx)("input",{className:"h-4 w-4",type:"checkbox",checked:a.isCompleted,onChange:function(){e.setTodoCompletedValue(a)}})})]})}))})]})})},D=a(37),T=a.n(D),A=function(e){return Object(x.jsx)("div",{className:"flex justify-center p-2 border-t border-b border-1",children:Object(x.jsx)("form",{className:"p-2 w-96 sm:w-120 text-black",children:Object(x.jsxs)("div",{className:"flex w-full flex-col space-y-4",children:[Object(x.jsxs)("div",{className:"flex flex-col space-y-4",children:[Object(x.jsxs)("div",{className:"flex flex-col",children:[Object(x.jsx)("label",{className:"text-white font-semibold",children:"What do you need to do?"}),Object(x.jsx)("input",{id:"taskName",type:"text",className:"p-1",value:e.values.taskName,onChange:function(t){return e.handleChange(t.target)}})]}),Object(x.jsxs)("div",{className:"flex flex-col",children:[Object(x.jsx)("label",{className:"text-white font-semibold",children:"When does it have to be done?"}),Object(x.jsx)(T.a,{className:"w-full",selected:new Date(e.date),onChange:function(t){return e.handleDateChange(t)},dateFormat:"dd.MM.yyyy",minDate:new Date(Date.now())})]})]}),Object(x.jsxs)("div",{className:"flex flex-row justify-between",children:[Object(x.jsxs)("div",{className:"flex flex-col w-1/3",children:[Object(x.jsx)("label",{htmlFor:"todoCategoryId",className:"text-white font-semibold",children:"Categorize!"}),e.categories.length>0?Object(x.jsxs)("select",{id:"todoCategoryId",value:e.values.todoCategoryId,onChange:function(t){return e.handleChange(t.target)},className:"p-1",children:[Object(x.jsx)("option",{value:""}),e.categories.map((function(e){return Object(x.jsx)("option",{value:e.id,children:e.categoryName},e.id)}))]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(b.b,{className:"hover:text-pink-100 font-semibold underline text-white",to:"/categories/add",children:"Add categories"}),Object(x.jsx)("button",{onClick:function(t){e.generateDefaultCategories(),t.preventDefault()},className:"hover:text-pink-100 font-semibold underline text-white text-left",children:"Generate default"})]})]}),Object(x.jsxs)("div",{className:"flex flex-col w-1/3",children:[Object(x.jsx)("label",{className:"text-white font-semibold",children:"Prioritize!"}),e.priorities.length>0?Object(x.jsxs)("select",{id:"todoPriorityId",value:e.values.todoPriorityId,onChange:function(t){return e.handleChange(t.target)},className:"p-1",children:[Object(x.jsx)("option",{value:""}),e.priorities.map((function(e){return Object(x.jsx)("option",{value:e.id,children:e.priorityName},e.id)}))]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(b.b,{className:"hover:text-pink-100 font-semibold underline text-white",to:"/priorities/add",children:"Add priorities"}),Object(x.jsx)("button",{onClick:function(t){e.generateDefaultPriorities(),t.preventDefault()},className:"hover:text-pink-100 font-semibold underline text-white text-left",children:"Generate default"})]})]})]}),Object(x.jsx)("div",{className:"flex flex-row justify-center",children:Object(x.jsx)("button",{className:"p-2 bg-green-600 w-full font-bold text-white",onClick:function(t){e.addTodo(t.target),t.preventDefault()},children:"Add"})})]})})})},F=function(e){return Object(x.jsx)("div",{className:"flex justify-center p-2 border-t border-b border-1",children:Object(x.jsx)("form",{className:"p-2 w-96 sm:w-120 text-black",children:Object(x.jsxs)("div",{className:"flex w-full flex-col space-y-4",children:[Object(x.jsxs)("div",{className:"flex flex-col space-y-4",children:[Object(x.jsxs)("div",{className:"flex flex-col",children:[Object(x.jsx)("label",{className:"text-white font-semibold",children:"What do you need to do?"}),Object(x.jsx)("input",{id:"taskName",type:"text",className:"p-1",value:e.values.taskName,onChange:function(t){return e.handleChange(t.target)}})]}),Object(x.jsxs)("div",{className:"flex flex-col",children:[Object(x.jsx)("label",{className:"text-white font-semibold",children:"When does it have to be done?"}),Object(x.jsx)(T.a,{className:"w-full",selected:new Date(e.values.dueDt),onChange:function(t){return e.handleDateChange(t)},dateFormat:"dd.MM.yyyy",minDate:new Date(Date.now())})]})]}),Object(x.jsxs)("div",{className:"flex flex-row justify-between",children:[Object(x.jsxs)("div",{className:"flex flex-col w-1/3",children:[Object(x.jsx)("label",{htmlFor:"todoCategoryId",className:"text-white font-semibold",children:"Categorize!"}),Object(x.jsxs)("select",{id:"todoCategoryId",value:e.values.todoCategoryId,onChange:function(t){return e.handleChange(t.target)},className:"p-1",children:[Object(x.jsx)("option",{value:""}),e.categories.map((function(e){return Object(x.jsx)("option",{value:e.id,children:e.categoryName},e.id)}))]})]}),Object(x.jsxs)("div",{className:"flex flex-col w-1/3",children:[Object(x.jsx)("label",{className:"text-white font-semibold",children:"Prioritize!"}),Object(x.jsxs)("select",{id:"todoPriorityId",value:e.values.todoPriorityId,onChange:function(t){return e.handleChange(t.target)},className:"p-1",children:[Object(x.jsx)("option",{value:""}),e.priorities.map((function(e){return Object(x.jsx)("option",{value:e.id,children:e.priorityName},e.id)}))]})]})]}),Object(x.jsx)("div",{className:"flex flex-row justify-center",children:Object(x.jsx)("button",{className:"p-2 bg-yellow-200 w-full font-bold text-black",onClick:function(t){e.editTodo(t.target),t.preventDefault()},children:"Edit"})})]})})})},I={taskName:"",taskSort:0,dueDt:new Date(Date.now()),isCompleted:!1,isArchived:!1,todoCategoryId:"",todoPriorityId:""},L={id:"",taskName:"",taskSort:0,dueDt:new Date(Date.now()),isCompleted:!1,isArchived:!1,todoCategoryId:"",todoPriorityId:""},E=function(){var e=Object(r.useState)(I),t=Object(i.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)([]),c=Object(i.a)(o,2),d=c[0],j=c[1],b=Object(r.useState)({pageStatus:s.Loading,statusCode:-1}),p=Object(i.a)(b,2),h=p[0],f=p[1],w=Object(r.useState)([]),N=Object(i.a)(w,2),C=N[0],k=N[1],D=Object(r.useState)([]),T=Object(i.a)(D,2),E=T[0],P=T[1],M=Object(r.useState)(new Date(Date.now())),J=Object(i.a)(M,2),R=J[0],_=J[1],z=Object(r.useState)(L),W=Object(i.a)(z,2),H=W[0],V=W[1],q=Object(r.useContext)(u),B=function(){var e=Object(g.a)(v.a.mark((function e(){var t,a,r,n,o,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getAll("/TodoTasks",null!==(t=q.jwt)&&void 0!==t?t:"");case 2:if(!(a=e.sent).ok||!a.data){e.next=16;break}return j(a.data),e.next=7,y.getAll("/TodoCategories",null!==(r=q.jwt)&&void 0!==r?r:"");case 7:return(o=e.sent).ok&&o.data&&k(o.data),e.next=11,y.getAll("/TodoPriorities",null!==(n=q.jwt)&&void 0!==n?n:"");case 11:(c=e.sent).ok&&c.data&&P(c.data),f({pageStatus:s.Ok,statusCode:a.statusCode}),e.next=17;break;case 16:f({pageStatus:s.Error,statusCode:a.statusCode,messages:a.messages});case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(g.a)(v.a.mark((function e(t){var r,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f({pageStatus:s.Loading,statusCode:-1}),e.next=3,y.post("/TodoTasks",a,null!==(r=q.jwt)&&void 0!==r?r:"");case 3:o=e.sent,console.log(o),o.ok?(n(I),_(new Date(Date.now())),f({pageStatus:s.Ok,statusCode:o.statusCode}),B()):f({pageStatus:s.Error,statusCode:o.statusCode,messages:o.messages});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(g.a)(v.a.mark((function e(t){var a,r,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f({pageStatus:s.Loading,statusCode:-1}),e.next=3,y.put("/TodoTasks",H,null!==(a=H.id)&&void 0!==a?a:"",null!==(r=q.jwt)&&void 0!==r?r:"");case 3:(n=e.sent).ok?(f({pageStatus:s.Ok,statusCode:n.statusCode}),V(L),B()):f({pageStatus:s.Error,statusCode:n.statusCode,messages:n.messages});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(g.a)(v.a.mark((function e(t){var a,r,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isCompleted?t.isCompleted=!1:t.isCompleted=!0,f({pageStatus:s.Loading,statusCode:-1}),e.next=4,y.put("/TodoTasks",t,null!==(a=t.id)&&void 0!==a?a:"",null!==(r=q.jwt)&&void 0!==r?r:"");case 4:(n=e.sent).ok?(f({pageStatus:s.Ok,statusCode:n.statusCode}),B()):f({pageStatus:s.Error,statusCode:n.statusCode,messages:n.messages});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(g.a)(v.a.mark((function e(){var t,a,r,n,o,c,i,l,d;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={priorityName:"Low",prioritySort:0},o={priorityName:"Normal",prioritySort:1},c={priorityName:"High",prioritySort:2},f({pageStatus:s.Loading,statusCode:-1}),e.next=6,y.post("/TodoPriorities",n,null!==(t=q.jwt)&&void 0!==t?t:"");case 6:if((i=e.sent).ok){e.next=10;break}return f({pageStatus:s.Error,statusCode:i.statusCode,messages:i.messages}),e.abrupt("return");case 10:return e.next=12,y.post("/TodoPriorities",o,null!==(a=q.jwt)&&void 0!==a?a:"");case 12:if((l=e.sent).ok){e.next=16;break}return f({pageStatus:s.Error,statusCode:l.statusCode,messages:l.messages}),e.abrupt("return");case 16:return e.next=18,y.post("/TodoPriorities",c,null!==(r=q.jwt)&&void 0!==r?r:"");case 18:if((d=e.sent).ok){e.next=22;break}return f({pageStatus:s.Error,statusCode:d.statusCode,messages:d.messages}),e.abrupt("return");case 22:f({pageStatus:s.Ok,statusCode:d.statusCode}),B();case 24:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(g.a)(v.a.mark((function e(){var t,a,r,n,o,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={categoryName:"Home",categorySort:0},n={categoryName:"Work",categorySort:1},f({pageStatus:s.Loading,statusCode:-1}),e.next=5,y.post("/TodoCategories",r,null!==(t=q.jwt)&&void 0!==t?t:"");case 5:if((o=e.sent).ok){e.next=9;break}return f({pageStatus:s.Error,statusCode:o.statusCode,messages:o.messages}),e.abrupt("return");case 9:return e.next=11,y.post("/TodoCategories",n,null!==(a=q.jwt)&&void 0!==a?a:"");case 11:if((c=e.sent).ok){e.next=15;break}return f({pageStatus:s.Error,statusCode:c.statusCode,messages:c.messages}),e.abrupt("return");case 15:f({pageStatus:s.Ok,statusCode:c.statusCode}),B();case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){B()}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(O,{pageStatus:h}),null!==q.jwt?Object(x.jsxs)("div",{className:"flex lg:flex-row flex-col justify-evenly",children:[Object(x.jsx)("div",{className:"flex flex-col lg:space-y-12",children:""!==H.id?Object(x.jsx)(F,{values:H,handleChange:function(e){switch(e.id){case"taskName":return void V(Object(l.a)(Object(l.a)({},H),{},{taskName:e.value}));case"todoCategoryId":return void V(Object(l.a)(Object(l.a)({},H),{},{todoCategoryId:e.value}));case"todoPriorityId":return void V(Object(l.a)(Object(l.a)({},H),{},{todoPriorityId:e.value}));default:return}},handleDateChange:function(e){V(Object(l.a)(Object(l.a)({},H),{},{dueDt:e}))},categories:C,priorities:E,editTodo:U}):Object(x.jsx)(A,{values:a,handleChange:function(e){switch(e.id){case"taskName":return void n(Object(l.a)(Object(l.a)({},a),{},{taskName:e.value}));case"todoCategoryId":return void n(Object(l.a)(Object(l.a)({},a),{},{todoCategoryId:e.value}));case"todoPriorityId":return void n(Object(l.a)(Object(l.a)({},a),{},{todoPriorityId:e.value}));default:return}},addTodo:G,pageStatus:h,categories:C,priorities:E,handleDateChange:function(e){_(e),n(Object(l.a)(Object(l.a)({},a),{},{dueDt:e}))},date:R,generateDefaultPriorities:K,generateDefaultCategories:Q})}),Object(x.jsx)(S,{values:d,setSelectedTodo:V,selectedTodo:H,setTodoCompletedValue:Y})]}):Object(x.jsx)(m.a,{to:"/"})]})},P=function(){var e=Object(r.useContext)(u);return Object(x.jsxs)("div",{className:"flex flex-col cursor-default",children:[Object(x.jsx)("p",{className:"text-9xl font-bold text-pink-200",children:"Todos."}),null===e.jwt?Object(x.jsxs)("p",{className:"text-2xl font-bold text-pink-200 pl-6",children:[Object(x.jsx)(b.b,{className:"hover:text-white",to:"/identity/login",children:"Login"})," to get started"]}):Object(x.jsx)("p",{className:"text-2xl font-bold text-pink-200 pl-6 italic",children:"You miss 100% of the shots you don't take."})]})},M=function e(){Object(w.a)(this,e)};M.axios=k.a.create({baseURL:"https://taltech.akaver.com/api/v1/Account/",headers:{"Content-Type":"application/json"}}),M.login=function(){var e=Object(g.a)(v.a.mark((function e(t){var a,s,r,n,o,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.axios.post("Login",JSON.stringify(t));case 3:return a=e.sent,e.abrupt("return",{ok:a.status<=299,statusCode:a.status,data:a.data});case 7:return e.prev=7,e.t0=e.catch(0),c=e.t0,e.abrupt("return",{ok:!1,statusCode:null!==(s=null===(r=c.response)||void 0===r?void 0:r.status)&&void 0!==s?s:500,data:null===(n=c.response)||void 0===n?void 0:n.data,messages:null===(o=c.response)||void 0===o?void 0:o.data.messages});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),M.register=function(){var e=Object(g.a)(v.a.mark((function e(t){var a,s,r,n,o,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.axios.post("Register",JSON.stringify(t));case 3:return a=e.sent,e.abrupt("return",{ok:a.status<=299,statusCode:a.status,data:a.data});case 7:return e.prev=7,e.t0=e.catch(0),c=e.t0,e.abrupt("return",{ok:!1,statusCode:null!==(s=null===(r=c.response)||void 0===r?void 0:r.status)&&void 0!==s?s:500,data:null===(n=c.response)||void 0===n?void 0:n.data,messages:null===(o=c.response)||void 0===o?void 0:o.data.messages});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();var J={email:"",password:""},R=function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"flex justify-center p-2 border-t border-b border-1",children:Object(x.jsxs)("form",{className:"p-2 w-96 sm:w-120 text-white space-y-4",children:[Object(x.jsxs)("div",{className:"grid grid-col",children:[Object(x.jsx)("label",{htmlFor:"email",className:"underline",children:"Email"}),Object(x.jsx)("input",{id:"email",type:"email",autoComplete:"email",className:"p-1 text-black bg-gray-100",value:e.values.email,onChange:function(t){return e.handleChange(t.target)}})]}),Object(x.jsxs)("div",{className:"grid grid-col",children:[Object(x.jsx)("label",{htmlFor:"password",className:"underline",children:"Password"}),Object(x.jsx)("input",{id:"password",type:"password",autoComplete:"password",className:"p-1 text-black bg-gray-100",value:e.values.password,onChange:function(t){return e.handleChange(t.target)}})]}),Object(x.jsx)("div",{className:"flex justify-center",children:Object(x.jsx)("button",{onClick:function(t){e.toggleAuthStatus(t.target),t.preventDefault()},className:"p-2 bg-green-600 w-full font-bold",children:"Login"})})]})}),Object(x.jsx)(O,{pageStatus:e.pageStatus})]})},_=function(){var e=Object(r.useState)(J),t=Object(i.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)({pageStatus:s.Ok,statusCode:0}),c=Object(i.a)(o,2),d=c[0],j=c[1],b=Object(r.useContext)(u),p=function(){var e=Object(g.a)(v.a.mark((function e(t){var r,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j({pageStatus:s.Loading,statusCode:-1}),e.next=3,M.login({email:a.email,password:a.password});case 3:(r=e.sent).ok&&r.data&&(n=r.data,b.setAuthInfo(n.token,n.firstName,n.lastName),j({pageStatus:s.Ok,statusCode:0})),j({pageStatus:s.Error,statusCode:r.statusCode,messages:r.messages});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)(x.Fragment,{children:null===b.jwt?Object(x.jsx)(R,{values:a,handleChange:function(e){"email"===e.id&&n(Object(l.a)(Object(l.a)({},a),{},{email:e.value})),"password"===e.id&&n(Object(l.a)(Object(l.a)({},a),{},{password:e.value}))},toggleAuthStatus:p,pageStatus:d}):Object(x.jsx)(m.a,{to:"/todos"})})},z={email:"",password:"",firstName:"",lastName:""},W=function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"flex justify-center p-2 border-t border-b border-1",children:Object(x.jsxs)("form",{className:"p-2 w-96 sm:w-120 text-white space-y-4",children:[Object(x.jsxs)("div",{className:"grid grid-col mb-2",children:[Object(x.jsx)("label",{htmlFor:"email",className:"underline",children:"Email"}),Object(x.jsx)("input",{id:"email",type:"email",autoComplete:"email",className:"p-1 text-black bg-gray-100",value:e.values.email,onChange:function(t){return e.handleChange(t.target)}})]}),Object(x.jsxs)("div",{className:"grid grid-col mb-2",children:[Object(x.jsx)("label",{htmlFor:"password",className:"underline",children:"Password"}),Object(x.jsx)("input",{id:"password",type:"password",autoComplete:"password",className:"p-1 text-black bg-gray-100",value:e.values.password,onChange:function(t){return e.handleChange(t.target)}})]}),Object(x.jsxs)("div",{className:"grid grid-col mb-2",children:[Object(x.jsx)("label",{htmlFor:"firstName",className:"underline",children:"First name"}),Object(x.jsx)("input",{id:"firstName",type:"text",className:"p-1 text-black bg-gray-100",value:e.values.firstName,onChange:function(t){return e.handleChange(t.target)}})]}),Object(x.jsxs)("div",{className:"grid grid-col mb-2",children:[Object(x.jsx)("label",{htmlFor:"lastName",className:"underline",children:"Last Name"}),Object(x.jsx)("input",{id:"lastName",type:"text",className:"p-1 text-black bg-gray-100",value:e.values.lastName,onChange:function(t){return e.handleChange(t.target)}})]}),Object(x.jsx)("div",{className:"flex justify-center",children:Object(x.jsx)("button",{onClick:function(t){e.toggleAuthStatus(t.target),t.preventDefault()},className:"p-2 bg-yellow-600 w-full font-bold",children:"Register"})})]})}),Object(x.jsx)(O,{pageStatus:e.pageStatus})]})},H=function(){var e=Object(r.useState)(z),t=Object(i.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)({pageStatus:s.Ok,statusCode:0}),c=Object(i.a)(o,2),d=c[0],j=c[1],b=Object(r.useContext)(u),p=function(){var e=Object(g.a)(v.a.mark((function e(t){var r,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j({pageStatus:s.Loading,statusCode:-1}),e.next=3,M.register({email:a.email,password:a.password,firstName:a.firstName,lastName:a.lastName});case 3:(r=e.sent).ok&&r.data&&(n=r.data,b.setAuthInfo(n.token,n.firstName,n.lastName),j({pageStatus:s.Ok,statusCode:0})),j({pageStatus:s.Error,statusCode:r.statusCode,messages:r.messages});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)(x.Fragment,{children:null===b.jwt?Object(x.jsx)(W,{values:a,handleChange:function(e){switch(e.id){case"email":n(Object(l.a)(Object(l.a)({},a),{},{email:e.value}));break;case"password":n(Object(l.a)(Object(l.a)({},a),{},{password:e.value}));break;case"firstName":n(Object(l.a)(Object(l.a)({},a),{},{firstName:e.value}));break;case"lastName":n(Object(l.a)(Object(l.a)({},a),{},{lastName:e.value}))}},toggleAuthStatus:p,pageStatus:d}):Object(x.jsx)(m.a,{to:"/todos"})})},V=function(e){var t=function(e){return Object(x.jsxs)("div",{className:"p-4 border-2 border-white rounded-md bg-white text-blue-500",children:[Object(x.jsx)("div",{className:"font-semibold",children:e.categoryName}),Object(x.jsx)("div",{children:e.categorySort})]})};return Object(x.jsx)("div",{className:"flex justify-evenly border-b border-t border-white p-4",children:e.categories.map((function(e){return Object(r.createElement)(t,Object(l.a)(Object(l.a)({},e),{},{key:e.id}))}))})},q=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)({pageStatus:s.Loading,statusCode:-1}),c=Object(i.a)(o,2),l=c[0],d=c[1],j=Object(r.useContext)(u),b=function(){var e=Object(g.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getAll("/TodoCategories",null!==(t=j.jwt)&&void 0!==t?t:"");case 2:(a=e.sent).ok&&a.data?(n(a.data),d({pageStatus:s.Ok,statusCode:a.statusCode})):d({pageStatus:s.Error,statusCode:a.statusCode,messages:a.messages});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){b()}),[]),Object(x.jsx)(x.Fragment,{children:null!==j.jwt?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(O,{pageStatus:l}),Object(x.jsx)(V,{categories:a})]}):Object(x.jsx)(m.a,{to:"/"})})},B=function(e){var t=function(e){return Object(x.jsxs)("div",{className:"p-4 border-2 border-white rounded-md bg-white text-blue-500",children:[Object(x.jsx)("div",{className:"font-semibold",children:e.priorityName}),Object(x.jsx)("div",{children:e.prioritySort})]})};return Object(x.jsx)("div",{className:"flex justify-evenly border-b border-t border-white p-4",children:e.priorities.map((function(e){return Object(r.createElement)(t,Object(l.a)(Object(l.a)({},e),{},{key:e.id}))}))})},G=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)({pageStatus:s.Loading,statusCode:-1}),c=Object(i.a)(o,2),l=c[0],d=c[1],j=Object(r.useContext)(u),b=function(){var e=Object(g.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getAll("/TodoPriorities",null!==(t=j.jwt)&&void 0!==t?t:"");case 2:(a=e.sent).ok&&a.data?(n(a.data),d({pageStatus:s.Ok,statusCode:a.statusCode})):d({pageStatus:s.Error,statusCode:a.statusCode,messages:a.messages});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){b()}),[]),Object(x.jsx)(x.Fragment,{children:null!==j.jwt?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(O,{pageStatus:l}),Object(x.jsx)(B,{priorities:a})]}):Object(x.jsx)(m.a,{to:"/"})})};var U=function(){var e=Object(r.useState)(Object(l.a)(Object(l.a)({},d),{},{setAuthInfo:function(e,t,r){s(Object(l.a)(Object(l.a)({},a),{},{jwt:e,firstName:t,lastName:r}))}})),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(x.jsx)(j,{value:a,children:Object(x.jsxs)("div",{className:"dark:bg-gray-800 bg-blue-700 min-h-screen",children:[Object(x.jsx)(p,{}),Object(x.jsx)("main",{className:"p-4",children:Object(x.jsxs)(m.d,{children:[Object(x.jsx)(m.b,{exact:!0,path:"/",component:P}),Object(x.jsx)(m.b,{exact:!0,path:"/identity/login",component:_}),Object(x.jsx)(m.b,{exact:!0,path:"/identity/register",component:H}),Object(x.jsx)(m.b,{exact:!0,path:"/todos",component:E}),Object(x.jsx)(m.b,{exact:!0,path:"/categories",component:q}),Object(x.jsx)(m.b,{exact:!0,path:"/priorities",component:G}),Object(x.jsx)(m.b,{component:h})]})})]})})};a(167),a(168),a(169),a(170);c.a.render(Object(x.jsx)(b.a,{basename:"/react-hw-final",children:Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(U,{})})}),document.getElementById("root"))}},[[171,1,2]]]);
//# sourceMappingURL=main.a52e6ed2.chunk.js.map