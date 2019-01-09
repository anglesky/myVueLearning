<template>
	<div class="Button">
		<div class="main-container first-ivew-page">
	    	<Button type="primary">我是个按钮</Button>
	    	<Button type="success">成功</Button>
	    	<Button type="error" size="small">错误</Button>
	    	<Button type="warning" loading>警告</Button>
	    	<Button type="info" ghost>我是幽灵</Button>
	    </div>
	    <div class="main-container first-ivew-page">
	    	<Button type="success" shape="circle" long>成功</Button>
	    	<Button type="error" icon="ios-search">错误</Button>
	    	<Button type="warning" disabled>警告</Button>
	    	<Button type="info" ghost>我是幽灵</Button>
	    </div>
	    <ButtonGroup vertical>
	    	<Button type="primary">keyib</Button>
	    	<Button type="success">keyib</Button>
	    	<Button type="warning">keyib</Button>
	    </ButtonGroup>
	</div>
</template>
<script>
export default {
    name:"iVewFirstPage",
    data(){
        return {
            
        }
    },
}
</script>
<style lang="less">
.Button{
	.main-container{
		padding:10px;
		background-color:#ebeef0;
	}
}

</style>
