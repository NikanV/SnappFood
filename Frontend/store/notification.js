import { Howl } from 'howler'

export const state = () => ({
    queue: [],
    nextID: 0,
    notificationSound: false
})

export const mutations = {
    show (state, notification) {
        if (state.notificationSound) {
            try {
                const coinSound = new Howl({
                    src: ['/coin-sound-effect.ogg', '/coin-sound-effect.mp3'],
                    html5: true,
                    preload: true,
                    autoplay: false
                })
                coinSound?.play()
            } catch {}
        }

        state.queue.push({
            id: ++state.nextID,
            ...notification
        })
    },

    remove (state, id) {
        const index = state.queue.findIndex(notif => notif.id === id)
        state.queue.splice(index, 1)
    },

    changeNotificationSoundStatus(state, status) {
        state.notificationSound = status
        this.$storage.setItem('notificationSound', status)
    }
}

export const getters = {
    notifications (state) {
        return state.queue
    },

    count (state) {
        return state.queue.length
    }
}

export const actions = {
    checkNotification({ commit }) {
        if (!process.server) {
            let currentNotificationSound = this.$storage.getItem('notificationSound')
            currentNotificationSound = currentNotificationSound === 'true'
            commit('changeNotificationSoundStatus', currentNotificationSound)
        }
    }
}
