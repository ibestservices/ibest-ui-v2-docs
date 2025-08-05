<template>
    <el-input class="search-input" v-model="searchVal" placeholder="搜索图标">
        <template #prefix>
            <i class="ibest-icon ibest-icon-search" style="font-size: 16px;"></i>
        </template>
    </el-input>
    <div class="icon-content">
        <template v-for="(item, index) in showList" :key="index">
            <h5 class="title">{{ item.title }}</h5>
            <div class="icon-cate"> 
                <div class="icon-item" v-for="icon in item.icons" :key="icon" @click="copy(icon)">
                    <i :class="`ibest-icon ibest-icon-${icon}`"></i>
                    <span class="icon-name">{{ icon }}</span>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
    import { computed, ref } from "vue"
    import iconConfig from "../fonts/config.js"
    import { ElInput, ElMessage } from "element-plus"

    const searchVal = ref("")
    const showList = computed(() => {
        if (!searchVal.value) return iconConfig
        return iconConfig.map(item => {
            return {
                title: item.title,
                icons: item.icons.filter(icon => icon.includes(searchVal.value))
            }
        }).filter(item => item.icons.length)
    })

    function copy(icon: string) {
        navigator.clipboard.writeText(icon)
        ElMessage.success(`复制成功：${icon}`)
    }
</script>

<style>
    @import "element-plus/dist/index.css";
    @import "../fonts/font.css";
</style>

<style scoped>
    .search-input{
        width: 100%;
        height: 40px;
        border-radius: 4px;
        margin: 10px 0;
    }
    .search-input:deep() .el-input__wrapper{
        background-color: transparent;
        box-shadow: 0 0 0 1px var(--vp-c-border) inset;
    }
    .search-input:deep() .el-input__wrapper.is-focus{
        box-shadow: 0 0 0 1px #1989fa inset;
    }
    .search-input:deep() .el-input__inner{
        color: var(--vp-c-text-1);
    }
    .icon-content {
        width: 100%;
    }
    .title{
        margin-top: 10px;
    }
    .icon-cate{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        border: 1px solid var(--vp-c-border);
        margin-top: 10px;
        border-radius: 12px;
        overflow: hidden;
    }
    .icon-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px 0;
        cursor: pointer;
    }
    .icon-item:active {
        background-color: var(--vp-c-bg-soft);
    }
    .ibest-icon{
        font-size: 32px;
    }
    .icon-name{
        margin-top: 10px;
        font-size: 14px;
    }
</style>