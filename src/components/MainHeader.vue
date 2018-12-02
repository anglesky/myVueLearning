<!--
header
anglesky
2018.12.02
-->
<template>
	<el-container class="main-header">
		<el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
	</el-container>
</template>
<script>
	export default{
		name:'MainHeader',
		data(){
			return {}
		}
	}
</script>
<style lang="less" src="@/assets/less/header.less"></style>