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
    url:{},
    stores:[],
    tarStore:{},
    storeDetail:{}
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
      this.url = res.url;
      this.stores = res.stores;
      this.tarStore = res.stores[0];
      console.log(this.stores);
    })
    // this.isNoteModal = true;
  },
  methods:{
    setBodyClass:function(val){
      if(val){
        $('body').addClass('modal-open');
      }else{
        $('body').removeClass('modal-open');
      }
    },
    closeModal:function(){
      this.isDetailModal = false;
      this.isNoteModal = false;
    },
    openDetail:function(store){
      this.storeDetail = store;
      this.storeDetail.en = this.tarStore.englishName;
      this.isDetailModal = true;
    },
    openNote:function(){
      this.isNoteModal = true;
    },
    goto:function(section){
      $('html, body').animate({
        scrollTop: $(".sec-"+section).offset().top
      }, 'slow');
      this.isMenu = false;
    },
    isActive:function(name){
      return this.tarStore.chineseName === name;
    }
  }
})