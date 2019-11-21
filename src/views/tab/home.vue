<template>
    <ms-page class="home">
        <ms-container>
            <ms-button block type="primary" @click.native="$router.push('/button')" href="#/button">button</ms-button>
            <ms-button block type="primary" @click.native="$router.push('/icon')" href="#/icon">icon</ms-button>
            <ms-button block type="primary" @click.native="$router.push('/form')" href="#/form">form</ms-button>
            <ms-button block type="primary" @click.native="$router.push('/img')" href="#/img">img</ms-button>
            <ms-button block type="primary" @click.native="$router.push('/input')" href="#/input">input</ms-button>
            <ms-button block type="primary" @click.native="$router.push('/layout')" href="#/layout">layout</ms-button>
            <ms-button block type="primary" @click.native="$router.push('/link')" href="#/link">link</ms-button>
            <ms-button block type="primary" @click.native="$router.push('/loading')" href="#/loading">loading</ms-button>
            <ms-button block type="primary" @click.native="$router.push('/message-box')" href="#/message-box">message-box</ms-button>
            <ms-button block type="primary" @click.native="$router.push('/row')" href="#/row">row</ms-button>
            <ms-button block type="primary" @click.native="$router.push('/toast')" href="#/toast">toast</ms-button>
            <ms-button block type="primary" @click.native="$router.push('/radio')" href="#/radio">radio</ms-button>
            <ms-button block type="primary" @click.native="$router.push('/checkbox')" href="#/checkbox">checkbox</ms-button>
            <ms-button block type="primary" @click.native="$router.push('/tabbar')" href="#/tabbar">tabbar</ms-button>
            <ms-button block type="primary" @click.native="$router.push('/drawer')" href="#/drawer">drawer</ms-button>
            <ms-button block type="primary" @click.native="$router.push('/side-menu')" href="#/side-menu">side-menu</ms-button>

            <!-- <ms-button block @click.native="$router.push()" href="#/button">button</ms-button>

            <ms-button block @click.native="$router.push()" href="#/button">button</ms-button>
            <ms-button block @click.native="$router.push()" href="#/button">button</ms-button> -->
        </ms-container>
    </ms-page>
</template>

<script>
export default {
    name: 'Home',
    data () {
        return {
            tabbarName: ''
        }
    }

}
</script>
