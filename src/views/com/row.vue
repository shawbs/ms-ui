<template>
    <ms-page>
        <ms-container>
            <h1>两种布局方式 float, flex</h1>
            <h3>float</h3>
            <ms-row>
                <ms-col :span="3">3</ms-col>
                <ms-col :span="10">10</ms-col>
                <ms-col :span="11">11</ms-col>
                <ms-col :span="11">11</ms-col>
                <ms-col :span="11">11</ms-col>
                <ms-col :span="3">3</ms-col>
                <ms-col :span="10">10</ms-col>
            </ms-row>
            <p>间隔</p>
            <ms-row :span="10">
                <ms-col :span="8">8</ms-col>
                <ms-col :span="8">8</ms-col>
                <ms-col :span="8">8</ms-col>
            </ms-row>
            <h3>flex</h3>
            <ms-row type="flex">
                <ms-col :span="3">3</ms-col>
                <ms-col :span="10">10</ms-col>
                <ms-col :span="11">11</ms-col>
                <ms-col :span="3">3</ms-col>
                <ms-col :span="10">10</ms-col>
                <ms-col :span="11">11</ms-col>
            </ms-row>
            <p>间隔</p>
            <ms-row :span="10" type="flex">
                <ms-col :span="3">3</ms-col>
                <ms-col :span="10">10</ms-col>
                <ms-col :span="11">11</ms-col>
                <ms-col :span="3">3</ms-col>
                <ms-col :span="10">10</ms-col>
                <ms-col :span="11">11</ms-col>
            </ms-row>
        </ms-container>
    </ms-page>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.ms-col{
    background-color: $--color-primary;
    color: white;
    margin-bottom: 10px;
    background-clip: content-box;
}
.ms-col:nth-child(even){
    background-color: rgba($--color-primary, .8)
}
</style>