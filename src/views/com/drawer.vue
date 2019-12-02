<template>
    <ms-page>
        <ms-container>
            <ms-button block @click.native="action('ltr')" type="primary">从左边出来</ms-button>
            <ms-button block @click.native="action('rtl')" type="primary">从右边出来</ms-button>
            <ms-button block @click.native="action('ttb')" type="primary">从上边出来</ms-button>
            <ms-button block @click.native="action('btt')" type="primary">从下边出来</ms-button>
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