<template>
    <div class="home page">
        <ms-header>header</ms-header>
        <ms-container>
            <h3>button</h3>
            <ms-button is-block>default</ms-button>
            <ms-button type="primary">primary</ms-button>
            <ms-button type="success">success</ms-button>
            <ms-button type="danger">danger</ms-button>
            <ms-button type="danger" disabled>danger</ms-button>
            <ms-button type="primary" disabled>primary</ms-button>
            <ms-button disabled>default</ms-button>

            <h3>button group</h3>
            <ms-button-group>
                <ms-button type="primary" icon="loading">primary</ms-button>
                <ms-button type="success" icon="close">success</ms-button>
                <ms-button type="danger" icon="tip"></ms-button>
                <ms-button type="danger" icon="tip" disabled></ms-button>
                <ms-button type="primary" icon="loading" disabled>primary</ms-button>
            </ms-button-group>

            <h3>link</h3>
            <ms-link href="#/other"> link other page</ms-link>
            <ms-link href="#/other" type="danger"> link other page</ms-link>
            <ms-link href="#/other" type="primary"> link other page</ms-link>
            <ms-link href="#/other" type="primary" disabled> link other page</ms-link>
            <ms-link href="#/other" disabled> link other page</ms-link>

            <h3>input</h3>
            <ms-input v-model="formData.inputValue">
                <ms-icon icon="loading" slot="prepend"></ms-icon>
                <ms-icon icon="loading" slot="prefix"></ms-icon>
                <ms-icon icon="loading" slot="suffix"></ms-icon>
                <ms-icon icon="loading" slot="append"></ms-icon>
            </ms-input>
            <ms-input v-model="formData.inputValue" show-close></ms-input>

            <h3>form</h3>
            <ms-form ref="form" :model="formData" :rules="rules" label-width="100px">
                <ms-form-item label="username">
                <ms-input v-model="formData.username"></ms-input>
                </ms-form-item>
                <ms-form-item label="phone" prop="phone">
                <ms-input v-model="formData.phone"></ms-input>
                </ms-form-item>
                <ms-form-item label="">
                <ms-button type="primary" @click.native="submit">submit</ms-button>
                <ms-button @click.native="clear">clear</ms-button>
                </ms-form-item>
                <ms-form-item>
                    <ms-input v-model="formData.inputValue">
                        <ms-icon icon="loading" slot="append"></ms-icon>
                    </ms-input>
                </ms-form-item>
            </ms-form>

            <h3>message box</h3>
            <ms-button @click.native="$msgbox.alert('alert',{title: '标题'})">alert</ms-button>
            <ms-button @click.native="$msgbox.alert('alert')">alert</ms-button>
            <ms-button @click.native="$msgbox.confirm('confirm',{title: '标题'})">confirm</ms-button>
            <ms-button @click.native="$msgbox.prompt('prompt',{title: '标题'})">prompt</ms-button>

            <h3>toast</h3>
            <ms-button @click.native="$toast('asdasdasd')">toast</ms-button>

            <h3>loading</h3>
            <ms-button @click.native="loadingClick">loadding</ms-button>

            <ms-footer>footer</ms-footer>
        </ms-container>
    </div>
</template>

<script>
export default {
    name: 'Home',
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
            },
            tabbarName: ''
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
        },
        loadingClick(){
            this.$loading.show('加载中')
            setTimeout(()=>{
                // this.$loading.hide()
            }, 5000)
        }
    }
}
</script>
