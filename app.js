const app = Vue.createApp({
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    add(num) {
      console.log(this.value);
      this.value = this.value + num;
    },
  },
  watch: {
    result() {
      setTimeout(() => {
        this.value = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.value < 37) {
        return "Not there yet";
      } else if (this.value > 37) {
        return "Too much!";
      }
    },
  },
});

app.mount("#assignment");
