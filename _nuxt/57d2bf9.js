(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3],{244:function(t,e,r){"use strict";r.r(e);var n=r(30),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("h1",[t._v("damdam.dev")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(244).default})},245:function(t,e,r){var content=r(247);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("2e2a9ae8",content,!0,{sourceMap:!1})},246:function(t,e,r){"use strict";r(245)},247:function(t,e,r){var n=r(40)(!1);n.push([t.i,".prev-next-section[data-v-301c2f0b]{border-top:1px dashed hsla(0,0%,100%,.2);margin-top:2rem;padding-top:2rem;display:flex;justify-content:space-between}.next[data-v-301c2f0b],.prev[data-v-301c2f0b]{font-weight:700;font-size:1.2rem;border-radius:1rem;padding:1rem;background-color:#fff;color:#262a36;text-decoration:none}.next[data-v-301c2f0b]:hover,.prev[data-v-301c2f0b]:hover{text-decoration:underline}.down-left[data-v-301c2f0b]{display:inline-block;transform:rotate(180deg)}",""]),t.exports=n},249:function(t,e,r){"use strict";r.r(e);var n={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},c=(r(246),r(30)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"prev-next-section"},[t.prev?r("NuxtLink",{staticClass:"prev",attrs:{to:{name:"blog-slug",params:{slug:t.prev.slug}},title:t.prev.title}},[t._v("\n    Précédent "),r("span",{staticClass:"curved-arrrow down-left"},[t._v("➦")])]):r("span",[t._v(" ")]),t._v(" "),t.next?r("NuxtLink",{staticClass:"next",attrs:{to:{name:"blog-slug",params:{slug:t.next.slug}},title:t.next.title}},[r("span",{staticClass:"curved-arrrow up-right"},[t._v("➥")]),t._v(" Suivant\n  ")]):r("span",[t._v(" ")])],1)}),[],!1,null,"301c2f0b",null);e.default=component.exports},264:function(t,e,r){"use strict";r.r(e);var n=r(17),c=r(6),l=(r(39),{asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,article,l,o,d,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,c=t.params,e.next=3,r("articles",c.slug).fetch();case 3:return article=e.sent,e.next=6,r("articles").only(["title","slug"]).sortBy("createdAt","asc").surround(c.slug).fetch();case 6:return l=e.sent,o=Object(n.a)(l,2),d=o[0],v=o[1],e.abrupt("return",{article:article,prev:d,next:v});case 11:case"end":return e.stop()}}),e)})))()},head:function(){return{link:[{rel:"canonical",href:"https://www.damdam.dev".concat(this.$route.path)}]}},methods:{publicationDate:function(t){var e=new Date(t);return new Intl.DateTimeFormat("fr-FR").format(e)}}}),o=r(30),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("article",[r("h1",[t._v(t._s(t.article.title))]),t._v(" "),r("p",[t._v(t._s(t.article.description))]),t._v(" "),r("p",[t._v("Publié le : "+t._s(t.publicationDate(t.article.updatedAt)))]),t._v(" "),r("nuxt-content",{attrs:{document:t.article}}),t._v(" "),r("prev-next-article",{attrs:{prev:t.prev,next:t.next}})],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("a",{attrs:{href:"/"}},[t._v("Retour accueil")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(244).default,PrevNextArticle:r(249).default})}}]);