import {getData} from './components/fetch.js'
const app = new Vue({
  el: '#vue',
  components: {
  },
  data: {
    url: './assets/api/data.json',
    title: "hello world~",
    isMenu:false,
  },
  watch: {
    isMenu:function(val){
      if(val){
        $('body').addClass('menu-open');
      }else{
        $('body').removeClass('menu-open');
      }
    },
  },
  
  mounted: function(){
    // $('body').addClass('menu-open');
    getData(this.url).then(res => {
      console.log(res)
    })
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