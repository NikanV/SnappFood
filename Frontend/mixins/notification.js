import { mapMutations } from 'vuex'

export default {
    methods: {
        ...mapMutations({
            notify: 'notification/show'
        }),
        notifyError (content) {
            this.notify({
                content,
                type: 'danger',
                dismissible: true,
                timeout: 10000
            })
        },
        notifySuccess (content) {
            this.notify({
                content,
                type: 'success',
                dismissible: true,
                timeout: 5000
            })
        }
    }
}