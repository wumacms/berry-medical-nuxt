<script setup lang="ts">
import SectionHeader from "~/components/common/SectionHeader.vue";
import StatsCard from "~/components/common/StatsCard.vue";
import CtaBanner from "~/components/common/CtaBanner.vue";
import CaseCard from "~/components/cases/CaseCard.vue";
import NewsCard from "~/components/news/NewsCard.vue";
import { caseList, caseStats } from "~/data/cases";
import { newsList } from "~/data/news";
import { coreAdvantages } from "~/data/advantages";

const { setOrganizationSchema, setCanonical, SITE_URL } = useJsonLd();
setOrganizationSchema();
setCanonical("/");

useSeoMeta({
  title: "贝瑞医疗 · 核医学场所建设一站式服务",
  description: "从选址规划、设计施工到环评验收、设备供应及7×24小时运维，贝瑞医疗为您提供核医学场所建设全生命周期闭环解决方案。",
  ogTitle: "贝瑞医疗 · 核医学场所建设一站式服务",
  ogDescription: "专注核医学场所建设全生命周期闭环解决方案，从选址规划、设计施工到环评验收与运维保障。",
  ogImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1470&auto=format&fit=crop",
  ogUrl: `${SITE_URL}/`,
  twitterTitle: "贝瑞医疗 · 核医学场所建设一站式服务",
  twitterDescription: "专注核医学场所建设全生命周期闭环解决方案。",
});

const featuredCases = computed(() => caseList.slice(0, 3));
const latestNews = computed(() => newsList.slice(0, 3));
</script>

<template>
  <div>
    <!-- ========= 首屏区块 Hero Section ========= -->
    <section class="bg-linear-to-br from-white via-light to-white overflow-hidden border-b border-gray-100/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- 左侧文字 -->
          <div class="space-y-7">
            <div
              class="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide">
              <i class="fa-solid fa-circle-check text-[10px]"></i> 核医学场所建设一站式服务
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-[1.15] tracking-tight">
              专注核医学<br>
              <span class="text-primary">场所建设</span>一站式服务
            </h1>
            <p class="text-base text-dark/60 leading-relaxed max-w-lg">
              从选址规划、设计施工到环评验收、设备供应及7×24小时运维，贝瑞医疗为您提供核医学场所建设全生命周期闭环解决方案。
            </p>
            <div class="flex flex-wrap items-center gap-4 pt-2">
              <NuxtLink to="/contact"
                class="bg-primary text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-primary/30 hover:bg-primary/90 transition flex items-center gap-2 text-sm">
                咨询合作方案 <i class="fa-solid fa-arrow-right text-xs"></i>
              </NuxtLink>
              <NuxtLink to="/services"
                class="bg-white text-dark font-semibold px-7 py-3.5 rounded-full border border-gray-200 hover:border-primary/30 hover:text-primary transition flex items-center gap-2 text-sm">
                <i class="fa-solid fa-layer-group text-primary"></i> 了解业务范围
              </NuxtLink>
            </div>
          </div>

          <!-- 右侧主视觉 -->
          <div
            class="rounded-3xl overflow-hidden shadow-2xl shadow-dark/10 bg-light aspect-4/3 flex items-center justify-center border border-gray-100">
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1470&auto=format&fit=crop"
              alt="核医学场所建设" class="w-full h-full object-cover hover:scale-102 transition duration-700" loading="eager">
          </div>
        </div>
      </div>
    </section>

    <!-- ========= 核心业绩数据 Stats Section ========= -->
    <section class="py-16 lg:py-20 bg-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard v-for="stat in caseStats" :key="stat.label" :icon="stat.icon" :number="stat.number"
            :label="stat.label" :desc="stat.desc" />
        </div>
      </div>
    </section>

    <!-- ========= 服务内容总览 Services Section ========= -->
    <section class="py-20 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="服务总览" title="三大专业篇章 · 全流程覆盖" description="设计、施工、设备三大篇章，构建核医学场所建设完整服务体系。" />

        <div class="grid md:grid-cols-3 gap-6">
          <!-- 设计篇 -->
          <NuxtLink to="/services#design"
            class="bg-light rounded-3xl p-8 hover:shadow-xl transition duration-300 border border-transparent hover:border-primary/20 group flex flex-col justify-between">
            <div>
              <div
                class="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-3xl mb-6 group-hover:bg-primary group-hover:text-white transition duration-300">
                <i class="fa-solid fa-drafting-compass"></i>
              </div>
              <span class="text-xs font-bold text-primary tracking-wider">01 DESIGN</span>
              <h3 class="text-2xl font-bold text-dark mt-2 mb-3">设计篇</h3>
              <p class="text-sm text-dark/50 leading-relaxed mb-6">
                选址、方案及专项施工图设计，融合功能优化、成本控制与美学设计。
              </p>
            </div>
            <span class="text-primary text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
              了解详情 <i class="fa-solid fa-arrow-right text-xs"></i>
            </span>
          </NuxtLink>

          <!-- 施工篇 -->
          <NuxtLink to="/services#construction"
            class="bg-light rounded-3xl p-8 hover:shadow-xl transition duration-300 border border-transparent hover:border-primary/20 group flex flex-col justify-between">
            <div>
              <div
                class="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-3xl mb-6 group-hover:bg-primary group-hover:text-white transition duration-300">
                <i class="fa-solid fa-helmet-safety"></i>
              </div>
              <span class="text-xs font-bold text-primary tracking-wider">02 CONSTRUCTION</span>
              <h3 class="text-2xl font-bold text-dark mt-2 mb-3">施工篇</h3>
              <p class="text-sm text-dark/50 leading-relaxed mb-6">
                辐射防护施工、放射性废水处理系统，满足环保、卫生及药监验收要求。
              </p>
            </div>
            <span class="text-primary text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
              了解详情 <i class="fa-solid fa-arrow-right text-xs"></i>
            </span>
          </NuxtLink>

          <!-- 设备篇 -->
          <NuxtLink to="/services#equipment"
            class="bg-light rounded-3xl p-8 hover:shadow-xl transition duration-300 border border-transparent hover:border-primary/20 group flex flex-col justify-between">
            <div>
              <div
                class="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-3xl mb-6 group-hover:bg-primary group-hover:text-white transition duration-300">
                <i class="fa-solid fa-microchip"></i>
              </div>
              <span class="text-xs font-bold text-primary tracking-wider">03 EQUIPMENT</span>
              <h3 class="text-2xl font-bold text-dark mt-2 mb-3">设备篇</h3>
              <p class="text-sm text-dark/50 leading-relaxed mb-6">
                活度测量、防护手套箱、合成热室、个人剂量仪等专业设备供应。
              </p>
            </div>
            <span class="text-primary text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
              了解详情 <i class="fa-solid fa-arrow-right text-xs"></i>
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ========= 核心优势 Features Section ========= -->
    <section class="py-20 lg:py-24 bg-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="专业优势" title="为什么选择贝瑞医疗" description="从行业标准制定到数字孪生赋能，打造核医学场所建设核心壁垒。" />

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(adv, index) in coreAdvantages" :key="index"
            class="bg-white rounded-3xl p-8 hover:shadow-xl transition duration-300 border border-gray-100 group">
            <div
              class="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition duration-300">
              <i :class="adv.icon"></i>
            </div>
            <h3 class="text-xl font-bold text-dark mb-3">
              {{ adv.title }}
            </h3>
            <p class="text-sm text-dark/50 leading-relaxed">
              {{ adv.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========= 典型业绩案例 Case Studies ========= -->
    <section class="py-20 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader tag="实绩见证" title="典型案例展示" description="已为全国30+医疗机构提供核医学场所建设服务，覆盖三甲医院及专科机构。" align="left"
            class="mb-0!" />
          <NuxtLink to="/cases"
            class="mt-4 md:mt-0 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm shrink-0">
            查看全部案例 <i class="fa-solid fa-arrow-right text-xs"></i>
          </NuxtLink>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <CaseCard v-for="item in featuredCases" :key="item.id" :item="item" />
        </div>
      </div>
    </section>

    <!-- ========= 最新动态 News Section ========= -->
    <section class="py-20 lg:py-24 bg-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader tag="资讯前沿" title="新闻与行业资讯" description="了解贝瑞医疗最新动态、核医学场所建设行业资讯与技术分享。" align="left"
            class="mb-0!" />
          <NuxtLink to="/news"
            class="mt-4 md:mt-0 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm shrink-0">
            查看全部资讯 <i class="fa-solid fa-arrow-right text-xs"></i>
          </NuxtLink>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <NewsCard v-for="item in latestNews" :key="item.id" :item="item" />
        </div>
      </div>
    </section>

    <!-- ========= 底部 CTA 呼吁 ========= -->
    <CtaBanner />
  </div>
</template>
