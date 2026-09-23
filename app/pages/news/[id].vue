<script setup lang="ts">
import NewsSidebar from "~/components/news/NewsSidebar.vue";
import { newsList } from "~/data/news";

const route = useRoute();
const articleId = computed(() => Number(route.params.id) || 1);

const currentArticle = computed(() => {
  return newsList.find((item) => item.id === articleId.value) ?? newsList[0]!;
});

// 上一篇 / 下一篇
const prevArticle = computed(() => {
  if (!currentArticle.value) return null;
  const idx = newsList.findIndex((item) => item.id === currentArticle.value.id);
  return idx > 0 ? (newsList[idx - 1] ?? null) : null;
});

const nextArticle = computed(() => {
  if (!currentArticle.value) return null;
  const idx = newsList.findIndex((item) => item.id === currentArticle.value.id);
  return idx >= 0 && idx < newsList.length - 1 ? (newsList[idx + 1] ?? null) : null;
});

useSeoMeta({
  title: () => `${currentArticle.value?.title ?? ""} - 贝瑞医疗新闻动态`,
  description: () => currentArticle.value?.summary,
  ogTitle: () => currentArticle.value?.title,
  ogDescription: () => currentArticle.value?.summary,
  ogImage: () => currentArticle.value?.imageUrl,
});
</script>

<template>
  <div>
    <!-- 首屏 / 文章标题区块 -->
    <section class="relative overflow-hidden bg-dark text-white">
      <img :src="currentArticle.imageUrl" alt="背景图" class="absolute inset-0 w-full h-full object-cover opacity-50">
      <div class="absolute inset-0 bg-black/30"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <!-- 返回链接 -->
        <NuxtLink to="/news"
          class="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition">
          <i class="fa-solid fa-arrow-left text-xs"></i> 返回新闻列表
        </NuxtLink>

        <!-- 分类与日期 -->
        <div class="flex flex-wrap items-center gap-3 mb-4">
          <span class="text-xs font-semibold text-white bg-primary px-3 py-1 rounded-full shadow-sm">
            {{ currentArticle.categoryLabel }}
          </span>
          <span class="text-xs text-white/70">
            <i class="fa-regular fa-calendar mr-1"></i>{{ currentArticle.date }}
          </span>
          <span class="text-xs text-white/70">
            <i class="fa-regular fa-clock mr-1"></i>阅读约 5 分钟
          </span>
        </div>

        <!-- 标题 -->
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
          {{ currentArticle.title }}
        </h1>

        <!-- 作者信息 -->
        <div class="flex items-center gap-3 mt-6 pt-6 border-t border-white/15">
          <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
            贝
          </div>
          <div>
            <p class="text-sm font-semibold text-white">
              {{ currentArticle.author || "贝瑞医疗编辑部" }}
            </p>
            <p class="text-xs text-white/60">企业官方发布 · 原创专稿</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 文章正文与侧边栏主体 -->
    <section class="py-16 lg:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-14 items-start">
          <!-- 左侧：文章正文 -->
          <article class="space-y-8">
            <!-- 文章摘要 -->
            <div class="bg-light rounded-2xl p-6 border-l-4 border-primary">
              <p class="text-sm text-dark/70 leading-relaxed italic">
                {{ currentArticle.summary }}
              </p>
            </div>

            <!-- 正文 HTML -->
            <div class="prose prose-sm sm:prose-base max-w-none text-dark/75 leading-relaxed space-y-5"
              v-html="currentArticle.content"></div>

            <!-- 标签 -->
            <div v-if="currentArticle.tags" class="flex flex-wrap items-center gap-2 pt-6 border-t border-gray-100">
              <span class="text-xs font-semibold text-dark/40 mr-2">文章标签：</span>
              <span v-for="tag in currentArticle.tags" :key="tag"
                class="bg-light text-dark/70 text-xs px-3 py-1.5 rounded-full border border-gray-200">
                {{ tag }}
              </span>
            </div>

            <!-- 上下一篇导航 -->
            <div class="grid sm:grid-cols-2 gap-4 pt-8 border-t border-gray-100">
              <NuxtLink v-if="prevArticle" :to="`/news/${prevArticle.id}`"
                class="p-4 rounded-2xl bg-light hover:bg-gray-100 transition group border border-gray-100">
                <span class="text-xs text-dark/40 block mb-1">
                  <i class="fa-solid fa-arrow-left mr-1"></i> 上一篇
                </span>
                <p class="text-sm font-semibold text-dark group-hover:text-primary transition line-clamp-1">
                  {{ prevArticle.title }}
                </p>
              </NuxtLink>
              <div v-else
                class="p-4 rounded-2xl bg-light/50 border border-gray-100/50 text-xs text-dark/30 flex items-center">
                已经是第一篇了
              </div>

              <NuxtLink v-if="nextArticle" :to="`/news/${nextArticle.id}`"
                class="p-4 rounded-2xl bg-light hover:bg-gray-100 transition group border border-gray-100 text-right">
                <span class="text-xs text-dark/40 block mb-1">
                  下一篇 <i class="fa-solid fa-arrow-right ml-1"></i>
                </span>
                <p class="text-sm font-semibold text-dark group-hover:text-primary transition line-clamp-1">
                  {{ nextArticle.title }}
                </p>
              </NuxtLink>
              <div v-else
                class="p-4 rounded-2xl bg-light/50 border border-gray-100/50 text-xs text-dark/30 flex items-center justify-end">
                已经是最后一篇了
              </div>
            </div>
          </article>

          <!-- 右侧：侧边栏 -->
          <NewsSidebar />
        </div>
      </div>
    </section>
  </div>
</template>
