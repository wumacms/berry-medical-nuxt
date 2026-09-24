<script setup lang="ts">
import NewsCard from "~/components/news/NewsCard.vue";
import NewsSidebar from "~/components/news/NewsSidebar.vue";
import { newsList, newsCategories } from "~/data/news";

useSeoMeta({
  title: "新闻动态 - 贝瑞医疗 · 核医学场所建设前沿资讯",
  description: "了解贝瑞医疗最新签约动态、核医学场所建设行业资讯、技术干货分享与最新政策法规解读。",
});

const activeCategory = ref("all");
const currentPage = ref(1);

const filteredNews = computed(() => {
  if (activeCategory.value === "all") {
    return newsList;
  }
  return newsList.filter((item) => item.category === activeCategory.value);
});

const featuredNews = computed(() => {
  return filteredNews.value[0];
});

const remainingNews = computed(() => {
  return filteredNews.value.slice(1);
});
</script>

<template>
  <div>
    <!-- 首屏 Hero（背景图沉浸式） -->
    <section class="relative overflow-hidden bg-navy-dark">
      <img :src="withBase('/images/shielding_control_suite.jpg')" alt="新闻动态背景"
        class="absolute inset-0 w-full h-full object-cover opacity-35" loading="eager">
      <div class="absolute inset-0 bg-linear-to-r from-navy-dark via-navy-dark/90 to-navy-dark/70"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div class="max-w-3xl">
          <div
            class="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-xs text-white text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide border border-primary/30">
            <i class="fa-regular fa-newspaper text-[10px]"></i> NEWS & INSIGHTS
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mt-5">
            新闻与前沿洞察
          </h1>
          <p class="text-base text-white/80 leading-relaxed mt-4 max-w-xl">
            了解贝瑞医疗最新动态、核医学场所建设行业资讯与技术分享，掌握放射性药物与精准诊疗领域前沿趋势。
          </p>
          <div class="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-white/15 text-white/70 text-sm">
            <div class="flex items-center gap-2">
              <i class="fa-regular fa-clock text-primary"></i> 持续高频更新
            </div>
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-layer-group text-primary"></i> 4 大专业分类
            </div>
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-newspaper text-primary"></i> 行业政策深读
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 新闻分类导航 -->
    <section class="py-6 bg-light border-b border-gray-200/60 sticky top-20 z-40 backdrop-blur-md bg-light/95">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-center gap-2 sm:gap-3">
          <span class="text-xs font-semibold text-dark/50 tracking-wider mr-1">分类：</span>
          <button v-for="cat in newsCategories" :key="cat.key" type="button"
            class="text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer" :class="[
              activeCategory === cat.key
                ? 'bg-primary text-white shadow-xs'
                : 'bg-white text-dark/70 border border-gray-200 hover:border-primary/40 hover:text-primary'
            ]" @click="activeCategory = cat.key">
            {{ cat.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- 新闻列表与侧边栏主体 -->
    <section class="py-16 lg:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-14 items-start">
          <!-- 左侧：新闻列表 -->
          <div class="space-y-8">
            <!-- 头部置顶大卡片 -->
            <NewsCard v-if="featuredNews" :item="featuredNews" :featured="true" />

            <!-- 常规列表网格 -->
            <div class="grid sm:grid-cols-2 gap-6">
              <NewsCard v-for="item in remainingNews" :key="item.id" :item="item" />
            </div>

            <!-- 分页 -->
            <div class="flex items-center justify-center gap-2 pt-8">
              <button
                class="w-10 h-10 rounded-full bg-light border border-gray-200 flex items-center justify-center text-dark/50 hover:border-primary/40 hover:text-primary transition cursor-pointer"
                disabled>
                <i class="fa-solid fa-chevron-left text-xs"></i>
              </button>
              <button
                class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold shadow-md shadow-primary/20 cursor-pointer">
                1
              </button>
              <button
                class="w-10 h-10 rounded-full bg-light border border-gray-200 flex items-center justify-center text-sm font-medium text-dark/60 hover:border-primary/40 hover:text-primary transition cursor-pointer">
                2
              </button>
              <button
                class="w-10 h-10 rounded-full bg-light border border-gray-200 flex items-center justify-center text-dark/50 hover:border-primary/40 hover:text-primary transition cursor-pointer">
                <i class="fa-solid fa-chevron-right text-xs"></i>
              </button>
            </div>
          </div>

          <!-- 右侧：侧边栏 -->
          <NewsSidebar />
        </div>
      </div>
    </section>
  </div>
</template>
