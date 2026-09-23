<script setup lang="ts">
import { mainNav } from "~/data/navigation";

const route = useRoute();
const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

// Route change automatically closes mobile drawer
watch(() => route.path, () => {
  closeMobileMenu();
});
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-xs z-50 border-b border-gray-100 transition-all duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo 区块 -->
        <NuxtLink to="/" class="flex items-center gap-2 shrink-0 group">
          <div
            class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform"
          >
            <i class="fa-solid fa-radiation text-lg"></i>
          </div>
          <div class="leading-tight">
            <span class="block text-lg font-bold tracking-tight text-dark">贝瑞医疗</span>
            <span class="block text-[10px] text-gray-400 tracking-wider">BERRY MEDICAL</span>
          </div>
        </NuxtLink>

        <!-- 桌面导航菜单 -->
        <nav class="hidden md:flex items-center space-x-7 text-sm font-medium">
          <NuxtLink
            v-for="item in mainNav"
            :key="item.path"
            :to="item.path"
            class="transition duration-200"
            :class="[
              route.path === item.path
                ? 'text-primary font-semibold border-b-2 border-primary pb-1'
                : 'text-dark/80 hover:text-primary'
            ]"
          >
            {{ item.title }}
          </NuxtLink>
        </nav>

        <!-- 右侧：搜索/CTA 等 -->
        <div class="flex items-center gap-3">
          <NuxtLink
            to="/contact"
            class="hidden sm:inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md shadow-primary/20 hover:bg-primary/90 transition"
          >
            <i class="fa-regular fa-comment-dots"></i> 咨询方案
          </NuxtLink>
          <!-- 移动端菜单按钮 -->
          <button
            class="md:hidden text-dark/70 text-2xl p-1 focus:outline-none"
            aria-label="打开菜单"
            @click="toggleMobileMenu"
          >
            <i :class="mobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- 移动端下拉菜单 -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform opacity-0 -translate-y-2"
      enter-to-class="transform opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform opacity-100 translate-y-0"
      leave-to-class="transform opacity-0 -translate-y-2"
    >
      <nav
        v-if="mobileMenuOpen"
        class="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1 text-sm font-medium"
      >
        <NuxtLink
          v-for="item in mainNav"
          :key="item.path"
          :to="item.path"
          class="block px-3 py-2.5 rounded-lg transition"
          :class="[
            route.path === item.path
              ? 'bg-light text-primary font-semibold'
              : 'text-dark/80 hover:bg-light hover:text-primary'
          ]"
          @click="closeMobileMenu"
        >
          {{ item.title }}
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="block px-3 py-2.5 rounded-lg bg-primary text-white text-center font-semibold mt-2 shadow-sm"
          @click="closeMobileMenu"
        >
          咨询方案
        </NuxtLink>
      </nav>
    </transition>
  </header>

  <!-- 占位防止内容被固定导航栏遮挡 -->
  <div class="h-20"></div>
</template>
