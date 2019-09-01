<template>
  <div class="home">
    <el-row style="padding-left:30px">
      <el-col :span="18">
        <div class="awesome">
          <AwesomeForm
            :options="options"
            :form-data.sync="formData"
            class="awesome-form-view"
          />
        </div>
      </el-col>
      <el-col :span="6" class="right-tool">
        <el-form label-width="100px">
          <el-form-item label="开启栅格">
            <el-switch v-model="tool.tiggerLayout"></el-switch>
          </el-form-item>

          <el-form-item :label="'colspan:' + tool.colspan">
            <el-slider v-model="tool.colspan" :min="0" :max="24"></el-slider>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
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
      tool: {
        tiggerLayout: false,
        colspan: 8
      },
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
    'tool.colspan'(val) {
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
  padding-right: 24px;
}
.awesome-form-view {
  box-shadow: 0px 2px 5px #e4e4e4;
  padding: 10px;
}
.right-tool {
  border-left: 1px solid #eeeeee;
  min-height: 90vh;
  padding: 10px;
  box-shadow: 0px 2px 5px #e4e4e4;
}
</style>
