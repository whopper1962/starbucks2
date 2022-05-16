<template>
  <div>
    <h3>{{ details.product_name }}</h3>
    <template v-for="(tweet, index) in details.related_tweets">
      <p :key="`tweet_${index}`">{{ tweet.texts }}</p>
    </template>
  </div>
</template>
<script>
export default {
  data () {
    return {
      itemId: null,
      details: {}
    };
  },
  created () {
    this.itemId = this.$route.params['item_id'];
    this.getDetails();
  },
  methods: {
    getDetails () {
      axios.get(`/api/items/${this.itemId}`).then((res) => {
        this.details = res.data;
      }).catch((err) => {
        console.error(err);
      });
    }
  }
}
</script>