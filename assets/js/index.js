import {getData} from './components/fetch.js';
import detailModal from './components/detail-modal.js';

const app = new Vue({
  el: '#vue',
  components: {
    detailModal
  },
  data: {
    url: './assets/api/data.json',
    title: "hello world~",
    isMenu:false,
    isDetailModal:false,
  },
  watch: {
    isMenu:function(val){
      if(val){
        $('body').addClass('menu-open');
      }else{
        $('body').removeClass('menu-open');
      }
    },
    isDetailModal:function(val){
      if(val){
        $('body').addClass('modal-open');
      }else{
        $('body').removeClass('modal-open');
      }
    }
  },
  
  mounted: function(){
    // $('body').addClass('menu-open');
    getData(this.url).then(res => {
      console.log(res)
    })
    this.isDetailModal = true;
  },
  methods:{
    menuBtn:function(){
      console.log('menu click');
      this.isMenu = !this.isMenu;
    },
    navBtn:function(){
      console.log('click');
    },
    goto:function(section){
      $('html, body').animate({
        scrollTop: $(".sec-"+section).offset().top
      }, 'slow');
      this.isMenu = false;

    }
  }
})