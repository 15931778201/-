<template>
  <div>
    <h2>欢迎光临红浪漫洗浴中心</h2>
    <div>请选择一位美女为你服务</div>
  </div>
  <div>
    <button v-for="(item, index) in girls" v-bind:key="index" @click="selectGirlFun(index)">
      {{ index }} : {{ item }}
    </button>
  </div>
  <div>
    你选择了 【{{ selectGirl }}】 为你服务
  </div>
  <div>{{ nowTime }}</div>
  <div><button @click="getNowTime">显示时间</button></div>
</template>

<script lang="ts">
import { defineComponent, reactive, onBeforeMount, onMounted, onRenderTriggered, onBeforeUpdate, onRenderTracked, onUpdated, toRefs } from "vue";
import { nowTime, getNowTime } from "../hooks/useNowTime";

//....
export default defineComponent({
  name: "Demo2",
  setup() {
    // 用接口(interface)来作类型注解。
    interface DataProps {
      girls: string[];
      selectGirl: string;
      selectGirlFun: (index: number) => void;
    }    
    console.log("1-开始创建组件-----setup()");
    const data: DataProps = reactive({
      girls: ["大脚", "刘英", "晓红"],
      selectGirl: "",
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index];
      },
    });

    onBeforeMount(() => {
      console.log("2-组件挂载到页面之前执行-----onBeforeMount()");
    });

    onMounted(() => {
      console.log("3-组件挂载到页面之后执行-----onMounted()");
    });

    onRenderTriggered((event) => {
      console.log("状态触发组件--------------->");
      console.log(event);
    });

    onBeforeUpdate(() => {
      console.log("4-组件更新之前-----onBeforeUpdate()");
    });

    onRenderTracked((event) => {
      console.log("状态跟踪组件----------->");
      console.log(event);
    });

    onUpdated(() => {
      console.log("5-组件更新之后-----onUpdated()");
    });

    const refData = toRefs(data);

    return {
      ...refData, nowTime, getNowTime
    };
  },
});
//  event
// - key 那边变量发生了变化
// - newValue 更新后变量的值
// - oldValue 更新前变量的值
// - target 目前页面中的响应变量和函数

// Vue2--------------vue3
// beforeCreate  -> setup()
// created       -> setup()
// beforeMount   -> onBeforeMount
// mounted       -> onMounted
// beforeUpdate  -> onBeforeUpdate
// updated       -> onUpdated
// beforeDestroy -> onBeforeUnmount
// destroyed     -> onUnmounted
// activated     -> onActivated
// deactivated   -> onDeactivated
// errorCaptured -> onErrorCaptured
//                  onRenderTracked  状态跟踪
//                  onRenderTriggered  状态触发
// export default app;
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>

