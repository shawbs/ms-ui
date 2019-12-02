<template>
    <ms-page>
        <ms-container>
            <div>
                默认的:<ms-switch v-model="value"></ms-switch><br>
            </div>
            <div>
                <h3>定义label</h3>
                <ms-switch on-text="开" off-text="关" v-model="value"></ms-switch>
            </div>
            <div>
                <h3>自定义颜色</h3>
                <ms-switch  on-color="red" off-color="blue" v-model="value"></ms-switch><br>
                <ms-switch on-text="开" off-text="关"  on-color="red" off-color="blue" v-model="value"></ms-switch>
            </div>
            <div>
                <h3>自定义大小</h3>
                <ms-switch size="30px" v-model="value"></ms-switch>
            </div>
        </ms-container>
    </ms-page>
</template>

<script>
export default {
    data(){
        return {
            value: true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>