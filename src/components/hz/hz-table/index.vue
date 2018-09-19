<template>
    <div class="hz-table">
        <div class="title">{{ options.title }}</div>
        <table>
            <tr>
                <th v-for="(thItem, index) in options.headers">{{ thItem.label }}</th>
            </tr>
            <tr v-for="(tdItem) in options.rows">
                <td v-for="(thItem, index) in options.headers">
                    <div v-if="thItem.name === 'heat'">
                        <span v-for="i in tdItem[thItem.name]">*</span>
                    </div>
                    <div v-else> {{ tdItem[thItem.name] }}</div>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
    export default {
        props: {
            options: {
                type: Object,
                default: ()=>{
                    return {
                        title: '',
                        headers: [], // {name: 'dssd', label: 'dssd'}
                        datas: []
                    }
                }
            }
        },
        data() {
            return {
            }
        }
    }
</script>
<style lang="less">
    .hz-table {
        .title {
            
        }
    }
</style>
