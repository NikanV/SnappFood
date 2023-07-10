<template>

</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    iconName: {
      type: String,
      required: true,
      default: ''
    },
    iconColor: {
      type: String,
      default: '#FFFFFF'
    },
    iconSecondColor: {
      type: String,
      default: '#000000'
    },
    size: {
      type: String,
      required: false,
      default: 'normal',
      validator(size) {
        return ['small', 'normal', 'large', 'semiLarge', 'xLarge'].includes(size)
      }
    },
    iconRotate: {
      type: Number,
      default: 0
    },
    translate: {
      type: String,
      default: ''
    },
    viewbox: {
      type: String,
      default: '0 0 28 28'
    }
  },

  computed: {
    pixelSize() {
      const sizeMap = {
        small: 16,
        normal: 20,
        large: 24,
        semiLarge: 32,
        xLarge: 52
      }
      return sizeMap[this.size]
    },
    icon() {
      return {
        // todo: templates for icons:
        // anitphishing: `
        //   <path
        //   d="M10.92 0.814229L1.58667 4.96089C0.626667 5.38756 0 6.34756 0 7.4009V13.6676C0 21.0676 5.12 27.9876 12 29.6676C18.88 27.9876 24 21.0676 24 13.6676V7.4009C24 6.34756 23.3733 5.38756 22.4133 4.96089L13.08 0.814229C12.4 0.507562 11.6 0.507562 10.92 0.814229V0.814229ZM12 14.9876H21.3333C20.6267 20.4809 16.96 25.3742 12 26.9076V15.0009H2.66667V7.4009L12 3.25423V14.9876Z"
        //   fill="#784ED1"
        //   />`,
        // chevron: `<g transform="translate(3500 -208) rotate(${this.iconRotate})"><rect width="24" height="24" transform="translate(208 3476)" fill="rgba(0,0,0,0)" opacity="0.871"/><path d="M223.88,3485.29a1.018,1.018,0,0,1,1.42,0,1,1,0,0,1,0,1.41l-4.59,4.59a1,1,0,0,1-1.41,0l-4.59-4.59a1,1,0,0,1,1.41-1.41l3.88,3.88,3.88-3.88Z" fill="${this.iconColor}"/></g>`,

      }
    }
  }
}
</script>