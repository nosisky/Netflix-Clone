(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},47:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),a=n.n(i),o=n(17),r=n.n(o),s=(n(28),n(29),n(5)),l=n.n(s),d=n(6),u=n(4),h=n(18),f=n.n(h).a.create({baseURL:"https://api.themoviedb.org/3"}),v=(n(47),n(19)),b=n(22),j=n.n(b);function p(e){var t=e.title,n=e.fetchUrl,a=e.isLargeRow,o=Object(i.useState)([]),r=Object(u.a)(o,2),s=r[0],h=r[1],b=Object(i.useState)(""),p=Object(u.a)(b,2),g=p[0],m=p[1];Object(i.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(n);case 2:return t=e.sent,h(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);return Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h2",{className:"title",children:t}),Object(c.jsx)("div",{className:"row_posters",children:s.map((function(e){return Object(c.jsx)("img",{onClick:function(){return function(e){var t=(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.name)||"";console.log(e),g?m(""):j()(t).then((function(e){var t=new URLSearchParams(new URL(e).search);m(t.get("v"))})).catch((function(e){return console.log({error:e})}))}(e)},className:"row_poster ".concat(a&&"row_posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original").concat(a?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),Object(c.jsx)("div",{style:{padding:"40px"},children:g&&Object(c.jsx)(v.a,{videoId:g,opts:{height:"390",width:"99%",playerVars:{autoplay:0}}})})]})}n(63);var g=function(){var e=Object(i.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?a(!0):a(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(c.jsxs)("div",{className:"nav ".concat(n&&"nav_black"),children:[Object(c.jsx)("img",{className:"nav_logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png",alt:"Netflix Logo"}),Object(c.jsx)("img",{className:"nav_avatar",src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png",alt:"Netflix Logo"})]})},m="d7e767ee6a35d744b5f38b492900c7df",O={fetchTrending:"/trending/all/week?api_key=".concat(m,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(m,"&with_network=123"),fetchTopRated:"/movie/top_rated?api_key=".concat(m,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(m,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(m,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(m,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(m,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(m,"&with_genres=99")};n(64);var x=function(){var e,t,n=Object(i.useState)([]),a=Object(u.a)(n,2),o=a[0],r=a[1];return Object(i.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(O.fetchNetflixOriginals);case 2:return t=e.sent,r(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url(\n        "https://image.tmdb.org/t/p/original/'.concat(null===o||void 0===o?void 0:o.backdrop_path,'"\n        )'),backgroundPosition:"center center"},children:[Object(c.jsxs)("div",{className:"banner_contents",children:[Object(c.jsx)("h1",{className:"banner_title",children:(null===o||void 0===o?void 0:o.title)||(null===o||void 0===o?void 0:o.name)||(null===o||void 0===o?void 0:o.original_name)}),Object(c.jsxs)("div",{className:"banner_buttons",children:[Object(c.jsx)("button",{className:"banner_button",children:"Play"}),Object(c.jsx)("button",{className:"banner_button",children:"My List"})]}),Object(c.jsx)("h1",{className:"banner_description",children:(e=null===o||void 0===o?void 0:o.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(c.jsx)("div",{className:"banner--fadeBottom"})]})};var _=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(g,{}),Object(c.jsx)(x,{}),Object(c.jsx)(p,{title:"NETFLIX ORIGINALS",fetchUrl:O.fetchNetflixOriginals,isLargeRow:!0}),Object(c.jsx)(p,{title:"Trending Now",fetchUrl:O.fetchTrending}),Object(c.jsx)(p,{title:"Top Rated",fetchUrl:O.fetchTopRated}),Object(c.jsx)(p,{title:"Action Movies",fetchUrl:O.fetchActionMovies}),Object(c.jsx)(p,{title:"Comedy Movies",fetchUrl:O.fetchComedyMovies}),Object(c.jsx)(p,{title:"Horror Movies",fetchUrl:O.fetchHorrorMovies}),Object(c.jsx)(p,{title:"Romance Movies",fetchUrl:O.fetchRomanceMovies}),Object(c.jsx)(p,{title:"Documentaries",fetchUrl:O.fetchDocumentaries})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(_,{})}),document.getElementById("root")),w()}},[[65,1,2]]]);
//# sourceMappingURL=main.a85386d1.chunk.js.map