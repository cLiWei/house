<script>
	export default {
		onLaunch: function() {
			uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					// Vue.prototype.StatusBar = e.statusBarHeight;
					// if (e.platform == 'android') {
					// 	Vue.prototype.CustomBar = e.statusBarHeight + 50;
					// } else {
					// 	Vue.prototype.CustomBar = e.statusBarHeight + 45;
					// };
					// #endif
					// #ifdef MP-WEIXIN
					// Vue.prototype.StatusBar = e.statusBarHeight;
					// let custom = wx.getMenuButtonBoundingClientRect();
					// Vue.prototype.Custom = custom;
					// Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif		
					// #ifdef MP-ALIPAY
					// Vue.prototype.StatusBar = e.statusBarHeight;
					// Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import "colorui/main.css";
	@import "colorui/icon.css";
	/*每个页面公共css */

	@font-face {
	  font-family: 'webfont';  /* project id 868248 */
	  src: url('//at.alicdn.com/t/font_868248_9vgkapwlhmd.eot');
	  src: url('//at.alicdn.com/t/font_868248_9vgkapwlhmd.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_868248_9vgkapwlhmd.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_868248_9vgkapwlhmd.woff') format('woff'),
	  url('//at.alicdn.com/t/font_868248_9vgkapwlhmd.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_868248_9vgkapwlhmd.svg#iconfont') format('svg');
	}
	.bar{
		height:80upx;
		font-weight: bold;
		line-height: 80upx;
	}
	.web-font{
	    font-family:"webfont" !important;
	    font-size:16px;font-style:normal;
	    -webkit-font-smoothing: antialiased;
	    -webkit-text-stroke-width: 0.2px;
	    -moz-osx-font-smoothing: grayscale;
	}
	.uni-picker-view-wrapper uni-picker-view-column:nth-child(1){
		flex:2 !important;
	}
	.uni-popup__wrapper.uni-custom .uni-popup__wrapper-box{
		padding: 0 !important;
	}
	uni-picker .uni-picker-action.uni-picker-action-confirm{
		float: right;
		color:#b60000 !important;
	}
	
	uni-page-body{
		width: 100%;
		height: 100%;
	}

	.uni-page-head-btn .uni-btn-icon{
		color:#ccc !important;
	}
	.check .uni-checkbox-input{
		border: 1px solid rgb(182, 0, 0);
	}
	
	 uni-checkbox.green[checked] .wx-checkbox-input, uni-checkbox[checked] .wx-checkbox-input,    uni-checkbox.green.checked .uni-checkbox-input, uni-checkbox.checked .uni-checkbox-input{
		background-color: rgb(182, 0, 0) !important;
		 color:rgb(182, 0, 0) !important;
		 border-color: rgb(182, 0, 0) !important;
	 }
</style>
