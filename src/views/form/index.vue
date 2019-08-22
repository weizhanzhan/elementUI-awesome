<template>
  <div class="home">
    <div class="filter">
      <el-form>
        <el-row>
          <el-col :span="8">
            <el-form-item :label="'colspan:' + colspan">
              <el-slider
                style="width:80%;float:right"
                v-model="colspan"
                :min="0"
                :max="24"
              ></el-slider>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="awesome">
      <AwesomeForm :options="options" :form-data.sync="formData" />
    </div>
  </div>
</template>

<script>
import AwesomeForm from './components/AwesomeForm.js'
export default {
  name: 'Home',
  components: {
    AwesomeForm
  },
  data() {
    return {
      colspan: 8,
      options: {
        labelWidth: 100,
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' }
          ],
          age: [{ required: true, message: '请输入年纪', trigger: 'blur' }]
        },
        columns: {
          name: {
            type: 'input',
            label: '名称:',
            placeholder: '请输入名字哦',
            colspan: 8
          },
          age: {
            type: 'input',
            label: '年纪:',
            placeholder: '请输入年纪',
            colspan: 8
          },
          sex: {
            type: 'input',
            label: '性别:',
            placeholder: '请输入年纪',
            colspan: 8
          },
          address: {
            type: 'input',
            label: '住址:',
            placeholder: '请输入住址',
            colspan: 8
          }
        }
      },
      formData: {
        name: '',
        age: '',
        sex: '',
        address: ''
      }
    }
  },
  watch: {
    colspan(val) {
      Object.keys(this.options.columns).forEach(key => {
        this.options.columns[key].colspan = val
      })
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.formData.name = 'weizhan'
    // }, 2000)
  }
}
</script>
<style scoped>
.filter {
  border-bottom: 1px solid #eeeeee;
}
.awesome {
  padding-top: 24px;
}
</style>
