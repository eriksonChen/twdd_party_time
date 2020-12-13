export default {
  model: {
    event: ['close'],
  },
  props: {
    detail: Object,
  },
  components: {},
  template: `
    <div class="modal">
      <div class="close btn" @click="closeBtn">X</div>
      <div class="modal-body">
        <div class="modal-title text-center">{{detail.name}}</div>
        <div class="store-pics">
          <div class="pic-list">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="pic in detail.images"><img :src="pic+'?text='+detail.en+detail.name"></div>
            </div>
            <div class="swiper-pagination"></div>
          </div>

          <div class="swiper-btn">
            <div class="btn prev-btn">
              <img src="./assets/img/svg/prev_btn.svg">
            </div>
            <div class="btn next-btn">
              <img src="./assets/img/svg/next_btn.svg">
            </div>
          </div>
        </div>
        
        
        <div class="store-info">
          <div class="modal-subtitle">店家介紹</div>
          <p>{{detail.intro}}</p>
          <div class="modal-subtitle" style="margin-top:20px;">店家資訊</div>
          <div class="info-list">
            <p><strong>地址</strong>{{detail.addr}}</p>
            <p><strong>電話</strong>{{detail.tel}}</p>
            <p><strong>營業時間</strong>{{detail.time}}</p>
          </div>
        </div>
        <!-- <div class="note"></div>  -->
        <div class="social-btns">
          <a :href="detail.fb" target="_blank" class="btn">
            <img src="./assets/img/svg/facebook-icon.svg">
          </a>
          <a :href="detail.ig" target="_blank" class="btn">
            <img src="./assets/img/svg/ig-icon.svg">
          </a>
        </div>
        
      </div>
      <div class="modal-bg" @click="closeBtn"></div>
    <div>
  `,
  data: function () {
    return {
      subject: new Rx.Subject(),
      url: './api/data.json'
    };
  },
  mounted: function () {
    console.log(this.detail);
    const swiper = new Swiper('.pic-list', {
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
      },
    })
  },
  methods: {
    closeBtn:function(){
      this.$emit('close');
    }
  },
  beforeDestroy: function () {
    this.subject.next();
    this.subject.complete();
  },
};
