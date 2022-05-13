<template>
<div>
  <h2>Hello starbucks</h2>
  <template v-for="(item, index) in items">
    <img :key="`item_img_${index}`" :src="`https://product.starbucks.co.jp${item.item_img}`">
    <p :key="`item_name_${index}`">{{ item.product_name }}</p>
  </template>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: []
    };
  },
  created () {
    this.executeApi();
  },
  methods: {
    executeApi () {
      axios.get(`/api/items`).then((res) => {
        this.items = res.data;
      }).catch((err) => {
        console.error(err);
      })
    }
  }
}
</script>