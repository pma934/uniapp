<template>
	<view>
		nabar组件
		<view>组件的name属性: {{name}}</view>
		<view>组件的content属性: {{content}}</view>
		<button @click="handleChange">改变content</button>
		<slot></slot>
		<slot name="jmcc"></slot>
		<slot name="jmccjx"></slot>
	</view>
</template>

<script setup>
	import { defineProps } from 'vue'
	
	const emit = defineEmits(['changeData'])
	const handleChange = () => {
		emit('changeData', '修改后的数据')
	}
	// defineProps(['name','content'])
	defineProps({
		name: String,
		content:{
			type: String,
			default: ()=>{
				return '默认值'
			}
		}
	})
</script>

<style>

</style>v