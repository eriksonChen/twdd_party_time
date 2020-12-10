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
        <input class="form-control timepicker"
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

    const picker = $(this.$el).find('.timepicker');
    picker.timepicker({
      showMeridian: false,
      // defaultTime: false,
      minuteStep:10,
    })
    .on('changeTime.timepicker', e => {
      this.$emit('input', e.time.value);
    });

  },
  methods: {
    
  }
}
 
