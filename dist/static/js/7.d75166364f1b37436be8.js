webpackJsonp([7],{476:function(e,t,n){var i=n(0)(n(556),n(731),null,null,null);e.exports=i.exports},503:function(e,t,n){"use strict";t.a=[{props:[{name:"<code>type</code>",description:"Type (color) of the confirm button (and the icon if <code>hasIcon</code>)",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                    <code>is-warning</code>, <code>is-danger</code>,\n                    and any other colors you've set in the <code>$colors</code> list on Sass",default:"<code>is-primary</code>"},{name:"<code>title</code>",description:"Dialog title",type:"String",values:"—",default:"—"},{name:"<code>message</code>",description:"Message text",type:"String",values:"—",default:"—"},{name:"<code>hasIcon</code>",description:"Adds an icon on the left side depending on the <code>type</code>",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>animation</code>",description:"Custom animation (transition name)",type:"String",values:"—",default:"<code>zoom-out</code>"},{name:"<code>confirmText</code>",description:"Text of the confirm button",type:"String",values:"—",default:"<code>OK</code>"},{name:"<code>cancelText</code>",description:"Text of the cancel button",type:"String",values:"—",default:"<code>Cancel</code>"},{name:"<code>canCancel</code>",description:"If the dialog can be canceled",type:"String",values:"—",default:"<code>true</code> for Confirm/Prompt, <code>false</code> for Alert"},{name:"<code>inputPlaceholder</code>",description:"Prompt only: input's placeholder",type:"String",values:"—",default:"—"},{name:"<code>inputName</code>",description:"Prompt only: input's native name",type:"String",values:"—",default:"—"},{name:"<code>inputMaxlength</code>",description:"Prompt only: input's maxlength",type:"Number",values:"—",default:"—"},{name:"<code>onConfirm</code>",description:"Callback function when the confirm button is clicked",type:"Function (value: String)",values:"—",default:"—"},{name:"<code>onCancel</code>",description:"Callback function when the dialog is canceled (cancel button is clicked / pressed escape / clicked outside)",type:"Function",values:"—",default:"—"}]}]},553:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{confirm:function(){var e=this;this.$dialog.confirm({message:"Continue on this task?",onConfirm:function(){return e.$toast.open("User confirmed")}})},confirmCustom:function(){var e=this;this.$dialog.confirm({title:"Privacy Politics",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                    Fusce id fermentum quam. Proin sagittis,\n                    nibh id hendrerit imperdiet, elit sapien laoreet elit,\n                    ac scelerisque diam velit in nisl. Nunc maximus ex non\n                    laoreet semper. Nunc scelerisque, libero sit amet pretium dignissim,\n                    augue purus placerat justo,\n                    sit amet porttitor dui metus in nisl.\n                    Nulla non leo placerat, porta metus eu, laoreet risus.\n                    Etiam lacinia, purus eu luctus maximus, elit ex viverra tellus,\n                    sit amet sodales quam dui nec odio.\n                    Nullam porta mollis est. Quisque aliquet malesuada fringilla.\n                    Pellentesque volutpat lacus at ante posuere,\n                    non pulvinar ante porta. Proin viverra eu massa nec porta.\n                    Aliquam rhoncus velit quis sem hendrerit,\n                    ut dictum nisl accumsan. Maecenas erat enim, scelerisque non ligula ac,\n                    eleifend venenatis ligula.\n                    Praesent molestie mauris sed elit posuere, non malesuada libero gravida.\n                    In hac habitasse platea dictumst.\n                    Pellentesque habitant morbi tristique senectus\n                    et netus et malesuada fames ac turpis egestas.",cancelText:"Disagree",confirmText:"Agree",type:"is-success",onConfirm:function(){return e.$toast.open("User agreed")}})},confirmCustomDelete:function(){var e=this;this.$dialog.confirm({title:"Deleting account",message:"Are you sure you want to <b>delete</b> your account? This action cannot be undone.",confirmText:"Delete Account",type:"is-danger",hasIcon:!0,onConfirm:function(){return e.$toast.open("Account deleted!")}})}}}},554:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{alert:function(){this.$dialog.alert("Everything looks fine!")},alertCustom:function(){this.$dialog.alert({title:"Title Alert",message:"I have a title, a custom button and <b>HTML</b>!",confirmText:"Cool!"})}}}},555:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{prompt:function(){var e=this;this.$dialog.prompt({message:"What's your name?",inputMaxlength:20,inputPlaceholder:"e.g. John Doe",onConfirm:function(t){return e.$toast.open("Your name is: "+t)}})}}}},556:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(503),o=n(674),s=n.n(o),a=n(620),c=n.n(a),r=n(673),l=n.n(r),u=n(619),m=n.n(u),d=n(675),p=n.n(d),f=n(621),h=n.n(f);t.default={components:{ExAlertDialog:s.a,ExAlertConfirm:l.a,ExAlertPrompt:p.a},data:function(){return{api:i.a,ExAlertDialogCode:c.a,ExAlertConfirmCode:m.a,ExAlertPromptCode:h.a}}}},619:function(e,t){e.exports="<template>\n    <section>\n        <button class=\"button is-medium is-info\" @click=\"confirm\">\n            Launch confirm (default)\n        </button>\n\n        <button class=\"button is-medium is-info\" @click=\"confirmCustom\">\n            Launch confirm (custom)\n        </button>\n\n        <button class=\"button is-medium is-danger\" @click=\"confirmCustomDelete\">\n            Launch confirm (custom)\n        </button>\n    </section>\n</template>\n\n<script>\n    export default {\n        methods: {\n            confirm() {\n                this.$dialog.confirm({\n                    message: 'Continue on this task?',\n                    onConfirm: () => this.$toast.open('User confirmed')\n                })\n            },\n            confirmCustom() {\n                this.$dialog.confirm({\n                    title: 'Privacy Politics',\n                    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                        Fusce id fermentum quam. Proin sagittis,\n                        nibh id hendrerit imperdiet, elit sapien laoreet elit,\n                        ac scelerisque diam velit in nisl. Nunc maximus ex non\n                        laoreet semper. Nunc scelerisque, libero sit amet pretium dignissim,\n                        augue purus placerat justo,\n                        sit amet porttitor dui metus in nisl.\n                        Nulla non leo placerat, porta metus eu, laoreet risus.\n                        Etiam lacinia, purus eu luctus maximus, elit ex viverra tellus,\n                        sit amet sodales quam dui nec odio.\n                        Nullam porta mollis est. Quisque aliquet malesuada fringilla.\n                        Pellentesque volutpat lacus at ante posuere,\n                        non pulvinar ante porta. Proin viverra eu massa nec porta.\n                        Aliquam rhoncus velit quis sem hendrerit,\n                        ut dictum nisl accumsan. Maecenas erat enim, scelerisque non ligula ac,\n                        eleifend venenatis ligula.\n                        Praesent molestie mauris sed elit posuere, non malesuada libero gravida.\n                        In hac habitasse platea dictumst.\n                        Pellentesque habitant morbi tristique senectus\n                        et netus et malesuada fames ac turpis egestas.`,\n                    cancelText: 'Disagree',\n                    confirmText: 'Agree',\n                    type: 'is-success',\n                    onConfirm: () => this.$toast.open('User agreed')\n                })\n            },\n            confirmCustomDelete() {\n                this.$dialog.confirm({\n                    title: 'Deleting account',\n                    message: 'Are you sure you want to <b>delete</b> your account? This action cannot be undone.',\n                    confirmText: 'Delete Account',\n                    type: 'is-danger',\n                    hasIcon: true,\n                    onConfirm: () => this.$toast.open('Account deleted!')\n                })\n            }\n        }\n    }\n<\/script>\n"},620:function(e,t){e.exports="<template>\n    <section>\n        <button class=\"button is-medium is-primary\" @click=\"alert\">\n            Launch alert (default)\n        </button>\n        <button class=\"button is-medium is-primary\" @click=\"alertCustom\">\n            Launch alert (custom)\n        </button>\n    </section>\n</template>\n\n<script>\n    export default {\n        methods: {\n            alert() {\n                this.$dialog.alert('Everything looks fine!')\n            },\n            alertCustom() {\n                this.$dialog.alert({\n                    title: 'Title Alert',\n                    message: 'I have a title, a custom button and <b>HTML</b>!',\n                    confirmText: 'Cool!'\n                })\n            }\n        }\n    }\n<\/script>\n"},621:function(e,t){e.exports="<template>\n    <section>\n        <button class=\"button is-medium is-dark\" @click=\"prompt\">\n            Launch prompt\n        </button>\n    </section>\n</template>\n\n<script>\n    export default {\n        methods: {\n            prompt() {\n                this.$dialog.prompt({\n                    message: `What's your name?`,\n                    inputMaxlength: 20,\n                    inputPlaceholder: 'e.g. John Doe',\n                    onConfirm: (value) => this.$toast.open('Your name is: ' + value)\n                })\n            }\n        }\n    }\n<\/script>\n"},673:function(e,t,n){var i=n(0)(n(553),n(763),null,null,null);e.exports=i.exports},674:function(e,t,n){var i=n(0)(n(554),n(743),null,null,null);e.exports=i.exports},675:function(e,t,n){var i=n(0)(n(555),n(691),null,null,null);e.exports=i.exports},691:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("button",{staticClass:"button is-medium is-dark",on:{click:e.prompt}},[e._v("\n        Launch prompt\n    ")])])},staticRenderFns:[]}},731:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",{staticClass:"title is-spaced"},[e._v("Dialog")]),e._v(" "),n("h2",{staticClass:"subtitle"},[e._v("Dialogs inform users about a specific task and may contain critical information or require decisions")]),e._v(" "),n("hr"),e._v(" "),n("h3",{staticClass:"title"},[e._v("Alert")]),e._v(" "),n("div",{staticClass:"block"},[n("ex-alert-dialog")],1),e._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[n("code",{staticClass:"html"},[e._v(e._s(e.ExAlertDialogCode))])]),e._v(" "),n("hr"),e._v(" "),n("h3",{staticClass:"title"},[e._v("Confirm")]),e._v(" "),n("div",{staticClass:"block"},[n("ex-alert-confirm")],1),e._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[n("code",{staticClass:"html"},[e._v(e._s(e.ExAlertConfirmCode))])]),e._v(" "),n("hr"),e._v(" "),n("h3",{staticClass:"title"},[e._v("Prompt")]),e._v(" "),n("div",{staticClass:"block"},[n("ex-alert-prompt")],1),e._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[n("code",{staticClass:"html"},[e._v(e._s(e.ExAlertPromptCode))])]),e._v(" "),n("hr"),e._v(" "),n("h2",{staticClass:"title is-spaced"},[e._v("API")]),e._v(" "),n("api-view",{attrs:{data:e.api}})],1)},staticRenderFns:[]}},743:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("button",{staticClass:"button is-medium is-primary",on:{click:e.alert}},[e._v("\n        Launch alert (default)\n    ")]),e._v(" "),n("button",{staticClass:"button is-medium is-primary",on:{click:e.alertCustom}},[e._v("\n        Launch alert (custom)\n    ")])])},staticRenderFns:[]}},763:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("button",{staticClass:"button is-medium is-info",on:{click:e.confirm}},[e._v("\n        Launch confirm (default)\n    ")]),e._v(" "),n("button",{staticClass:"button is-medium is-info",on:{click:e.confirmCustom}},[e._v("\n        Launch confirm (custom)\n    ")]),e._v(" "),n("button",{staticClass:"button is-medium is-danger",on:{click:e.confirmCustomDelete}},[e._v("\n        Launch confirm (custom)\n    ")])])},staticRenderFns:[]}}});
//# sourceMappingURL=7.d75166364f1b37436be8.js.map