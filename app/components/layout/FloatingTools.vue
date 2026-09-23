<script setup lang="ts">
import { useScroll } from "~/composables/useScroll";

const { showBackToTop, scrollToTop } = useScroll(300);
</script>

<template>
  <div class="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
    <!-- 在线咨询悬浮按钮 -->
    <NuxtLink
      to="/contact"
      class="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-dark/70 hover:text-primary hover:shadow-xl transition-all duration-300"
      title="在线咨询"
    >
      <i class="fa-regular fa-comment-dots text-lg"></i>
    </NuxtLink>

    <!-- 回到顶部按钮 -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4 scale-75"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-4 scale-75"
    >
      <button
        v-if="showBackToTop"
        class="w-12 h-12 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:bg-primary/90 hover:shadow-xl transition-all duration-300 focus:outline-none cursor-pointer"
        aria-label="回到顶部"
        @click="scrollToTop"
      >
        <i class="fa-solid fa-arrow-up text-lg"></i>
      </button>
    </transition>
  </div>
</template>
