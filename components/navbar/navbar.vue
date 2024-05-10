<template>
	<view class="nav">
		<view :style="'height:' + status + 'rpx;' + containerStyle"></view>
		<view class="navbar" :style="'height:' + navHeight + 'rpx;' + containerStyle"></view>
	</view>
</template>

<script setup>
	import { ref, onBeforeMount, defineProps } from 'vue'
	defineProps({
		background:{
			type:String,
			default: 'rgba(255,255,255,1)'
		},
		color:{
			type:String,
			default: 'rgba(0,0,0,1)'
		},
		fontSize:{
			type:String,
			default: 32
		},
		iconWidth: {
			type:String,
			default: 116
		},
		iconHeight:{
			type:String,
			default: 38
		},
	})
	//状态栏高度
	const status = ref(0)
	//内容栏高度
	const navHeight = ref(0)
	//背景颜色
	const containerStyle = ref('')
	//字体样式
	const textStyle = ref('')
	//图标样式
	const iconStyle = ref('')
	
	onBeforeMount(() => {
		setNavSize()
	})
	//计算状态栏高度
	const setNavSize = () => {
		const { system, statusBarHeight } = uni.getSystemInfoSync()
		status.value = statusBarHeight * 2;
		const isiOS = system.indexOf('iOS') > -1
		if(!isiOS){
			navHeight.value = 96
		}else{
			navHeight.value = 88
		}
	}
	//样式设置
	const setStyle = () => {
		containerStyle.value = `background: ${props.background};`
		textStyle.value = `color: ${props.color}; font-size: ${props.fontSize}rpx;`
		iconStyle.value = `width: ${props.iconWidth}rpx; height: ${props.iconHeight}rpx`
	}
	
</script>

<style>
	.nav {
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 2;
	}
</style>