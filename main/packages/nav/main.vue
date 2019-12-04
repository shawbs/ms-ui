<template>
    <div class="ms-nav">
        <div class="ms-nav-back" v-if="showBack" @click="backHandle">
            <ms-icon icon="arrow-left"></ms-icon>
            {{typeof backText === 'undefined' ? t('ms.nav.backBtn') : backText}}
        </div>
        <div class="ms-nav-left" v-if="$slots.left">
            <slot name="left"/>
        </div>
        <div class="ms-nav-title" v-if="!$slots.default">{{title}}</div>
        <div class="ms-nav-center">
            <slot />
        </div>
        <div class="ms-nav-right" v-if="$slots.right">
            <slot name="right"/>
        </div>
    </div>
</template>

<script>
import MsIcon from '../icon/main'
import Locale from '../../mixins/locale'
export default {
    name: 'MsNav',
    props: {
        title: String,
        backText: String,
        showBack: {
            type: Boolean,
            default: true
        }
    },
    mixins: [Locale],
    components: {MsIcon},
    methods:{
        backHandle(){
            window && window.history.back()
        }
    }
}
</script>