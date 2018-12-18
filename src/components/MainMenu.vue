<!--
	左侧目录树
	2018.11.25
	anglesky
-->
<template>
	
	<el-aside class="left-menu">
		<el-menu :default-openeds="['1', '3']">
			<!--一级菜单-->
			<template v-for="(menuItem,index) in menuItems">
				<el-submenu v-if="menuItem.items.length>0" :index="''+index">
					<template slot="title"><i :class="[menuItem.icon]"></i>{{menuItem.name}}</template>
					<!--二级菜单-->
					<template v-for="(subMenu,subIndex) in menuItem.items">
						<el-submenu v-if="subMenu.items.length>0" :index="index+'-'+subIndex">
							<template slot="title"><i :class="[subMenu.icon]"></i>{{subMenu.name}}</template>
							<!--三级菜单-->
							<template v-for="(thirdMenu,thirdIndex) in subMenu.items">
								<el-submenu v-if="thirdMenu.items.length>0" :index="index+'-'+subIndex+'-'+thirdIndex">
									<template slot="title"><i :class="[thirdMenu.icon]"></i>{{thirdMenu.name}}</template>
								</el-submenu>
								<el-menu-item v-else :index="index+'-'+subIndex+'-'+thirdIndex">
									<router-link :to="{path:thirdMenu.link}"><i :class="[thirdMenu.icon]"></i>{{thirdMenu.name}}</router-link>
								</el-menu-item>
							</template>
						</el-submenu>
						<el-menu-item v-else :index="index+'-'+subIndex">
							<router-link :to="{path:subMenu.link}"><i :class="[subMenu.icon]"></i>{{subMenu.name}}</router-link>
						</el-menu-item>
						
					</template>
				</el-submenu>
				<el-menu-item v-else :index="''+index">
					<router-link :to="{path:menuItem.link}"><i :class="[menuItem.icon]"></i>{{menuItem.name}}</router-link>
				</el-menu-item>
			</template>
			
		</el-menu>
	</el-aside>

</template>
<script>
	export default{
		name:'mainMenu',
		data(){
			return {
				menuItems:[
				{
					id:1,
					level:1,
					name:'Vue学习',
					link:'',
					icon:'el-icon-message',
					items:[{
						id:2,
						level:2,
						name:'Vue二级',
						link:'',
						icon:'',
						items:[{
							id:5,
							level:3,
							name:'Vue三级',
							link:'',
							icon:'',
							items:[]
						}]
					}]
				},
				{
					id:3,
					level:1,
					name:'Vue-cli3',
					link:'',
					icon:'el-icon-setting',
					items:[{
						id:4,
						level:2,
						name:'Vue学习',
						link:'',
						icon:'',
						items:[]
					}]
				},
				{
					id:5,
					level:1,
					name:'iView',
					link:'',
					icon:'el-icon-news',
					items:[{
						id:6,
						level:2,
						name:'Buttom',
						link:'/iview-Button',
						icon:'',
						items:[]
					}]
				},
				]
			}
		}
	}
</script>

<style lang="less" src="@/assets/less/menu.less"></style>