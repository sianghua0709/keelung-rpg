webpackJsonp([10],{"04tK":function(t,s,i){t.exports=i.p+"static/img/river-opacity-bg.d63b8c0.png"},DtFR:function(t,s,i){t.exports=i.p+"static/img/river-actual-bg.f531090.png"},TN08:function(t,s,i){t.exports=i.p+"static/img/river-black-icon.affd231.png"},lmxO:function(t,s){},yEi5:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("DtFR"),a=i.n(e),o=i("04tK"),c=i.n(o),l={name:"RiverHouse",components:{},data:function(){return{step:99,riverActualBg:a.a,riverOpacityBg:c.a,isShowQ315:!0,riverName:""}},mounted:function(){},methods:{goToStepQ31:function(){this.step=3.1},goToStepQ315:function(){this.step=3.15},goToStepQ32:function(){this.step=3.2},goToStepQ3:function(){this.power<3?this.$store.commit("changePower",this.power):this.$store.commit("changePower",3),this.isShowQ315=!1,this.step=3},goToStepQ4:function(){this.step=4},goToStepQ45:function(){this.step=4.5},goToStepQ99:function(){this.step=99},goToStepQ5:function(){this.step=5},goToStepQ55:function(){this.step=5.5},goToStepQ6:function(){this.step=6},goToStepQ991:function(){this.step=99.1},answerRiverName:function(){}},computed:{power:function(){return this.$store.state.power}}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"river-house"},[3===t.step?e("div",{staticClass:"house-0-box"},[e("div",{staticClass:"house-0-talk-box"},[e("div",{staticClass:"house-0-frame",staticStyle:{background:"none","margin-top":"20vh"}},[e("div",{staticStyle:{color:"white"}},[t._v("你聽到一陣流水聲，眼前憑空出現了一個看起來十來歲，穿著日式服裝的小孩。他似乎很慌張的樣子，低著頭碎碎唸著什麼。")]),t._v(" "),e("div",{staticClass:"house-0-triangle-box",on:{click:t.goToStepQ31}},[e("div",{staticClass:"house-0-triangle",staticStyle:{"border-color":"white transparent transparent transparent"}})])])])]):t._e(),t._v(" "),3.1===t.step?e("div",{staticClass:"house-0-box"},[e("img",{staticClass:"house-0-fishbird",attrs:{src:i("TN08"),alt:"ghost"}}),t._v(" "),e("div",{staticClass:"house-0-talk-box"},[e("div",{staticClass:"house-0-head"},[t._v("？？？")]),t._v(" "),e("div",{staticClass:"house-0-frame"},[e("div",[t._v("我是誰？我在哪裡？我要做什麼？咦？有人⋯⋯啊啊啊啊啊！有怪奇啊！救命啊、救命啊！」")]),t._v(" "),e("div",{staticClass:"house-0-triangle-box",on:{click:t.goToStepQ315}},[e("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),3.15===t.step?e("div",{staticClass:"house-0-box"},[e("img",{staticClass:"house-0-fishbird",attrs:{src:i("TN08"),alt:"ghost"}}),t._v(" "),e("div",{staticClass:"house-0-all-box"},[e("div",{staticClass:"house-0-all-btn",on:{click:t.goToStepQ4}},[t._v("我是人類，你才是怪奇吧⋯⋯")]),t._v(" "),t.isShowQ315?e("div",{staticClass:"house-0-all-btn",on:{click:t.goToStepQ32}},[t._v("嘿嘿嘿，我就是怪～奇，小朋友～你乖乖跟我走吧")]):t._e()])]):t._e(),t._v(" "),3.2===t.step?e("div",{staticClass:"house-0-box"},[e("div",{staticClass:"house-0-talk-box"},[e("div",{staticClass:"house-0-frame",staticStyle:{background:"none","margin-top":"20vh"}},[e("div",{staticStyle:{color:"white"}},[t._v("你說的話被買咖啡而路過的警察聽到了，因為被當成是誘拐兒童的嫌犯，而被帶回了警局。你費了好一番力氣才逃脫。")]),t._v(" "),e("div",{staticClass:"house-0-triangle-box",on:{click:t.goToStepQ3}},[e("div",{staticClass:"house-0-triangle",staticStyle:{"border-color":"white transparent transparent transparent"}})])])])]):t._e(),t._v(" "),4===t.step?e("div",{staticClass:"house-0-box"},[e("img",{staticClass:"house-0-fishbird",attrs:{src:i("TN08"),alt:"ghost"}}),t._v(" "),e("div",{staticClass:"house-0-talk-box"},[e("div",{staticClass:"house-0-head"},[t._v("？？？")]),t._v(" "),e("div",{staticClass:"house-0-frame"},[e("div",[t._v("我是怪奇⋯⋯你是人類⋯⋯啊！館長叔叔說，怪奇壞，人類好，所以你是好人，我是壞孩子⋯⋯（哭泣）嗚嗚嗚，原來我是壞孩子，所以大家都不要我了⋯⋯嗚嗚嗚，我乾脆去死好了。我不想活了，你快帶我回怪奇博物館吧，嗚嗚嗚。")]),t._v(" "),e("div",{staticClass:"house-0-triangle-box",on:{click:t.goToStepQ45}},[e("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),4.5===t.step?e("div",{staticClass:"house-0-box"},[e("img",{staticClass:"house-0-fishbird",attrs:{src:i("TN08"),alt:"ghost"}}),t._v(" "),e("div",{staticClass:"house-0-all-box"},[e("div",{staticClass:"house-0-all-btn",on:{click:t.goToStepQ99}},[t._v("既然你這麼說了，那就跟我走吧。（不疑有他）")]),t._v(" "),e("div",{staticClass:"house-0-all-btn",on:{click:t.goToStepQ5}},[t._v("等一下，為什麼你說得好像回去博物館就會死掉一樣啊？")])])]):t._e(),t._v(" "),5===t.step?e("div",{staticClass:"house-0-box"},[e("img",{staticClass:"house-0-fishbird",attrs:{src:i("TN08"),alt:"ghost"}}),t._v(" "),e("div",{staticClass:"house-0-talk-box"},[e("div",{staticClass:"house-0-head"},[t._v("？？？")]),t._v(" "),e("div",{staticClass:"house-0-frame"},[e("div",[t._v("帶我回去、帶我回去，你還在等什麼？為什麼不帶我回去，你是不是不想帶我回去？可惡可惡可惡，為什麼不帶我回去，為什麼不讓我去死，為什麼留我在這邊？我好髒、好臭、好噁心，我的包包好重，我好痛唷⋯⋯")]),t._v(" "),e("div",{staticClass:"house-0-triangle-box",on:{click:t.goToStepQ55}},[e("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),5.5===t.step?e("div",{staticClass:"house-0-box"},[e("img",{staticClass:"house-0-fishbird",attrs:{src:i("TN08"),alt:"ghost"}}),t._v(" "),e("div",{staticClass:"house-0-all-box"},[e("div",{staticClass:"house-0-all-btn",on:{click:t.goToStepQ99}},[t._v("怪奇也有瘋子啊？算了，趕快帶他回去交差吧。")]),t._v(" "),e("div",{staticClass:"house-0-all-btn",on:{click:t.goToStepQ6}},[t._v("這孩子好像因為什麼原因很痛苦⋯⋯安撫他一下好了。")])])]):t._e(),t._v(" "),99===t.step?e("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.riverOpacityBg+")"}},[e("div",{staticClass:"house-0-all-245-box"},[t._m(0),t._v(" "),e("div",[t._v("怪奇的名字")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.riverName,expression:"riverName"}],staticClass:"house-0-245-input",attrs:{type:"text"},domProps:{value:t.riverName},on:{input:function(s){s.target.composing||(t.riverName=s.target.value)}}}),t._v(" "),e("div",{staticClass:"house-0-245-go",on:{click:t.answerRiverName}},[t._v("GO")])])]):t._e()])},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"house-0-245-text"},[t._v("正當你準備收服怪奇時，你發現你無法這麼做。因為必須呼喊怪奇的名字。"),i("br"),t._v("才能將他收進圖鑑中。而你，根本還不知道他的名字。請先前往"),i("span",{staticStyle:{color:"#95ff00"}},[t._v("「曙・初見咖啡」")]),t._v("，到了之後拿出道具包的"),i("span",{staticStyle:{color:"#95ff00"}},[t._v("「填字卡」")]),t._v("填完內容後，再向店員索取"),i("span",{staticStyle:{color:"#95ff00"}},[t._v("「現形片」")]),t._v("。透過填字卡及透明片，你將得知怪奇的名字。")])}]};var r=i("VU/8")(l,n,!1,function(t){i("lmxO")},"data-v-7aa1255e",null);s.default=r.exports}});
//# sourceMappingURL=10.2d315b96381e33efe292.js.map