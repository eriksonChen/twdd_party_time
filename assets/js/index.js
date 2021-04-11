import {getData} from './components/fetch.js';
import detailModal from './components/detail-modal.js';
import noteModal from './components/note-modal.js';
import moreModal from './components/more-modal.js';

const app = new Vue({
  el: '#vue',
  components: {
    detailModal,
    noteModal,
    moreModal,
  },
  data: {
    config: './assets/api/data.json',
    title: "hello world~",
    isMenu:false,
    isDetailModal:false,
    isNoteModal:false,
    isMoreModal:false,
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
    },
    isMoreModal:function(val){
      this.setBodyClass(val);
    }
  },
  mounted: function(){
    Rx.Observable.from(getData(this.config))
    .do(res=>{
      this.url = res.url;
    })
    .switchMap(data => data.stores)
    .map(store =>{
      store.list.forEach(element => {
        element.cnName = store.chineseName;
        element.enName = store.englishName;
      });
      return store;
    })
    .toArray()
    .do(store =>{
      this.stores = store;
    })
    .switchMap(x => x)
    .map(s=> s.list.filter(x => x.name))
    .concatAll().toArray()
    .subscribe(list => {
      const all ={
        chineseName:"全部",
        englishName:"All",
        list
      } 
      this.stores.unshift(all);
      this.tarStore = this.stores[0];
      setTimeout(()=>{
        this.setSwiper();
      },100)
    })

  },
  methods:{
    setSwiper:function(){
      this.swiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        loop: true,
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
      this.swiper.on('slideChange', () => {
        setTimeout(() => {
          this.$forceUpdate();
          console.log('forceUpdate');
        }, 100);
      });
      // setTimeout(() => {
      //   $('.swiper-wrapper .item').on('click', (e)=>{
      //     const obj = $(e.currentTarget);
      //     this.openDetail(obj.data('item'));
      //   });
      // }, 100);
    },
    setBodyClass:function(val){
      if(val){
        $('body').addClass('modal-open');
      }else{
        $('body').removeClass('modal-open');
      }
    },
    closeModal: function(){
      this.isDetailModal = false;
      this.isNoteModal = false;
      this.isMoreModal = false;
    },
    openDetail:function(store){
      console.log(store);
      if(store.name){
        this.storeDetail = store;
        this.isDetailModal = true;
      }else{
        this.isMoreModal = true;
      };
      
    },
    storeBtn:function(type){
      this.swiper.destroy(false, false);
      this.tarStore = type;
      setTimeout(()=>{
        this.setSwiper();
      },10)
      
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
    },
    videoBtn:function(){
      window.open(this.url.video, '_blank');
    },
  }
})
