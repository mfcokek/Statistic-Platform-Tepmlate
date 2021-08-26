<template>
  <v-app>
    <hello-world></hello-world>
    <div class="container">
      <div class="card mx-auto mt-16" style="background: 0; border: orange solid 1px">
        <div class="card-body">
          <h5 class="card-title mb-5" style="color: orange">Geometrik Ortalama</h5>
          <h6 class="card-subtitle mb-2d">Tanım</h6>
          <p class="card-text">
            Geometrik ortalama, birim değerlerinin (gözlem sonuçlarının) birbirleriyle
            çarpımlarının, n birim sayısı olmak üzere, n'inci dereceden köküne denir.
          </p>
          <h6 class="card-subtitle mb-2">Genel formül</h6>
          <p class="card-text">
            Geometrik ortamama, n eleman sayısı olmak üzere;

n √ x1 . x2 . x3 ... xn

formülüyle hesaplanır.
Aynı formülü şu şekilde de ifade edebiliriz.
(x1 . x2 . x3 ... xn)1/n
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
