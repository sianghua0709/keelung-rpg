webpackJsonp([3],{"8mTx":function(i,t,c){i.exports=c.p+"static/img/lulu-grey-icon.cdfdcb5.png"},"8w01":function(i,t,c){i.exports=c.p+"static/img/lulu-full-icon.4897c56.png"},"Fd+M":function(i,t,c){i.exports=c.p+"static/img/ling-color-icon.f74efd6.png"},"GA/T":function(i,t,c){i.exports=c.p+"static/img/black-white-ling-icon.8fbe3fb.png"},Mufs:function(i,t,c){i.exports=c.p+"static/img/lulu-grey-icon-frame.60c3b02.png"},N7Mj:function(i,t,c){i.exports=c.p+"static/img/lulu-color-icon.d135aa1.png"},PAKN:function(i,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=c("oX44"),l=c.n(s),o={name:"MonsterCollect",components:{},data:function(){return{cityBg:l.a,isShowBigLing:!1,isShowBigLulu:!1,isShowBigKim:!1}},mounted:function(){},methods:{showBigLing:function(){this.isShowBigLing=!0},closeBigLing:function(){this.isShowBigLing=!1},showBigLulu:function(){this.isShowBigLulu=!0},closeBigLulu:function(){this.isShowBigLulu=!1},showBigKim:function(){this.isShowBigKim=!0},closeBigKim:function(){this.isShowBigKim=!1}},computed:{lingCardType:function(){return this.$store.state.lingCardType},isLingWin:function(){return this.$store.state.isLingWin},kimCardType:function(){return this.$store.state.kimCardType},isKimWin:function(){return this.$store.state.isKimWin},luluCardType:function(){return this.$store.state.luluCardType},isLuluWin:function(){return this.$store.state.isLuluWin}}},n={render:function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",{staticClass:"monster-collect"},[s("div",{staticClass:"collect-bg",style:{backgroundImage:"url("+i.cityBg+")"}}),i._v(" "),s("div",{staticClass:"collect-box"},["color"===i.lingCardType&&i.isLingWin?s("img",{staticClass:"collect-ling-icon",attrs:{src:c("mMRv"),alt:"arrived"},on:{click:i.showBigLing}}):"grey"===i.lingCardType&&i.isLingWin?s("img",{staticClass:"collect-ling-icon",attrs:{src:c("GA/T"),alt:"arrived"},on:{click:i.showBigLing}}):i._e(),i._v(" "),"color"===i.luluCardType&&i.isLuluWin?s("img",{staticClass:"collect-ling-icon",attrs:{src:c("8w01"),alt:"arrived"},on:{click:i.showBigLulu}}):"grey"===i.luluCardType&&i.isLuluWin?s("img",{staticClass:"collect-ling-icon",attrs:{src:c("8mTx"),alt:"arrived"},on:{click:i.showBigLulu}}):i._e(),i._v(" "),"color"===i.kimCardType&&i.isKimWin?s("img",{staticClass:"collect-ling-icon",staticStyle:{width:"18vw"},attrs:{src:c("lo/G"),alt:"arrived"},on:{click:i.showBigKim}}):"grey"===i.kimCardType&&i.isKimWin?s("img",{staticClass:"collect-ling-icon",staticStyle:{width:"18vw"},attrs:{src:c("tH9N"),alt:"arrived"},on:{click:i.showBigKim}}):i._e()]),i._v(" "),i.isShowBigLing?s("div",{staticClass:"collect-big-box",on:{click:i.closeBigLing}},[s("div",{staticClass:"collect-big-frame"},["color"===i.lingCardType?s("img",{staticClass:"collect-big-ling-icon",attrs:{src:c("Fd+M"),alt:"arrived"},on:{click:i.showBigLing}}):s("img",{staticClass:"collect-big-ling-icon",attrs:{src:c("he4a"),alt:"arrived"},on:{click:i.showBigLing}})]),i._v(" "),s("div",{staticClass:"collect-big-text"},[i._v("林開郡的文字介紹")])]):i._e(),i._v(" "),i.isShowBigLulu?s("div",{staticClass:"collect-big-box",on:{click:i.closeBigLulu}},[s("div",{staticClass:"collect-big-frame"},["color"===i.luluCardType?s("img",{staticClass:"collect-big-ling-icon",attrs:{src:c("N7Mj"),alt:"arrived"},on:{click:i.showBigLulu}}):s("img",{staticClass:"collect-big-ling-icon",attrs:{src:c("Mufs"),alt:"arrived"},on:{click:i.showBigLulu}})]),i._v(" "),s("div",{staticClass:"collect-big-text"},[i._v("露露的文字介紹")])]):i._e(),i._v(" "),i.isShowBigKim?s("div",{staticClass:"collect-big-box",on:{click:i.closeBigKim}},[s("div",{staticClass:"collect-big-frame"},["color"===i.kimCardType?s("img",{staticClass:"collect-big-ling-icon",attrs:{src:c("WArF"),alt:"arrived"},on:{click:i.showBigKim}}):s("img",{staticClass:"collect-big-ling-icon",attrs:{src:c("YGT9"),alt:"arrived"},on:{click:i.showBigKim}})]),i._v(" "),s("div",{staticClass:"collect-big-text"},[i._v("阿勤的文字介紹")])]):i._e()])},staticRenderFns:[]};var e=c("VU/8")(o,n,!1,function(i){c("qrMx")},"data-v-4d8057b6",null);t.default=e.exports},WArF:function(i,t,c){i.exports=c.p+"static/img/commute-color-frame.8978eea.jpg"},YGT9:function(i,t,c){i.exports=c.p+"static/img/commute-grey-frame.d754d1d.jpg"},he4a:function(i,t,c){i.exports=c.p+"static/img/ling-grey-icon.fd59d1c.png"},"lo/G":function(i,t,c){i.exports=c.p+"static/img/passenger_colorful.e17cae2.png"},mMRv:function(i,t,c){i.exports=c.p+"static/img/ling-color-album.90821a1.png"},oX44:function(i,t,c){i.exports=c.p+"static/img/album-base.32e9c38.png"},qrMx:function(i,t){},tH9N:function(i,t,c){i.exports=c.p+"static/img/kim-gray-capture.b675338.png"}});
//# sourceMappingURL=3.cb0c7faaf434e6c3a8f8.js.map