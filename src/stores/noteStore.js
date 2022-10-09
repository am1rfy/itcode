import { defineStore } from 'pinia'

export const useNoteStore = defineStore('notes', {
    state() {
        return {
            items: [
                {
                    id: 1,
                    path: 'Path',
                    title: 'Title',
                    date: '30.09.2022',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: 2,
                    path: 'Path',
                    title: 'Title',
                    date: '28.09.2022',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                },
                {
                    id: 3,
                    path: 'Path',
                    title: 'Title',
                    date: '27.09.2022',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
                {
                    id: 4,
                    path: 'Path',
                    title: 'Title',
                    date: '21.08.2022',
                    text: 'Lorem ipsum'
                }
            ]
        }
    },
    getters: {
        getItems(state) {
            return state.items
        }
    }
})