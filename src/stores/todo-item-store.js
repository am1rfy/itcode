import { defineStore } from 'pinia'
import { useTodoListStore } from './todo-list-store.js'

export const useTodoItemStore = defineStore('todoItems', {
    state() {
        return {
            todoListStore: useTodoListStore(),
            items: [
                {
                    id: 1,
                    title: 'Купить хлеб',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    tags: {
                        userTag: 'Label1',
                        defaultTag: 'All'
                    }
                },
                {
                    id: 2,
                    title: 'Выбросить мусор',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    tags: {
                        userTag: 'Label1',
                        defaultTag: 'All'
                    }
                },
                {
                    id: 3,
                    title: 'Убраться в комнате',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    tags: {
                        userTag: 'Label3',
                        defaultTag: 'All'
                    }
                },
                {
                    id: 4,
                    title: 'Начать делать курсовую',
                    text: 'Lorem ipsum',
                    tags: {
                        userTag: 'Label4',
                        defaultTag: 'All'
                    }
                }
            ]
        }
    },
    getters: {
        activeTodoItems(state) {
            const todoItems = []
            state.items.forEach(item => {
                if ([item.tags.userTag, item.tags.defaultTag].includes(state.todoListStore.activeTodoList.title)) {
                    todoItems.push(item)
                }
            })
            return todoItems
        }
    },
    actions: {
        create({title, text}) {
            const newItemId = this.items[this.items.length - 1].id + 1
            this.items.push({
                id: newItemId,
                title: title,
                text: text,
                tags: {
                    userTag: this.todoListStore.activeTodoList.title,
                    defaultTag: this.todoListStore.items[0].title
                },
            })

            // Здесь какая то логика взаимодействия с бэкэндом

            return newItemId
        },
        delete(id) {
            this.items.forEach((item, index) => {
                if (item.id === id) {
                    this.items.splice(index, 1)
                }
            })

            // Здесь какая то логика взаимодействия с бэкэндом
        },
        check(id) {
            this.items.forEach(item => {
                if (item.id === id) {
                    [item.tags.userTag, item.tags.defaultTag] = ['', 'Checked']
                }
            })

            // Здесь какая то логика взаимодействия с бэкэндом
        }
    }
})