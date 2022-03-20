<template>
  <el-form label-position="top" size="small" :model="elementProps">
    <el-form-item label="Width" v-if="styleExist('width')">
      <el-input :model-value="getStyle('width')" @input="setStyle('width', $event)"></el-input>
    </el-form-item>

    <el-form-item label="Height" v-if="styleExist('height')">
      <el-input :model-value="getStyle('height')" @input="setStyle('height', $event)"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import mixin from './mixin';

export default {
  mixins: [mixin],
};
</script>
