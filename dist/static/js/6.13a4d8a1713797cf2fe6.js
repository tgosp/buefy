webpackJsonp([6],{472:function(t,o,e){var i=e(0)(e(549),e(738),null,null,null);t.exports=i.exports},502:function(t,o,e){"use strict";o.a=[{props:[{name:"<code>type</code>",description:"Type (color) of the tooltip",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                    <code>is-warning</code>, <code>is-danger</code>,\n                    and any other colors you've set in the <code>$colors</code> list on Sass",default:"<code>is-primary</code>"},{name:"<code>active</code>",description:"Whether tooltip is active or not",type:"Boolean",values:"—",default:"<code>true</code>"},{name:"<code>label</code>",description:"Tooltip text",type:"String",values:"—",default:"—"},{name:"<code>position</code>",description:"Tooltip position in relation to the element",type:"String",values:"<code>is-top</code>, <code>is-bottom</code>, <code>is-left</code>, <code>is-right</code>",default:"<code>is-top</code>"},{name:"<code>always</code>",description:"Tooltip will be always active",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>animated</code>",description:"Tooltip will have a little fade animation",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>square</code>",description:"Tooltip will be square (not rounded corners)",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>dashed</code>",description:"Tooltip slot will have a dashed underline",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>multilined</code>",description:"Tooltip will be multilined",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>size</code>",description:"Tooltip multiline size (only works for multilined tooltips)",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"<code>is-medium</code>"}]}]},548:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{active:!0}}}},549:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i=e(502),n=e(670),l=e.n(n),s=e(616),a=e.n(s),c=e(671),u=e.n(c),r=e(617),d=e.n(r),p=e(669),b=e.n(p),v=e(615),m=e.n(v),h=e(672),_=e.n(h),g=e(618),f=e.n(g);o.default={components:{ExSimple:l.a,ExStyles:u.a,ExMultilined:b.a,ExToggle:_.a},data:function(){return{api:i.a,ExSimpleCode:a.a,ExStylesCode:d.a,ExMultilinedCode:m.a,ExToggleCode:f.a}}}},615:function(t,o){t.exports='<template>\n    <section>\n        <b-tooltip\n            label="Tooltip multilined, probably because it\'s too long for a casual tooltip"\n            multilined>\n            <button class="button is-dark">\n                Multiline (default)\n            </button>\n        </b-tooltip>\n\n        <b-tooltip\n            label="It\'s not briefy, but also not long enough"\n            size="is-small"\n            multilined>\n            <button class="button is-dark">\n                Multiline (small)\n            </button>\n        </b-tooltip>\n\n        <b-tooltip\n            label="Tooltip large multilined, because it\'s really long to be on a medium size. Did I tell you it\'s really long? Yes, it is — I asure you!"\n            position="is-bottom"\n            size="is-large"\n            multilined>\n            <button class="button is-dark">\n                Multiline (large)\n            </button>\n        </b-tooltip>\n    </section>\n</template>\n'},616:function(t,o){t.exports='<template>\n    <section>\n        <b-tooltip label="Tooltip right"\n            position="is-right">\n            <button class="button is-dark">\n                Right\n            </button>\n        </b-tooltip>\n\n        <b-tooltip label="Tooltip top">\n            <button class="button is-dark">\n                Top (default)\n            </button>\n        </b-tooltip>\n\n        <b-tooltip label="Tooltip bottom"\n            position="is-bottom">\n            <button class="button is-dark">\n                Bottom\n            </button>\n        </b-tooltip>\n\n        <b-tooltip label="Tooltip left"\n            position="is-left">\n            <button class="button is-dark">\n                Left\n            </button>\n        </b-tooltip>\n    </section>\n</template>\n'},617:function(t,o){t.exports='<template>\n    <section>\n        <b-tooltip label="Text is dashed" dashed>\n            Simple text\n        </b-tooltip>\n\n        <b-tooltip label="Maybe you like a little animation"\n            position="is-bottom"\n            animated>\n            <button class="button">Animated</button>\n        </b-tooltip>\n\n        <b-tooltip label="You prefer dark?"\n            type="is-dark"\n            position="is-bottom">\n            <button class="button">Dark</button>\n        </b-tooltip>\n\n        <b-tooltip label="Or light?"\n            type="is-light"\n            position="is-bottom">\n            <button class="button">Light</button>\n        </b-tooltip>\n\n        <b-tooltip label="I\'m never closing" always>\n            <button class="button">Always</button>\n        </b-tooltip>\n\n        <b-tooltip label="I\'m square"\n            position="is-bottom"\n            square>\n            <button class="button">Square</button>\n        </b-tooltip>\n    </section>\n</template>\n'},618:function(t,o){t.exports='<template>\n    <section>\n        <button class="button is-primary"\n            @click="active = !active">\n            Toggle\n        </button>\n        <hr>\n\n        <b-tooltip label="I\'m never closing"\n            :active="active"\n            always>\n            <button class="button">\n                Always\n            </button>\n        </b-tooltip>\n\n        <b-tooltip label="Tooltip right"\n            position="is-right"\n            :active="active">\n            <button class="button is-dark">\n                Right\n            </button>\n        </b-tooltip>\n    </section>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                active: true\n            }\n        }\n    }\n<\/script>\n'},669:function(t,o,e){var i=e(0)(null,e(728),null,null,null);t.exports=i.exports},670:function(t,o,e){var i=e(0)(null,e(750),null,null,null);t.exports=i.exports},671:function(t,o,e){var i=e(0)(null,e(702),null,null,null);t.exports=i.exports},672:function(t,o,e){var i=e(0)(e(548),e(735),null,null,null);t.exports=i.exports},702:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[e("b-tooltip",{attrs:{label:"Text is dashed",dashed:""}},[t._v("\n        Simple text\n    ")]),t._v(" "),e("b-tooltip",{attrs:{label:"Maybe you like a little animation",position:"is-bottom",animated:""}},[e("button",{staticClass:"button"},[t._v("Animated")])]),t._v(" "),e("b-tooltip",{attrs:{label:"You prefer dark?",type:"is-dark",position:"is-bottom"}},[e("button",{staticClass:"button"},[t._v("Dark")])]),t._v(" "),e("b-tooltip",{attrs:{label:"Or light?",type:"is-light",position:"is-bottom"}},[e("button",{staticClass:"button"},[t._v("Light")])]),t._v(" "),e("b-tooltip",{attrs:{label:"I'm never closing",always:""}},[e("button",{staticClass:"button"},[t._v("Always")])]),t._v(" "),e("b-tooltip",{attrs:{label:"I'm square",position:"is-bottom",square:""}},[e("button",{staticClass:"button"},[t._v("Square")])])],1)},staticRenderFns:[]}},728:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[e("b-tooltip",{attrs:{label:"Tooltip multilined, probably because it's too long for a casual tooltip",multilined:""}},[e("button",{staticClass:"button is-dark"},[t._v("\n            Multiline (default)\n        ")])]),t._v(" "),e("b-tooltip",{attrs:{label:"It's not briefy, but also not long enough",size:"is-small",multilined:""}},[e("button",{staticClass:"button is-dark"},[t._v("\n            Multiline (small)\n        ")])]),t._v(" "),e("b-tooltip",{attrs:{label:"Tooltip large multilined, because it's really long to be on a medium size. Did I tell you it's really long? Yes, it is — I asure you!",position:"is-bottom",size:"is-large",multilined:""}},[e("button",{staticClass:"button is-dark"},[t._v("\n            Multiline (large)\n        ")])])],1)},staticRenderFns:[]}},735:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[e("button",{staticClass:"button is-primary",on:{click:function(o){t.active=!t.active}}},[t._v("\n        Toggle\n    ")]),t._v(" "),e("hr"),t._v(" "),e("b-tooltip",{attrs:{label:"I'm never closing",active:t.active,always:""}},[e("button",{staticClass:"button"},[t._v("\n            Always\n        ")])]),t._v(" "),e("b-tooltip",{attrs:{label:"Tooltip right",position:"is-right",active:t.active}},[e("button",{staticClass:"button is-dark"},[t._v("\n            Right\n        ")])])],1)},staticRenderFns:[]}},738:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container"},[e("h1",{staticClass:"title is-spaced"},[t._v("Tooltip")]),t._v(" "),e("h2",{staticClass:"subtitle"},[t._v("Display a brief helper text to your user")]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("div",{staticClass:"example"},[e("ex-simple")],1)]),t._v(" "),e("div",{staticClass:"column"},[e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"html"},[t._v(t._s(t.ExSimpleCode))])])])]),t._v(" "),e("hr"),t._v(" "),e("h3",{staticClass:"title is-spaced"},[t._v("Styles")]),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("div",{staticClass:"example"},[e("ex-styles")],1)]),t._v(" "),e("div",{staticClass:"column"},[e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"html"},[t._v(t._s(t.ExStylesCode))])])])]),t._v(" "),e("hr"),t._v(" "),e("h3",{staticClass:"title is-spaced"},[t._v("Multilined")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("div",{staticClass:"example"},[e("ex-multilined")],1)]),t._v(" "),e("div",{staticClass:"column"},[e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"html"},[t._v(t._s(t.ExMultilinedCode))])])])]),t._v(" "),e("hr"),t._v(" "),e("h3",{staticClass:"title is-spaced"},[t._v("Toggle")]),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("div",{staticClass:"example"},[e("ex-toggle")],1)]),t._v(" "),e("div",{staticClass:"column"},[e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"html"},[t._v(t._s(t.ExToggleCode))])])])]),t._v(" "),e("hr"),t._v(" "),e("h2",{staticClass:"title is-spaced"},[t._v("API")]),t._v(" "),e("api-view",{attrs:{data:t.api}})],1)},staticRenderFns:[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",{staticClass:"content"},[t._v("Well, it's not always "),e("em",[t._v("that")]),t._v(" brief.")])}]}},750:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[e("b-tooltip",{attrs:{label:"Tooltip right",position:"is-right"}},[e("button",{staticClass:"button is-dark"},[t._v("\n            Right\n        ")])]),t._v(" "),e("b-tooltip",{attrs:{label:"Tooltip top"}},[e("button",{staticClass:"button is-dark"},[t._v("\n            Top (default)\n        ")])]),t._v(" "),e("b-tooltip",{attrs:{label:"Tooltip bottom",position:"is-bottom"}},[e("button",{staticClass:"button is-dark"},[t._v("\n            Bottom\n        ")])]),t._v(" "),e("b-tooltip",{attrs:{label:"Tooltip left",position:"is-left"}},[e("button",{staticClass:"button is-dark"},[t._v("\n            Left\n        ")])])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=6.13a4d8a1713797cf2fe6.js.map