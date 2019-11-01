<template>
        <div class="deving-container">
            <div class="content">
                 更新中,敬请期待
            </div>
        </div>
</template>
<script>
export default {
    name : 'Deving',
}
</script>
<style lang="scss" scoped>
    .deving-container{
        text-align:center;
        font-size: 1rem;
        color: #45526b; 
        height: 100%;
        .content{
            height: 30px;
            position: absolute;
            left:50%;
            top:50%;
            transform:translate(-50%,-50%); 
        }
    }
</style>