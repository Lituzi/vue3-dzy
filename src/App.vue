<template>
    <div>
        <global-header></global-header>
        <router-view></router-view>
    </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import GlobalHeader from "./components/GlobalHeader.vue";
import './assets/css/index.scss'
export default defineComponent({
  name: "App",
  components: {
    GlobalHeader
    }
})
</script>

<style>
body{

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

</style>
