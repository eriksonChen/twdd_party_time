import {getData} from './components/fetch.js';
import detailModal from './components/detail-modal.js';
import noteModal from './components/note-modal.js';

const app = new Vue({
  el: '#vue',
  components: {
    detailModal,
    noteModal
  },
  data: {
    config: './assets/api/data.json',
    title: "hello world~",
    isMenu:false,
    isDetailModal:false,
    isNoteModal:false,
    url:{}
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
      this.setBodyClass(val);
    },
    isNoteModal:function(val){
      this.setBodyClass(val);
    }
  },
  computed:{
    
  },
  
  mounted: function(){
    getData(this.config).then(res => {
      console.log(res)
      this.url = res.url;
    })
    // this.isDetailModal = true;
  },
  methods:{
    setBodyClass:function(val){
      if(val){
        $('body').addClass('modal-open');
      }else{
        $('body').removeClass('modal-open');
      }
    },
    menuBtn:function(){
      console.log('menu click');
      this.isMenu = !this.isMenu;
    },
    navBtn:function(){
      // console.log('click');
    },
    closeModal:function(){
      this.isDetailModal = false;
      this.isNoteModal = false;
    },
    openDetail:function(){
      this.isDetailModal = true;
    },
    openNote:function(){
      console.log('注意事項');
      this.isNoteModal = true;
    },
    goto:function(section){
      $('html, body').animate({
        scrollTop: $(".sec-"+section).offset().top
      }, 'slow');
      this.isMenu = false;

    }
  }
})