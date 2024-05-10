<template>
	<view class="content">
		<navbar name="navbar组件" :content="data" @changeData="changeData">
			<view>这里是插槽内容</view>
			<template v-slot:jmcc>
				<view>我是具名插槽</view>
			</template>
			<template jmccjx>
				<view>我是具名插槽简写</view>
			</template>
		</navbar>
	</view>
</template>

<script setup>
	import { ref, reactive, computed } from 'vue'
	const data = ref('动态组件')
	const changeData = (val) => {
		data.value = val
	}
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
