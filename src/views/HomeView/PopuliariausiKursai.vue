<template>
    <div class="populiariausi-kursai">
        <h1>ŠIUO METU POPULIARIAUSI KURSAI</h1>
        <div class="boxes">
            <div class="box">
                <a href="#">
                    <div>
                        <h3>Galimas finansavimas</h3>
                        <h1>e-parduotuvių ir aplikacijų kursai be programavimo</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic animi perspiciatis, nesciunt reiciendis veniam itaque!</p>
                    </div>
                    <span>Plačiau</span>
                </a>
            </div>
            <div class="box">
                <a href="#">
                    <div>
                        <h3>Galimas finansavimas</h3>
                        <h1>e-parduotuvių ir aplikacijų kursai be programavimo</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic animi perspiciatis, nesciunt reiciendis veniam itaque!</p>
                    </div>
                    <span>Plačiau</span>
                </a>
            </div>
            <div class="box">
                <a href="#">
                    <div>
                        <h3>Galimas finansavimas</h3>
                        <h1>e-parduotuvių ir aplikacijų kursai be programavimo</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic animi perspiciatis, nesciunt reiciendis veniam itaque!</p>
                    </div>
                    <span>Plačiau</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.populiariausi-kursai{
    margin-top: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.populiariausi-kursai h1 {
    margin: auto;
}
.boxes {
    display: flex;
    margin-top: 200px;
    gap: 40px;
    justify-content: center;
}
.box {
    max-width: 300px;
}
.box a {
    text-decoration: none;
    color: white;
    position: relative;
}
.box a div {
    max-width: 300px;
    background-color: #222;
    padding: 40px 40px;
    border-radius: 8px;
    margin: auto;
    transition: 0.4s ease;

}
.box a > div h3 {
    color:rgb(81, 179, 146);
}
.box a > div h1 {
    margin-top: 80px;
    font-size: 1.6em;
}
.box a > div p {
    margin-top: 20px;
    line-height: 1.2em;
    font-size: 1.2em;
    color: #aaa;
}
.box a > span {
    background-color: yellow;
    color: black;
    position: absolute;
    width: 80%;
    bottom: 0;
    left: 50%;
    height: 15%;
    display: flex;
    align-items: end;
    border-radius: 8px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    justify-content: center;
    padding-bottom: 7.5%;
    font-size: 1.3em;
    z-index: -1;
    transform: translateX(-50%);
}
.box a:hover div {
    
    transform: translateY(-15%);
}
</style>