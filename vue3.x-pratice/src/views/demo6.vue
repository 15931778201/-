<template>
  <div>
    <Suspense>
      <template #default>
        <!-- <AsyncShow /> -->
        <GirlShow />
      </template>
      <template #fallback>
        <h1>Loading...</h1>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import AsyncShow from "../components/AsyncShow.vue";
import GirlShow from "../components/GirlShow.vue";
import { ref , onErrorCaptured} from "vue";

const app = {
  name: "Demo6",
  components: {
    AsyncShow, GirlShow
  },
  setup() {
    onErrorCaptured (error => {
      console.log(`error-->`, error);
      return true
    })
    return {}
  }
  //...
}
export default app
</script>
