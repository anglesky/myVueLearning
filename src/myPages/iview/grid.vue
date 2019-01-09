<!--
栅格系统
2018-12-30

-->
<template>
	<div class="Grid">
		<div class="main-container first-ivew-page">
	    	<p>元素从左往右排列</p>
	    	<Row type="Flex" justify="start" class="code-row-bg">
	    		<Col span="12">50%</Col>
	    		<Col span="12">50%</Col>
	    	</Row>
	    </div>
	</div>
</template>
<script>
export default {
    name:"iVew-Grid",
    data(){
        return {
            
        }
    },
}
</script>
<style lang="less">
.Grid{
	.code-row-bg{
		background-color:blue;
	}
}
</style>
