<template>
  <Navbar/>
  <div class="container">
    <router-view v-slot="{ Component }">
      <transition 
        appear
        name="fade"
        mode="out-in"
        >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import gsap from 'gsap';

export default {
  components: {
    Navbar,
  },
}

</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  margin-top: 100px;
}
i {
  width: 100px;
  height: 100px;
  color: white;
}
body{
  background-color: #111;
  color: #eee;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.fade-enter-active {
  transition: 0.5s ease;
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.fade-leave-active {
  transition: 0.5s ease;
}
</style>
