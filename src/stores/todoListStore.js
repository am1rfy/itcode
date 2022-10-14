import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoLists', {
    state() {
        return {
            items: [
                {title: 'All', isDefault: true, isActive: false},
                {title: 'Label1', isDefault: false, isActive: false},
                {title: 'Label2', isDefault: false, isActive: false},
                {title: 'Label3', isDefault: false, isActive: false},
                {title: 'Label4', isDefault: false, isActive: false},
                {title: 'Checked', isDefault: true, isActive: false}
            ]
        }
    },
    getters: {
        activeTodoList(state) {
            let todoList
            state.items.forEach(item => {
                if (item.isActive) {
                    todoList = item
                }
            })
            return todoList
        }
    },
    actions: {
        setActiveTodoList: function (title) {
            this.items.forEach(item => {
                item.isActive = item.title === title
            })
            if (!this.activeTodoList) {
                this.items[0].isActive = true
            }
        }
    }
})