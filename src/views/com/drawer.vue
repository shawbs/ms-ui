<template>
    <ms-page>
        <ms-container>
            <ms-button @click.native="action('ltr')" type="primary">从左边出来</ms-button>
            <ms-button @click.native="action('rtl')" type="primary">从右边出来</ms-button>
            <ms-drawer :direction="direction" v-model="visible">
                {{direction}}
            </ms-drawer>
        </ms-container>
    </ms-page>
</template>

<script>
export default {
    data(){
        return {
            direction: 'rtl',
            visible: false
        }
    },
    methods: {
        action(direction){
            this.direction = direction
            this.visible = true
        }
    }
}
</script>