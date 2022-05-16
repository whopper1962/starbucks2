<template>
  <div class="row">
    <template v-for="(item, index) in items">
      <div :key="`item_${index}`" class="col-lg-2 col-md-4 col-sm-12 card-item">
        <div class="card card-original">
          <img class="card-img-top" :key="`item_img_${index}`" :src="`https://product.starbucks.co.jp${item.item_img}`">
          <div class="card-body">
            <h5 class="card-title">{{ trimProductName(item.product_name) }}</h5>
            <h6 class="card-text" v-html="trimText(item.catchcopy)"/>
          </div>
          <div class="card-footer">
            <router-link :to="{name: 'item_details', params: {item_id: 1}}" class="btn btn-color-stb col-12">詳細へ</router-link>
          </div>
        </div>
      </div>
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
  computed: {
    trimText () {
      return function (words) {
        const size = 70;
        if (!words) return;
        if (words.length >= size) {
          words = words.slice(0, size) + '...';
        }
        return words;
      }
    },
    trimProductName () {
      return function (productName) {
        return productName.replace('&reg;', '');
      }
    }
  },
  methods: {
    executeApi () {
      axios.get(`/api/items`, {
        headers: {
          'Accept': "application/json",
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      }).then((res) => {
        this.items = res.data;
      }).catch((error) => {
        if (error.response.status === 401) {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('authorized');
          localStorage.removeItem('authorizedUser');
          this.$router.push('/login');
          return;
        }
        console.error(error);
      })
    }
  }
}
</script>

<style lang="scss">
.main-content {
  background-color:rgb(120, 95, 96);
  padding: 50px 20px 20px 20px;
  height: 100%;
}
.card-original {
  height:100%;
}
.card-item {
  padding-top: 25px;
}
.btn-color-stb {
  background-color: rgb(22, 103, 43);
  color: white;
}
.main {
  background-color:rgb(120, 95, 96);
}
</style>