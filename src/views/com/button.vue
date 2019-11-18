<template>
    <ms-page>
        <ms-container>
            <h3>button</h3>
            <ms-button is-block>default</ms-button>
            <ms-button type="primary">primary</ms-button>
            <ms-button type="success">success</ms-button>
            <ms-button type="danger">danger</ms-button>
            <ms-button type="danger" disabled>danger</ms-button>
            <ms-button type="primary" disabled>primary</ms-button>
            <ms-button disabled>default</ms-button>
            <br/>
            <ms-button size="small">small</ms-button>
            <ms-button size="medium">medium</ms-button>
            <ms-button size="large">large</ms-button>
            <br/>
            <ms-button loading>loading</ms-button>
            <br/>

            <h3>button group</h3>
            <ms-button-group>
                <ms-button type="primary" icon="loading">primary</ms-button>
                <ms-button type="success" icon="close">success</ms-button>
                <ms-button type="danger" icon="tip"></ms-button>
                <ms-button type="danger" icon="tip" disabled></ms-button>
                <ms-button type="primary" icon="loading" disabled>primary</ms-button>
            </ms-button-group>
            <br/>
        </ms-container>
    </ms-page>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>