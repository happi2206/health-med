(window.webpackJsonp=window.webpackJsonp||[]).push([[21,4,6,9],{411:function(t,e,l){t.exports=l.p+"img/blackdoctor.94edd75.jpg"},412:function(t,e,l){"use strict";l.r(e);l(137),l(16),l(75);var r={props:{items:{type:Array,required:!0},fields:{type:Array,default:function(){return[]},required:!1},perPage:{default:12},pages:{type:Number,default:0},busy:{type:Boolean,default:!1},paginate:{type:Boolean,default:!0},totalItems:{type:Number,default:0},filter:{type:String,required:!1,default:""},dropdownItem:{type:Array,default:function(){return[]}},tableClass:{type:String,default:"custom-table pointer"},disableEditAction:{type:Boolean,default:!1},disableDeleteAction:{type:Boolean,default:!1}},data:function(){return{currentPage:1,totalRows:0}},computed:{sortable_cols:function(){return this.fields.map((function(t){var e=t;return["actions"].includes(e.key)||(e.sortable=!0),e}))}},watch:{pages:function(){this.totalRows=this.perPage*this.pages}},mounted:function(){this.totalRows=this.perPage*this.pages,this.$refs.scrollingtable.$el.addEventListener("scroll",this.onScroll)},methods:{onScroll:function(t){this.$emit("handle-scroll",t),t.target.scrollTop+t.target.clientHeight>=t.target.scrollHeight&&console.log()},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},sendId:function(t){this.$emit("sendId",t)}}},n=l(23),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"table-responsive text-14 text-grey"},[l("b-table",{ref:"scrollingtable",staticClass:"custom-table",attrs:{items:t.items,fields:t.fields,stacked:"md",filter:t.filter,hover:"",striped:"",responsive:"","show-empty":"","sort-icon-left":"",busy:t.busy,"table-class":t.tableClass},on:{"row-clicked":function(e){return t.$emit("row-clicked",e)}},scopedSlots:t._u([{key:"table-busy",fn:function(){return[l("div",{staticClass:"p-4"},[l("b-skeleton-table",{attrs:{rows:4,columns:4,"table-props":{bordered:!0,striped:!0}}})],1)]},proxy:!0},{key:"cell(action)",fn:function(e){return[t._t("action",null,{data:e})]}},{key:"table-colgroup",fn:function(e){return[t._l(e,(function(t){return["email"===t.key?l("col",{key:t.key,style:{width:"15rem"}}):"name"===t.key?l("col",{key:t.key,style:{width:"8rem"}}):"DOB"===t.key?l("col",{key:t.key,style:{width:"9rem"}}):"status"===t.key?l("col",{key:t.key,style:{width:"7rem"}}):"connected"===t.key?l("col",{key:t.key,style:{width:"10rem"}}):"grade_books"===t.key?l("col",{key:t.key,style:{width:"5rem"}}):"excercises"===t.key?l("col",{key:t.key,style:{width:"6rem"}}):"lesson_count"===t.key?l("col",{key:t.key,style:{width:"3rem"}}):l("col",{key:t.key,style:{width:""}})]}))]}}],null,!0)}),t._v(" "),t.paginate?l("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalItems,"per-page":t.perPage,align:"right",size:"sm"},on:{change:function(e){return t.$emit("page-changed",e)}},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],1)}),[],!1,null,"7deee375",null);e.default=component.exports},416:function(t,e,l){"use strict";l.r(e);l(5),l(4),l(2),l(6),l(7);var r=l(0);l(1),l(3),l(11),l(19),l(137);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var o={data:function(){return{selectedTab:0,tabs:[]}},mounted:function(){this.tabs=this.$children;var t=this.checkUrlForTab();this.selectTab(t)},methods:{selectTab:function(t){var e=this;this.selectedIndex=t,this.tabs.forEach((function(l,r){l.active=r===t,r===t&&e.$router.replace({query:c(c({},e.$route.query),{},{tab:r})})}))},checkUrlForTab:function(){return this.$route.query.tab?Number(this.$route.query.tab):0}}},d=l(23),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"card"},[l("div",{staticClass:"custom-card-tabs text-14 mt-1"},[l("ul",{staticClass:"nav",attrs:{id:"pills-tab",role:"tablist"}},t._l(t.tabs,(function(e,r){return l("li",{key:r,staticClass:"nav-item",attrs:{role:"presentation"},on:{click:function(e){return e.preventDefault(),t.selectTab(r)}}},[l("a",{staticClass:"nav-link",class:[r===t.selectedIndex?"active":""],attrs:{"data-toggle":"pill",href:"#pills-attendance",role:"tab","aria-controls":"pills-attendance","aria-selected":"true"}},[t._v(t._s(e.title))])])})),0)]),t._v(" "),l("div",{staticClass:"tab-content card-body",attrs:{id:"pills-tabContent"}},[t._t("default")],2)])}),[],!1,null,"2a8ff0f2",null);e.default=component.exports},417:function(t,e,l){"use strict";l.r(e);var r=l(8).default.extend({props:{title:{type:String,required:!0}},data:()=>({active:!1})}),n=l(23),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.active?l("div",{attrs:{role:"","aria-labelledby":"pills-class-board-tab"}},[t._t("default",(function(){return[l("h1",[t._v("Hello Tabs")])]}))],2):t._e()}),[],!1,null,"407d21ad",null);e.default=component.exports},423:function(t,e,l){var content=l(444);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(40).default)("068bdc02",content,!0,{sourceMap:!1})},443:function(t,e,l){"use strict";l(423)},444:function(t,e,l){var r=l(39)(!1);r.push([t.i,".margin-fix[data-v-b352974a]{margin:4rem 0 6rem;background:#fff}",""]),t.exports=r},502:function(t,e,l){"use strict";l.r(e);var r=l(416),n=l(417),c=l(412),o={components:{BaseCardTab:r.default,tableComponent:c.default,CardTab:n.default},layout:"dashboard",data:function(){return{items:[],isLoading:!1}}},d=(l(443),l(23)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isLoading?r("div",{staticClass:"skeleton"}):r("div",{staticClass:"bg-light card text-12 border-radius mb-3 margin-fix"},[r("div",{staticClass:"card-body",staticStyle:{"background-color":"#e7f0f8"}},[r("div",{staticClass:"d-flex align-content-center align-items-center"},[t._m(0),t._v(" "),r("div",{staticClass:"ml-4 text-center",staticStyle:{border:"2px solid #fff"}},[r("b-avatar",{attrs:{square:"",src:l(411),size:"6rem"}})],1)])])]),t._v(" "),r("base-card-tab",[r("card-tab",{attrs:{title:"Details"}},[r("table-component",{attrs:{items:t.items}})],1),t._v(" "),r("card-tab",{attrs:{title:"Appointment"}},[r("h1",{staticClass:"text-18"},[t._v("Yay")])]),t._v(" "),r("card-tab",{attrs:{title:"Bill Estimate"}},[r("h1",{staticClass:"text-18"},[t._v("Hello")]),t._v(" "),r("side")],1)],1)],1)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex-grow-1"},[l("div",{staticClass:"\n              d-flex\n              align-items-center\n              justify-content-between\n              flex-wrap\n              mb-3\n            "},[l("div",{staticClass:"class-name mr-1 text-24 text-capitalize",staticStyle:{color:"rgb(0, 0, 0) !important"}},[t._v("\n              Xavier Simmons\n            ")])]),t._v(" "),l("hr",{staticClass:"my-0",staticStyle:{"border-color":"rgb(0, 0, 0) !important"}}),t._v(" "),l("div",{staticClass:"mt-3"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-4 mb-2 text-capitalize"},[l("span",{staticClass:"class-details-data_label",staticStyle:{color:"rgb(0, 0, 0) !important"}},[t._v("\n                  EMR/UHID:")]),t._v(" "),l("span",{staticClass:"class-details-data_value",staticStyle:{color:"rgb(0, 0, 0) !important"}},[t._v("989567876")])]),t._v(" "),l("div",{staticClass:"col-md-4 mb-2 text-capitalize"},[l("span",{staticClass:"class-details-data_label",staticStyle:{color:"rgb(0, 0, 0) !important"}},[t._v("\n                  DOB (Age):")]),t._v(" "),l("span",{staticClass:"class-details-data_value",staticStyle:{color:"rgb(0, 0, 0) !important"}},[t._v("12th July, 1972 (49 Years)")])]),t._v(" "),l("div",{staticClass:"col-md-4 mb-2 text-capitalize"},[l("span",{staticClass:"class-details-data_label",staticStyle:{color:"rgb(0, 0, 0) !important"}},[t._v("\n                  Payers:")]),t._v(" "),l("span",{staticClass:"class-details-data_value",staticStyle:{color:"rgb(0, 0, 0) !important"}},[t._v("NHIS")])]),t._v(" "),l("div",{staticClass:"col-md-4 mb-2 text-capitalize"},[l("span",{staticClass:"class-details-data_label",staticStyle:{color:"rgb(0, 0, 0) !important"}},[t._v("\n                  Gender:")]),t._v(" "),l("span",{staticClass:"class-details-data_value",staticStyle:{color:"rgb(0, 0, 0) !important"}},[t._v("Male")])])])])])}],!1,null,"b352974a",null);e.default=component.exports;installComponents(component,{TableComponent:l(412).default,CardTab:l(417).default,Side:l(260).default,BaseCardTab:l(416).default})}}]);