<template>
  <component :is="component">
    <Node
      v-for="node in editor.nodes" :key="node.uuid"
      :node="node"
    />
    <Indicator :indicator="editor.indicator" />
  </component>
</template>

<script>
import {
  defineComponent, inject, onBeforeMount, useSlots,
} from 'vue';
import Node from './Node.vue';
import Indicator from './Indicator.vue';
import createNodeFromVNode from '../utils/createNodeFromVNode';

export default defineComponent({
  name: 'Frame',
  components: {
    Node, Indicator,
  },
  props: {
    component: [Object, String],
  },
  setup() {
    const editor = inject('editor');

    const createNodesFromSlots = () => {
      const slots = useSlots();
      const defaultSlots = slots.default() || [];
      return defaultSlots
        .map((vnode) => createNodeFromVNode(editor, vnode))
        .filter((node) => !!node);
    };

    onBeforeMount(() => {
      if (!editor) {
        throw new Error('<Frame/> must be wrapped with <Editor/>.');
      }

      if (editor.nodes.length === 0) {
        const nodes = createNodesFromSlots();
        editor.setTopLevelNodes(nodes);
      }
    });

    return { editor, createNodesFromSlots };
  },
});
</script>
