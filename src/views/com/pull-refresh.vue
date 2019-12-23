<template>
    <ms-page>
        <ms-container>
            <ms-pull-refresh ref="pullRefresh" @refresh="refreshHandle">
                <ms-button @click.native = '$refs.pullRefresh.start()'>start</ms-button>
                <ms-button @click.native = '$refs.pullRefresh.stop()'>stop</ms-button>
                <p v-for="item in 50" :key="'a'+ item">{{item}}</p>
            </ms-pull-refresh>
        </ms-container>
    </ms-page>
</template>

<script>
export default {
    methods: {
        refreshHandle(){
            console.log('1111')
        }
    }
}
</script>