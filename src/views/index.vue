<template>
  <div style="main">
    文件地址
    <input v-model="file[0].absolutePath" /><br />
    文件内容
    <textarea v-model="file[0].modelStr" rows="40" cols="200" />
    <test-info :fields="fields" v-model="file[0].modelStr"></test-info>
    <button @click="handleSubmit">提交</button>
  </div>
</template>

<script>
import axios from "axios";
import testInfo from "./testInfo";
export default {
  components: {
    testInfo
  },
  data() {
    return {
      file: [{}, {}, {}, {}, {}],
      fields: [
        { cname: "name", dbName: "NAME" },
        { cname: "password", dbName: "PASSWORD" }
      ]
    };
  },
  methods: {
    handleSubmit() {
      axios
        .post("/app/sys/curd/generate", {
          rqFieldChList: this.file,
          name: "first"
        })
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
