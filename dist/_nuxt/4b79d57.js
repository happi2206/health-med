(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{430:function(t,e,o){var content=o(483);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("3578c776",content,!0,{sourceMap:!1})},482:function(t,e,o){"use strict";o(430)},483:function(t,e,o){var n=o(39)(!1);n.push([t.i,".inputCaption[data-v-51033f24]{background-color:#2a3942;color:#fff;padding:12px 20px;border:none;border-radius:4px;cursor:pointer;float:right}.rounded-btn[data-v-51033f24]{display:block;height:3.5rem;width:3.5rem;border-radius:50%}.adjust[data-v-51033f24]{position:absolute;background:#101a20;color:#fff;height:100%;width:100%;z-index:100}.img-container[data-v-51033f24]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:1050}.crop[data-v-51033f24]{height:340px;width:450px}.preview[data-v-51033f24]{height:200px;width:200px}.forCamera[data-v-51033f24]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:1050}.web-camera-container[data-v-51033f24]{margin-top:2rem;margin-bottom:2rem;padding:2rem;display:flex;flex-direction:column;justify-content:center;align-items:center;border:1px solid #ccc;border-radius:4px;width:500px}@-webkit-keyframes preload-data-v-51033f24{0%{opacity:1}50%{opacity:.4}to{opacity:1}}@keyframes preload-data-v-51033f24{0%{opacity:1}50%{opacity:.4}to{opacity:1}}",""]),t.exports=n},505:function(t,e,o){"use strict";o.r(e);o(42),o(1),o(3),o(11),o(25),o(181),o(447),o(449),o(455),o(457),o(458),o(459),o(462),o(463),o(464),o(465),o(466),o(467),o(468),o(469),o(471),o(472),o(473),o(474),o(475),o(476),o(477),o(478),o(479),o(480),o(481);var n={props:{demo:{type:Boolean,default:!1}},data:function(){return{caption:"",showCaptureOptions:!1,imgVersion:0,showOptions:!1,isCameraOpen:!1,isPhotoTaken:!1,isShotPhoto:!1,isLoading:!1,link:"#",media:null,src:"",cropper:null,croppedImage:"",destination:{},image:{}}},watch:{demo:function(){this.toggleCamera()}},mounted:function(){var t=this;setTimeout((function(){t.toggleCamera()}),1e3)},methods:{cancel:function(){!0===this.isCameraOpen&&this.toggleCamera(),this.$emit("closeCamera")},toggleCamera:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.isCameraOpen?(this.isCameraOpen=!1,this.isPhotoTaken=!1,this.isShotPhoto=!1,this.stopCameraStream()):(this.isCameraOpen=!0,!0===e&&(setTimeout((function(){t.showCaptureOptions=!0}),1e3),this.createCameraElement()))},createCameraElement:function(){var t=this;this.isLoading=!0;var e=window.constraints={audio:!1,video:!0};navigator.mediaDevices.getUserMedia(e).then((function(e){t.isLoading=!1,t.$refs.camera.srcObject=e})).catch((function(e){t.isLoading=!1,console.log(e),alert("error")}))},stopCameraStream:function(){try{this.$refs.camera.srcObject.getTracks().forEach((function(track){track.stop()}))}catch(t){console.log(t)}},takePhoto:function(){var t=this;if(!this.isPhotoTaken){this.isShotPhoto=!0;setTimeout((function(){t.isShotPhoto=!1}),50)}this.isPhotoTaken=!this.isPhotoTaken,this.$refs.canvas.getContext("2d").drawImage(this.$refs.camera,0,0,450,337.5),this.cropImage()},uploadCropped:function(){this.cropper&&this.cropper.destroy(),this.showCaptureOptions=!1,this.showOptions=!1,this.toggleCamera(!1),this.$emit("myevent",this.croppedImage,this.caption),this.$emit("photoTaken",this.croppedImage),this.$emit("closeCamera")},retakeCropped:function(){this.cropper&&this.cropper.destroy(),this.showOptions=!1,this.src="",this.toggleCamera()},cropImage:function(){this.showOptions=!0;var t=this.$refs.canvas.toDataURL("image/jpeg");this.src="",this.imgVersion=Math.random(),this.src=t,console.log("current img",t),this.toggleCamera(),this.isCameraOpen=!1},dataURLtoFile:function(t,e){for(var o=t.split(","),n=o[0].match(/:(.*?);/)[1],r=atob(o[1]),c=r.length,d=new Uint8Array(c);c--;)d[c]=r.charCodeAt(c);return new File([d],e,{type:n})}}},r=n,c=(o(482),o(23)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"adjust"},[o("div",[o("div",{staticClass:"ml-3 mt-2"},[o("span",{on:{click:t.cancel}},[o("Icon",{staticStyle:{"font-size":"1.2rem"},attrs:{icon:"fa6-solid:x"}})],1),t._v(" "),o("span",{staticClass:"ml-2"},[t._v("Take Photo")])])]),t._v(" "),o("div",{staticClass:"img-container d-flex justify-content-center"},[o("div",{staticClass:"crop"},[o("img",{ref:"imageRef",staticClass:"img-fluid",attrs:{src:t.src,width:"100%"}}),t._v(" "),o("div",{staticClass:"\n          img-caption\n          row\n          mt-5\n          d-flex\n          align-items-center\n          items-center\n          justify-content-center\n        "},[o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.caption,expression:"caption"}],staticClass:"inputCaption",attrs:{type:"text",placeholder:"Type a Caption"},domProps:{value:t.caption},on:{input:function(e){e.target.composing||(t.caption=e.target.value)}}})]),t._v(" "),o("VTooltip",{staticClass:"ml-3",attrs:{placement:"top","data-popper-shown":!0,triggers:["hover"],skidding:-10,"arrow-padding":8},scopedSlots:t._u([{key:"popper",fn:function(){return[o("div",[t._v("Send Picture")])]},proxy:!0}])},[o("b-button",{staticClass:"\n              rounded-btn\n              d-flex\n              justify-content-center\n              align-items-center\n              text-white\n              bg-primary\n            ",attrs:{variant:"primary"},on:{click:t.uploadCropped}},[o("Icon",{style:{fontSize:"1.5rem"},attrs:{icon:"la:telegram-plane"}})],1)],1),t._v(" "),o("VTooltip",{staticClass:"ml-3",attrs:{placement:"top","data-popper-shown":!0,triggers:["hover"],skidding:-10,"arrow-padding":8},scopedSlots:t._u([{key:"popper",fn:function(){return[o("div",[t._v("Retake Picture")])]},proxy:!0}])},[o("b-button",{staticClass:"\n              rounded-btn\n              d-flex\n              justify-content-center\n              align-items-center\n              text-white\n              bg-primary\n            ",attrs:{variant:"primary"},on:{click:t.retakeCropped}},[o("Icon",{style:{fontSize:"1.5rem"},attrs:{icon:"charm:refresh"}})],1)],1)],1)])]),t._v(" "),t.isCameraOpen?o("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}],staticClass:"camera-box forCamera",class:{flash:t.isShotPhoto}},[o("video",{directives:[{name:"show",rawName:"v-show",value:!t.isPhotoTaken,expression:"!isPhotoTaken"}],ref:"camera",attrs:{width:450,height:337.5,autoplay:""}}),t._v(" "),o("canvas",{directives:[{name:"show",rawName:"v-show",value:t.isPhotoTaken,expression:"isPhotoTaken"}],ref:"canvas",staticClass:"d-none",attrs:{id:"photoTaken",width:450,height:337.5}}),t._v(" "),t.showCaptureOptions?o("div",{staticClass:"d-flex justify-content-center"},[o("VTooltip",{attrs:{placement:"right","data-popper-shown":!0,triggers:["hover"],skidding:-10,"arrow-padding":8},scopedSlots:t._u([{key:"popper",fn:function(){return[o("div",[t._v("Take Photo")])]},proxy:!0}],null,!1,2930052878)},[o("b-button",{staticClass:"\n            rounded-btn\n            d-flex\n            justify-content-between\n            text-white\n            bg-primary\n          ",attrs:{variant:"primary"},on:{click:t.takePhoto}},[o("Icon",{style:{fontSize:"3rem"},attrs:{icon:"bxs:camera"}})],1)],1)],1):t._e()]):t._e()])}),[],!1,null,"51033f24",null);e.default=component.exports}}]);