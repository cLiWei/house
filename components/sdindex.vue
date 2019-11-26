<template>
	<view class="box">
		<view class="inputs">
			<view class="inputBox">
				<view class="inputBoxName">贷款金额</view>
				<view class="inputBoxinput">
					<input type="digit" value="" v-model="sdnum" placeholder="请输入商业贷款金额" class="input" />
					<span>万元</span>
				</view>
			</view>
			<view class="inputBox">
				<view class="inputBoxName">贷款期限</view>
				<view class="inputBoxinput">
					<view class="year">
						{{skqxindex}}年({{skqxindex*12}}期)
					</view>
				</view>
			</view>
			<view class="sliderBox">
				<slider class="slider" value="20" @change="sliderChange" min="1" max="30" show-value activeColor="#bfa699"/>
				<view class="yearword">年</view>
			</view>
			<view class="inputBox lastBox">
				<view class="inputBoxName" >商业贷款利率</view>
				<view class="inputBoxinput" @click="sdlvChange">
					<view class="input">
						 <picker @change="sdlvpickChange" :value="lvindex" :range="lvarray" range-key="name">
							<view class="uni-input">{{sdlv}}%</view>
						</picker>
						
					</view>
					<span>></span>
				</view>
			</view>
		</view>
		<view class="cal" @click="calBtn">
			计算
			<!-- <view class="z">计</view>
			<view class="z">算</view> -->
		</view>
	</view>
</template>

<script>
	import calresult from '../mixins/calculate.js'
	export default {
		props:["config"],
		data() {
			return {
				lvarray:[{
						lilv: 1,
						name: "基准利率"
					},
					{
						lilv: 1.1,
						name: "1.1倍利率"
					},
					{
						lilv: 1.15,
						name: "1.15倍利率"
					},
					{
						lilv: 1.2,
						name: "1.2倍利率"
					},
					{
						lilv: 1.3,
						name: "1.3倍利率"
					},
					{
						lilv: 0.9,
						name: "9折利率"
					},
					{
						lilv: 0.85,
						name: "85折利率"
					},
					{
						lilv: 0.8,
						name: "8折利率"
					},
					{
						lilv: 0.7,
						name: "7折利率"
					}
				],
				skqxindex:20,
				sdnum:0,
				sdlv:4.90,
				lvindex:0
			}
		},
		watch:{
			
		},
		methods: {
			// 计算
			calBtn(){
				let num = this.sdnum;
				let year = this.skqxindex;
				let lilv = this.sdlv/100;
				// 等额本息
				let debx = calresult.calcute.singleDk(1, num, year, lilv);
				// 等额本金
				let debj = calresult.calcute.singleDk(2, num, year, lilv);
				let data ={
					debx,
					debj
				}
				this.$emit('calresult',data);
			},
			// 商贷年限改变
			sliderChange(e){
				let val = e.detail.value;
				this.skqxindex = e.detail.value;
				if(val == 1){
					this.sdlv = 0.0435*100;
				}else if(val>1 && val<=5){
					this.sdlv = 0.0475*100;
				}else if(val>5){
					this.sdlv = 0.049*100;
				}
			},
			// 商贷利率修改
			sdlvpickChange(e){
				let val = e.detail.value;
				let lilv = this.lvarray[val].lilv;
				this.sdlv = (4.9*100*lilv/100).toFixed(2)
				console.log(val)
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../common/housecal.scss";
</style>
