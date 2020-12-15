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
    storeDetail:{},
    swiper:null,
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
    Rx.Observable.from(getData(this.config))
    .do(res=>{
      this.url = res.url;
    })
    .switchMap(data => data.stores)
    .map(store =>{
      store.list.forEach(element => {
        element.enName = store.englishName;
      });
      return store;
    })
    .toArray()
    .do(store =>{
      this.stores = store;
      this.tarStore = this.stores[0];
    })
    .switchMap(x => x)
    .map(s=>s.list)
    .concatAll().toArray()
    .subscribe(list => {
      const all ={
        chineseName:"全部",
        englishName:"All",
        list
      } 
      this.stores.push(all);
      
      setTimeout(()=>{
        this.setSwiper();
      },100)
      
    })

  },
  methods:{
    setSwiper:function(){
      this.swiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        // spaceBetween: 30,
        // slidesPerGroup: 3,
        loop: true,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
          }
        }
      });
    },
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
    storeBtn:function(type){
      this.swiper.destroy(false, false);
      this.tarStore = type;
      setTimeout(()=>{
        this.setSwiper();
      },10)
      

      console.log('swiper update');
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