<template>
  <div>
    <form @submit.prevent="login()">
      <div>
        <label>Eメール</label>
        <input type="text" v-model="form.email" />
      </div>
      <div>
        <label>パスワード</label>
        <input type="text" v-model="form.password" />
      </div>
      <button type="submit">ログイン</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async login() {
      await axios.post('/api/auth/login', this.form).then((res) => {
        localStorage.setItem('accessToken', res.data.api_token);
      });
      return await this.getAuthorizedUserInfo();
    },
    async getAuthorizedUserInfo() {
      return await axios.get('/api/user', {
          headers: {
            'Accept': "application/json",
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
        }).then(response => {
          localStorage.setItem('authorized', true);
          localStorage.setItem('authorizedUser', JSON.stringify(response.data));
          this.$router.push('/items');
        }).catch((error) => {
          console.error(error);
          localStorage.removeItem('accessToken');
          localStorage.removeItem('authorized');
          localStorage.removeItem('authorizedUser');
          this.$router.push('/login');
        });
    }
  },
};
</script>