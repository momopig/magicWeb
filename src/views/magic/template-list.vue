<style lang="less">
    @import '../../styles/common.less';
    @import './template-list.less';
</style>

<template>
    <div class="list-page">
        <div class="edittable-table-height-con">
            <Button type="primary" class="btn-create"><a href="/#/magic/template-create-edit?operation=create">新建</a></Button>
            <can-edit-table class="table-template-list" v-model="templateList" :columns-list="editInlineColumns"></can-edit-table>
        </div>
    </div>
</template>

<script>
import tinymce from 'tinymce';
import canEditTable from './../tables/components/canEditTable.vue';
import MagicService from '@/utils/fetchService/magic.js' 

export default {
    name: 'template-list',
    components: {
        canEditTable
    },
    data () {
        return {
            templateList: [],
            editInlineColumns: [
                {
                    title: '序号',
                    type: 'index',
                    align: 'center',
                    editable: true
                },
                {
                    title: '模版名称',
                    align: 'center',
                    key: 'name',
                    editable: true
                },
                {
                    title: '操作',
                    align: 'center',
                    key: 'handle',
                    handle: ['edit', 'delete']
                } 
            ]

        }
    },
    methods: {

    },
    created() {
        const self = this
        MagicService.getTemplateList({pageSize: 10, page: 0}, {
            callback: (data) => {
                self.templateList = data.list
            }
        })
    },
    mounted () {
       
    }
};
</script>
