<template>
  <div>
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
          :image-position="getImagePosition(block)"
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
  </div>
</template>

<script setup lang="ts">
import type { Block } from '~/data/blocks'
import blocksData from '~/data/generated/blocks.json'
import pagesData from '~/data/generated/pages.json'

// SEO 配置
useSeo('home')

// 首页 ID
const HOME_PAGE_ID = '760dcc34-df32-4473-96bd-fa021c401837'

// 获取首页区块
const pageBlocks = computed<Block[]>(() => {
  return (blocksData as Block[])
    .filter(b => b.pageId === HOME_PAGE_ID)
    .sort((a, b) => a.sortOrder - b.sortOrder)
})

// 计算服务详情区块的图片位置（交替左右）
const serviceDetailIndex = ref(0)
const getImagePosition = (block: Block) => {
  if (block.type !== 'service-detail') return 'left'
  const position = serviceDetailIndex.value % 2 === 0 ? 'left' : 'right'
  serviceDetailIndex.value++
  return position as 'left' | 'right'
}
</script>
