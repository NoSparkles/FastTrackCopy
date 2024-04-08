<template>
    <div class="studiju-kelias">
        <h1>TAVO STUDIJŲ KELIAS</h1>
        <ul>
            <li>
                <img :src="img5" alt="icon">
                <h2>1</h2>
                <p>Pasirink programą. Jei nerandi sau tinkamos, mūsų konsultantai tau padės!</p>
            </li>
            <li>
                <img :src="img5" alt="icon">
                <h2>2</h2>
                <p>Pasirašyk sutartį ir aptark ją su konsultantu</p>
            </li>
            <li>
                <img :src="img5" alt="icon">
                <h2>3</h2>
                <p>Prieš kursus gausi visą prisijungimų informaciją bei dovanų nuo FastTrack (Office licenciją kursams)</p>
            </li>
            <li>
                <img :src="img5" alt="icon">
                <h2>4</h2>
                <p>Atlik asmenybės testą: tai tau padės sužinoti tavo minkštąsias kompetencijas ir stipriąsias puses</p>
            </li>
            <li>
                <img :src="img5" alt="icon">
                <h2>5</h2>
                <p>Pasirink programą. Jei nerandi sau tinkamos, mūsų konsultantai tau padės!</p>
            </li>
            <li>
                <img :src="img5" alt="icon">
                <h2>6</h2>
                <p>Pasirašyk sutartį ir aptark ją su konsultantu</p>
            </li>
            <li>
                <img :src="img5" alt="icon">
                <h2>7</h2>
                <p>Prieš kursus gausi visą prisijungimų informaciją bei dovanų nuo FastTrack (Office licenciją kursams)</p>
            </li>
            <li>
                <img :src="img5" alt="icon">
                <h2>8</h2>
                <p>Atlik asmenybės testą: tai tau padės sužinoti tavo minkštąsias kompetencijas ir stipriąsias puses</p>
            </li>
        </ul>
    </div>
</template>

<script>
import img5 from '@/assets/homepage/img5.png'

export default {
    setup() {

        

        return {img5}
    }
}
</script>

<style>
.studiju-kelias {
    margin-top: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.studiju-kelias ul {
    display: flex;
    margin-top: 200px;
    width: 80%;
    flex-wrap: wrap;
}
.studiju-kelias ul li {
    width: 25%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.studiju-kelias ul li img {
    width: 40px;
}
.studiju-kelias ul li h2 {
    margin-top: 20px;
    font-size: 1.2em;
}
.studiju-kelias ul li p {
    font-size: 1em;
    max-width: 80%;
    text-align: center;
}
</style>