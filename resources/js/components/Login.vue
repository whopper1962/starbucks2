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
      axios.post('/api/auth/login', this.form).then((res) => {
        localStorage.setItem('accessToken', res.data.api_token);
        return this.getAuthorizedUserInfo();
      }).catch((error) => {
        if (error.response.status === 401) {
          console.error('メールアドレスまたはパスワードが違います');
        }
      });
    },
    async getAuthorizedUserInfo() {
      axios.get('/api/user', {
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
        localStorage.removeItem('accessToken');
        localStorage.removeItem('authorized');
        localStorage.removeItem('authorizedUser');
        this.$router.push('/login');
      });
    }
  },
};
</script>