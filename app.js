const app = Vue.createApp({
  data() {
    return {
      userStyle: '',
      isHidden: false,
      currentColor: '',
    };
  },
  computed: {
    hiddenStatus() {
      if (this.isHidden) {
        return { hidden: true };
      }
      return { visible: true };
    },
  },
  methods: {
    toggleHiddenClass() {
      this.isHidden = !this.isHidden;
    },
  },
});

app.mount('#assignment');
