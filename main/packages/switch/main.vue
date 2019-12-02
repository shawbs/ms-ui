<template>
    <div class="ms-switch"
    @click="$emit('input', !value)"
    :style="{
        'font-size': size
    }"
    :class="[
    value ? 'on' : 'off'
    ]"
    role="checkbox" :aria-checked="Boolean(value)">
        <span class="ms-switch-label" :class="{active: !value}" v-if="offText">{{offText}}</span>
        <div class="ms-switch-bar"
        :style="{
            background: value ? onColor : offColor,
            borderColor: value ? onColor : offColor,
        }">
            <div class="ms-switch-node"></div>
        </div>
        <span class="ms-switch-label" :class="{active: value}" v-if="onText">{{onText}}</span>
    </div>
</template>

<script>
export default {
    name: 'MsSwitch',
    props: {
        value: Boolean,
        offText: String,
        onText: String,
        size: String,
        offColor: String,
        onColor: String
    }
}
</script>