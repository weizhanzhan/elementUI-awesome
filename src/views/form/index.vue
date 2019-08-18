<template>
  <div class="home">
    <AwesomeForm :options="options" :form-data.sync="formData" />
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
            placeholder: '请输入名字哦'
          },
          age: {
            type: 'input',
            label: '年纪:',
            placeholder: '请输入年纪'
          },
          sex: {
            type: 'input',
            label: '性别:',
            placeholder: '请输入年纪'
          },
          address: {
            type: 'input',
            label: '住址:',
            placeholder: '请输入住址'
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
  mounted() {
    // setTimeout(() => {
    //   this.formData.name = 'weizhan'
    // }, 2000)
  }
}
</script>
