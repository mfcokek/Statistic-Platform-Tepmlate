<template>
  <v-app>
    <hello-world></hello-world>
    <div class="container">
      <div class="card mx-auto mt-16" style="background: 0; border: orange solid 1px">
        <div class="card-body">
          <h5 class="card-title mb-5" style="color: orange">Standart Sapma</h5>
          <h6 class="card-subtitle mb-2d">Tanım</h6>
          <p class="card-text">
            Standart sapma, bir serisdeki sayıların, serinin aritmetik ortalamasından
            farklarının karelerinin toplamının dizinin eleman sayısının bir eksiğine
            bölümünün kareköküdür.
          </p>
          <h6 class="card-subtitle mb-2">Genel formül</h6>
          <p class="card-text">
            1-) Öncelikle verilerin aritmetik ortalaması hesaplanır. <br>
            2-) Dizide verilen terimlerin aritmetik ortalama ile farkları hesaplanır.<br>
            3-) Farkların karesi toplanır.<br>
            4-) Elde edilen sonuç, terim sayısının bir eksiğine bölünür.
          </p>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>
<style scoped></style>
