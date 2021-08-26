<template>
  <v-app>
    <hello-world></hello-world>
    <v-content>
      <v-container>
        <div class="sign mx-auto" style="height: 700px">
          <form method="POST" class="mx-auto pt-10" style="max-width: 400px">
            <div class="form-row">
              <div class="form-group">
                <label for="username">Kullanıcı Adı</label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Kullanıcı Adı"
                />
              </div>
              <div class="form-group">
                <label for="inputPassword">Parola</label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                  placeholder="Parola"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck" />
                <label class="form-check-label" for="gridCheck"> Beni Hatırla </label>
              </div>
            </div>
            <v-btn type="submit" v-bind:color="renk" class="white--text mt-3 text-capitalize">
              Giriş Yap
            </v-btn>
          </form>
          <hr />
          <hr />
          <form class="mx-auto" style="max-width: 400px">
            <div class="form-row">
              <div class="form-group">
                <label for="inputEmail">E-mail</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="E-mail"
                />
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="inputUsername">Kullanıcı Adı</label>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="Kullanıcı Adı"
                  />
                </div>
                <div class="form-group">
                  <label for="inputPassword4">Parola</label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Parola"
                  />
                </div>
              </div>
            </div>
            <v-btn type="submit" v-bind:color="renk" class="white--text mt-3 text-capitalize">
              Kayıt Ol
            </v-btn>
          </form>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
export default {
  name: "App",
  components: {
    HelloWorld
  },

  data: () => ({
    menu: false,
    theme: false,
    drawer: false,
    renk: "green",
  }),
};
</script>
<style scoped>
.long-text {
  width: 100%;
  height: 65px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>
