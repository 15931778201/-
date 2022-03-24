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
  <div><button @click="overAction">点餐完毕</button></div>
  <div>{{ overText }}</div>  
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, reactive, watch } from "vue";

export default defineComponent({
  name: "Demo4",
  setup() { 
  //.....
  const overText = ref("红浪漫");
  const overAction = () => {
    overText.value = overText.value + "点餐完成 | ";
    // document.title = overText.value;
  };
  // watch(overText, (newVal, oldVal) => {
  //   console.log(`new->${newVal}`);
  //   console.log(`old->${oldVal}`);
  //   document.title = overText.value;
  // })
    // 用接口(interface)来作类型注解。
    interface DataProps {
      girls: string[];
      selectGirl: string;
      selectGirlFun: (index: number) => void;
    }
    const data: DataProps = reactive({
      girls: ["大脚", "刘英", "晓红"],
      selectGirl: "",
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index]
      }
    })
    const refData = toRefs(data);
  watch([overText, () => data.selectGirl], (newValue, oldValue) => {
      console.log(`new--->${newValue}`);
      console.log(`old--->${oldValue}`);
      document.title = newValue[0];
    });
    return {
      ...refData, overText, overAction
    };
  },
});
</script>