<template>
  <v-app>
    <hello-world></hello-world>
    <div class="container">
      <div class="card mx-auto mt-16" style="background:0;border:orange solid 1px">
        <div class="card-body">
          <h5 class="card-title mb-5" style="color:orange;">Aritmetik Ortalama</h5>
          <h6 class="card-subtitle mb-2d">Tanım</h6>
          <p class="card-text">
            Aritmetik ortalama, bir sayı dizisindeki elemanların toplamının eleman
            sayısına bölünmesi ile elde edilir. İstatistik bilim dalında hem betimsel
            istatistik alanında hem de çıkarımsal istatistik alanında en çok kullanan
            merkezi eğilim ölçüsü' dür.
          </p>
          <h6 class="card-subtitle mb-2">Genel formül</h6>
          <p class="card-text">
            Aritmetik ortalama, n eleman sayısı ve x1, x1, ... , xn ortalaması alınacak
            dizinin elamanları olmak üzere; AO = (x1 + x2 + ... + xn)/n formülüyle
            hesaplanır.
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
