export default {
  model: {
    event: ['close'],
  },
  props: {
    store: Object,
  },
  components: {},
  template: `
    <div class="modal">
      <div class="close btn" @click="closeBtn">X</div>
      <div class="modal-body text-center">
        <div class="modal-title">好米亞</div>
      </div>
      <div class="modal-bg"></div>
    <div>
  `,
  data: function () {
    return {
      subject: new Rx.Subject(),
      url: './api/data.json'
    };
  },
  mounted: function () {
    this.init();
  },
  methods: {
    init: function () {
      console.log("store init");
    },
    closeBtn:function(){
      this.$emit('close');
    }
  },
  beforeDestroy: function () {
    this.subject.next();
    this.subject.complete();
  },
};