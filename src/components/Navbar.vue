<template>
    <nav>
        <router-link to="/"><img src="../assets/mainlogo.png" alt=""></router-link>
        <ul class="nav-links">
            <li class="link">
                <router-link to="/">Pagrindinis</router-link>
            </li>
            <li class="link">
                <router-link to="/about">Apie mus</router-link>
            </li>
            <li class="dropdown link">
                <router-link to="/it-programos">IT Programos ▼</router-link>
                <div>
                    <router-link to="/">E-parduotuvės ir aplikacijos be programavimo (Shopify, Bubble.io, SEO, UX/UI)</router-link>
                    <router-link to="/">DI ir Web dizainas</router-link>
                    <router-link to="/">Fullstack Python</router-link>
                </div>
            </li>
            <li class="link dropdown">
                <router-link to="/igudziu-kursai">Įgudžių kursai ▼</router-link>
                <div>
                    <router-link to="/">Produktyvumo mokymai su AI įrankiais</router-link>
                    <router-link to="/">Cyber security mokymai</router-link>
                    <router-link to="/">Excel mokymai pradedantiesiems</router-link>
                    <router-link to="/">Excel mokymai pažengusiems</router-link>
                    <router-link to="/">Duomenų apdorojimo mokymai (Qlik sense)</router-link>
                    <router-link to="/">Shopify mokymai</router-link>
                    <router-link to="/">Web aplikacijų kūrimo mokymai (Bubble.io)</router-link>
                </div>
            </li>
            <li class="link dropdown">
                <router-link to="/kalbu-kursai">Kalbų kursai ▼</router-link>
                <div>
                    <router-link to="/">Lithuanian language courses</router-link>
                    <router-link to="/">Курсы литовского языка</router-link>
                </div>
              

            </li>
            <li class="link">
                <router-link to="/finansavimas">Finansavimas</router-link>
            </li>
            <li class="link">
                <router-link to="/kontaktai">Kontaktai</router-link>
            </li>
        </ul>
        <div class="skambinti-link">

                <button ref="callBtn" @mouseenter="enter">Skambinti</button>
          
            
        </div>
       
    </nav>
</template>

<script>
import mainlogo from '../assets/mainlogo.png'
import gsap from 'gsap/gsap-core'
import { ref } from 'vue'

export default {
    setup() {
        const callBtn = ref(null)
        const enter = () => {
            console.log(callBtn.value)
            gsap.to(callBtn.value, {
                keyframes: [
                    {translateX: 100},
                    {translateX: -100},
                    {translateX: 50},
                    {translateX: -50},
                    {translateX: 0},
                ],
                duration: 0.3,
            })
        }

        return {
            callBtn,
            enter,
            mainlogo
        }
    }
}


</script>


<style scoped>
nav {
    position: fixed;
    background-color: #111;
    z-index: 999;
    height: 80px;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: auto;
}
nav img {
    flex: 1;
    max-width: 200px;
    justify-self: center;
    margin-left: 40px;
}
nav .nav-links {
    flex: 5;
    height: fit-content;
    display: flex;
    justify-content: start;
    gap: 20px;
}

nav .nav-links > li {
    display: inline-block;
    position: relative;
    left: 40px;
    display: flex;
    height: 100%;
    gap: 20px;
    align-items: center;
}
nav .nav-links > li a {
    text-decoration: none;
    color: white;
    height: fit-content;
    position: relative;
}
nav .nav-links li > a::after {
    content: "";
    width: 0;
    z-index: 0;
    position: absolute;
    height: 2px;
    left: 50%;
    transform: translateX(-50%); 
    bottom: 10px;
    opacity: 0;
    margin: auto;
    background-color: white;
    transition: 0.3s ease;
}
nav .nav-links > li > a:hover::after {
    width: 100%;
    opacity: 1;
    bottom: -4px;
}
nav .nav-links li .dropdown {
    position: relative;
}
nav .nav-links .dropdown > div {
    opacity: 0;
    position: absolute;
    padding-top: 10px;
    pointer-events: none;
    flex-direction: column;
    align-items: start;
    min-width: 400px;
    bottom: 0;
    transform: translateY(100%);
    left: 0;
    font-size: 0.8em;
    text-align: left;
    height: fit-content;
    color: black;
    transition: 0.4s ease;
}
nav .nav-links .dropdown div > a {
    padding: 8px 16px;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 1.2em;
    width: 100%;

    background-color: rgb(196, 233, 109);
    color: #444;
    transition: 0.4s ease;
}
nav .nav-links li a:hover > div,
nav .nav-links .dropdown:hover > div{
    pointer-events: auto;
    opacity: 1;
}
nav .nav-links .dropdown div > a:hover {
    background-color: #222;
    color: white;
}
nav .skambinti-link {
    display: flex;
    flex: 1;
    justify-content: center;
}
nav .skambinti-link button {
    width: 120px;
    height: 40px;
    font-weight: bold;
    background-color: black;
    color: white;
    border: 2px solid #444;
    cursor: pointer;
    border-radius: 100px;
    transition: 0.3s ease;
}
nav .skambinti-link button:hover {
    border-color: white;
}
nav .nav-links > li > a.router-link-exact-active::after {
    width: 100%;
    opacity: 1;
    bottom: -4px;
}
</style>