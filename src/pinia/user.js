import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state() {
        return {
            userInfo: {
                name: "张三"
            }
        }
    },
    actions: {
        setUserInfo(data) {
            this.userInfo = data
        }
    }
})