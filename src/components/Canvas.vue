<template>
  <component :is="editor.findResolver(component)" v-bind="$attrs">
    <slot></slot>
  </component>
</template>

<script>
import {
  defineComponent, inject,
} from 'vue';

export default defineComponent({
  name: 'Canvas',
  props: {
    component: String,
  },
  setup() {
    const editor = inject('editor');

    return { editor };
  },
});

</script>
