<template>
<div>
  <template v-for="(item, index) in items">
    <img :key="`item_img_${index}`" :src="`https://product.starbucks.co.jp${item.item_img}`">
    <h4 :key="`item_name_${index}`">{{ item.product_name }}</h4>
    <p :key="`item_catchcopy_${index}`">{{ item.catchcopy }}</p>
    <p :key="`item_product_note_${index}`" v-html="item.product_note"/>
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