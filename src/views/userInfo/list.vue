<template>
  <div>
    <el-button type="primary" @click="handleAdd">新增</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        v-for="(item, index) in columns"
        :key="index"
        :prop="item.dataIndex"
        :label="item.title"
      >
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)" type="text" size="small"
            >编辑</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <userInfo-form ref="userInfoForm" @ok="handleOk" :columns="columns" />
  </div>
</template>
<script>
import { getrUserInfoList } from "./api.ts";
import userInfoForm from "./form.vue";
export default {
  components: {
    userInfoForm
  },
  mounted() {
    this.loadData();
  },
  methods: {
    handleEdit(record) {
      const form = this.$refs.userInfoForm;
      form.edit(record);
    },
    handleAdd() {
      const form = this.$refs.userInfoForm;
      form.add();
    },
    loadData() {
      getrUserInfoList().then(res => {
        this.tableData = res.data;
      });
    },
    handleOk() {
      this.loadData();
    }
  },
  data() {
    return {
      tableData: [],
      columns: [
        {
          title: "日志时间",
          dataIndex: "time"
        },
        {
          title: "标题",
          dataIndex: "title"
        },
        {
          title: "内容",
          dataIndex: "content"
        }
      ]
    };
  }
};
</script>
<style scoped></style>
