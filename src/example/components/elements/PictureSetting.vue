<template>
  <el-form label-position="top" size="small" :model="elementProps">
    <el-form-item label="Image">
      <el-input :model-value="elementProps.imageUrl" @input="updateImageUrl" />
    </el-form-item>
  </el-form>
</template>

<script>
import { settingMixin } from '@';

export default {
  name: 'PictureSetting',
  mixins: [settingMixin],
  methods: {
    updateImageUrl(imageUrl) {
      this.elementPropsSetter({ imageUrl });
    },
  },
};
</script>
