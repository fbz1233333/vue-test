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
    <record-form ref="recordForm" @ok="handleOk" :columns="columns" />
  </div>
</template>
<script>
import { getRecordList } from "./api.ts";
import recordForm from "./form.vue";
export default {
  components: {
    recordForm
  },
  mounted() {
    this.loadData();
  },
  methods: {
    handleEdit(record) {
      const form = this.$refs.recordForm;
      form.edit(record);
    },
    handleAdd() {
      const form = this.$refs.recordForm;
      form.add();
    },
    loadData() {
      getRecordList().then(res => {
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
