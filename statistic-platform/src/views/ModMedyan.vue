<template>
  <v-app>
    <hello-world></hello-world>
    <div class="container">
      <div class="card mx-auto mt-16" style="background: 0; border: orange solid 1px">
        <div class="card-body">
          <h5 class="card-title mb-5" style="color: orange">Mod, Medyan</h5>
          <h6 class="card-subtitle mb-2">Mod</h6>
          <p class="card-text">
            Mod, bir sayısal veri serisi içinde en çok tekrar eden sayıdır. Bu sayının
            tekrar adedine de frekans denir. <br/><br>
            Örneğin 1, 5, 4, 5, 1, 3, 5 serisinde en çok tekrar eden sayı 5 sayısıdır ve
            frekansı 3'tür (3 kez tekrar etmiş).<br/><br>
            Bazi serilerin 2 modu olabilir. Örneğin 1, 5, 4, 5, 3, 4, 5, 2, 3, 4 serisinde
            4 ve 5 sayıları 3'er kez tekrar etmişlerdir. Bu durumda bu serinin 4 ve 5
            olmak üzere iki modu vardır.
          </p>
          <h6 class="card-subtitle mb-2">Medyan</h6>
          <p class="card-text">
            Medyan, bir sayısal veri serisi sıralandığında ortada kalan sayıdır.<br><br>

Örneğin 2, 1, 5, 4, 5, 1, 2, 3, 5 serisi sıralanırsa 1, 1, 2, 2, 3, 4, 5, 5, 5 serisi elde edilir. Bu seri 9 elemanlı olduğundan ortadaki, yani 5. eleman (medyan) olacaktır. 5. eleman 3 sayısıdır. <br><br>

Eleman sayısı tek sayı olan bir seride medyan değerin sırasının hesaplaması şu şekilde formüle edilir.
Medyanın Sırası = (Eleman Sayısı + 1) / 2
Bu formülü yukarıdaki örneği uygulayacak olursak;
Medyanın Sırası = (9 + 1) / 2 = 5 <br><br>

Veri serisi eleman sayısı bir çift sayı ise bu durumda serinin 2 medyanı olacaktır. Örneğin 2, 1, 5, 4, 5, 1, 2, 3, 5, 4 serisi sıralandığında 1, 1, 2, 2, 3, 4, 4, 5, 5, 5 serisi elde edilir. Seri 10 elemanlı olduğundan medyan 2 sayı olacaktır. Bunlar ortadaki 3 ve 4 sayılarıdır.<br><br>

Eleman sayısı çift sayı olan bir seride medyan değerlerin sıralarının hesaplanması şu şekilde formüle edilir.<br>
1. Medyanın Sırası = Eleman Sayısı / 2 <br>
2. Medyanın Sırası = Eleman Sayısı / 2 + 1
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
