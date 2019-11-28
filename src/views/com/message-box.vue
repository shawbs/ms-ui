<template>
    <ms-page>
        <ms-container>
            <h3>message box</h3>
            <ms-button @click.native="$msgbox.alert('alert',{title: '标题'})">alert</ms-button>
            <ms-button @click.native="$msgbox.alert('alert', {isClickOtherClose: false})">不允许点击蒙层关闭</ms-button>
            <ms-button @click.native="$msgbox.confirm('confirm',{title: '标题'})">confirm</ms-button>
            <ms-button @click.native="$msgbox.prompt('prompt',{title: '标题'})">prompt</ms-button>
            <ms-button @click.native="beforeClose">before close handle</ms-button>
        </ms-container>
    </ms-page>
</template>

<script>
export default {
    methods: {
        beforeClose(){
            this.$msgbox.prompt(
                'prompt',
                {
                    title: '标题',
                    beforeClose: _ => {
                        return new Promise((resolve, reject)=>{
                            console.log('before close')
                            setTimeout(() => {
                                resolve()
                            }, 3000);
                        })
                    }
                })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>