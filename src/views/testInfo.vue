<template>
  <p ref="ref1" v-show="false">
    <template v-for="item in fields">
      cname is {{ item.cname }}, dbName is {{ item.dbName }}
    </template>
  </p>
</template>
<script>
export default {
  props: {
    fields: {
      type: Array
    }
  },
  data() {
    return {};
  },
  mounted() {
    // console.log(this.$refs.ref1.innerHTML);
    const str = this.$refs.ref1.innerHTML;
    this.$emit("input", str);
  }
};
</script>
<style scoped></style>
