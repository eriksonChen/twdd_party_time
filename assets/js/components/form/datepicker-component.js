export default {
  inheritAttrs: false,
  props: {
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
        <input class="form-control date-picker"
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
      text: this.$attrs.type ? this.$attrs.type : 'text',
    }
  },
  mounted:function(){
    const picker = $(this.$el).find('.date-picker');
    setTimeout(() => {
      picker.datepicker().on('changeDate', e => {
        this.$emit('input', e.target.value);
      });
    }, 300);
    

  },
  methods: {
  }
}
 
