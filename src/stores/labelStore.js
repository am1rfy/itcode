import { defineStore } from 'pinia'

export const useLabelStore = defineStore('labels', {
    state() {
        return {
            items: [
                {title: 'Label1', cardsIds: [1, 2], isSelected: false},
                {title: 'Label2', cardsIds: [4], isSelected: false},
                {title: 'Label3', cardsIds: [], isSelected: false},
                {title: 'Label4', cardsIds: [3], isSelected: false},
            ]
        }
    },
    getters: {
        getItems(state) {
            return state.items
        }
    }
})