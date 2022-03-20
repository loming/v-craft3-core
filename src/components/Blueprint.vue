<template>
  <component
    :is="component"
    v-bind="$attrs"
    :draggable="true"
    @dragstart="handleDragStart"
    @dragend="handleDragEnd"
  >
    <slot name="blueprint"></slot>
  </component>
</template>

<script>
import {
  defineComponent, inject, onMounted, onBeforeMount, useSlots,
} from 'vue';
import createNodeFromVNode from '../utils/createNodeFromVNode';

export default defineComponent({
  props: {
    component: [Object, String],
  },
  setup() {
    const slots = useSlots();
    const editor = inject('editor');

    onBeforeMount(() => {
      if (!editor) {
        throw new Error('<Blueprint/> must be wrapped with <Editor/>.');
      }
    });

    onMounted(() => {
      if (!slots.blueprint) {
        throw new Error('v-slot:blueprint is required.');
      }
      if (slots.blueprint().length !== 1) {
        throw new Error('v-slot:blueprint must to have only one root element.');
      }
      if (!createNodeFromVNode(editor, slots.blueprint()[0])) {
        throw new Error('The element in v-slot:blueprint is not a valid vue component.');
      }
    });

    const handleDragStart = (event) => {
      event.stopPropagation();

      const node = createNodeFromVNode(editor, slots.blueprint()[0]);
      editor.dragNode(node);
    };

    const handleDragEnd = (event) => {
      event.stopPropagation();

      editor.dragNode(null);
      editor.indicator.hide();
    };

    return { handleDragStart, handleDragEnd };
  },
});
</script>
