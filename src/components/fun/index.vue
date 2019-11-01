<template>
        <div>
             show
        </div>
</template>
<script>
export default {
    name : 'Show',
    mounted(){
        this.$router.push('/deving')
        console.log(this.$route.path)
    }
}
</script>
<style lang="sass" scoped>

</style>