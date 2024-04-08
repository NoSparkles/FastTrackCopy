<template>
  <div>
    <Kursai/>
    <ApieMus/>
    <PopuliariausiKursai/>
    <IsidarbinimoGalimybes/>
    <StudijuKelias/>
    <StudentuKomentarai/>
    <DaznaiUzdKlausimai/>
    <Footer/>
  </div>
</template>

<script>
import Kursai from './Kursai.vue'
import ApieMus from './ApieMus.vue'
import PopuliariausiKursai from './PopuliariausiKursai.vue'
import IsidarbinimoGalimybes from './IsidarbinimoGalimybes.vue'
import StudijuKelias from'./StudijuKelias.vue'
import StudentuKomentarai from './StudentuKomentarai.vue'
import DaznaiUzdKlausimai from './DaznaiUzdKlausimai.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Kursai,
    ApieMus,
    PopuliariausiKursai,
    IsidarbinimoGalimybes,
    StudijuKelias,
    StudentuKomentarai,
    DaznaiUzdKlausimai,
    Footer
  },
  setup() {
    

    return {

    }
  }
  
}
</script>

<style>
h1 {
    max-width: 600px;
    font-size: 2em;
}
p {
    line-height: 1.5em;
    margin-top: 40px;
    font-size: 1.2em;
    max-width: 600px;
    color: #999;
}
</style>
