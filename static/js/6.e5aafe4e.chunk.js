(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6,8],{102:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return _}));var n=r(60),a=r(0),c=r(3),s=r(9),i=r(96),u=r.n(i),o=r(54),l=r(56),p=r(57),b=r(58),d=r(59),j=r(1),f="idle",v="pending",m="resolved",h="rejected",g=Object(a.lazy)((function(){return r.e(7).then(r.bind(null,97))})),O=Object(a.lazy)((function(){return r.e(9).then(r.bind(null,99))}));function _(){var e=Object(c.h)().movieId,t=Object(c.i)(),r=t.url,i=t.path,_=Object(c.f)(),x=Object(c.g)(),w=Object(a.useState)(null),N=Object(n.a)(w,2),y=N[0],M=N[1],k=Object(a.useState)(null),I=Object(n.a)(k,2),P=I[0],D=I[1],S=Object(a.useState)(f),F=Object(n.a)(S,2),C=F[0],T=F[1];Object(a.useEffect)((function(){T(v),o.a.FetchMovieInfo(e).then((function(e){var t=e.poster_path,r=e.original_title,n=e.popularity,a=e.overview,c=e.genres;M({src:t?"".concat(d.a).concat(t):"".concat(b.a),title:r,score:n.toFixed(1),overview:a,genres:c}),T(m)})).catch((function(e){console.log(e),D(e),T(h)}))}),[e,P]);return Object(j.jsxs)("main",{className:u.a.container,children:[Object(j.jsx)("button",{className:u.a.btn,onClick:function(){var e,t;_.push(null!==(e=null===x||void 0===x||null===(t=x.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/")},type:"button",children:"Go Back"}),C===v&&Object(j.jsx)(p.a,{}),C===h&&Object(j.jsx)(l.default,{}),C===m&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:u.a.wrapper,children:[Object(j.jsx)("img",{className:u.a.img,src:y.src,alt:y.title}),Object(j.jsxs)("div",{className:u.a.description,children:[Object(j.jsx)("h2",{className:u.a.movieTitle,children:y.title}),Object(j.jsx)("h3",{className:u.a.title,children:"Score"}),Object(j.jsx)("p",{className:u.a.info,children:y.score}),Object(j.jsx)("h3",{className:u.a.title,children:"About"}),Object(j.jsx)("p",{className:u.a.info,children:y.overview}),Object(j.jsx)("h3",{className:u.a.title,children:"Genres"}),Object(j.jsx)("ul",{className:u.a.genre,children:y.genres.map((function(e){return Object(j.jsx)("li",{className:u.a.generItem,children:e.name},e.id)}))})]})]}),Object(j.jsxs)("ul",{className:u.a.subMenu,children:[Object(j.jsx)("li",{children:Object(j.jsx)(s.c,{to:{pathname:"".concat(r,"/cast"),state:{from:x.state?x.state.from:"/"}},className:u.a.submenuItem,activeClassName:u.a.activeSubmenuItem,children:"Cast"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.c,{to:{pathname:"".concat(r,"/reviews"),state:{from:x.state?x.state.from:"/"}},className:u.a.submenuItem,activeClassName:u.a.activeSubmenuItem,children:"Reviews"})})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)(a.Suspense,{fallback:Object(j.jsx)(p.a,{}),children:[Object(j.jsx)(c.a,{path:"".concat(i,"/cast"),children:C===m&&Object(j.jsx)(g,{})}),Object(j.jsx)(c.a,{path:"".concat(i,"/reviews"),children:C===m&&Object(j.jsx)(O,{})})]})]})]})}},54:function(e,t,r){"use strict";var n=r(62),a=r.n(n),c=r(63),s=r(64),i=r.n(s);function u(){return(u=Object(c.a)(a.a.mark((function e(t){var r,n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,r={url:"search/movie",params:{query:t}},e.next=6,i()(r,t);case 6:return n=e.sent,c=n.data,e.abrupt("return",c.results);case 11:return e.prev=11,e.t0=e.catch(2),console.log("error",{error:e.t0}),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}function o(){return(o=Object(c.a)(a.a.mark((function e(t){var r,n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"movie/".concat(t)},e.next=4,i()(r,t);case 4:return n=e.sent,c=n.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function l(){return(l=Object(c.a)(a.a.mark((function e(t){var r,n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"movie/".concat(t,"/credits")},e.next=4,i()(r,t);case 4:return n=e.sent,c=n.data,e.abrupt("return",c.cast);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function p(){return(p=Object(c.a)(a.a.mark((function e(t){var r,n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"movie/".concat(t,"/reviews")},e.next=4,i()(r,t);case 4:return n=e.sent,c=n.data,e.abrupt("return",c.results);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}i.a.defaults.baseURL="https://api.themoviedb.org/3",i.a.defaults.params={api_key:"f8f9751a5749389ca93ecf12bfd37415",language:"en-US"};var b={FetchTrendingMovies:function(){var e=Object(c.a)(a.a.mark((function e(){var t,r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"trending/movie/week"},e.next=4,i()(t);case 4:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),fetchMoviesByKeyWord:function(e){return u.apply(this,arguments)},FetchMovieInfo:function(e){return o.apply(this,arguments)},FetchCastInfo:function(e){return l.apply(this,arguments)},FetchMovieReviews:function(e){return p.apply(this,arguments)}};t.a=b},55:function(e,t,r){e.exports={wrapper:"NotFound_wrapper__30CBE"}},56:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return i}));var n=r.p+"static/media/not-found.8dfe76dc.jpg",a=r(55),c=r.n(a),s=r(1);function i(){return Object(s.jsx)("div",{className:c.a.wrapper,children:Object(s.jsx)("img",{width:"700",src:n,alt:"nothing-found"})})}},57:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(16),a=r.n(n),c=(r(65),r(61)),s=r.n(c),i=r(1);function u(){return Object(i.jsx)("div",{className:s.a.loader,children:Object(i.jsx)(a.a,{type:"Grid",color:"#ff8c00",height:100,width:100,timeout:3e3})})}},58:function(e,t,r){"use strict";t.a=r.p+"static/media/notFoundImg.d11b58e2.png"},59:function(e,t,r){"use strict";t.a="https://image.tmdb.org/t/p/w500"},61:function(e,t,r){e.exports={loader:"Loader_loader__1TkX0"}},96:function(e,t,r){e.exports={title:"MovieDetailsPage_title__3n508",img:"MovieDetailsPage_img__3YUNe",wrapper:"MovieDetailsPage_wrapper__1fqiP",btn:"MovieDetailsPage_btn__1wJkf",container:"MovieDetailsPage_container__3zhy-",description:"MovieDetailsPage_description__2nyl8",movieTitle:"MovieDetailsPage_movieTitle__2VNKZ",info:"MovieDetailsPage_info__1bU_U",genre:"MovieDetailsPage_genre__33lLk",generItem:"MovieDetailsPage_generItem__2CgV5",subMenu:"MovieDetailsPage_subMenu__RZxfP",submenuItem:"MovieDetailsPage_submenuItem__TBhwG",activeSubmenuItem:"MovieDetailsPage_activeSubmenuItem__1f-ti"}}}]);
//# sourceMappingURL=6.e5aafe4e.chunk.js.map