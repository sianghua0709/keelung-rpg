webpackJsonp([19],{fwCY:function(e,s){},inEv:function(e,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=i("HhdT"),o=i("bupt"),n={name:"CommuteSouthMainStation",components:{DialogueTheme:t.a,Selection:o.a},data:function(){return{speaker:"? ? ?",showFirstDialogue:!0,firstMsgs:["歡迎搭乘１００１怪奇客運，本班車從「正常」往「怪奇」，沿途各站皆無停靠。您是否要搭乘？"],items:["沒，我沒要搭乘。","對，我要上車。"],showSelection:!1,show5_1Dialogue:!1,msgs_5_1:["這樣呀，反正還有很多班，你要搭再來吧。"],show5_2Dialogue:!1,msgs_5_2:["呵呵⋯客人是在怪奇博物館上班吧？你去上班需要通勤嗎？通勤啊～通勤，還有比這更浪費時間、浪費生命的事嗎？","你不明白的對吧？那麼你就在這轉乘陣裡好好體會吧。如果你無法破解轉乘陣，你可能會把所有的人生都浪費在這裡唷，就跟那些上班族一樣，呵呵呵⋯⋯"]}},mounted:function(){this.$store.commit("changeHeader",!1),this.$store.commit("showFooter",!0)},methods:{finishFirstConversation:function(e){this.showFirstDialogue=!1,this.showSelection=!0},finishSelection:function(e){this.showSelection=!1,console.log(e),0===e?this.show5_1Dialogue=!0:1===e&&(this.show5_2Dialogue=!0)},finish5_1Conversation:function(e){window.location.reload()},finish5_2Conversation:function(e){this.$router.push({name:"CommuteTransferDiagramOne"})}}},a={render:function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("div",{staticClass:"main-div"},[i("div",{staticClass:"main-bg"},[e.showFirstDialogue?i("DialogueTheme",{staticClass:"theme",attrs:{msgs:e.firstMsgs,speaker:e.speaker,finishConversation:e.finishFirstConversation}}):e._e(),e._v(" "),e.show5_1Dialogue?i("DialogueTheme",{staticClass:"theme",attrs:{msgs:e.msgs_5_1,speaker:e.speaker,finishConversation:e.finish5_1Conversation}}):e._e(),e._v(" "),e.show5_2Dialogue?i("DialogueTheme",{staticClass:"theme",attrs:{msgs:e.msgs_5_2,speaker:e.speaker,finishConversation:e.finish5_2Conversation}}):e._e(),e._v(" "),i("Selection",{directives:[{name:"show",rawName:"v-show",value:e.showSelection,expression:"showSelection"}],attrs:{id:"selection",items:e.items,finishSelection:e.finishSelection}}),e._v(" "),i("div",{attrs:{id:"avator"}})],1)])},staticRenderFns:[]};var r=i("VU/8")(n,a,!1,function(e){i("fwCY")},"data-v-53387788",null);s.default=r.exports}});
//# sourceMappingURL=19.c84c4c93bd6f712a2086.js.map