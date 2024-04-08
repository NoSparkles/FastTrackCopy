<template>
    <div class="studentu-komentarai">
        <h1>MŪSŲ STUDENTAI KALBA APIE MUS</h1>
        <ul>
            <li v-for="(item, index) in komentarai">
                <p :data-index="index">{{ item.tekstas }}</p>
                <hr>
                <ul>
                    <li v-for="(star, starIndex) in Array(item.zvaigzdes)" :key="starIndex" :data-index="starIndex"><fa icon="star"></fa></li>
                </ul>
                <div>
                    <div>
                        <img :src="img3" alt="img">
                        <h3>{{ item.autorius }}</h3> 
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import img3 from '@/assets/homepage/img3.png'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'


export default {

    setup() {
        const komentarai = ref([
            {
                tekstas: 'Paskaitos pralenkė mano lūkesčius, išmokau žymiai daugiau nei tikėjausi. Labai patiko lektoriaus paskaitos Ačiū jums ir sekmės',
                autorius: 'Agnė J.',
                zvaigzdes: 5,
            },
            {
                tekstas: 'Kursai neprailgo, informacija perteikta aiškiai ir suprantamai. Tikrai daug išmokau, džiaugiuosi dalyvavęs programoje. Ačiū :)',
                autorius: 'Kasparas R.',
                zvaigzdes: 4,
            },
            {
                tekstas: 'Abu dėstytojai yra šaunūs, išmanantys savo darbą – labai patinka, liuks, profesionalai. Skaidrėse informacija sudėliota aiškiai, paprastai. Kadangi mokausi nuo pačių pagrindų, kiekvieną dieną yra pateikiama nauja informacija, kurią paskui mokomės naudoti praktiškai. Geriausi programavimo kursai!',
                autorius: 'Deimantė',
                zvaigzdes: 5,
            },
            {
                tekstas: 'Labai patiko kursai, daug visko sužinojau. Labai šilti ir gerai dirbantys savo darbus dėstytojai.',
                autorius: 'Natalija',
                zvaigzdes: 5,
            },
        ])


        onMounted(() => {
            const beforeEnterP = (el) => {
                el.style.opacity = 0
            }
        
            const enterP = (el) => {
                gsap.to(el, {
                opacity: 1,
                duration: 1
                })
            }

            const beforeEnterStar = (el) => {
                el.style.opacity = 0
            }
        
            const enterStar = (el) => {
                gsap.to(el, {
                opacity: 1,
                duration: 1,
                delay: 0.1 * el.dataset.index
                })
            }
            

            const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.8
            }
    
            const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                for (let i = 0; i < entry.target.children.length; i++) {
                    enterP(elements.children[i].children[0])
                    setTimeout(() => {
                        for (let j = 0; j < elements.children[i].children[2].children.length; j++) {
                        enterStar(elements.children[i].children[2].children[j]);
                    }
                    }, 500)
                }
                observer.unobserve(entry.target)
                }
            })
            }, options)
    
            const elements = document.querySelector('.studentu-komentarai > ul')
            for (let i = 0; i < elements.children.length; i++) {
                beforeEnterP(elements.children[i].children[0])
                for (let j = 0; j < elements.children[i].children[2].children.length; j++) {
                    beforeEnterStar(elements.children[i].children[2].children[j]);
                }
            }
            observer.observe(elements)

            
        })

        return {
            img3,
            komentarai
        }
    }
}
</script>

<style>
.studentu-komentarai {
    margin-top: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.studentu-komentarai > ul {
    display: flex;
    gap: 40px;
    justify-content: center;
    margin-top: 120px;
}

.studentu-komentarai > ul > li {
    display: flex;
    flex-direction: column;
    background-color: #222;
    padding: 32px 40px;
    border-radius: 10px;
    width: 20%;
}
.studentu-komentarai > ul > li > p {
    color: white;
    font-size: 1.2em;
    line-height: 1.2em;
}
.studentu-komentarai > ul > li > hr {
    margin-top: 60px;
    border: 1px solid #333;
}
.studentu-komentarai > ul > li > ul {
    list-style: none;
    display: flex;
    margin-top: 30px;
    gap: 2px;
}
.studentu-komentarai > ul > li > ul > li {
    color: rgb(250, 226, 118);
}
.studentu-komentarai > ul > li > ul > li > svg {
    height: 20px;
}
.studentu-komentarai > ul > li > div {
    display: flex;
    flex: 1;
    align-items: end;
    justify-content: start;
    margin-top: 40px;
}
.studentu-komentarai > ul > li > div > div {
    display: flex;
    align-items: center;
    flex: 1;
    gap: 20px;
    align-items: center;
    justify-content: start;
}
.studentu-komentarai > ul > li > div > div > img {
    width: 60px;
    height: 60px;
}
</style>