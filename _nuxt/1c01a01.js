(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2],{244:function(t,e,r){"use strict";r.r(e);var n=r(30),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("h1",[t._v("damdam.dev")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(244).default})},248:function(t,e,r){var content=r(251);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("1b7833da",content,!0,{sourceMap:!1})},250:function(t,e,r){"use strict";r(248)},251:function(t,e,r){var n=r(40)(!1);n.push([t.i,".article-link{padding-bottom:2rem;display:block;text-decoration:none;transition:all .25s}.article-link:hover{background-color:hsla(0,0%,100%,.05);border-radius:1.8rem;padding:1rem 4rem 3rem}.description{font-size:1.6rem}",""]),t.exports=n},265:function(t,e,r){"use strict";r.r(e);var n=r(6),l=(r(39),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.params,e.next=3,r("articles").only(["title","description","slug"]).sortBy("createdAt","desc").fetch();case 3:return n=e.sent,e.abrupt("return",{articles:n});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{link:[{rel:"canonical",href:"https://www.damdam.dev".concat(this.$route.path)}]}}}),c=(r(250),r(30)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header",{staticClass:"header"}),t._v(" "),r("ul",t._l(t.articles,(function(article){return r("li",{key:article.slug,staticClass:"article-list"},[r("nuxt-link",{staticClass:"article-link",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[r("h2",{staticClass:"title"},[t._v(t._s(article.title))]),t._v(" "),r("p",{staticClass:"description"},[t._v("➥ "+t._s(article.description))])])],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(244).default})}}]);