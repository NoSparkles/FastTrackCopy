
<template>
    <div class="apie-mus">
        <div class="first two-columns">
            <div class="left">
                <div>Video</div>
            </div>
            <div class="right">
                <h1>APIE MUS</h1>
                <p><pre>
Gyvename IT sektoriaus ritmu ir padedame studentams tech sektoriaus kelionėje. Siekiame, kad kiekvienas studentas augtų ir tobulintų minkštuosius ir techninius įgūdžius, nes būtent tai užtikrina ilgalaikį ir tvarų tobulėjimą.

Norime atliepti rinkoje vyraujančias tendencijas, tad mūsų kursuose studentai dirba probleminio mokymo principais, simuliuodami realias darbo situacijas, analizuodami bei pristatydami rezultatus.

Mokymų metu, siūlome ir asmenybės tobulėjimo dirbtuves, kuriose pasiruoši profesionalų portfolio, LinkedIn ir CV. Taip pat gilinsies į mokesčių bei verslo formų, derybų ir viešojo kalbėjimo temas.
                </pre></p>
            </div>
        </div>
        <div class="second two-columns">
            <div class="left">
                <div>
                     <p><pre>
Pasirinkus studijų kryptį, specialių testų pagalba įvertinsime tavo žinias ir stipriąsias puses. Tai padės kursų metu užtikrinti augimą ne tik profesiniame, bet ir asmenybės tobulėjimo kontekste.

Kursų medžiagą pateikiame probleminio mokymo principais. Kitaip tariant, kiekvieno mokymų ciklo tikslas yra išspręsti problemą dirbant komandoje, pristatant rezultatus, taip dar geriau įsisavinant gautas žinias.
                    </pre></p>
                    <img :src="img3" alt="">
                </div>
            </div>
            <div class="right">
                <div>
                    <img :src="img4" alt="">
                    <p><pre>
Siekiame, kad kiekvienas FastTrack studentas po kursų turėtų ne tik stiprų techninių žinių pamatą, bet ir puikius komunikacijos įgūdžius – gebėtų tinkamai komunikuoti, valdyti projektus ir komandas. Čia tapsi ne tik geras specialistas, po kursų išeisi ir supratęs savo profesinį identitetą – esi puikus komandos narys, o gal vadovas?

Šiandieninėje darbo rinkoje nauji specialistai dažniausiai yra stiprūs dirbdami individualiai, bet ne komandoje. Tai – minkštųjų kompetencijų trūkumo rezultatas. Matydami šią tendenciją, perkvalifikavimą bei kvalifikacijos augimą siejame būtent su šių kompetencijų tobulinimu.
                    </pre></p>
                </div>
            
        </div>
        </div>
    </div>
</template>
  
<script>
import img3 from "@/assets/homepage/img3.png"
import img4 from "@/assets/homepage/img4.png"

export default {
setup() {

    return {
        img3: img3,
        img4: img4,
    }
}

}
</script>

<style scoped>
.apie-mus {
    margin-top: 300px;
}
.two-columns {
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: row;
}
.two-columns > div {
    width: 50%;
}
.left {
    display: flex;
    align-items: start;
    justify-content: center;
}
.apie-mus .first .left div {
    background-color: #222;
    width: calc(1920px * 0.3);
    height: calc(1080px * 0.3);
    text-align: center;
}
.right {
    display: flex;
    margin-left: 40px;
    flex-direction: column;
    justify-content: start;
    align-items: start;
}
.apie-mus .first .right pre, pre{
    max-width: 600px;
    text-wrap: wrap;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.apie-mus .second {
    margin-top: 100px;
}
.apie-mus .second .left {
    display: flex;
    justify-content: end;
}
.apie-mus .second .right {
    display: flex;
    justify-content: start;
}

.apie-mus .second .left div,
.apie-mus .second .right div {
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}


img {
    width: 100px;
    height: 100px;
}

</style>
  