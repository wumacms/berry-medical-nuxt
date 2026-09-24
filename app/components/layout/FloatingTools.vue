<script setup lang="ts">
import { useScroll } from "~/composables/useScroll";

const { showBackToTop, scrollToTop } = useScroll(300);
</script>

<template>
  <div class="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
    <!-- 在线咨询悬浮按钮 -->
    <NuxtLink to="/contact"
      class="w-12 h-12 rounded-full bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/10 border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-primary hover:border-primary/40 hover:shadow-xl hover:shadow-primary/15 hover:-translate-y-0.5 transition-all duration-300 group"
      title="在线咨询">
      <i class="fa-regular fa-comment-dots text-lg group-hover:scale-110 transition-transform"></i>
    </NuxtLink>

    <!-- 回到顶部按钮 -->
    <transition enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4 scale-75" enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-200 ease-in" leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-4 scale-75">
      <button v-if="showBackToTop"
        class="w-12 h-12 rounded-full bg-linear-to-br from-primary to-[#F28C38] text-white shadow-lg shadow-primary/30 flex items-center justify-center hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 focus:outline-hidden cursor-pointer"
        aria-label="回到顶部" @click="scrollToTop">
        <i class="fa-solid fa-arrow-up text-base"></i>
      </button>
    </transition>
  </div>
</template>
