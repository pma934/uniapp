<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button @click="handleClick">点击</button>
		<text>总共购买的水果数量:{{totalNum}}</text>
		<view v-for="item in list" :key="item.name">
			<text>{{item.name}}：</text>
			<text>{{item.num}}</text>
		</view>
		<my-component></my-component>
		<navbar></navbar>
	</view>
</template>

<script setup>
	import { ref, reactive, computed } from 'vue'
	import { onLoad, onReady } from '@dcloudio/uni-app'
	
	const title = ref('Hello')
	const list = reactive([
		{name: 'apple', num:1},
		{name: 'arange', num:2},
		{name: 'banana', num:3}
	])
	// 水果总数
	const totalNum = computed(()=>{
		return list.reduce((total,cur)=>{return total+cur.num},0)
	})
	
	const handleClick = () => {
		list.forEach(item=>{
			item.num++
		})
	}
	
	onLoad(()=>{
		console.log('onLoad~~~生命周期')
	})
	onReady(()=>{
		console.log('onReady~~~生命周期')
	})
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
