export default {
    computed: {
        removeFirstSlash() {
            return (url) => {
                if (url.charAt(0) === '/') url = url.substr(1)
                return url
            }
        }
    },
    methods: {
        locationChange(url) {
            url.split('/')[0] === 'app' ? window.location = url : this.$route.name.includes('___en') ? window.location = `/en/${this.removeFirstSlash(url)}` : window.location = url
        }
    }
}
