<template>
    <ms-page>
        <ms-container>
            <h3>img</h3>
            fill
            <ms-img src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg" fit="fill" :width="width" :height="height"></ms-img>
            <ms-img src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria123.jpg" fit="fill" :width="width" :height="height"></ms-img>
            <br/>
            contain
            <ms-img src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg" fit="contain" :width="width" :height="height"></ms-img>
            <br/>
            cover
            <ms-img src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg" fit="cover" :width="width" :height="height"></ms-img>
            <br/>
            none
            <ms-img src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg" fit="none" :width="width" :height="height"></ms-img>
            <br/>
            scale-down
            <ms-img src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg" fit="scale-down" :width="width" :height="height"></ms-img>
            <ms-img src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg" fit="fill" :width="width" :height="height"></ms-img>
            <ms-img src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria123.jpg" fit="fill" :width="width" :height="height">
                <span slot="error">加载失败</span>
            </ms-img>
            <br/>
            <ms-img src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg" fit="fill" :width="width" :height="height"></ms-img>
            <ms-img src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria123.jpg" fit="fill" :width="width" :height="height"></ms-img>
            <br/>
            <ms-img src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg" fit="fill" :width="width" :height="height"></ms-img>
            <ms-img src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria123.jpg" fit="fill" :width="width" :height="height"></ms-img>
            <br/>

            <ms-img src="https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg" fit="scale-down" :width="width" :height="height" lazy></ms-img>
            <ms-img src="https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg" fit="scale-down" :width="width" :height="height" lazy></ms-img>
            <ms-img src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg" fit="scale-down" :width="width" :height="height" lazy></ms-img>
        </ms-container>
    </ms-page>
</template>

<script>
export default {
    data(){
        return {
            width: 100,
            height: 100
        }
    }
}
</script>

<style lang="scss" scoped>

</style>