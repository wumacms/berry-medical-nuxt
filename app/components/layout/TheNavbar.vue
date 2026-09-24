<script setup lang="ts">
import { mainNav } from "~/data/navigation";
import AppLogo from "~/components/common/AppLogo.vue";

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
    class="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-xs z-50 border-b border-slate-100 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo 区块 -->
        <NuxtLink to="/" class="shrink-0 group">
          <AppLogo />
        </NuxtLink>

        <!-- 桌面导航菜单 (零抖动平滑指示器) -->
        <nav class="hidden md:flex items-center space-x-7 text-sm">
          <NuxtLink v-for="item in mainNav" :key="item.path" :to="item.path"
            class="relative py-2 font-medium transition-colors duration-200 group" :class="[
              route.path === item.path
                ? 'text-primary font-semibold'
                : 'text-slate-600 hover:text-primary'
            ]">
            {{ item.title }}
            <span v-if="route.path === item.path"
              class="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full transition-all duration-300" />
            <span v-else
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary/40 rounded-full group-hover:w-full transition-all duration-200" />
          </NuxtLink>
        </nav>

        <!-- 右侧：CTA 咨询 -->
        <div class="flex items-center gap-3">
          <NuxtLink to="/contact"
            class="hidden sm:inline-flex items-center gap-2 bg-linear-to-r from-primary to-[#F28C38] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200">
            <i class="fa-regular fa-comment-dots text-xs"></i> 咨询方案
          </NuxtLink>
          <!-- 移动端菜单按钮 -->
          <button class="md:hidden text-dark/70 text-2xl p-1 focus:outline-none" aria-label="打开菜单"
            @click="toggleMobileMenu">
            <i :class="mobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- 移动端下拉菜单 -->
    <transition enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform opacity-0 -translate-y-2" enter-to-class="transform opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in" leave-from-class="transform opacity-100 translate-y-0"
      leave-to-class="transform opacity-0 -translate-y-2">
      <nav v-if="mobileMenuOpen"
        class="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1 text-sm font-medium">
        <NuxtLink v-for="item in mainNav" :key="item.path" :to="item.path"
          class="block px-3 py-2.5 rounded-lg transition" :class="[
            route.path === item.path
              ? 'bg-light text-primary font-semibold'
              : 'text-dark/80 hover:bg-light hover:text-primary'
          ]" @click="closeMobileMenu">
          {{ item.title }}
        </NuxtLink>
        <NuxtLink to="/contact"
          class="block px-3 py-2.5 rounded-lg bg-primary text-white text-center font-semibold mt-2 shadow-sm"
          @click="closeMobileMenu">
          咨询方案
        </NuxtLink>
      </nav>
    </transition>
  </header>

  <!-- 占位防止内容被固定导航栏遮挡 -->
  <div class="h-20"></div>
</template>
