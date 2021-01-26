<template>
  <el-dialog
    title="DEMO"
    colsable
    :visible.sync="dialogVisible"
    width="300px"
    :before-close="handleClose"
  >
    <el-form ref="demoForm" :rules="rules" :model="record" label-width="80px">
      <el-form-item prop="id" label="编号" v-show="false">
        <el-input v-model="record.id"></el-input>
      </el-form-item>
      <el-form-item
        v-for="(item, index) in columns"
        :key="index"
        :prop="item.dataIndex"
        :label="item.title"
        required
      >
        <el-input v-model="record[item.dataIndex]"></el-input>
      </el-form-item>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitForm('demoForm')"
        >确 定</el-button
      >
    </span>
  </el-dialog>
</template>
<script>
import { doKhxxAdd, doKhxxEdit } from "./api.ts";
export default {
  props: {
    columns: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      dialogVisible: false,
      record: {},
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.record.id === undefined) {
            doKhxxAdd(this.record).then(res => {
              this.$notify({
                type: "success",
                title: "成功",
                message: "成功增加数据"
              });
              this.$emit("ok", res);
              this.dialogVisible = false;
            });
          } else {
            doKhxxEdit(this.record).then(res => {
              this.$notify({
                type: "success",
                title: "成功",
                message: "成功修改数据"
              });
              this.$emit("ok", res);
              this.dialogVisible = false;
            });
          }
        } else {
          return false;
        }
      });
    },
    add() {
      this.dialogVisible = true;
      this.record = {};
    },
    edit(record) {
      this.record = record;
      this.dialogVisible = true;
    },
    handleClose() {
      this.dialogVisible = false;
    }
  }
};
</script>
<style scoped></style>
