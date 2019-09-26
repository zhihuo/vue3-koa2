<style lang="less" scoped>
    .menu{
			width: 190px;
			min-height: 100%;
			margin: 0;
			border-right: 1px solid #dddddd;
			background-color: #f2f2f2;
			z-index: 10;
			position: fixed;
			top:70px;
			padding: 10px 20px;
        &-item{
            font-size: 15px;
            padding: 5px 0;
            cursor: pointer;
						columns: #fff;
            &:hover{
                color: #3a8ee6;
            }
        }
        .active{
            color: #3a8ee6;
        }
    }
</style>
<template>
    <div class="menu">
        <template v-for="(item, index) in menus">
            <div :class="['menu-item', {active:activeUrl===item.url}]" @click="goTo(item)" :key="index">
                {{item.name}}
            </div>
        </template>
    </div>
</template>
<script>
export default {
	data() {
		return{
			menus: [
				{
					name: '首页',
					url: '/index'
				},
				{
					name: '用户',
					url: '/users'
				},
				{
					name: '列表',
					url: '/infolist'
				},
				{
					name: '产品',
					url: '/product'
				}
			]
		};
	},
	computed:{
		activeUrl() {
			return this.$route.path;
		}
	},
	methods: {
		goTo(i) {
			this.$router.push({ path: i.url, query: this.$route.query });
		}
	}

}
</script>
