import { getData, toast } from '../fetch.js';
export default {
  inheritAttrs: false,
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked:Boolean,
    pending:Boolean,
    id:String,
    interval:Number,
    timeout:Number,
    size:String,
  },
  template: `
    <div 
      style="width:120px; margin:0 auto; padding-left:10px"
      class="text-left"
      v-bind:class="{pending: this.pending}">
      <input
        class="js-switch"
        type="checkbox"
        v-bind="$attrs"
        v-bind:checked="checked"
        v-on:change="toggleSwitch"
        v-bind:id="setSwitchId"
      >
      <span class="m-l-10">{{checktitle}}</span>
    </div>
  `,
  data:function(){
    return {
      subject: new Rx.Subject(),
      closeSubject: new Rx.Subject(),
      switchery:null,
      cbox:null,
      updateUrl:'./api/update-switch.json?id=' + this.id,
      postUrl:'./api/postData.json',
      intervalObs:null,
      switchStyle :{
        color             : '#64bd63',
        secondaryColor    : '#ccc',
        jackColor         : '#fff',
        // jackSecondaryColor: null,
        className         : 'switchery',
        disabled          : this.pending,
        disabledOpacity   : 0.5,
        speed             : '0.4s',
        size              : this.size || 'default'
      },
      isFailClick:false
    }
  },
  computed: {
    checktitle:function(){
      if(this.pending){
        return 'pending'
      }else{
        return this.checked ? 'ON' : 'OFF';
      }
    },
    setSwitchId:function(){
      return 'sw'+this.id
    }
  },
  watch: {
    pending:function(val){
      if(val){
        this.switchery.disable();
      }else{
        this.switchery.enable();
      }
    },
    checked:function (val) {
      console.log('checked: ', val);
    }
  },
  mounted:function(){
    toast.init();
    this.cbox = document.querySelector('#sw'+this.id);
    this.switchery = new Switchery(this.cbox, this.switchStyle);
    $(this.$el).find('small').html('<i class="fas fa-spinner"></i>');

    if(this.pending) this.waitForData();

  },
  methods: {
    waitForData:function(){
      //持續向後台更新資料
      const timeOutObs = Rx.Observable.interval(this.timeout * 1000)
        .takeUntil(this.subject)
        .do(()=>{
          this.pending = false;
          this.isFailClick = true;
          setTimeout(() => {
            $(this.$el).find('.js-switch').click();
            this.checked = !this.checked;
            this.pending = false;
            this.isFailClick = false;
          }, 100);
          toast.error(this.id + ' 控制失敗！');
        });

      Rx.Observable.interval(this.interval * 1000)
        // .startWith(0)
        .takeUntil(this.closeSubject)
        .takeUntil(timeOutObs)
        .takeUntil(this.subject)
        .switchMap(res => Rx.Observable.from(getData(this.updateUrl)))
        .subscribe(res => {
          if(!res.pending){
            this.closeSubject.next();
            this.pending = false;
            this.$emit('change', {id:this.id, ...res, state:this.checked});

            toast.success(this.id + ' 控制成功');
          }
        }, err => {
          this.closeSubject.next();
        }, () => {});
    },
    toggleSwitch:function(e){
      if(this.isFailClick) return;
      this.pending = true;
      this.checked = e.target.checked;
      // 控制 api
      getData(this.postUrl)
      .then(res=>{
        if(res.message === 'fail'){
          this.pending = false;
          this.isFailClick = true;
          setTimeout(() => {
            $(this.$el).find('.js-switch').click();
            this.checked = !this.checked;
            this.pending = false;
            this.isFailClick = false;
          }, 100);
          toast.error(this.id + res.data);
        }else{
          this.waitForData();
        }
      })
      // console.log('api', this.checked);
      
    },
  },
  beforeDestroy: function() {
    this.subject.next();
    this.subject.complete();
    this.switchery.destroy();
  }
}
 