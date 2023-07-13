import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('users', [
            'hasToken'
        ]),
        ...mapGetters('panel', [
            'panelUrl',
            'justShowNewPanel'
        ])
    },
    created() {
        if (!process.server && this.$storage.getItem('token')) {
            if (this.justShowNewPanel) {
                this.$router.replace(this.localePath('/' + this.panelUrl)).catch(() => {})
            } else {
                window.location = '/' + this.panelUrl // redirect to /app
            }
            return false
        }
    }
}
