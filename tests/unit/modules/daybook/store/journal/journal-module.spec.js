import { createStore } from "vuex";
import journal from '@/modules/daybook/store/journal'
import { journalState } from "../../../../mock-data/test-journal-state";


const createVuexStore = ( initialState ) => 
    createStore({
        modules: {
            journal: {
                ...journal,
                state: { ...initialState }
            }
        }
    })

describe('Vuex - Pruebas en el Journal Module', () => {
    
    test('este es el estado inicial, debe de tener este state', () => {
        
        const store = createVuexStore(journalState)

        const { isLoading, entries } = store.state.journal

        expect(isLoading).toBeFalsy()
        expect(entries).toEqual(journalState.entries)
    });

    test('mutation: setEntries', () => {
        
        const store = createVuexStore({ isLoading: true, entries: []})

        store.commit('journal/setEntries', journalState.entries)

        expect(store.state.journal.entries.length).toBe(2)
        expect(store.state.journal.isLoading).toBeFalsy()
    }); 

    test('mutation: updateEntry', () => {
        //crear store con entries
        const store = createVuexStore(journalState)
        //updatedEntry
        const updatedEntry =  {
            id: '-NPSsztArHMFiy3v-FzZ',
            date: 1677686197000,
            text: "Hola mundo desde pruebas"
        }

        //commit de la mutación
        store.commit('journal/updateEntry', updatedEntry)
        //Expects
        //entries.length = 2
        const { entries } = store.state.journal

        expect(entries.length).toBe(2)
        // expect(store.state.journal.entries.length).toBe(2)

        //entries tiene que existir el updateEntry toEqual
        expect(
        entries.find(e => e.id === updatedEntry.id)
        ).toEqual(updatedEntry)
    });

    test('mutation: addEntry deleteEntry', () => {
        
        //crear store con entries
        const store = createVuexStore(journalState)
        const newEntry =  {
            id: 'ABC-123',
            date: 1677686197000,
            text: "Hola Mundo"
        }
        //addEntry {id: 'ABC-123', text: 'Hola Mundo'}
        store.commit('journal/addEntry', newEntry)
        
        //Expects
        //Entradas sean 3
        const stateEntries = store.state.journal.entries
        expect(stateEntries.length).toBe(3)
        //Entrada con el id ABC-123 exista
        expect(stateEntries.find(e => e.id === newEntry.id)).toBeTruthy()

        //deleteEntry 'ABC-123'
        store.commit('journal/deleteEntry', newEntry.id)
        //Expects
        //Entradas deben de ser 2
        expect(store.state.journal.entries.length).toBe(2)
        //Entrada con el id ABC-123 no debe de existir 
        expect(store.state.journal.entries.find(e => e.id === newEntry.id)).toBeFalsy()
    });

    /* ----------------------- Getters ----------------------- */
    test('getters: getEntriesByTerm getEntryById', () => {
        
        const store = createVuexStore(journalState)
        const [entry1, entry2] = journalState.entries
        
        expect(store.getters['journal/getEntriesByTerm']('').length).toBe(2)
        expect(store.getters['journal/getEntriesByTerm']('buen día').length).toBe(1)

        expect(store.getters['journal/getEntriesByTerm']('buen día')).toEqual([entry2])

        expect(store.getters['journal/getEntryById'](entry1.id)).toEqual(entry1)
    }); 

    /* ----------------------- Actions ----------------------- */

    test('actions: loadEntries', async() => {
        
        const store = createVuexStore({ isLoading: true, entries: []})

        await store.dispatch('journal/loadEntries')

        expect(store.state.journal.entries.length).toBe(2)

    });


    test('actions: updateEntries', async() => {
        
        const store = createVuexStore(journalState)

        const updatedEntry = {
            id: '-NPSsztArHMFiy3v-FzZ',
            date: 1677686197000,
            text: "Hola mundo desde pruebas",
            otroCampo: true,
            otroMas: { a: 1 }
        }

        await store.dispatch('journal/updateEntry', updatedEntry)

        expect(store.state.journal.entries.length).toBe(2)

        expect(
            store.state.journal.entries.find(e => e.id === updatedEntry.id)
        ).toEqual({
            id: '-NPSsztArHMFiy3v-FzZ',
            date: 1677686197000,
            text: "Hola mundo desde pruebas"
        })
    });

    test('actions: createEntry deleteEntry', async() => {
        
        const store = createVuexStore(journalState)

        const newEntry = { date: 1677686197000, text: "Nueva entrada desde las pruebas" }

        const id = await store.dispatch('journal/createEntry', newEntry)

        expect(typeof id).toBe('string')

        expect(
            store.state.journal.entries.find(e => e.id === id)
        ).toBeTruthy()

        await store.dispatch('journal/deleteEntry', id)

        expect(
            store.state.journal.entries.find(e => e.id === id)
        ).toBeFalsy()
    });
});