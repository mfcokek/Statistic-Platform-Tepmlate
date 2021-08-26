<template>
  <v-app>
    <hello-world></hello-world>
    <div class="container">
      <div class="card mx-auto mt-16" style="background: 0; border: orange solid 1px">
        <div class="card-body">
          <h5 class="card-title mb-5" style="color: orange">Harmonik Ortalama</h5>
          <h6 class="card-subtitle mb-2d">Tanım</h6>
          <p class="card-text">
            Harmonik ortalama, aritmetik ortalama ve geometrik ortalama gibi pisagorik
            ortalamalardan biridir. Genellikle oranların ortalamasının istendiği durumlar
            için kullanılır.
          </p>
          <h6 class="card-subtitle mb-2">Genel formül</h6>
          <p class="card-text">
            Harmonik ortalama, n eleman sayısı ve x1, x1, ... , xn ortalaması alınacak
            dizinin elamanları olmak üzere;<br/>
            HM = n / (1/x1 + 1/x2 + 1/x3 ... + 1/xn)  formülüyle hesaplanır.
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
