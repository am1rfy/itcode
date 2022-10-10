import { defineStore } from 'pinia'

export const useTodoItemStore = defineStore('todoItems', {
    state() {
        return {
            items: [
                {
                    id: 1,
                    title: 'Купить хлеб',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    checked: false,
                    deleted: false
                },
                {
                    id: 2,
                    title: 'Выбросить мусор',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    checked: false,
                    deleted: false
                },
                {
                    id: 3,
                    title: 'Убраться в комнате',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    checked: false,
                    deleted: false
                },
                {
                    id: 4,
                    title: 'Начать делать курсовую',
                    text: 'Lorem ipsum',
                    checked: false,
                    deleted: false
                }
            ]
        }
    },
    actions: {
        createNote({title, text}) {
            const newItemId = this.items[this.items.length - 1].id + 1
            this.items.push({
                id: newItemId,
                title: title,
                text: text,
                checked: false,
                deleted: false
            })

            // Здесь какая то логика взаимодействия с бэкэндом

            return newItemId
        }
    }
})