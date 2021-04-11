export default {
  model: {
    event: ['close'],
  },
  template: `
    <div class="modal">
      <div class="modal-image">
        <div class="img-cont">
          <div class="close btn" @click="closeBtn">X</div>
          <img src="./assets/img/coming_soon.png">
        </div>
        
        
      </div>
      <div class="modal-bg" @click="closeBtn"></div>
    <div>
  `,
  data: function () {
    return {
      
    };
  },
  mounted: function () {
  },
  methods: {
    closeBtn:function(){
      this.$emit('close');
    }
  },
  beforeDestroy: function () {
    
  },
};
