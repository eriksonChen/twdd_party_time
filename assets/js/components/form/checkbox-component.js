export default {
  inheritAttrs: false,
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    label:String,
    checked: Boolean,
    id:String,
    color:String,
  },
  template: `
    <div class="checkbox form-group" v-bind:class="chcolor">
      <input
        type="checkbox"
        v-bind="$attrs"
        v-bind:checked="checked"
        v-on:change="checkboxChange"
        v-bind:id="id"
      >
      <label v-bind:for="id" v-if="label"> {{label}}</label>
    </div>
  `,
  data:function(){
    return {
      // text: this.$attrs.type ? this.$attrs.type : 'text',
    }
  },
  computed: {
    chcolor:function(){
      return 'checkbox-' + this.color;
    }
  },
  mounted:function(){
    
  },
  methods: {
    checkboxChange:function(e){
      this.$emit('change', e.target.checked);
    }
  }
}
 
