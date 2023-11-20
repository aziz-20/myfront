<template>
  <!-- <div class="app-container"> -->
<!-- 
    <el-form :inline="true" :model="queryParams" ref="queryForm" size="small" class="demo-form-inline" v-show="showSearch">
      <el-form-item label="deptName" prop="name">
         <el-input v-model="queryParams.name" placeholder="deptName" clearable @keyup.enter.native="handleQuery">
        </el-input> -->
        <!-- <treeselect  v-model="queryParams.Name"  :options="deptOptions" :normalizer="normalizer" placeholder="Search"
        clearable @keyup.enter.native="handleQuery" /> -->
        <!-- <el-autocomplete
  popper-class="my-autocomplete"
  v-model="queryParams.name"
  :fetch-suggestions="querySearch"
  placeholder="Please input"
  @select="handleSelect">
  <template slot-scope="props">
    <div class="value">{{ props }}</div>
    <span class="link">{{ props.item.link }}</span>
  </template>
</el-autocomplete>
      </el-form-item>
      <el-form-item label="userId" prop="userId">
        <el-input v-model="queryParams.userId" placeholder="userId" clearable @keyup.enter.native="handleQuery">

        </el-input>
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select v-model="queryParams.region" placeholder="Activity zone">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">Query</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">Reset</el-button>
      </el-form-item>
    </el-form>
    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button type="primary" plain icon="el-icon-plus" size="mini" @click="handleAdd">
          new dept
        </el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button type="info" plain icon="el-icon-sort" size="mini" @click="toggleExpandAll">Expand/collaps</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList" ></right-toolbar>
    </el-row>

    <el-table
     v-if="refreshTable"
      v-loading="loading"
      :data="deptList"
      row-key="deptId"
      :default-expand-all="isExpandAll"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
    
    <el-table-column prop="name" label="name" width="260"></el-table-column>
    
    <el-table-column prop="orderNum" label="sort" width="200"></el-table-column>
     
    <el-table-column label="created time" align="center" prop="createTime" width="200">
        <template slot-scope="scope">
          <span>{{scope.row.createTime}}</span>
        </template>
      </el-table-column> 
      <el-table-column label="oparation" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
          >Update</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-plus"
            @click="handleAdd(scope.row)"
          >Add</el-button>
          <el-button
            v-if="scope.row.parentId != 0"
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)" 
          >Delete</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNo"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />
    <el-dialog :title="title" :visible.sync="open" width="600px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-row>
          <el-col :span="24" v-if="form.parentId !== 0">
            <el-form-item label="parentId" prop="parentId">
              <el-input v-model="form.parentId" :options="deptOptions"  placeholder="parent id" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="deptName" prop="name">
              <el-input v-model="form.name" placeholder="deptName" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="orderNum" prop="orderNum">
              <el-input-number v-model="form.orderNum" controls-position="right" :min="0" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="leader" prop="leader">
              <el-input v-model="form.leader" placeholder="leader" maxlength="20" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="phone" prop="phone">
              <el-input v-model="form.phone" placeholder="phone" maxlength="11" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="email" prop="email">
              <el-input v-model="form.email" placeholder="email" maxlength="50" />
            </el-form-item>
          </el-col> -->
          <!-- <el-col :span="12">
            <el-form-item label="部门状态">
              <el-radio-group v-model="form.status">
                <el-radio
                  v-for="dict in dict.type.sys_normal_disable"
                  :key="dict.value"
                  :label="dict.value"
                >{{dict.label}}</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col> -->
        <!-- </el-row>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">submit</el-button>
        <el-button @click="cancel">cancle</el-button>
      </div>
    </el-dialog>
     
  </div> -->
</template>
<script>
// import {handleTree} from "@/utils/index"
// import Treeselect from '@riophae/vue-treeselect'
  // import the styles
  // import '@riophae/vue-treeselect/dist/vue-treeselect.css'
  import  http from "@/http"
export default {
  // components: { Treeselect },
  data() {
    return {
       res : []
       ,
      loading: true,
      // 显示搜索条件
      showSearch: true,
      // 表格树数据
      deptList: [ ],
      // 部门树选项
      deptOptions: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 是否展开，默认全部展开
      isExpandAll: true,
      // 重新渲染表格状态
      refreshTable: true,
      showSearch: true,
      queryParams: {
        name: undefined,
        region: undefined,
        userId: undefined,
        pageNo: 1,
        pageSize: 10,
        
      },
      total: 0,
      form: {},
      // 表单校验
      rules: {
        parentId: [
          { required: true, message: "上级部门不能为空", trigger: "blur" }
        ],
        name: [
          { required: true, message: "部门名称不能为空", trigger: "blur" }
        ],
        orderNum: [
          { required: true, message: "显示排序不能为空", trigger: "blur" }
        ],
        email: [
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        phone: [
          {
            pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
            message: "请输入正确的手机号码",
            trigger: "blur"
          }
        ]
      },

    }
  },
  created() {
    this.getList();
  },
  methods: {
    reset() {
      this.form = {
        deptId: undefined,
        parentId: undefined,
        name: undefined,
        orderNum: undefined,
        leader: undefined,
        phone: undefined,
        email: undefined,
        status: "0",
        delFlag: "0"
      };
      this.resetForm("form");
    },
    handleAdd(row) {
      this.reset();
      if (row != undefined) {
        this.form.parentId = row.deptId;
      }
      this.open = true;
      this.title = "add new Dept";
      // listDept().then(response => {
      //   this.deptOptions = this.handleTree(response.data, "deptId");
      // });
      this.deptOptions = handleTree(this.res, "deptId");
    },
    handleUpdate(row) {
      this.reset();
      this.$http.dept.getdeptyid(row.deptId).then(response => {
        this.form = response.result;
        this.open = true;
        this.title = "update dept";
        this.deptOptions = response.result;
      });
      // this.form = response.data;
      this.open = true;
      // this.title = "update dept";
      console.log(row)

      // getDept(row.deptId).then(response => {
        // this.form = row;
      //   this.open = true;
      //   this.title = "update dept";
        // listDeptExcludeChild(row.deptId).then(response => {
        //   this.deptOptions = this.handleTree(response.data, "deptId");
        //   if (this.deptOptions.length == 0) {
        //     const noResultsOptions = { deptId: this.form.parentId, deptName: this.form.parentName, children: [] };
        //     this.deptOptions.push(noResultsOptions);
        //   }
        // });
      // });
    },
    toggleExpandAll() {

      this.refreshTable = false;
      this.isExpandAll = !this.isExpandAll;
      this.$nextTick(() => {
        this.refreshTable = true;
      });

    },
    submitForm: function() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.deptId != undefined) {
            console.log(this.form)
            this.open = true;
            this.$http.dept.updateDept(this.form).then(response => {
              this.$modal.msgSuccess("updated");
              this.open = false;
              this.getList();
            });
          } else {
            this.$http.dept.addDept(this.form).then(response => {
              this.$modal.msgSuccess("new added");
              this.open = false;
              this.getList();
            }).catch(error => {
              this.$modal.msgError("新增失败");
              this.open = false;
              this.getList();
            })
          }
        }
      });
    },
   
    handleQuery() {
   
      this.queryParams.pageNo = 1;
      this.getList();
  

    },
    querySearch(){
          
       return this.deptList

    },
    listPlan(){
        
        this.$http.dept.listDept(this.queryParams).then(response =>{
         
              
            
        })
    }
    ,
    normalizer(node) {
      if (node.children && !node.children.length) {
        delete node.children;
      }
      return {
        id: node.deptId,
        label: node.name,
        children: node.children
      };
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    
    getList() {
      this.loading = true;
      http.dept.DeptlistHierarchy(this.queryParams).then(response => {
        this.deptList = response.result.data;
        this.total = response.result.total;
        this.loading = false;
        this.res = response
      }).catch(error => {
        this.loading = true;
        //messege
      })
     
    },
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    resetForm(refName) {
      if (this.$refs[refName]) {
        this.$refs[refName].resetFields();
      }
    },
    handleDelete(row) {
      this.$modal.confirm('Are you sure to delete"' + row.name + '"data item？').then(function() {
        return delDept(row.deptId);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("successfully deleted");
      }).catch(() => {});
    }
  }
}
</script>