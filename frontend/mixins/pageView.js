export default {
  mounted() {
    if (this.$metaInfo && this.$metaInfo.title) {
      this.$gtm.sendPageView(this.$metaInfo.title)
    }
  }
}
