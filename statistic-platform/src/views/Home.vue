<template>
  <v-app>
    <hello-world></hello-world>
    <v-content>
      <v-container>
        <v-row class="mb-4">
          <v-col sm="6" md="4" lg="3" xl="2" v-for="item in items" :key="item.text">
            <v-card>
              <v-img height="200px" :src="item.src" />
              <v-card-subtitle class="light-blue--text">
                {{ item.text }}
              </v-card-subtitle>
              <v-card-text class="long-text">
                {{ item.text2 }}
              </v-card-text>
              <v-card-actions>
                <v-btn v-bind:href="item.link" v-bind:color="renk" class="white--text ml-auto text-capitalize">
                  Hesapla<v-icon>fa-angle-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
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
    renk: "green",
    items: [
      {
        src: "/assets/aritmetik.png",
        text: "Aritmetik Ortalama",
        text2:
          "Burada bir veri dizisinin / serinin Aritmetik Ortalamasını hesaplayabilirsiniz.",
        link:"/aritmetik"
      },
      {
        src: "/assets/geometrik.png",
        text: "Geometrik Ortalama",
        text2:
          "Burada bir veri dizisinin / serinin Geometrik Ortalamasını hesaplayabilirsiniz.",
        link:"/geometrik"
      },
      {
        src: "/assets/harmonik.png",
        text: "Harmonik Ortalama",
        text2:
          "Burada bir veri dizisinin / serinin Harmonik Ortalamasını hesaplayabilirsiniz.",
        link:"/harmonik"
      },
      {
        src: "/assets/standart.png",
        text: "Standart Sapma",
        text2:
          "Standart sapma, Olasılık kuramı ve istatistik bilim dallarında, bir anakütle, bir örneklem, bir olasılık dağılımı veya bir rassal değişken, veri değerlerinin yayılımının özetlenmesi için kullanılan bir ölçüdür.",
        link:"/standartsapma"
      },
      {
        src: "/assets/modmedyan.png",
        text: "Mod ve Medyan",
        text2:
          "Mod, bir sayısal veri serisi içinde en çok tekrar eden sayıdır.Bu sayının tekrar adedine de frekans denir.Medyan, bir sayısal veri serisi sıralandığında ortada kalan sayıdır.",
        link:"/modmedyan"
      },
      /*{
        src: "/assets/varyans.png",
        text: "Varyans",
        text2:
          "Olasılık kuramı ve istatistik bilim dallarında varyans bir rassal değişken, bir olasılık dağılımı veya örneklem için istatistiksel yayılımın, mümkün bütün değerlerin beklenen değer veya ortalamadan uzaklıklarının karelerinin ortalaması şeklinde bulunan bir ölçüdür.",
        link:"/aritmetik"
      },
      {
        src: "/assets/kombinasyon.png",
        text: "Kombinasyon",
        text2:
          "Kombinasyon, bir kümedeki elemanlardan her eleman diğerlerinden farklı olmak şartıyla seçilen aynı sayıda eleman içeren alt kümelerin her birisidir.",
        link:"/aritmetik"
      },
      {
        src: "/assets/permütasyon.png",
        text: "Permütasyon",
        text2:
          "Permütasyon, bir kümedeki elemanlardan her eleman diğerlerinden farklı olmak şartıyla seçilen aynı sayıda eleman içeren, elemanları herhangi bir dizilişe sahip olabilen alt kümelerin her birisidir.",
        link:"/aritmetik"
      },
      {
        src: "/assets/wilcoxon.png",
        text: "Wilcoxon",
        text2:
          "Wilcoxon testi, bağımlı iki örnek testidir. Eşleştirilmiş (paired) t testinin parametrik olmayan alternatifidir.n birimlik örnekten elde edilen iki gözlem setifarkının ortancası sıfır olan toplumdan çekilmiş rastgele örnek olup olmadığını test eder",
        link:"/aritmetik"
      },
      {
        src: "/assets/basitrastgele.png",
        text: "Basit Rastgele",
        text2:
          "Basit rastgele örneklem almanın ana prensibi her bir anakütle elemanının aynı olasılıkla örneğe girebilmesidir.",
        link:"/aritmetik"
      },
      {
        src: "/assets/ortmutlaksapma.png",
        text: "Ortalama Mutlak Sapma",
        text2:
          "Bir veri setinin ortalama mutlak sapması, her veri noktasıyla ortalama arasındaki ortalama uzaklıktır. Ortalama mutlak sapma bize bir veri setinin değişkenliği hakkında fikir verir.",
        link:"/aritmetik"
      },
      {
        src: "/assets/çarpıklık.png",
        text: "Çarpıklık",
        text2:
          "Çarpıklık olasılık kuramı ve istatistik bilim dallarında bir reel-değerli rassal değişkenin olasılık dağılımının simetrik olamayışının ölçülmesidir.",
        link:"/aritmetik"
      },
      {
        src: "/assets/basıklık.png",
        text: "Basıklık",
        text2:
          "Basıklık kavramı bir reel değerli rassal değişken için olasılık dağılımının, grafik gösteriminden tanımlanarak ortaya çıkarılan bir kavram olan, sivriliği veya basıklığı özelliğinin ölçümüdür",
        link:"/aritmetik"
      },*/
    ],
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
