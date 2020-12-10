export default {
  inheritAttrs: false,
  props: {
    label:String,
    title:String,
    option:Object,
    value:String,
  },
  template: `
    <div class="form-group">
      <label v-if="label">{{label}}</label>
      <select class="form-control selectpicker" multiple
        v-bind="$attrs"
        v-bind:title="title"
        v-model="val" >
        <option 
          v-bind:value="item.value ? item.value : item" 
          v-for="item in option">
          {{item.text ?  item.text : item}}
        </option>
      </select>
    </div>
  `,
  data:function(){
    return {
      val: this.value
    }
  },
  watch:{
    value:function(){
      this.val = this.value;
      this.$emit('update:value', this.val);
      this.$emit('change', this.val);
    },
    val:function(){
      this.value = this.val;
    }
  },
  updated: function() {
    $('.selectpicker').selectpicker('refresh');
  },
  mounted:function(){
    // console.log(this.$attrs.multiple);
  },
  methods: {
    
  }
}
 
