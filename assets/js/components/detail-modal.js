export default {
  model: {
    event: [],
  },
  props: {
    store: Object,
  },
  components: {},
  template: `
    <div class="modal">
      <div class="modal-body">
        <h1> this is modal </h1>
        <h1> this is modal </h1>
        <h1> this is modal </h1>
        <h1> this is modal </h1>
        <h1> this is modal </h1>
        <h1> this is modal </h1>
        <h1> this is modal </h1>
        <h1> this is modal </h1>
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
  },
  beforeDestroy: function () {
    this.subject.next();
    this.subject.complete();
  },
};
