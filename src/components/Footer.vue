<template>
    <div class="footer">
        <div class="pop-kursai">
            <h3>Populiariausi kursai</h3>
            <ul>
                <li><router-link to="about/">DI ir Web dizainas</router-link></li>
                <li><router-link to="about/">E-parduotuvės ir aplikacijos be programavimo (Shopify, Bubble.io, SEO, UX/UI)</router-link></li>
                <li><router-link to="about/">Full-stack ir Python su DI įrankių pritaikymu</router-link></li>
            </ul>
        </div>
        <div class="meniu">
            <h3>Meniu</h3>
            <ul>
                <li><router-link to="about/">Apie mus</router-link></li>
                <li><router-link to="about/">Finansavimas</router-link></li>
                <li><router-link to="about/">Programos</router-link></li>
                <li><router-link to="about/">Privatumo politika</router-link></li>
                <li><router-link to="about/">Kontaktai</router-link></li>
            </ul>
        </div>
        <div class="placiau-apie-mus">
            <h3>Plačiau apie mus</h3>
            <div class="icons">
                <fa icon="home"></fa>
                <fa icon="user"></fa>
            </div>
            
        </div>
    </div>
</template>

<script>

export default {
    setup() {
        
        return {
           
        }
    }
}


</script>


<style>
.footer {
    display: flex;
    justify-content: center;
    gap: 100px;
    margin-top: 300px;
    margin-bottom: 100px;
}
.pop-kursai > h3 {
    font-size: 1em;
}
.pop-kursai > ul {
    list-style-type: none;
    margin-top: 20px;
}
.pop-kursai > ul > li {
    height: fit-content;
    display: flex;
    align-items: center;
    max-width: 600px;
}
.pop-kursai > ul > li > a {
    width: 100%;
    text-decoration: none;
    color: white;
    font-size: 1.8em;
    border-top: 2px solid white;
    padding: 20px 0;
    transition: 0.6s ease;
}
.pop-kursai > ul > li > a:hover {
    color: yellow;
    border-color: yellow;
}
.meniu > h3 {
    font-size: 1em;
}
.meniu > ul {
    list-style-type: none;
    margin-top: 20px;
}
.meniu > ul > li {
    height: fit-content;
    display: flex;
    align-items: center;
    margin-top: 20px;
}
.meniu > ul > li > a {
    text-decoration: none;
    color: white;
    font-size: 1.2em;
    widtH: 100%;
    position: relative;
}
.meniu > ul > li > a:after {
    content: "";
    width: 100%;
    z-index: 0;
    position: absolute;
    height: 2px;
    left: 50%;
    transform: translateX(-50%); 
    bottom: 90%;
    opacity: 0;
    margin: auto;
    background-color: yellow;
    transition: 0.3s ease;
}
.meniu > ul > li > a:hover::after {
    opacity: 1;
    bottom: -4px;
}

.placiau-apie-mus > h3{
    font-size: 1em;
}

.placiau-apie-mus > .icons {
    margin-top: 10px;
    display: flex;
    gap: 10px;
}
.placiau-apie-mus > .icons > svg {
    color: white;
    cursor: pointer;
    height: 20px;
    transition: 0.8s ease;
}
.placiau-apie-mus > .icons > svg:hover {
    color: yellow;
}
</style>