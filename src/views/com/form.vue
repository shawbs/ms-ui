<template>
    <ms-page>
        <ms-container>
            <h3>form</h3>
            <ms-form ref="form" :model="formData" :rules="rules" label-width="100px">
                <ms-form-item label="用户名" prop="username">
                <ms-input v-model="formData.username"></ms-input>
                </ms-form-item>
                <ms-form-item label="手机号" prop="phone">
                <ms-input v-model="formData.phone"></ms-input>
                </ms-form-item>
                <ms-form-item label="说明">
                    <ms-input type="textarea" placeholder="asda" v-model="formData.introduction"></ms-input>
                </ms-form-item>
                <ms-form-item label="状态" prop="status">
                    <ms-switch v-model="formData.status"></ms-switch>
                </ms-form-item>
                <ms-form-item label="">
                <ms-button type="primary" @click.native="submit">submit</ms-button>
                <ms-button @click.native="clear">clear</ms-button>
                </ms-form-item>
            </ms-form>
            <br/>
        </ms-container>
    </ms-page>
</template>

<script>
export default {
    data(){
        return {
            formData: {
                username: 'asd',
                phone: '',
                introduction: '',
                status: false
            },
            rules: {
                username: [
                    { pattern: /^(\d|\w){5,}$/, message: '用户名格式错误' }
                ],
                phone: [
                    { required: true, message: '手机号不能为空' },
                    { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误' }
                ],
                status: [{pattern: true, message: '状态不能为false'}]
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
