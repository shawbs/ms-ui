<template>
    <ms-page>
        <ms-container>
            <h3>message box</h3>
            <ms-button @click.native="$msgbox.alert('alert',{title: '标题'})">alert</ms-button>
            <ms-button @click.native="$msgbox.alert('alert')">alert</ms-button>
            <ms-button @click.native="$msgbox.confirm('confirm',{title: '标题'})">confirm</ms-button>
            <ms-button @click.native="$msgbox.prompt('prompt',{title: '标题'})">prompt</ms-button>
        </ms-container>
    </ms-page>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>