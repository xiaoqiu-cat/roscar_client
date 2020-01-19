<template>
        <div class="about_container">
             <div class="content">
                    <h1 id='介绍'>介绍</h1>
                    <p>ros 智能小车是一款基于ros开发的智能小车。运用了最新的人工智能技术栈,同时拥有多项无人驾驶功能。并且，可以适应多种场景的演示和操作</p>
             </div>
        </div>
</template>
<script>
export default {
    name : 'About',
    mounted(){
        // this.$router.push('/deving')
    }
}
</script>
<style lang="scss" scoped>
    .about_container{
        max-width: 900px;
        margin: 0 auto;
        height: 100%;
        .content{
            overflow: hidden;
            padding: 0 20px;
            h1{
                font-size: 30px;
                margin: 30px 0;
                font-weight: 600;
                color: #45526b;
            }
            p{
                color: #45526b;
                font-size: 15px;
                margin: 20px 0;
                line-height: 30px;
                letter-spacing: 1px;
            }
        }
    }
</style>