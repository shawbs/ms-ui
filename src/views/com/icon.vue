<template>
    <ms-page>
        <ms-container>
            <ms-row type="flex">
                <ms-col :span="6"  v-for="item in icons" :key="item">
                    <div><ms-icon :icon="item"></ms-icon></div>
                    <div>{{item}}</div>
                </ms-col>
            </ms-row>
        </ms-container>
    </ms-page>
</template>

<script>
export default {
    data(){
        return {
            icons: [
                'home','user','loading','password','arrow-left','arrow-right','arrow-up','arrow-down','cc-arrow-left','cc-arrow-right','cc-arrow-up','cc-arrow-down',
                'mobile','checkbox-o','checkbox-on','radio','radio-on','radio1','radio1-on','qq','chat','check','tip','tip-o','help','search','close','close-circle','eye','inform',
                'github'
            ]
        }
    }
}
</script>

<style lang="scss">
.ms-col{
    text-align: center;
    background: #dddddd;
    padding: 10px;
    &:hover{
        background: darken(#dddddd,  10%)
    }
}
</style>