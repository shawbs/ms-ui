<template>
    <ms-page>
        <ms-container>
            <ms-cell-group title="cell1">
                <ms-cell label="asd" link>
                    <div slot="suffix">asd</div>
                </ms-cell>
                <ms-cell label="asd" link>
                    <ms-input></ms-input>
                    <div slot="suffix"><ms-icon icon="home"></ms-icon></div>
                </ms-cell>
                <ms-cell>asd

                    <div slot="suffix"><ms-icon icon="home"></ms-icon></div>
                </ms-cell>
            </ms-cell-group>
            <ms-cell-group style="margin-top: 20px;">
                <ms-cell label="asd" link>
                    <div slot="suffix">asd</div>
                </ms-cell>
                <ms-cell label="asd" link>
                    <ms-input></ms-input>
                    <div slot="suffix"><ms-icon icon="home"></ms-icon></div>
                </ms-cell>
                <ms-cell>asd

                    <div slot="suffix"><ms-icon icon="home"></ms-icon></div>
                </ms-cell>
            </ms-cell-group>
        </ms-container>
    </ms-page>
</template>

<script>
export default {
    data(){
        return {
            checkbox: ['1'],
            agree: false
        }
    }
}
</script>

<style lang="scss" scoped>
.ms-container{
    background: #f2f2f2;
    padding: 0;
}
</style>