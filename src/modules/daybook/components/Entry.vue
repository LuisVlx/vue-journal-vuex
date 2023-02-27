<template>
    <div
        class="entry-container mb-3 pointer p-2"
        @click="$router.push({name: 'entry', params: {id: 10}})"
    >
        <!-- Título -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">24</span>
            <span class="mx-1 fs-5">Febrero</span>
            <span class="mx-2 fw-light">2023, viernes</span>
        </div>

        <div class="entry-description">
            Id elit proident voluptate qui minim anim. 
            Tempor irure ea commodo proident nulla. 
            Nisi culpa veniam commodo mollit deserunt 
            occaecat pariatur magna nostrud pariatur 
            nisi elit. Ullamco nulla nulla nostrud in. 
            Incididunt nostrud eu anim esse.
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .entry-description{
        font-size: 12px;
    }
}
</style>