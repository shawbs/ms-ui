<template>
    <ms-page class="home">
        <ms-container>
            <div class="title"><div class="logo">MsUi</div></div>
            <ms-grid>
                <ms-grid-item v-for="item in coms" @click.native="$router.push(item.url)" :key="item.label">
                    <ms-icon icon="home"></ms-icon>
                    <div>{{item.label}}</div>
                </ms-grid-item>
            </ms-grid>
        </ms-container>
    </ms-page>
</template>

<script>
export default {
    name: 'Home',
    data () {
        return {
            tabbarName: '',
            coms: [
                {
                    url: '/button',
                    label: 'button'
                },
                {
                    url: '/checkbox',
                    label: 'checkbox'
                },
                {
                    url: '/form',
                    label: 'form'
                },
                {
                    url: '/icon',
                    label: 'icon'
                },
                {
                    url: '/img',
                    label: 'img'
                },
                {
                    url: '/input',
                    label: 'input'
                },
                {
                    url: '/layout',
                    label: 'layout'
                },
                {
                    url: '/link',
                    label: 'link'
                },
                {
                    url: '/radio',
                    label: 'radio'
                },
                {
                    url: '/row',
                    label: 'row'
                },
                {
                    url: '/tabbar',
                    label: 'tabbar'
                },

                {
                    url: '/loading',
                    label: 'loading'
                },
                {
                    url: '/toast',
                    label: 'toast'
                },
                {
                    url: '/message-box',
                    label: 'message-box'
                },
                {
                    url: '/side-menu',
                    label: 'side-menu'
                },

                {
                    url: '/drawer',
                    label: 'drawer'
                },
                {
                    url: '/cell',
                    label: 'cell'
                },
                {
                    url: '/switch',
                    label: 'switch'
                },
                {
                    url: '/pull-refresh',
                    label: 'pull-refresh'
                },
                {
                    url: '/nav',
                    label: 'nav'
                }
            ]
        }
    }

}
</script>
