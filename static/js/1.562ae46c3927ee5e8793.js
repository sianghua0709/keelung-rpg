webpackJsonp([1],{FZYS:function(t,e){},OJCp:function(t,e,i){t.exports=i.p+"static/img/ling-card-grey.47b5d43.png"},TPGX:function(t,e,i){t.exports=i.p+"static/img/escape.cc37be4.png"},VdYy:function(t,e,i){t.exports=i.p+"static/img/ling-photo.7c31cb3.png"},XThv:function(t,e,i){t.exports=i.p+"static/img/ready-to-fight.d946a40.png"},eofY:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"HauntedHouseFight",components:{},data:function(){return{isShowReady:"ready",isFight:"escape",usedPower:0,monsterPower:77,monsterUsedPower:0,round:"1",tenSecond:10,roundWin:{first:!1,second:!1,third:!1,win:0}}},mounted:function(){},methods:{fight:function(){this.isFight="click",this.isShowReady="round",this.roundOne()},escape:function(){this.isFight="escape",this.loseLing(),this.$store.commit("changePoint","lingMap"),this.$router.push({path:"./monster-compass"})},roundOne:function(){var t=this,e=setInterval(function(){t.tenSecond--},1e3);setTimeout(function(){t.monsterUsedPower=11},3e3),setTimeout(function(){t.monsterUsedPower=17},6e3),setTimeout(function(){t.monsterUsedPower=29},9200),setTimeout(function(){clearInterval(e),t.monsterPower=t.monsterPower-t.monsterUsedPower,t.round="2",t.isFight="roundTwo",t.usedPower>t.monsterUsedPower&&(t.roundWin.first=!0,t.roundWin.win++)},1e4)},roundTwo:function(){var t=this;this.usedPower=0,this.monsterUsedPower=0,this.tenSecond=10,this.isFight="click";var e=setInterval(function(){t.tenSecond--},1e3);setTimeout(function(){t.monsterUsedPower=11},3e3),setTimeout(function(){t.monsterUsedPower=17},6e3),setTimeout(function(){t.monsterUsedPower=29},9200),setTimeout(function(){clearInterval(e),t.monsterPower=t.monsterPower-t.monsterUsedPower,t.round="3",t.isFight="roundThree",t.usedPower>t.monsterUsedPower&&(t.roundWin.second=!0,t.roundWin.win++),2===t.roundWin.win?(alert("你打贏林阿群了！"),t.winLing()):0===t.roundWin.win&&(alert("你輸了！"),t.loseLing())},1e4)},roundThree:function(){var t=this;this.usedPower=0,this.monsterUsedPower=0,this.tenSecond=10,this.isFight="click";var e=setInterval(function(){t.tenSecond--},1e3);setTimeout(function(){t.monsterUsedPower=11},3e3),setTimeout(function(){t.monsterUsedPower=17},6e3),setTimeout(function(){t.monsterUsedPower=19},9200),setTimeout(function(){clearInterval(e),t.monsterPower=t.monsterPower-t.monsterUsedPower,t.usedPower>t.monsterUsedPower&&(t.roundWin.third=!0,t.roundWin.win++),2===t.roundWin.win?(alert("你打贏林阿群了！"),t.winLing()):0===t.roundWin.win&&(alert("你輸了！"),t.loseLing())},1e4)},attack:function(){this.power>0&&(this.$store.commit("minusPower"),this.usedPower++)},winLing:function(){var t=this;this.isFight="win",this.isShowReady="win",this.round="0",this.$store.commit("fightLing","win"),this.$store.commit("shakeHeader","collect"),setTimeout(function(){t.$store.commit("shakeHeader","")},1e3),this.$store.commit("getLingCard","greyLingCard")},loseLing:function(){this.isFight="lose",this.isShowReady="lose",this.round="0",this.$store.commit("fightLing","lose")}},computed:{power:function(){return this.$store.state.power}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"house-fight"},[s("div",{staticClass:"fight-box"},["0"!==t.round?s("img",{staticClass:"fight-bg",attrs:{src:i("kxe2"),alt:"fight-bg"}}):t._e(),t._v(" "),"0"!==t.round?s("div",{staticClass:"fight-monster-power"},[s("div",[t._v("怪力值")]),t._v(" "),s("div",[t._v(t._s(t.monsterPower))])]):t._e(),t._v(" "),"0"!==t.round?s("img",{staticClass:"fight-ling",style:"z-index: "+("lose"===t.isFight?"0":"3"),attrs:{src:i("VdYy"),alt:"ling"}}):t._e(),t._v(" "),"ready"===t.isShowReady?s("img",{staticClass:"fight-ready",attrs:{src:i("XThv"),alt:"start"},on:{click:t.fight}}):"round"===t.isShowReady?s("div",{staticClass:"fight-round-box"},[s("div",{staticClass:"fight-round-text"},[t._v("ROUND "+t._s(t.round))]),t._v(" "),s("div",{staticClass:"fight-circle-box"},[s("div",{staticClass:"fight-circle",style:"backgroundColor: "+(t.roundWin.first?"#95ff00":"none")}),t._v(" "),s("div",{staticClass:"fight-circle",style:"backgroundColor: "+(t.roundWin.second?"#95ff00":"none")}),t._v(" "),s("div",{staticClass:"fight-circle",style:"backgroundColor: "+(t.roundWin.third?"#95ff00":"none")})]),t._v(" "),s("div",{staticClass:"fight-my-energy-box"},[s("div",{staticClass:"fight-my-energy-text"},[t._v("怪力值")]),t._v(" "),s("div",{staticClass:"fight-my-energy"},[s("div",{staticClass:"fight-my-energy-inside",style:"width: "+t.monsterUsedPower+"%;"})])]),t._v(" "),s("div",{staticClass:"fight-my-energy-box"},[s("div",{staticClass:"fight-my-energy-text fight-greenColor"},[t._v("怪力值")]),t._v(" "),s("div",{staticClass:"fight-my-energy"},[s("div",{staticClass:"fight-my-energy-inside fight-greenBg",style:"width: "+t.usedPower+"%;"})])]),t._v(" "),s("div",{staticClass:"fight-second"},[t._v(t._s(t.tenSecond))])]):"lose"===t.isShowReady?s("div",{staticClass:"fight-lose-text"},[t._v("任務失敗，請補充怪力值再回來吧！")]):"win"===t.isShowReady?s("div",{staticClass:"fight-win-display"},[s("img",{staticClass:"fight-grey-man",attrs:{src:i("OJCp"),alt:"ling-card-grey"}}),t._v(" "),s("div",[t._v("獲得林阿群")]),t._v(" "),s("div",{staticClass:"fight-win-text"},[t._v("快去怪奇相簿看看你的收穫吧！")])]):t._e(),t._v(" "),"escape"===t.isFight?s("img",{staticClass:"fight-escape",attrs:{src:i("TPGX"),alt:"escape"},on:{click:t.escape}}):"click"===t.isFight?s("img",{staticClass:"fight-escape",attrs:{src:i("jLNS"),alt:"click"},on:{click:t.attack}}):"roundTwo"===t.isFight?s("div",{staticClass:"fight-round",on:{click:t.roundTwo}},[t._v("下一回")]):"roundThree"===t.isFight?s("div",{staticClass:"fight-round",on:{click:t.roundThree}},[t._v("下一回")]):"lose"===t.isFight?s("div"):t._e()])])},staticRenderFns:[]};var o=i("VU/8")(s,n,!1,function(t){i("FZYS")},"data-v-746e2b64",null);e.default=o.exports},jLNS:function(t,e,i){t.exports=i.p+"static/img/click.4bcd558.png"},kxe2:function(t,e,i){t.exports=i.p+"static/img/fight-background.5744378.png"}});
//# sourceMappingURL=1.562ae46c3927ee5e8793.js.map