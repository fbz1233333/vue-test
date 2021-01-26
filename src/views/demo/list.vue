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
          <el-popconfirm
            title="确定删除吗？"
            @confirm="handleDelete(scope.row)"
          >
            <el-button slot="reference" type="text" size="small"
              >删除</el-button
            >
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <demo-form ref="demoForm" @ok="handleOk" :columns="columns" />
  </div>
</template>
<script>
import { getKhxxList, doKhxxDelete } from "./api.ts";
import demoForm from "./form.vue";
export default {
  components: {
    demoForm
  },
  mounted() {
    this.loadData();
  },
  methods: {
    handleDelete(record) {
      doKhxxDelete(record).then(res => {
        this.$notify({
          type: "success",
          title: "成功",
          message: "成功删除数据"
        });
        this.loadData();
      });
    },
    handleEdit(record) {
      const form = this.$refs.demoForm;
      form.edit(record);
    },
    handleAdd() {
      const form = this.$refs.demoForm;
      form.add();
    },
    loadData() {
      getKhxxList().then(res => {
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
          title: "用户名",
          dataIndex: "name"
        },
        {
          title: "密码",
          dataIndex: "password"
        }
      ]
    };
  }
};
</script>
<style scoped></style>
