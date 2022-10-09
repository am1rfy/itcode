import { defineStore } from 'pinia'

export const useLabelStore = defineStore('labels', {
    state() {
        return {
            items: [
                {id: 1, title: 'All', cardsIds: [1, 2, 3, 4, 5], isSelected: false},
                {id: 2, title: 'Label1', cardsIds: [1, 2], isSelected: false},
                {id: 3, title: 'Label2', cardsIds: [4], isSelected: false},
                {id: 4, title: 'Label3', cardsIds: [], isSelected: false},
                {id: 5, title: 'Label4', cardsIds: [3], isSelected: false},
                {id: 6, title: 'Trash', cardsIds: [], isSelected: false}
            ]
        }
    },
    getters: {
        getItems(state) {
            return state.items
        }
    }
})