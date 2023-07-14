<template>
  <nuxt-link
      v-if="type === 'internal' && tag === 'a'"
      :to="path"
      :data-type="type"
      :target="target"
      :class="cssClass">
    <slot>
      {{ caption }}
    </slot>
  </nuxt-link>
  <nuxt-link
      v-else-if="type === 'internal' && tag === 'button'"
      v-slot="{ navigate }"
      :to="path"
      :data-type="type"
      :target="target"
      custom>
    <button
        :class="cssClass"
        role="link"
        @click="navigate"
        @keypress.enter="navigate">
      <slot>
        {{ caption }}
      </slot>
    </button>
  </nuxt-link>
  <a
      v-else
      :href="path"
      :data-type="type"
      :target="target"
      :class="cssClass">
    <slot>
      {{ caption }}
    </slot>
  </a>
</template>

<script>
export default {
  name: 'HybridLink',
  props: {
    // link URI or route object
    to: {
      type: [String, Object],
      required: true
    },
    // explicitly determine internal or external type
    // overrides smart Inference
    linkType: {
      type: String,
      required: false,
      default: null,
      validator (type) {
        return type === 'internal' || type === 'external'
      }
    },
    // the HTML tag used for nuxt-link
    tag: {
      type: String,
      required: false,
      default: 'a',
      validator(val) {
        return ['button', 'a'].includes(val)
      }
    },
    // whether the link is disabled or not
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    // whether adding a slash at the end or not
    trailingSlash: {
      type: Boolean,
      required: false,
      default: true
    },
    // switch to a locale other than the current one
    locale: {
      type: String,
      required: false,
      default: null
    },
    // Opens the linked document in the same frame as it was clicked (this is default)
    target: {
      type: String,
      required: false,
      default: '_self'
    },
    // CSS class
    cssClass: {
      type: [Object, Array, String],
      required: false,
      default: ''
    },
    caption: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    type() {
      if (this.linkType) { return this.linkType }
      if (typeof this.to === 'object' || this.disabled) { return 'internal' }
      // todo: remove 'app's when new-panel project has been launched
      const ABSOLUTE_PATH_PATTERN = /^(app|\/app|http|https|http:|https:|\/\/)/
      return ABSOLUTE_PATH_PATTERN.test(this.to) ? 'external' : 'internal'
    },
    path() {
      if (this.disabled) { return '' }

      if (this.type === 'internal') {
        let { path, fullPath } = this.localeRoute(this.to, this.locale) || {}

        if (!path) { return this.to }

        if (this.trailingSlash && !path.endsWith('/')) {
          fullPath = fullPath.replace(path, path + '/')
          path += '/'
        }
        return {
          ...(typeof this.to === 'object' ? this.to : {}),
          fullPath,
          path
        }
      } else { // external
        let path = this.to
        if (this.trailingSlash && path && !path.endsWith('/')) {
          path += '/'
        }
        return path
      }
    }
  }
}
</script>
