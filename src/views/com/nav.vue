<template>
    <ms-page>
        <ms-container>
            <h3>默认</h3>
            <ms-nav></ms-nav>
            <h3>隐藏back按钮</h3>
            <ms-nav :show-back="false" title="标题">
                <ms-icon slot="left" icon="inform"></ms-icon>
                <ms-input size="mini">
                    <ms-icon icon="search" slot="suffix"></ms-icon>
                </ms-input>
                <ms-icon slot="right" icon="search"></ms-icon>
            </ms-nav>
            <h3>标题</h3>
            <ms-nav title="标题"></ms-nav>
            <h3>自定义中间区域</h3>
            <ms-nav>
                <ms-input size="mini">
                    <ms-icon icon="search" slot="suffix"></ms-icon>
                </ms-input>
            </ms-nav>
            <h3>自定义右边区域</h3>
            <ms-nav title="asd">
                <ms-button size="mini" type="primary" slot="left" icon="search"></ms-button>
                <ms-button size="mini" type="primary" slot="right" icon="search"></ms-button>
            </ms-nav>
        </ms-container>
    </ms-page>
</template>

<script>
export default {

}
</script>