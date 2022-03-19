<template>
  <component :is="editor.findResolver(component)" v-bind="$attrs">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'Canvas',
  props: {
    component: String,
  },
  inject: [
    'editor',
  ],
};
</script>
