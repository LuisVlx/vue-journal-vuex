<template>
    <div class="entry-list-container">
        <div class="px-2 pt-2 pb-2">
            <input
              type="text"
              class="form-control"
              placeholder="Buscar entradas"
              v-model="term"
            />
        </div>
        <div class="entry-list-scrollarea">
            <Entry
                v-for="entry in entriesByTerm" 
                :key="entry.id"
                :entry="entry"
            >
            </Entry>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'
export default {
    components: {
        Entry: defineAsyncComponent(() => import('../components/Entry'))
    },
    computed:{
        ...mapGetters('journal', ['getEntriesByTerm']),
        entriesByTerm(){
            return this.getEntriesByTerm(this.term)
        }
    },
    data(){
        return{
            term: '',
        }
    }
}
</script>
<style lang="scss" scoped>
.form-control{
    color: #707070;
}
.entry-list-container{
    border-right: 1px solid #2c3e50;
    height: calc(100vh - 56px);
}
.entry-list-scrollarea{
    height: calc(100vh - 110px);
    overflow: scroll;
}
</style>
