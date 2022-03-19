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
import { useSlots } from 'vue';
import Node from './Node.vue';
import Indicator from './Indicator.vue';
import createNodeFromVNode from '../utils/createNodeFromVNode';

export default {
  name: 'Frame',
  components: {
    Node, Indicator,
  },
  props: {
    component: [Object, String],
  },
  inject: [
    'editor',
  ],
  created() {
    if (!this.editor) {
      throw new Error('<Frame/> must be wrapped with <Editor/>.');
    }

    if (this.editor.nodes.length === 0) {
      const nodes = this.createNodesFromSlots();
      this.editor.setTopLevelNodes(nodes);
    }
  },
  methods: {
    createNodesFromSlots() {
      const slots = useSlots();
      const defaultSlots = slots.default() || [];
      return defaultSlots
        .map((vnode) => createNodeFromVNode(this.editor, vnode))
        .filter((node) => !!node);
    },
  },
};
</script>
