webpackJsonp([1],{470:function(t,e,i){var a=i(0)(i(545),i(718),null,null,null);t.exports=a.exports},500:function(t,e,i){"use strict";e.a=[{title:"Tabs",props:[{name:"<code>v-model</code>",description:"Binding value, tab index",type:"Number",values:"—",default:"<code>0</code>"},{name:"<code>expanded</code>",description:"Make tab full width",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>animated</code>",description:"Tabs have slide animation",type:"Boolean",values:"—",default:"<code>true</code>"},{name:"<code>type</code>",description:"Type/Style of the tab, optional",type:"String",values:"<code>is-boxed</code>, <code>is-toggle</code>",default:"—"},{name:"<code>size</code>",description:"Size of the tab, optional",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"—"},{name:"<code>position</code>",description:"Position of the tab, optional",type:"String",values:"<code>is-centered</code>, <code>is-right</code>",default:"—"}],events:[{name:"<code>change</code>",description:"Triggers when active tab is changed",parameters:"<code>index: Number</code>"}]},{title:"Tab Item",props:[{name:"<code>label</code>",description:"Tab label",type:"String",values:"—",default:"—"},{name:"<code>icon</code>",description:"Icon name",type:"String",values:"—",default:"—"},{name:"<code>icon-pack</code>",description:"Icon pack to use",type:"String",values:"—",default:"<code>mdi</code>"}]}]},544:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{activeTab:0}}}},545:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(500),s=i(660),l=i.n(s),n=i(606),b=i.n(n),o=i(659),c=i.n(o),r=i(605),d=i.n(r),u=i(658),m=i.n(u),v=i(604),p=i.n(v),_=i(661),h=i.n(_),x=i(607),f=i.n(x),g=i(656),y=i.n(g),C=i(602),E=i.n(C),P=i(662),M=i.n(P),k=i(608),V=i.n(k),w=i(657),T=i.n(w),S=i(603),z=i.n(S);e.default={components:{ExSimple:l.a,ExPosition:c.a,ExIcons:m.a,ExSizes:h.a,ExBoxed:y.a,ExToggle:M.a,ExExpanded:T.a},data:function(){return{api:a.a,ExSimpleCode:b.a,ExPositionCode:d.a,ExIconsCode:p.a,ExSizesCode:f.a,ExBoxedCode:E.a,ExToggleCode:V.a,ExExpandedCode:z.a}}}},602:function(t,e){t.exports='<template>\n    <b-tabs type="is-boxed">\n        <b-tab-item label="Pictures" icon="photo_library"></b-tab-item>\n        <b-tab-item label="Music" icon="library_music"></b-tab-item>\n        <b-tab-item label="Videos" icon="video_library"></b-tab-item>\n    </b-tabs>\n</template>\n'},603:function(t,e){t.exports='<template>\n    <b-tabs type="is-toggle" expanded>\n        <b-tab-item label="Pictures" icon="photo_library"></b-tab-item>\n        <b-tab-item label="Music" icon="library_music"></b-tab-item>\n        <b-tab-item label="Videos" icon="video_library"></b-tab-item>\n    </b-tabs>\n</template>\n'},604:function(t,e){t.exports='<template>\n    <b-tabs>\n        <b-tab-item label="Pictures" icon="photo_library"></b-tab-item>\n        <b-tab-item label="Music" icon="library_music"></b-tab-item>\n        <b-tab-item label="Videos" icon="video_library"></b-tab-item>\n    </b-tabs>\n</template>\n'},605:function(t,e){t.exports='<template>\n    <section>\n        <b-tabs position="is-centered" class="block">\n            <b-tab-item label="Pictures"></b-tab-item>\n            <b-tab-item label="Music"></b-tab-item>\n            <b-tab-item label="Videos"></b-tab-item>\n        </b-tabs>\n\n        <b-tabs position="is-right" class="block">\n            <b-tab-item label="Pictures"></b-tab-item>\n            <b-tab-item label="Music"></b-tab-item>\n            <b-tab-item label="Videos"></b-tab-item>\n        </b-tabs>\n    </section>\n</template>\n'},606:function(t,e){t.exports='<template>\n    <section>\n        <button class="button block" @click="activeTab = 1">Set Music</button>\n        <b-tabs v-model="activeTab">\n            <b-tab-item label="Pictures">\n                Lorem ipsum dolor sit amet.\n            </b-tab-item>\n\n            <b-tab-item label="Music">\n                Lorem <br>\n                ipsum <br>\n                dolor <br>\n                sit <br>\n                amet.\n            </b-tab-item>\n\n            <b-tab-item label="Videos">\n                Nunc nec velit nec libero vestibulum eleifend.\n                Curabitur pulvinar congue luctus.\n                Nullam hendrerit iaculis augue vitae ornare.\n                Maecenas vehicula pulvinar tellus, id sodales felis lobortis eget.\n            </b-tab-item>\n        </b-tabs>\n    </section>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                activeTab: 0\n            }\n        }\n    }\n<\/script>\n'},607:function(t,e){t.exports='<template>\n    <section>\n        <b-tabs size="is-small" class="block">\n            <b-tab-item label="Pictures" icon="photo_library"></b-tab-item>\n            <b-tab-item label="Music" icon="library_music"></b-tab-item>\n            <b-tab-item label="Videos" icon="video_library"></b-tab-item>\n        </b-tabs>\n\n        <b-tabs size="is-medium" class="block">\n            <b-tab-item label="Pictures" icon="photo_library"></b-tab-item>\n            <b-tab-item label="Music" icon="library_music"></b-tab-item>\n            <b-tab-item label="Videos" icon="video_library"></b-tab-item>\n        </b-tabs>\n\n        <b-tabs size="is-large" class="block">\n            <b-tab-item label="Pictures" icon="photo_library"></b-tab-item>\n            <b-tab-item label="Music" icon="library_music"></b-tab-item>\n            <b-tab-item label="Videos" icon="video_library"></b-tab-item>\n        </b-tabs>\n    </section>\n</template>\n'},608:function(t,e){t.exports='<template>\n    <b-tabs type="is-toggle">\n        <b-tab-item label="Pictures" icon="photo_library"></b-tab-item>\n        <b-tab-item label="Music" icon="library_music"></b-tab-item>\n        <b-tab-item label="Videos" icon="video_library"></b-tab-item>\n    </b-tabs>\n</template>\n'},656:function(t,e,i){var a=i(0)(null,i(722),null,null,null);t.exports=a.exports},657:function(t,e,i){var a=i(0)(null,i(703),null,null,null);t.exports=a.exports},658:function(t,e,i){var a=i(0)(null,i(760),null,null,null);t.exports=a.exports},659:function(t,e,i){var a=i(0)(null,i(723),null,null,null);t.exports=a.exports},660:function(t,e,i){var a=i(0)(i(544),i(715),null,null,null);t.exports=a.exports},661:function(t,e,i){var a=i(0)(null,i(695),null,null,null);t.exports=a.exports},662:function(t,e,i){var a=i(0)(null,i(700),null,null,null);t.exports=a.exports},695:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("b-tabs",{staticClass:"block",attrs:{size:"is-small"}},[i("b-tab-item",{attrs:{label:"Pictures",icon:"photo_library"}}),t._v(" "),i("b-tab-item",{attrs:{label:"Music",icon:"library_music"}}),t._v(" "),i("b-tab-item",{attrs:{label:"Videos",icon:"video_library"}})],1),t._v(" "),i("b-tabs",{staticClass:"block",attrs:{size:"is-medium"}},[i("b-tab-item",{attrs:{label:"Pictures",icon:"photo_library"}}),t._v(" "),i("b-tab-item",{attrs:{label:"Music",icon:"library_music"}}),t._v(" "),i("b-tab-item",{attrs:{label:"Videos",icon:"video_library"}})],1),t._v(" "),i("b-tabs",{staticClass:"block",attrs:{size:"is-large"}},[i("b-tab-item",{attrs:{label:"Pictures",icon:"photo_library"}}),t._v(" "),i("b-tab-item",{attrs:{label:"Music",icon:"library_music"}}),t._v(" "),i("b-tab-item",{attrs:{label:"Videos",icon:"video_library"}})],1)],1)},staticRenderFns:[]}},700:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-tabs",{attrs:{type:"is-toggle"}},[i("b-tab-item",{attrs:{label:"Pictures",icon:"photo_library"}}),t._v(" "),i("b-tab-item",{attrs:{label:"Music",icon:"library_music"}}),t._v(" "),i("b-tab-item",{attrs:{label:"Videos",icon:"video_library"}})],1)},staticRenderFns:[]}},703:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-tabs",{attrs:{type:"is-toggle",expanded:""}},[i("b-tab-item",{attrs:{label:"Pictures",icon:"photo_library"}}),t._v(" "),i("b-tab-item",{attrs:{label:"Music",icon:"library_music"}}),t._v(" "),i("b-tab-item",{attrs:{label:"Videos",icon:"video_library"}})],1)},staticRenderFns:[]}},715:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("button",{staticClass:"button block",on:{click:function(e){t.activeTab=1}}},[t._v("Set Music")]),t._v(" "),i("b-tabs",{model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[i("b-tab-item",{attrs:{label:"Pictures"}},[t._v("\n            Lorem ipsum dolor sit amet.\n        ")]),t._v(" "),i("b-tab-item",{attrs:{label:"Music"}},[t._v("\n            Lorem "),i("br"),t._v("\n            ipsum "),i("br"),t._v("\n            dolor "),i("br"),t._v("\n            sit "),i("br"),t._v("\n            amet.\n        ")]),t._v(" "),i("b-tab-item",{attrs:{label:"Videos"}},[t._v("\n            Nunc nec velit nec libero vestibulum eleifend.\n            Curabitur pulvinar congue luctus.\n            Nullam hendrerit iaculis augue vitae ornare.\n            Maecenas vehicula pulvinar tellus, id sodales felis lobortis eget.\n        ")])],1)],1)},staticRenderFns:[]}},718:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("h1",{staticClass:"title is-spaced"},[t._v("Tabs")]),t._v(" "),i("h2",{staticClass:"subtitle"},[t._v("Responsive horizontal navigation tabs, switch between contents with ease")]),t._v(" "),i("hr"),t._v(" "),i("div",{staticClass:"example"},[i("ex-simple")],1),t._v(" "),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"example-code"},[i("code",{staticClass:"html"},[t._v(t._s(t.ExSimpleCode))])]),t._v(" "),i("h2",{staticClass:"title"},[t._v("Position")]),t._v(" "),i("div",{staticClass:"example"},[i("ex-position")],1),t._v(" "),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"example-code"},[i("code",{staticClass:"html"},[t._v(t._s(t.ExPositionCode))])]),t._v(" "),i("h2",{staticClass:"title"},[t._v("Icons")]),t._v(" "),i("div",{staticClass:"example"},[i("ex-icons")],1),t._v(" "),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"example-code"},[i("code",{staticClass:"html"},[t._v(t._s(t.ExIconsCode))])]),t._v(" "),i("h2",{staticClass:"title"},[t._v("Sizes")]),t._v(" "),i("div",{staticClass:"example"},[i("ex-sizes")],1),t._v(" "),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"example-code"},[i("code",{staticClass:"html"},[t._v(t._s(t.ExSizesCode))])]),t._v(" "),i("h2",{staticClass:"title is-spaced"},[t._v("Types")]),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"example"},[i("ex-boxed")],1),t._v(" "),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"example-code"},[i("code",{staticClass:"html"},[t._v(t._s(t.ExBoxedCode))])]),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"example"},[i("ex-toggle")],1),t._v(" "),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"example-code"},[i("code",{staticClass:"html"},[t._v(t._s(t.ExToggleCode))])]),t._v(" "),i("h2",{staticClass:"title is-spaced"},[t._v("Expanded")]),t._v(" "),t._m(2),t._v(" "),i("div",{staticClass:"example"},[i("ex-expanded")],1),t._v(" "),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"example-code"},[i("code",{staticClass:"html"},[t._v(t._s(t.ExExpandedCode))])]),t._v(" "),i("hr"),t._v(" "),i("h2",{staticClass:"title is-spaced"},[t._v("API")]),t._v(" "),i("api-view",{attrs:{data:t.api}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"content"},[t._v("If you want a more classic style with borders add the "),i("code",[t._v("is-boxed")]),t._v(" type.")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"content"},[t._v("Or like Radio Buttons with the "),i("code",[t._v("is-toggle")]),t._v(" type.")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"content"},[t._v("If you want the tabs to take full width, add the "),i("code",[t._v("expanded")]),t._v(" prop.")])}]}},722:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-tabs",{attrs:{type:"is-boxed"}},[i("b-tab-item",{attrs:{label:"Pictures",icon:"photo_library"}}),t._v(" "),i("b-tab-item",{attrs:{label:"Music",icon:"library_music"}}),t._v(" "),i("b-tab-item",{attrs:{label:"Videos",icon:"video_library"}})],1)},staticRenderFns:[]}},723:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("b-tabs",{staticClass:"block",attrs:{position:"is-centered"}},[i("b-tab-item",{attrs:{label:"Pictures"}}),t._v(" "),i("b-tab-item",{attrs:{label:"Music"}}),t._v(" "),i("b-tab-item",{attrs:{label:"Videos"}})],1),t._v(" "),i("b-tabs",{staticClass:"block",attrs:{position:"is-right"}},[i("b-tab-item",{attrs:{label:"Pictures"}}),t._v(" "),i("b-tab-item",{attrs:{label:"Music"}}),t._v(" "),i("b-tab-item",{attrs:{label:"Videos"}})],1)],1)},staticRenderFns:[]}},760:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-tabs",[i("b-tab-item",{attrs:{label:"Pictures",icon:"photo_library"}}),t._v(" "),i("b-tab-item",{attrs:{label:"Music",icon:"library_music"}}),t._v(" "),i("b-tab-item",{attrs:{label:"Videos",icon:"video_library"}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=1.ebfb7cbd7cbf1776b5aa.js.map