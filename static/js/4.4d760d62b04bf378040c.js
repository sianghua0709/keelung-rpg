webpackJsonp([4],{"30jk":function(t,s){},"7OM2":function(t,s,e){t.exports=e.p+"static/img/ling-card-purple.c28e4d0.png"},"9Z6O":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={name:"HauntedHouse",components:{},data:function(){return{questionNum:1,ghost:"women",answer:"",purpleBg:!1,showHide:!0}},mounted:function(){},methods:{nextOne:function(){this.questionNum=2,this.ghost="ling"},nextTwo:function(){this.questionNum=3},confirmAnswer:function(){"手指"===this.answer||"腳趾"===this.answer||"腳指"===this.answer||"手"===this.answer||"腳"===this.answer?(alert("恭喜答對了！"),this.questionNum=4,this.ghost=""):alert("請再想想唷！")},getCard:function(){var t=this;this.questionNum=5,this.ghost="ling",this.purpleBg=!0,this.showHide=!1,this.$store.commit("shakeHeader","collect"),setTimeout(function(){t.$store.commit("shakeHeader","")},1e3),this.$store.commit("getLingCard","purpleLingCard")},buyCard:function(){this.questionNum=6}}},o={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{class:["haunted-house",{"haunted-house-purple-bg":t.purpleBg}]},[t.showHide?i("div",{staticClass:"house-hide-header"}):t._e(),t._v(" "),"women"===t.ghost?i("img",{staticClass:"house-women-ghost",attrs:{src:e("plZT"),alt:"women-ghost"}}):t._e(),t._v(" "),"ling"===t.ghost?i("img",{staticClass:"house-ling-ghost",attrs:{src:e("VdYy"),alt:"ling"}}):t._e(),t._v(" "),1===t.questionNum?i("div",{staticClass:"house-qa"},[t._m(0),t._v(" "),i("button",{staticClass:"house-btn",on:{click:t.nextOne}},[t._v("好，我不抓你。")]),t._v(" "),i("router-link",{attrs:{to:"/haunted-house-fight"}},[i("button",{staticClass:"house-btn"},[t._v("我抓爆你。")])])],1):t._e(),t._v(" "),2===t.questionNum?i("div",{staticClass:"house-qa"},[t._m(1),t._v(" "),i("button",{staticClass:"house-btn",on:{click:t.nextTwo}},[t._v("挖，是大叔耶！")]),t._v(" "),i("router-link",{attrs:{to:"/haunted-house-fight"}},[i("button",{staticClass:"house-btn"},[t._v("你長得好奇怪。")])])],1):t._e(),t._v(" "),3===t.questionNum?i("div",{staticClass:"house-qa"},[i("div",{staticClass:"house-question-box"},[i("div",{staticClass:"house-question-head"},[t._v("搭配實體道具找出答案")]),t._v(" "),i("div",{staticClass:"house-question-text"},[t._v("五個兄弟，住在一起，名字不同，高矮不齊？")]),t._v(" "),i("div",{staticClass:"house-input-head"},[t._v("請輸入答案")]),t._v(" "),i("div",{staticClass:"house-input-box"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.answer,expression:"answer",modifiers:{trim:!0}}],staticClass:"house-input",attrs:{type:"text"},domProps:{value:t.answer},on:{input:function(s){s.target.composing||(t.answer=s.target.value.trim())},blur:function(s){t.$forceUpdate()}}})]),t._v(" "),i("div",{staticClass:"house-confirm-box"},[i("img",{staticClass:"house-confirm",attrs:{src:e("ibnJ"),alt:"go"},on:{click:t.confirmAnswer}})])])]):t._e(),t._v(" "),4===t.questionNum?i("div",{staticClass:"house-finish",on:{click:t.getCard}},[i("img",{staticClass:"house-ling-card",attrs:{src:e("7OM2"),alt:"ling-card-purple"}}),t._v(" "),i("div",{staticClass:"house-finish-head"},[t._v("獲得林阿群")]),t._v(" "),i("div",[t._v("林阿群，從以前就在基隆長大.....")])]):t._e(),t._v(" "),5===t.questionNum?i("div",{staticClass:"house-qa"},[t._m(2),t._v(" "),i("button",{staticClass:"house-btn",on:{click:t.buyCard}},[t._v("我幫你！")]),t._v(" "),i("router-link",{attrs:{to:"/monster-compass"}},[i("button",{staticClass:"house-btn"},[t._v("趕時間，走人。")])])],1):t._e(),t._v(" "),6===t.questionNum?i("div",{staticClass:"house-qa"},[i("div",{staticClass:"house-question-box"},[i("div",{staticClass:"house-question-head"},[t._v("出示此畫面")]),t._v(" "),i("div",{staticClass:"house-question-text"},[t._v("你可以花費 15 元，向見書店購買限量林開群實體閃卡。")]),t._v(" "),i("router-link",{attrs:{to:"/monster-compass"}},[i("button",{staticClass:"house-btn"},[t._v("完成任務，回到羅盤。")])])],1)]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"house-question-box"},[s("div",{staticClass:"house-question-head"},[this._v("選擇回答")]),this._v(" "),s("div",{staticClass:"house-question-text"},[this._v("我很害怕，你可以不要抓我嗎？")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"house-question-box"},[s("div",{staticClass:"house-question-head"},[this._v("選擇回答")]),this._v(" "),s("div",{staticClass:"house-question-text"},[this._v("謝謝你不抓我，那我要獻出原型了。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"house-question-box"},[s("div",{staticClass:"house-question-head"},[this._v("選擇回答")]),this._v(" "),s("div",{staticClass:"house-question-text"},[this._v("我還有最後一個請求...")])])}]};var a=e("VU/8")(i,o,!1,function(t){e("30jk")},"data-v-7627a536",null);s.default=a.exports},VdYy:function(t,s,e){t.exports=e.p+"static/img/ling-photo.7c31cb3.png"},ibnJ:function(t,s){t.exports="data:image/png;base64,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"},plZT:function(t,s,e){t.exports=e.p+"static/img/women-ghost.6ea289f.png"}});
//# sourceMappingURL=4.4d760d62b04bf378040c.js.map