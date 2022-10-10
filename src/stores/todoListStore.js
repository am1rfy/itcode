import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoLists', {
    state() {
        return {
            items: [
                {title: 'Label1', todoItemsIds: [1, 2], isActive: false},
                {title: 'Label2', todoItemsIds: [4], isActive: false},
                {title: 'Label3', todoItemsIds: [], isActive: false},
                {title: 'Label4', todoItemsIds: [3], isActive: false},
            ]
        }
    }
})