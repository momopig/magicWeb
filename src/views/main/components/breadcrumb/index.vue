
<template>
    <ol class="breadcrumb">
        <li class="breadcrumb-item" v-for="(page,list) in pagelist" :key="list">
            <a :href="page.url">{{page.name}}</a>
        </li>
    </ol>
</template>
<style lang="less">
.breadcrumb{
    margin: 24px 0 16px;
    list-style: none;
    font-size: 12px;
    .breadcrumb-item{
        a{
            color:#BDBDBD;
        }
        color: #BDBDBD;
        display: inline-block;
        &:after{
            content: " > ";
        }
        &:last-child{
            color: #767676;
            &:after{
                content: "";
            }
            a{
                color:#767676;
                cursor:auto;
            }
        }
    }
}

</style>
<script>
    export default {
        data () {
            return {
                breadlist:[
                    {key:'intelligence', name:'首页', url:'/#/intelligence'},
                    {key:'search', name:'金融知识检索', url:'/#/intelligence/search'},
                    {key:'detail', name:'详情', url:'/#/intelligence/detail'},
                    {key:'forecast', name:'监管预测预警', url:'/#/intelligence/forecast'}
                ],
                pagelist:[]
            };
        },
        methods: {
            getBread(){
                var breadlist = this.breadlist;
                this.$route.matched.forEach((item,index) => {
                        breadlist.forEach((page,list) => {
                            if(page.key == item.name){
                                this.pagelist = this.pagelist.concat(page)
                            }
                        })
                    }
                )
            }
        },
        watch: {

        },
        created () {
            this.getBread();
        }
    };
</script>

