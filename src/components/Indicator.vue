<template>
  <div
    v-if="this.indicator.show"
    class="indicator"
    :class="{ forbidden: this.indicator.isForbidden }"
    :style="getIndicatorStyle()"
  />
</template>

<script>
import {
  defineComponent,
} from 'vue';
import Indicator from '../core/Indicator';

export default defineComponent({
  name: 'Indicator',
  props: {
    indicator: Indicator,
  },
  setup(props) {
    const getIndicatorStyle = () => {
      const { top, left } = props.indicator.position;
      const { width, height } = props.indicator.size;

      const style = {
        top: `${top}px`,
        left: `${left}px`,
        height: `${height}px`,
        width: `${width}px`,
      };

      return style;
    };

    return {
      getIndicatorStyle,
    };
  },
});
</script>

<style lang="scss" scoped>
.indicator {
  position: fixed;
  background-color: rgb(15, 177, 88);
  transition: all 0.3s;
  z-index: 1000;

  &.forbidden {
    background-color: rgb(255, 24, 93);
  }
}
</style>
