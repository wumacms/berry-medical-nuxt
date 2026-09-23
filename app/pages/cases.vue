<script setup lang="ts">
import PageHero from "~/components/common/PageHero.vue";
import SectionHeader from "~/components/common/SectionHeader.vue";
import StatsCard from "~/components/common/StatsCard.vue";
import CaseCard from "~/components/cases/CaseCard.vue";
import CtaBanner from "~/components/common/CtaBanner.vue";
import {
  caseList,
  caseStats,
  caseCategories,
  clientTypes,
  testimonials,
} from "~/data/cases";

const { setCanonical, SITE_URL } = useJsonLd();
setCanonical("/cases");

useSeoMeta({
  title: "业绩介绍 - 贝瑞医疗 · 30+项目实绩见证专业实力",
  description: "贝瑞医疗已为全国30余家医疗机构提供核医学场所建设实施服务，覆盖三甲医院、肿瘤专科医院及科研机构，用实绩说话。",
  ogTitle: "业绩介绍 - 贝瑞医疗 · 30+项目实绩见证专业实力",
  ogDescription: "已为全国30余家知名医疗机构提供核医学场所建设实施服务，涵盖多项高难度既有院区改造标杆工程。",
  ogImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1470&auto=format&fit=crop",
  ogUrl: `${SITE_URL}/cases`,
});

const activeCategory = ref("all");

const filteredCases = computed(() => {
  if (activeCategory.value === "all") {
    return caseList;
  }
  return caseList.filter((item) => item.category === activeCategory.value);
});
</script>

<template>
  <div>
    <!-- 首屏 Hero -->
    <PageHero tag="PERFORMANCE INTRODUCTION" tag-icon="fa-solid fa-briefcase" title="30+项目实绩" highlight="见证专业实力"
      description="贝瑞医疗已为全国30余家医疗机构提供核医学场所建设实施服务，覆盖三甲医院、肿瘤专科医院及科研机构。"
      image-url="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1470&auto=format&fit=crop"
      image-alt="核医学场所建设实景">
      <template #actions>
        <a href="#cases"
          class="bg-primary text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-primary/30 hover:bg-primary/90 transition flex items-center gap-2 text-sm">
          查看典型案例 <i class="fa-solid fa-arrow-down text-xs"></i>
        </a>
        <NuxtLink to="/contact"
          class="bg-white text-dark font-semibold px-7 py-3.5 rounded-full border border-gray-200 hover:border-primary/30 hover:text-primary transition flex items-center gap-2 text-sm">
          <i class="fa-regular fa-circle-question text-primary"></i> 咨询合作
        </NuxtLink>
      </template>
    </PageHero>

    <!-- 核心业绩数据 -->
    <section id="data" class="py-16 lg:py-20 bg-light scroll-mt-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard v-for="stat in caseStats" :key="stat.label" :icon="stat.icon" :number="stat.number"
            :label="stat.label" :desc="stat.desc" />
        </div>
      </div>
    </section>

    <!-- 典型案例展示 -->
    <section id="cases" class="py-20 lg:py-28 bg-white scroll-mt-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="典型案例" title="精选标杆项目成果展示" description="涵盖三甲医院核医学科新建、放射性药物制药净化场所、旧院有限空间改造等多类型标杆工程。" />

        <!-- 分类切换 Tabs -->
        <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <button v-for="cat in caseCategories" :key="cat.key" type="button"
            class="px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer" :class="[
              activeCategory === cat.key
                ? 'bg-primary text-white shadow-md shadow-primary/20 scale-105'
                : 'bg-light text-dark/70 hover:bg-gray-200'
            ]" @click="activeCategory = cat.key">
            {{ cat.label }}
          </button>
        </div>

        <!-- 案例卡片网格 -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CaseCard v-for="item in filteredCases" :key="item.id" :item="item" />
        </div>
      </div>
    </section>

    <!-- 服务客户类型 -->
    <section class="py-20 lg:py-28 bg-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="服务客户" title="覆盖多元医疗与科研机构" description="从三甲医院到专科医院，从科研院所到行业药企，为各类客户定制专属合规场所方案。" />

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="client in clientTypes" :key="client.title"
            class="bg-white rounded-3xl p-8 text-center shadow-xs border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div
              class="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-3xl mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <i :class="client.icon"></i>
            </div>
            <h3 class="text-lg font-bold text-dark mb-2">
              {{ client.title }}
            </h3>
            <p class="text-sm text-dark/50 leading-relaxed">
              {{ client.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 客户信赖评价 -->
    <section class="py-20 lg:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="客户评价" title="行业信赖之选" description="以严谨求实的作风和卓越的工程交付质量，赢得合作单位高度赞誉。" />

        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="(t, i) in testimonials" :key="i"
            class="bg-light rounded-3xl p-8 shadow-xs border border-gray-100 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-1 text-primary mb-4">
                <i v-for="star in 5" :key="star" class="fa-solid fa-star text-xs"></i>
              </div>
              <p class="text-dark/70 text-sm leading-relaxed italic mb-6">
                “{{ t.content }}”
              </p>
            </div>
            <div class="flex items-center gap-3 pt-4 border-t border-gray-200/50">
              <div
                class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                {{ t.avatar }}
              </div>
              <div>
                <p class="text-sm font-semibold text-dark">{{ t.name }}</p>
                <p class="text-xs text-dark/40">{{ t.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 底部行动呼吁 -->
    <CtaBanner title="了解与您医院类似的标杆项目经验" subtitle="联系贝瑞医疗，为您匹配专属医疗机构类型的前期调研案例与造价参考。" />
  </div>
</template>
