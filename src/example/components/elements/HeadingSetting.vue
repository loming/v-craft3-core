<template>
  <el-form label-position="top" size="small" :model="elementProps">
    <el-form-item label="Heading Type">
      <el-radio-group
        :model-value="elementProps.headingType" @change="updateHeadingType"
      >
        <el-radio-button label="h1"></el-radio-button>
        <el-radio-button label="h2"></el-radio-button>
        <el-radio-button label="h3"></el-radio-button>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script>
import { settingMixin } from '@';

export default {
  name: 'HeadingSetting',
  mixins: [settingMixin],
  methods: {
    updateContent(content) {
      this.elementPropsSetter({ content });
    },
    updateHeadingType(headingType) {
      this.elementPropsSetter({ headingType });
    },
  },
};
</script>
