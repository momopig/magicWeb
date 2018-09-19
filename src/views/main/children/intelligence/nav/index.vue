<template>
    <div class="nav">
        <div class="entry-box">
           <p class="entry-box-title">请选择功能模块</p>
           <a href="/#/intelligence/search"><div class="entry-box-item">金融知识检索</div></a>
           <a href="javascript: void(0);"><div class="entry-box-item disabled">监管预测预警</div></a>
        </div>
    </div>
</template>
<script>
    export default {
        components: {
        }
    };
</script>
<style lang="less">
.nav{
    position: fixed;
    overflow: hidden;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color:rgba(0,0,0, 0.1);
    -webkit-overflow-scrolling: touch;
    outline: 0;
}
.entry-box{
    margin: 256px auto;
    width: 600px;
    height: 274px;
    background-color: #fff;
    box-shadow:0px 2px 4px rgba(0, 0, 0, 0.2);
    color: #999999;
    font-size: 16px;
    text-align: center;
    .entry-box-title{
        width: 100%;
        height: 56px;
        padding-left: 24px;
        line-height: 56px; 
        text-align: left;
    }
    .entry-box-item{
        display: inline-block;
        width: 200px;
        height: 100px;
        box-shadow:0px 0px 1px rgba(0, 0, 0, 0.2);
        margin: 28px;
        color: #333;
        font-size: 18px;
        line-height: 100px;
        &:hover{
            cursor: pointer;
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
        }
    }
    .disabled{
        color: #999;
        border: 1px solid #F0F2F3;
        box-shadow: none;
        &:hover{
            cursor: default;
            box-shadow: none;
        }
    }
}
</style>
