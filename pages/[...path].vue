<template>
  <div>
    <!-- 页面 Hero -->
    <PageHero
      v-if="pageData"
      :title="pageData.seo?.title || pageData.name"
      :subtitle="pageData.seo?.description || pageData.description"
      badge=""
      badge-icon=""
      :background-url="heroBackground"
    />

    <!-- 页面区块 -->
    <div v-if="pageBlocks.length > 0" class="space-y-0">
      <template v-for="block in pageBlocks" :key="block.id">
        <!-- Hero 区块 -->
        <HeroSection
          v-if="block.type === 'hero'"
          :data="block.config"
        />

        <!-- 服务概览区块 -->
        <ServicesSection
          v-else-if="block.type === 'services'"
          :page-id="block.pageId"
        />

        <!-- 服务详情区块 -->
        <ServiceDetailBlock
          v-else-if="block.type === 'service-detail'"
          :service="(block.config as any)"
        />

        <!-- 关于我们区块 -->
        <AboutSection
          v-else-if="block.type === 'about'"
          :data="block.config"
        />

        <!-- 核心优势区块 -->
        <AdvantagesSection
          v-else-if="block.type === 'advantages'"
          :data="block.config"
        />

        <!-- 业绩案例区块 -->
        <ProjectsSection
          v-else-if="block.type === 'projects'"
          :data="block.config"
        />

        <!-- 新闻区块 -->
        <NewsSection
          v-else-if="block.type === 'news'"
          :data="block.config"
        />

        <!-- 联系我们区块 -->
        <ContactSection
          v-else-if="block.type === 'contact'"
          :data="block.config"
        />

        <!-- 行动召唤区块 -->
        <CtaSection
          v-else-if="block.type === 'cta'"
          :data="block.config"
        />

        <!-- 未知区块类型 -->
        <div v-else class="container py-12 text-center text-gray-500">
          暂不支持此区块类型: {{ block.type }}
        </div>
      </template>
    </div>

    <!-- 空页面提示 -->
    <div v-else-if="pageData" class="container py-20 text-center">
      <div class="max-w-md mx-auto">
        <i class="fas fa-file-alt text-6xl text-gray-300 mb-6"></i>
        <h2 class="text-2xl font-bold text-gray-700 mb-4">{{ pageData.name }}</h2>
        <p class="text-gray-500">此页面暂无内容</p>
      </div>
    </div>

    <!-- 404 页面 -->
    <div v-if="!pageData" class="container py-20 text-center">
      <div class="max-w-md mx-auto">
        <i class="fas fa-exclamation-triangle text-6xl text-yellow-400 mb-6"></i>
        <h2 class="text-2xl font-bold text-gray-700 mb-4">页面不存在</h2>
        <p class="text-gray-500 mb-8">您访问的页面 "/{{ currentPathSegments.join('/') }}" 不存在</p>
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          <i class="fas fa-home"></i>
          返回首页
        </NuxtLink>
      </div>
    </div>

    <!-- CTA 区块 -->
    <CtaSection v-if="pageData" />
  </div>
</template>

<script setup lang="ts">
import type { Block } from '~/data/blocks'
import blocksData from '~/data/generated/blocks.json'
import pagesData from '~/data/generated/pages.json'

const route = useRoute()

// 固定路由（由各自的页面文件处理，不走动态路由）
const fixedRoutes = ['/', '/news', '/news/', '/contact']

// 动态路由路径
const currentPathSegments = computed(() => {
  return (route.params.path as string[]) || []
})

const currentPath = computed(() => {
  if (currentPathSegments.value.length === 0) {
    return '/'
  }
  return '/' + currentPathSegments.value.join('/')
})

// 检查是否是固定路由
const isFixedRoute = computed(() => {
  return fixedRoutes.some(r => currentPath.value === r || currentPath.value.startsWith(r + '/'))
})

// 查找页面数据
const pageData = computed(() => {
  if (isFixedRoute.value) {
    return null
  }
  return (pagesData as any[]).find(p => p.path === currentPath.value)
})

// 获取页面的区块
const pageBlocks = computed<Block[]>(() => {
  if (!pageData.value) return []
  return (blocksData as Block[])
    .filter(b => b.pageId === pageData.value!.id)
    .sort((a, b) => a.sortOrder - b.sortOrder)
})

// Hero 背景图片
const heroBackground = computed(() => {
  const heroBlock = pageBlocks.value.find(b => b.type === 'hero')
  return heroBlock?.config?.backgroundUrl || ''
})

// SEO 配置
if (pageData.value) {
  useSeoMeta({
    title: pageData.value.seo?.title || pageData.value.name,
    description: pageData.value.seo?.description || pageData.value.description,
    keywords: pageData.value.seo?.keywords || ''
  })
}
</script>
