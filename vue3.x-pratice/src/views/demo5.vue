<template>
  <div>
    <h2>欢迎光临红浪漫洗浴中心</h2>
     <div>随机选择一位美女为你服务</div>
    <div v-if="loading">Loading.....</div>
    <img v-if="loaded" :src="result.message" />
    <div></div>
  </div>
</template>

<script lang="ts">
import useURLAxios from "../hooks/useURLAxios"

const app = {
  name: "Demo5",
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const { result, loading, loaded } = useURLAxios(
      "https://dog.ceo/api/breeds/image/random"
    );

    return { result, loading, loaded };
  },
};

export default app;
</script>