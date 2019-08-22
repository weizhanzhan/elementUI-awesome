export default {
  props: {
    /** options
     * @param { Object } rules       - 验证规则
     * @param { Number } labelWidth  - form的label宽度
     * @param { Object } columns     - formItem的一个集合 每一项的展示的组件 之所以Obejct格式 是因为直接把key设置自定义的需要的key值方便 详细见下
     */
    /**
     * columns
     * @param { String } type        - 组件的类型 input select radio checkbox
     * @param {  Any   } value       - 默认值
     * @param { String } label       - form的label
     * @param { String } placeholder - 提示性文字
     */
    options: {
      type: Object,
      default: () => {}
    },
    formData: {
      type: Object,
      default: () => {}
    },
    size: {
      type: String,
      default: 'small'
    }
  },
  data() {
    return {
      value: ''
    }
  },
  render(h) {
    console.log(this.formData)
    return this.renderForm(h)
  },
  methods: {
    renderForm(h) {
      const { labelWidth, columns, rules } = this.options
      return h(
        'el-form',
        {
          props: {
            labelWidth: `${labelWidth || 80}px`,
            size: this.size,
            rules,
            model: this.formData
          },
          ref: 'form'
        },
        [
          h('el-row', {}, [
            ...Object.keys(columns).map(key => {
              return this.renderFormItem(h, key, columns[key])
            })
          ]),
          h(
            'el-button',
            {
              props: {
                size: this.size
              },
              on: {
                click: this.submitForm
              }
            },
            'test'
          )
        ]
      )
    },
    renderFormItem(h, key, column) {
      const { label, placeholder, colspan } = column
      // let colspan = {
      //   span: 8,
      //   xs: 24, //<768px 响应式栅格数或者栅格属性对象
      //   sm: 12, //≥768px 响应式栅格数或者栅格属性对象
      //   md: 8, //≥992px 响应式栅格数或者栅格属性对象
      //   lg: 8, //≥1200px 响应式栅格数或者栅格属性对象
      //   xl: 8 //≥1920px 响应式栅格数或者栅格属性对象
      // }
      return h(
        'el-col',
        {
          props: {
            span: colspan
          }
        },
        [
          h(
            'el-form-item',
            {
              props: {
                label,
                prop: key
              }
            },
            [
              h('el-input', {
                attrs: {
                  placeholder
                },
                props: {
                  value: this.formData[key]
                },
                on: {
                  input: event => {
                    const formData = JSON.parse(JSON.stringify(this.formData))
                    formData[key] = event
                    this.$emit('update:formData', formData)
                  }
                }
              })
            ]
          )
        ]
      )
    },
    submitForm() {
      this.$refs.form.validate(valid => {
        console.log(valid)
      })
    },
    resetForm() {
      this.$refs.form.resetFields()
    }
  }
}
