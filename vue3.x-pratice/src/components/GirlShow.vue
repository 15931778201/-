<template>
 <div class="">
  <img :src="result && result.imgUrl"  />
 </div>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'
export default defineComponent({
  async  setup() {
    let url = 'https://apiblog.jspang.com/default/getGirl'
    const rawData = await axios.get(url)
    return { result:rawData.data }
  }
})
</script>