<template>
  <!-- <el-dialog
  :title="`${mode} ${title}`"
  :visible.sync="open"
  :width="'68%'"
  :centered="true"
  @close="cancelCleaning"
  ></el-dialog> -->
  <el-dialog :before-close="beforeclose" :model-value="visble" :title="`${mode} ${title}`" :visible.sync="open"
    :width="'68%'" :centered="true" :closed="closemodel" :modal-class="'editAdd e c col-12'">
    <el-form :class="'col-10'" :model="form" ref="editForm" :rules="rules" label-position="top">
      <el-row :class="'col-12 e c'" :gutter="24">
        <el-col :class="'col-12 row-s'" :span="12" v-for="(field, index) in fields" :key="index">
          <template v-if="field.type !== 'address'">
            <el-form-item :label="field.label" :prop="field.name">
              <template v-if="field.inputtype === 'email'">
                <el-input :type="'email'" v-model="form[field.name]" size="medium" :placeholder="field.placeholder"
                  :class="field.span" />
              </template>
              <template v-else-if="field.inputtype === 'text'">
                <el-input :type="'text'" v-model="form[field.name]" size="medium" :placeholder="field.placeholder"
                  :span="field.span" :suffix-icon="field.icon ?? ''" />
              </template>
              <template v-else-if="field.inputtype === 'password'">
                <el-input :type="'password'" v-model="form[field.name]" size="medium" :placeholder="field.placeholder"
                  :span="field.span" />
              </template>
              <template v-else-if="field.inputtype === 'confirm'">
                <el-input :type="'password'" v-model="form[field.name]" size="medium" :placeholder="field.placeholder"
                  :span="field.span" />
              </template>
              <template v-else-if="field.inputtype === 'phone'">
                <el-input v-model="form[field.name]" size="medium" :placeholder="field.placeholder" :span="field.span" />
              </template>
              <!-- <template v-else-if="field.inputtype === 'multipleSelect'">
                <el-select v-model="form[field.name]" :placeholder="field.placeholder">
                  <el-option v-for="d in field.data" :key="d.value" :label="d.label" :value="d.value"></el-option>
                </el-select>
              </template> -->
              <template v-else-if="field.inputtype === 'multipleSelect'">
                <el-tree-select v-model="form[field.name]" :data="field.data" multiple :render-after-expand="false"
                  show-checkbox :placeholder="field.placeholder" />
              </template>
              <template v-else-if="field.inputtype === 'select'">
                <el-select v-model="form[field.name]" :placeholder="field.placeholder">
                  <el-option v-for="d in field.data" :key="d.value" :label="d.label" :value="d.value"></el-option>
                </el-select>
              </template>
            </el-form-item>
          </template>
          <template v-else>
            <el-form-item :label="field.label.country" :prop="field.name.country">
              <el-select v-model="form[field.name.country]" placeholder="Select Country" @change="countryChange">
                <el-option v-for="country in field.data.country" :key="country.value" :label="country.label"
                  :value="country.value"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item :label="field.label.state" :prop="field.name.state">
              <el-input v-model="form[field.name.state]" placeholder="State"></el-input>
            </el-form-item>
            <el-form-item :label="field.label.city" :prop="field.name.city">
              <el-input v-model="form[field.name.city]" placeholder="City"></el-input>
            </el-form-item>
            <el-form-item :label="field.label.postcode" :prop="field.name.postcode">
              <el-input v-model="form[field.name.postcode]" placeholder="Postcode"></el-input>
            </el-form-item>
            <el-form-item :label="field.label.detail" :prop="field.name.detail">
              <el-input v-model="form[field.name.detail]" placeholder="Detail"></el-input>
            </el-form-item>
          </template>
        </el-col>
      </el-row>
      <!-- <el-row>
        <el-col :span="24" style="text-align: right;">
          <el-button type="primary" @click="onSubmit">{{ mode }}</el-button>
          <el-button @click="cancelForm">Cancel</el-button>
        </el-col>
      </el-row> -->
    </el-form>
    {{ f }}
    {{  visble }}
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancelForm">Cancel</el-button>
        <el-button type="primary" @click="onSubmit">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>

export default {
  data() {
    return {
      form: {},
      rules: {
        email: [
          {
            type: "email",
            message: " please enter correct email",
            trigger: ["blur", "change"]
          }
        ],
        password: [
          {
            required: true,
            message: "please enter password",
            trigger: ["blur", "change"]
          },
          {
            min: 6,
            max: 20,
            message: "password length must be between 6 and 20 characters",
            trigger: ["blur", "change"]
          },
          {
            pattern: /^[a-zA-Z0-9_]+$/,
            message: "password can only contain numbers, letters and underscores",
            trigger: ["blur", "change"]
          }
        ],
        confirm: [
          {
            required: true,
            message: "please enter password again",
            trigger: ["blur", "change"]
          },
          {
            min: 6,
            max: 20,
            message: "password length must be between 6 and 20 characters",
            trigger: ["blur", "change"]
          },
          {
            pattern: /^[a-zA-Z0-9_]+$/,
            message: "password can only contain numbers, letters and underscores",
            trigger: ["blur", "change"]
          }
        ],
        username: [
          {
            required: true,
            message: "please enter username",
            trigger: ["blur", "change"]
          },
          {
            min: 6,
            max: 20,
            message: "username length must be between 6 and 20 characters",
            trigger: ["blur", "change"]
          },
          {
            pattern: /^[a-zA-Z0-9_]+$/,
            message: "username can only contain numbers, letters and underscores",
            trigger: ["blur", "change"]
          }
        ],
        // Phone: [
        //   {
        //     required: true,
        //     message: "please enter phone number",
        //     trigger: ["blur", "change"]
        //   },
        //   {
        //     pattern: /^1[3456789]\d{9}$/,
        //     message: "please enter correct phone number",
        //     trigger: ["blur", "change"]
        //   }
        // ],
  
      },
    }
  }
  ,
  props: {

    fields: Array,

    mode: String,

    open: String,

    title: String,

    fields: Array,

    init: Object,


    closeAddEdit: Function,

  },

  computed: {

    visble() {
      return this.open
    },
    f() {
      return this.form
    }

  },
  watch: {
    init: {
      immediate: true,
      handler(val) {
        this.form = { ...val };
      },
    },
    role:{
      immediate: true,
      handler(val) {
        this.role = { ...val };
      },
    }
    
  },

  methods: {

    beforeclose(done) {
      this.$confirm('ARE YOU SURE TO CLOSE THIS WINDOW？')
        .then(_ => {
          this.resetForm('editForm');
          done();
        })
        .catch(_ => { });
    },
    closemodel() {
      this.$emit('close')
    },
    resetForm(refName) {
      if (this.$refs[refName]) {
        this.$refs[refName].resetFields();
      }
    },
    cancelForm() {
      
      this.$confirm('ARE YOU SURE TO CLOSE THIS WINDOW？')
        .then(_ => {
          this.resetForm('editForm');
          this.$emit('close')
          done();
        })
        .catch(_ => { });
    },
    onSubmit() {
      this.$refs.editForm.validate(valid => {
        if (valid) {
          this.$emit('submit', this.form);
          this.$emit('close')
        }
      });
    },
    


  }


}




</script>