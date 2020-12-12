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
      <div class="modal-body">
        <div class="modal-title text-center">注意事項</div>
        <div class="store-info">
          <div class="modal-subtitle">店家介紹</div>
          <p>鑄鐵招牌上的 「好米亞」 取自台語諧音，除了代表台灣在地精神，更傳遞出店家的理念。甫踏入好米亞餐酒館，就能感受到沉穩、舒適的空間，搭配優雅的木質桌椅，如同置身歐洲溫馨餐酒館般驚喜。人氣必點包含經典排餐 「脆皮法式櫻桃鴨胸」、「秘製醃醬炭烤戰斧豬排」，到每日限量的「海膽燉飯」，將新鮮蛤蜊與龍蝦醬汁拌煮米粒，搭配濃郁海膽，口口都是鮮甜海味！除了優秀的鹹食，好米亞的甜點同樣可圈可點，店家堅持使用法國進口麵粉、依思尼發酵奶油以及天然香草棒等高品質原料烘焙，包含選用新鮮黃檸檬製作的檸檬千層派、時令水果為基底的千層，無論是聚餐約會的正餐或午茶時光，好米亞都是值得一訪再訪的好所在。</p>
          <div class="modal-subtitle" style="margin-top:20px;">店家資訊</div>
          <div class="info-list">
            <p><strong>地址</strong>106 台北市大安區敦化南路一段 270 巷 6 號</p>
            <p><strong>電話</strong>02-88888888</p>
            <p><strong>營業時間</strong>週一至週五、週日 11:30-22:30</p>
          </div>
        </div>
        <!-- <div class="note"></div>  -->
        <div class="social-btns">
          <a href="https://www.facebook.com/twdd5209/" target="_blank" class="btn">
            <img src="./assets/img/svg/facebook-icon.svg">
          </a>
          <a href="https://www.instagram.com/twdd.tw/" target="_blank" class="btn">
            <img src="./assets/img/svg/ig-icon.svg">
          </a>
        </div>
        
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
    console.log('note init');
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
