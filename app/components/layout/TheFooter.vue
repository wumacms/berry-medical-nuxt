<script setup lang="ts">
import {
  companyContact,
  footerQuickLinks,
  footerServiceLinks,
} from "~/data/navigation";
</script>

<template>
  <footer class="bg-dark text-white/70 pt-16 pb-8 border-t border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
        <!-- 品牌列 -->
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
              <i class="fa-solid fa-radiation text-sm"></i>
            </div>
            <span class="text-white font-bold text-lg tracking-tight">贝瑞医疗</span>
          </div>
          <p class="text-sm leading-relaxed text-white/50">
            {{ companyContact.slogan }}
          </p>
          <div class="flex gap-3 pt-2">
            <NuxtLink
              to="/contact"
              class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition"
              title="微信咨询"
            >
              <i class="fa-brands fa-weixin text-sm"></i>
            </NuxtLink>
            <a
              :href="`mailto:${companyContact.email}`"
              class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition"
              title="发送邮件"
            >
              <i class="fa-regular fa-envelope text-sm"></i>
            </a>
            <NuxtLink
              to="/"
              class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition"
              title="官网首页"
            >
              <i class="fa-solid fa-globe text-sm"></i>
            </NuxtLink>
          </div>
        </div>

        <!-- 快速导航 -->
        <div>
          <h4 class="text-white font-semibold text-sm tracking-wider mb-5">快速导航</h4>
          <ul class="space-y-3 text-sm">
            <li v-for="item in footerQuickLinks" :key="item.path">
              <NuxtLink :to="item.path" class="hover:text-primary transition">
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- 服务支持 -->
        <div>
          <h4 class="text-white font-semibold text-sm tracking-wider mb-5">服务支持</h4>
          <ul class="space-y-3 text-sm">
            <li v-for="item in footerServiceLinks" :key="item.path">
              <NuxtLink :to="item.path" class="hover:text-primary transition">
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- 联系方式 -->
        <div>
          <h4 class="text-white font-semibold text-sm tracking-wider mb-5">联系我们</h4>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start gap-3">
              <i class="fa-solid fa-phone text-primary mt-0.5 text-xs"></i>
              <span>{{ companyContact.phone }} / {{ companyContact.phoneSecondary }}</span>
            </li>
            <li class="flex items-start gap-3">
              <i class="fa-regular fa-envelope text-primary mt-0.5 text-xs"></i>
              <span>{{ companyContact.email }}</span>
            </li>
            <li class="flex items-start gap-3">
              <i class="fa-solid fa-location-dot text-primary mt-0.5 text-xs"></i>
              <span>{{ companyContact.address }}</span>
            </li>
            <li class="flex items-start gap-3">
              <i class="fa-solid fa-globe text-primary mt-0.5 text-xs"></i>
              <span>{{ companyContact.website }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
        <p>© 2025 {{ companyContact.name }} · {{ companyContact.enName }} 保留所有权利。</p>
        <div class="flex gap-6">
          <NuxtLink to="/privacy" class="hover:text-primary transition">隐私政策</NuxtLink>
          <NuxtLink to="/privacy" class="hover:text-primary transition">服务条款</NuxtLink>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-primary transition"
          >
            {{ companyContact.icp }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
