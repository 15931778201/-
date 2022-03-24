<template>
  <div>
    <h2>News Index page</h2>
    <p>NewsId: {{$route.params.newsId}}</p>
    <ul>
      <li><nuxt-links :to="{name: 'index'}">HOME</nuxt-links></li>
      <li><nuxt-link :to="{name:'news-id',params:{id:123, title: 'abc'}}">News-1</nuxt-link></li>
      <li><nuxt-link :to="{name:'news-id',params:{id:456}}">News-2</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'',
  data(){
   return {

   }
  }
}
</script>

<style scoped>

</style>
