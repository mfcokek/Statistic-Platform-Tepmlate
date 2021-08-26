<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped flating>
      <v-list>
        <v-list-item href="/signin">
          <v-row class="my-5">
            <v-toolbar-title>
              <v-icon class="mr-4">fa-calculator</v-icon>
              <span>Hesaplamalarım</span>
            </v-toolbar-title>
          </v-row>
        </v-list-item>
        <v-list-item href="/signin">
          <v-row class="my-5">
            <v-toolbar-title>
              <v-icon class="mr-4">fa-equals</v-icon>
              <span>Karşılaştırmalarım</span>
            </v-toolbar-title>
          </v-row>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app clipped-left v-bind:color="renk">
      <v-app-bar-nav-icon class="ma-2" color="white" @click="drawer = !drawer" />
      <v-toolbar-title class="align-center">
        <span class="title white--text">
          <a href="/" style="text-decoration: none; color: white">
            İstatistik Platformu
          </a>
        </span>
      </v-toolbar-title>
      <v-spacer />
      <v-spacer />
      <v-spacer />
      <v-spacer />
      <v-spacer />
      <v-text-field
        class="mt-7 mr-5 rounded-pill"
        solo
        placeholder="Ara..."
        single-line
        append-icon="mdi-magnify"
      />
      <div>
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-width="250"
          offset-y
        >
          <template v-slot:activator="{ on }">
            <v-avatar size="40">
              <img v-on="on" src="/assets/account.png" />
            </v-avatar>
          </template>
          <v-card>
            <v-list>
              <v-list-item href="/signin">
                <v-list-item-action>
                  <v-icon class="ml-3">mdi-account-arrow-right</v-icon>
                </v-list-item-action>
                <v-list-item-action>Giriş Yap</v-list-item-action>
              </v-list-item>
            </v-list>
            <v-divider />
            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-switch v-model="theme" color="purple" />
                </v-list-item-action>
                <v-list-item-action>Karanlık Tema</v-list-item-action>
              </v-list-item>
              <v-list-item href="#">
                <v-list-item-action>
                  <v-icon>mdi-cog</v-icon>
                </v-list-item-action>
                <v-list-item-action>Ayarlar</v-list-item-action>
              </v-list-item>  
            </v-list>
          </v-card>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    menu: false,
    theme: false,
    drawer: false,
    renk: "green",
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com"
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts"
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
      }
    ]
  }),
    watch: {
    theme: function (next) {
      if (this.renk == "green") {
        this.renk = "#222831";
      } else {
        this.renk = "green";
      }
      this.$vuetify.theme.dark = next;
    },
  },
};
</script>
