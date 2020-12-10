export default {
  inheritAttrs: false,
  props: {
    title:String,
    label:String,
    iconRight:Boolean,
    iconLeft:Boolean,
    value:String,
  },
  template: `
    <div class="form-group">
      <label v-if="label">{{label}}</label>
      <div class="input-group">
        <span v-if="$slots.iconLeft" class="input-group-addon">
          <slot name="iconLeft"></slot>
        </span>
        <input class="form-control"
          v-bind="$attrs"
          v-bind:type="text"
          v-on:input="$emit('input', $event.target.value)"
          v-bind:value="value"
        >
        <span v-if="$slots.iconRight" class="input-group-addon">
          <slot name="iconRight"></slot>
        </span>
      </div>
    </div>
  `,
  data:function(){
    return {
      text: this.$attrs.type ? this.$attrs.type : 'text'
    }
  },
  mounted:function(){

  },
  methods: {
    
  }
}
 
