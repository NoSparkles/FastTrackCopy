<template>
    <div class="isidarbinimo-galimybes" ref="galimybesContainer">
      <h1>ĮSIDARBINIMO GALIMYBĖS</h1>
      <ul>
        <li v-for="(item, index) in galimybes" :key="index" :data-index="index">{{ item }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import gsap from 'gsap'
  require('intersection-observer')
  
  export default {
    setup() {
      const galimybes = ref([
        'WIX',
        'unity',
        'tesonet',
        'TeleSoftas',
        'Nord security',
        'Kilo.Health',
        '!MPACT BRANDS',
        'httpool',
        'BitDegree',
        'baltic amadeus'
      ])
  
      const beforeEnter = (el) => {
        el.style.opacity = 0
        el.style.transform = 'translateY(100px)'
      }
  
      const enter = (el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.05 * el.dataset.index
        })
      }
  
      onMounted(() => {
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.8
        }
  
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              for (let i = 0; i < entry.target.children.length; i++) {
                enter(elements.children[i])
              }
              observer.unobserve(entry.target)
            }
          })
        }, options)
  
        const elements = document.querySelector('.isidarbinimo-galimybes ul')
        for (let i = 0; i < elements.children.length; i++) {
            beforeEnter(elements.children[i])
        }
        observer.observe(elements)
      })
  
      return { galimybes, beforeEnter, enter }
    }
  }
  </script>
  
  <style>
  .isidarbinimo-galimybes {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 300px;
  }
  .isidarbinimo-galimybes h1 {
    margin: auto;
  }
  .isidarbinimo-galimybes ul {
    margin: auto;
    margin-top: 50px;
    width: 80vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .isidarbinimo-galimybes ul li {
    margin-top: 100px;
    font-size: 2.4em;
    list-style: none;
    font-weight: bold;
    white-space: normal; /* Changed from text-wrap to white-space */
    text-align: center;
    width: 20%;
  }
  </style>
  