(window.webpackJsonp=window.webpackJsonp||[]).push([[9,3,4,5],{244:function(t,e,n){var content=n(248);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("77c37b9f",content,!0,{sourceMap:!1})},245:function(t,e,n){var content=n(250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("2441d96d",content,!0,{sourceMap:!1})},246:function(t,e,n){"use strict";n.r(e);n(247);var r=n(30),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("damdam.dev")])])}],!1,null,"fe8a0996",null);e.default=component.exports;installComponents(component,{Header:n(246).default})},247:function(t,e,n){"use strict";n(244)},248:function(t,e,n){var r=n(39)(!1);r.push([t.i,"@media (hover:none) and (pointer:coarse){header[data-v-fe8a0996]{margin-bottom:1rem}}",""]),t.exports=r},249:function(t,e,n){"use strict";n(245)},250:function(t,e,n){var r=n(39)(!1);r.push([t.i,".navigation[data-v-114b129f]{margin:1rem 0;text-align:right}.navigation-item[data-v-114b129f]{display:inline-block;padding:0 .4rem}.navigation-item[data-v-114b129f]:first-child{padding-left:0}.navigation-item[data-v-114b129f]:last-child{padding-right:0}",""]),t.exports=r},251:function(t,e,n){var content=n(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("2e2a9ae8",content,!0,{sourceMap:!1})},252:function(t,e,n){"use strict";n.r(e);n(249);var r=n(30),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navigation"},[n("ul",{staticClass:"navigation-list"},[n("li",{staticClass:"navigation-item"},[n("a",{staticClass:"navigation-link",attrs:{href:"/"}},[t._v("home")])]),t._v(" "),n("li",{staticClass:"navigation-item"},[n("a",{staticClass:"navigation-link",attrs:{href:"/blog"}},[t._v("articles")])]),t._v(" "),n("li",{staticClass:"navigation-item"},[n("a",{staticClass:"navigation-link",attrs:{href:"/notes"}},[t._v("notes")])])])])}],!1,null,"114b129f",null);e.default=component.exports},253:function(t,e,n){"use strict";n(251)},254:function(t,e,n){var r=n(39)(!1);r.push([t.i,".prev-next-section[data-v-301c2f0b]{border-top:1px dashed hsla(0,0%,100%,.2);margin-top:2rem;padding-top:2rem;display:flex;justify-content:space-between}.next[data-v-301c2f0b],.prev[data-v-301c2f0b]{font-weight:700;font-size:1.2rem;border-radius:1rem;padding:1rem;background-color:#fff;color:#262a36;text-decoration:none}.next[data-v-301c2f0b]:hover,.prev[data-v-301c2f0b]:hover{text-decoration:underline}.down-left[data-v-301c2f0b]{display:inline-block;transform:rotate(180deg)}",""]),t.exports=r},255:function(t,e,n){"use strict";n.r(e);var r={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},o=(n(253),n(30)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"prev-next-section"},[t.prev?n("NuxtLink",{staticClass:"prev",attrs:{to:{name:"blog-slug",params:{slug:t.prev.slug}},title:t.prev.title}},[t._v("\n    Précédent "),n("span",{staticClass:"curved-arrrow down-left"},[t._v("➦")])]):n("span",[t._v(" ")]),t._v(" "),t.next?n("NuxtLink",{staticClass:"next",attrs:{to:{name:"blog-slug",params:{slug:t.next.slug}},title:t.next.title}},[n("span",{staticClass:"curved-arrrow up-right"},[t._v("➥")]),t._v(" Suivant\n  ")]):n("span",[t._v(" ")])],1)}),[],!1,null,"301c2f0b",null);e.default=component.exports},259:function(t,e,n){var content=n(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("9950752a",content,!0,{sourceMap:!1})},267:function(t,e,n){"use strict";n(259)},268:function(t,e,n){var r=n(39)(!1);r.push([t.i,".category{font-size:1.4rem;background-color:#f0f0f0;color:#262a36;padding:.4rem;border-radius:.4rem}",""]),t.exports=r},287:function(t,e,n){"use strict";n.r(e);var r=n(17),o=n(6),l=(n(41),{layout:"blog",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,l,c,f,d,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.params,e.next=3,n("notes",o.slug).fetch();case 3:return l=e.sent,e.next=6,n("notes").only(["title","slug","category"]).sortBy("createdAt","asc").surround(o.slug).fetch();case 6:return c=e.sent,f=Object(r.a)(c,2),d=f[0],v=f[1],e.abrupt("return",{note:l,prev:d,next:v});case 11:case"end":return e.stop()}}),e)})))()},head:function(){return{link:[{rel:"canonical",href:"https://www.damdam.dev".concat(this.$route.path)}]}},methods:{publicationDate:function(t){var e=new Date(t);return new Intl.DateTimeFormat("fr-FR").format(e)}}}),c=(n(267),n(30)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",[n("Navigation")],1),t._v(" "),n("article",[n("h1",[t._v(t._s(t.note.title)+" "),n("small",{staticClass:"category"},[t._v(t._s(t.note.category))])]),t._v(" "),n("p",[t._v(t._s(t.note.description))]),t._v(" "),n("p",[t._v("Publié le : "+t._s(t.publicationDate(t.note.createdAt)))]),t._v(" "),n("nuxt-content",{attrs:{document:t.note}}),t._v(" "),n("prev-next-article",{attrs:{prev:t.prev,next:t.next}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(252).default,Header:n(246).default,PrevNextArticle:n(255).default})}}]);