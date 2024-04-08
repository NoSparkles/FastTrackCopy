<template>
    <div class="kursai">
      <Transition name="leftdiv" appear>
        <div class="left">
          <h1>(NE)PROGRAMAVIMO KURSAI PRADEDANTIEMS IR PAŽENGUSIEMS</h1>
          <p>FastTrack tau siūlo karjerą pradėti greičiau. Ženk žingsnį link naujų iššūkių ir įvairiapusiško tobulėjimo jau dabar!</p>
          <a><span class="text1">Programos</span><span class="text2">Programos</span></a>
        </div>
      </Transition>
      
      <div class="right">
        <Transition name="leftimg" appear>
          <img class="img1" :src="kursaiImg1" alt="nera img1">
        </Transition>
        <Transition name="rightimg" appear>
          <img class="img2" :src="kursaiImg2" alt="nera img2">
        </Transition>
        
      </div>
    </div>
  </template>
  
  <script>
  import kursaiImg1 from '@/assets/homepage/img1.jpg'
  import kursaiImg2 from '@/assets/homepage/img2.jpg'
  
  export default {
    setup() {
    
      return {
        kursaiImg1: kursaiImg1,
        kursaiImg2: kursaiImg2
      }
    }
    
  }
  </script>

<style scoped>
.kursai{
    width: 100%;
    height: 100vh;
    display: flex;
    margin-top: -100px;
}
.kursai > div{
    width: 50%;
}
.kursai .left {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding-right: 100px;
    padding-left: 10%;
}
.kursai .left a {
    margin-top: 40px;
    cursor: pointer;
    position: relative;
    border: 2px solid white;
    width: 160px;
    height: 60px;
    border-radius: 100px;
    font-size: 1.1em;
}

.kursai .left a .text1 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
    transition: 0.2s linear;
}

.kursai .left a .text2 {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    opacity: 0;
    transition: 0.2s linear;
}

.kursai .left a:hover .text1 {
    transform: translate(-50%, -150%);
    opacity: 0;
}

.kursai .left a:hover .text2 {
    transform: translateX(-50%) translateY(-100%);
    opacity: 1;
}

.kursai .right {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.kursai .right .img2 {
    margin-left: 40px;
    margin-top: 160px;
}
.kursai .right img {
  max-height: 500px;
}



.leftdiv-enter-from {
  opacity: 0;
  transform: translateY(100px);
}
.leftdiv-enter-active {
  transition: 1s ease;
}

.leftimg-enter-from {
  opacity: 0;
  transform: translateY(-100px);
}
.leftimg-enter-top {
  opacity: 1;
  transform: translateY(100px);
}
.leftimg-enter-active {
  transition: 1s ease;
  transition-delay: 0.3s;
}
.rightimg-enter-from {
  opacity: 0;
  transform: translateY(100px);
}
.rightimg-enter-active {
  transition: 1s ease;
  transition-delay: 0.3s;
}
</style>
  