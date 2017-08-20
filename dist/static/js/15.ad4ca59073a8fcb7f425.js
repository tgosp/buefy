webpackJsonp([15],{481:function(t,e,o){var s=o(0)(o(567),o(744),null,null,null);t.exports=s.exports},508:function(t,e,o){"use strict";e.a=[{props:[{name:"<code>type</code>",description:"Type (color) of the toast",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                    <code>is-warning</code>, <code>is-danger</code>,\n                    and any other colors you've set in the <code>$colors</code> list on Sass",default:"<code>is-dark</code>"},{name:"<code>message</code>",description:"Message text",type:"String",values:"—",default:"—"},{name:"<code>position</code>",description:"Which position the toast will appear",type:"String",values:"<code>is-top-right</code>, <code>is-top</code>, <code>is-top-left</code>, <code>is-bottom-right</code>, <code>is-bottom</code>, <code>is-bottom-left</code>",default:"<code>is-top</code>"},{name:"<code>duration</code>",description:"Visibility duration in milliseconds",type:"Number",values:"—",default:"<code>2000</code>"},{name:"<code>container</code>",description:"DOM element the toast will be created on. Note that this also changes the <code>position</code> of the toast from <code>fixed</code> to <code>absolute</code>. Meaning that the container should be <code>fixed</code>.",type:"String",values:"—",default:"<code>body</code>"}]}]},566:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{toast:function(){this.$toast.open("Something happened")},success:function(){this.$toast.open({message:"Something happened correctly!",type:"is-success"})},danger:function(){this.$toast.open({duration:5e3,message:"Something's not good, also I'm on bottom",position:"is-bottom",type:"is-danger"})}}}},567:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(508),n=o(687),i=o.n(n),c=o(633),a=o.n(c);e.default={components:{ExSimple:i.a},data:function(){return{api:s.a,ExSimpleCode:a.a}}}},633:function(t,e){t.exports="<template>\n    <section>\n        <button class=\"button is-medium\" @click=\"toast\">\n            Launch toast (default)\n        </button>\n\n        <button class=\"button is-medium is-success\" @click=\"success\">\n            Launch toast (custom)\n        </button>\n\n        <button class=\"button is-medium is-danger\" @click=\"danger\">\n            Launch toast (custom)\n        </button>\n    </section>\n</template>\n\n<script>\n    export default {\n        methods: {\n            toast() {\n                this.$toast.open('Something happened')\n            },\n            success() {\n                this.$toast.open({\n                    message: 'Something happened correctly!',\n                    type: 'is-success'\n                })\n            },\n            danger() {\n                this.$toast.open({\n                    duration: 5000,\n                    message: `Something's not good, also I'm on bottom`,\n                    position: 'is-bottom',\n                    type: 'is-danger'\n                })\n            }\n        }\n    }\n<\/script>\n"},687:function(t,e,o){var s=o(0)(o(566),o(719),null,null,null);t.exports=s.exports},719:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("button",{staticClass:"button is-medium",on:{click:t.toast}},[t._v("\n        Launch toast (default)\n    ")]),t._v(" "),o("button",{staticClass:"button is-medium is-success",on:{click:t.success}},[t._v("\n        Launch toast (custom)\n    ")]),t._v(" "),o("button",{staticClass:"button is-medium is-danger",on:{click:t.danger}},[t._v("\n        Launch toast (custom)\n    ")])])},staticRenderFns:[]}},744:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("h1",{staticClass:"title is-spaced"},[t._v("Toast")]),t._v(" "),o("h2",{staticClass:"subtitle"},[t._v("Toasts are simple text messages to inform the user")]),t._v(" "),o("hr"),t._v(" "),o("div",{staticClass:"block"},[o("p",[t._v("They have a slightly transparency and are queued to not confuse the user.")]),t._v(" "),o("p",{staticClass:"content"},[o("small",[o("b",[t._v("Note:")]),t._v(" They queue with "),o("router-link",{attrs:{to:"/documentation/snackbar"}},[t._v("Snackbars")]),t._v(" as well.")],1)])]),t._v(" "),o("div",{staticClass:"block"},[o("ex-simple")],1),t._v(" "),o("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[o("code",{staticClass:"html"},[t._v(t._s(t.ExSimpleCode))])]),t._v(" "),o("hr"),t._v(" "),o("h2",{staticClass:"title is-spaced"},[t._v("API")]),t._v(" "),o("api-view",{attrs:{data:t.api}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=15.ad4ca59073a8fcb7f425.js.map