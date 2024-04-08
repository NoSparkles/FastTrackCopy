<template>
<div class="dazniausiai-uzduodami-klausimai">
    <h1>DAŽNIAUSIAI UŽDUODAMI KLAUSIMAI</h1>
    <ul ref="hiddenContents">
        <li v-for="(item, index) in questionsAnswers" :key="index" @click="handleMouseClick(index)">
            <button >
                <div :style="{backgroundColor: clicked[index] ? 'yellow' : '', color: clicked[index] ? 'black' : ''}">
                    <fa :icon="clicked[index] ? 'minus' : 'plus'" />
                </div>
                <span :style="{color: clicked[index] ? 'yellow' : ''}">
                    {{ item.question }}
                </span>
            </button>
            <div ref="hiddenContents[index]" :style="{height: hiddenContentMaxHeights[index]}">
                <p>{{ item.answer }}</p>
            </div>
        </li>
    </ul>
</div>

</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        let questionsAnswers = ref([
            {
                question: 'Ar yra galimybė mokytis online?',
                answer: 'Taip, visi kursai vyks tik online mokymų platformoje.'
            },
            {
                question: 'Kaip dažnai sukuriamos naujos grupės pradėti kursą?',
                answer: 'Įmonė bando prisitaikyti prie rinkos poreikių, tad tikslas yra surinkti ir paleisti bent po vieną grupę kiekvienoje mokymų programoje kiekvieną mėnesį.'
            },
            {
                question: 'Kuo FastTrack išsiskiria iš kitų programavimo akademijų?',
                answer: 'FastTrack yra orientuota į pačius aktualiausius ir šiai dienai rinkoje pažangiausius kursus. Užtikriname greitą ir patikimą kelią keisti savo karjerą ir nepamirštame, kad ne tik kokybiškos techninės žinios, bet ir minkštieji įgūdžiai (CV kūrimas, Linkedin, darbo pokalbiai ir kt.) prisideda prie tavo karjeros sėkmės. Taip pat siūlome:\nstipendijas geriausiems studentams;\nkursų metų suteikiame Microsoft Office paketą;\nturime kursų kartojimo galimybę per pirmuosius metus po baigimo;\n2 savaites po kursų galite peržiūrėti paskaitų įrašus ir pasikartoti informaciją.'
            },
            {
                question: 'Ar kursai yra nemokami?',
                answer: 'Taip, pasinaudojus UŽT finansavimo galimybe, kursai yra nemokami.'
            },
            {
                question: 'Ar po kursų galima iš karto įsidarbinti?',
                answer: 'TaiTaip, pabaigus bet kuriuos FastTrack kursus, kartu su mūsų karjeros centru, tikriname atviras partnerių darbo pozicijas ir kartu ieškome galimybių įsidarbinti.'
            },
        ])

        let listItems = ref(Array(5))
        let hiddenContents = ref(Array(5))
        let clicked = ref(Array(5).fill(false))
        let hiddenContentMaxHeights = ref(Array(5).fill('0px'))
        

        const handleMouseClick = (index) => {
            clicked.value[index] = !clicked.value[index]
            const contentHeight = hiddenContents.value.children[index].children[1].scrollHeight
            hiddenContentMaxHeights.value[index] = hiddenContentMaxHeights.value[index] === '0px' ? `${contentHeight}px` : '0px'
        }

        return {
            handleMouseClick,
            hiddenContentMaxHeights,
            hiddenContents,
            questionsAnswers,
            listItems,
            clicked,
        }
    }
}
</script>

<style>
.dazniausiai-uzduodami-klausimai {
    margin-top: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.dazniausiai-uzduodami-klausimai > ul {
    margin-top: 100px;
    width: 70%;
    list-style: none;
}
.dazniausiai-uzduodami-klausimai > ul > li {
    display: block;
    flex-direction: column;
    border-bottom: 1px solid white;
    margin-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
}
.dazniausiai-uzduodami-klausimai > ul > li button {
    display: flex;
    justify-content: start;
    align-items: center;
    border: none;
    color: white;
    background-color: transparent;
    cursor: pointer;
    
}
.dazniausiai-uzduodami-klausimai > ul > li > button > div {
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
    
}
.dazniausiai-uzduodami-klausimai > ul > li > button > div > svg {
    width: 16px;
    height: 16px;
}
.dazniausiai-uzduodami-klausimai > ul > li > button > span {
    font-size: 1.6em;
    margin-left: 20px;
    transition: 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.dazniausiai-uzduodami-klausimai > ul > li:hover button > div {
    background-color: yellow;
    color: black;
}
.dazniausiai-uzduodami-klausimai > ul > li:hover span {
    color: yellow;
}
.dazniausiai-uzduodami-klausimai > ul > li > div {
    overflow: hidden;
    transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.dazniausiai-uzduodami-klausimai > ul > li > div > p {
    color: white;
    margin-top: 20px;
    margin-bottom: 32px;
}
</style>