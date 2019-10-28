<template>
  <div class="home page">
    <ms-header>header</ms-header>
    <ms-container>
      <h3>button</h3>
      <ms-button is-block>default</ms-button>
      <ms-button type="primary">primary</ms-button>
      <ms-button type="success">success</ms-button>
      <ms-button type="danger">danger</ms-button>

      <h3>input</h3>
      <ms-input v-model="formData.inputValue"></ms-input>

      <h3>form</h3>
      <ms-form ref="form" :model="formData" :rules="rules" label-width="100px">
        <ms-form-item label="username">
          <ms-input v-model="formData.username"></ms-input>
        </ms-form-item>
        <ms-form-item label="phone" prop="phone">
          <ms-input v-model="formData.phone"></ms-input>
        </ms-form-item>
        <ms-form-item label="">
          <ms-button @click.native="submit">submit</ms-button>
          <ms-button @click.native="clear">clear</ms-button>
        </ms-form-item>
      </ms-form>
    </ms-container>

    <ms-footer>footer</ms-footer>

    <ms-tabbar>
      <ms-tabbar-item>home</ms-tabbar-item>
      <ms-tabbar-item>mine</ms-tabbar-item>
    </ms-tabbar>
  </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
            formData: {
                username: 'asd',
                phone: ''
            },
            rules: {
                phone: [
                    { required: true, message: '手机号不能为空' },
                    { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误' }
                ]
            }
        }
    },
    methods: {
        submit () {
            console.log('as')
            this.$refs.form.validate(vaild => {
                console.log(vaild)
            })
        },
        clear () {
            this.$refs.form.clearValidate()
        }
    }
}
</script>
