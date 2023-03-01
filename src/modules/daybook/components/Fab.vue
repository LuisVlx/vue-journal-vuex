<template>
    <button class="btn btn-primary"
        @click="$emit('on:click')"
    >
        <i class="fa"
            :class="icon"
        ></i>
    </button>
</template>

<script>

export default {
    props:{
        icon:{
            Type: String,
            default: 'fa-plus'
        }
    }
}
</script>

<style lang="scss" scoped>
button{
    border-radius: 100%;
    bottom: 20px;
    height: 50px;
    position: fixed;
    right: 20px;
    width: 50px;
}
</style>