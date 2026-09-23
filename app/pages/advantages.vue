<script setup lang="ts">
import PageHero from "~/components/common/PageHero.vue";
import SectionHeader from "~/components/common/SectionHeader.vue";
import StatsCard from "~/components/common/StatsCard.vue";
import CtaBanner from "~/components/common/CtaBanner.vue";
import {
  advantageStats,
  coreAdvantages,
  digitalTwinFeatures,
} from "~/data/advantages";

useSeoMeta({
  title: "专业优势 - 贝瑞医疗 · 六大专业能力铸就行业标杆",
  description: "从参编国家行业标准到自主研发瑞核V1.0数字孪生系统，贝瑞医疗以全生命周期闭环服务打造核医学场所建设不可替代的专业壁垒。",
});
</script>

<template>
  <div>
    <!-- 首屏 Hero -->
    <PageHero
      tag="PROFESSIONAL ADVANTAGES"
      tag-icon="fa-solid fa-award"
      title="六大专业能力"
      highlight="铸就行业标杆"
      description="从标准参编到场地改造，从数字孪生到全流程闭环服务，贝瑞医疗构建全方位专业竞争壁垒，为核医学场所安全保驾护航。"
      image-url="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1470&auto=format&fit=crop"
      image-alt="贝瑞医疗专业优势"
    >
      <template #actions>
        <a
          href="#features"
          class="bg-primary text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-primary/30 hover:bg-primary/90 transition flex items-center gap-2 text-sm"
        >
          查看核心优势 <i class="fa-solid fa-arrow-down text-xs"></i>
        </a>
        <a
          href="#digital"
          class="bg-white text-dark font-semibold px-7 py-3.5 rounded-full border border-gray-200 hover:border-primary/30 hover:text-primary transition flex items-center gap-2 text-sm"
        >
          <i class="fa-solid fa-cubes text-primary"></i> 数字孪生系统
        </a>
      </template>
    </PageHero>

    <!-- 关键数据卡片 -->
    <section class="py-16 lg:py-20 bg-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            v-for="stat in advantageStats"
            :key="stat.label"
            :icon="stat.icon"
            :number="stat.number"
            :label="stat.label"
            :desc="stat.desc"
          />
        </div>
      </div>
    </section>

    <!-- 六大专业能力 -->
    <section id="features" class="py-20 lg:py-28 bg-white scroll-mt-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="核心优势"
          title="六大专业能力体系"
          description="深耕核医学建设领域，以高标准、高合规与技术自研驱动服务全方位领先。"
        />

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(item, idx) in coreAdvantages"
            :key="idx"
            class="bg-light rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 group"
          >
            <div
              class="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition duration-300"
            >
              <i :class="item.icon"></i>
            </div>
            <h3 class="text-xl font-bold text-dark mb-3">
              {{ item.title }}
            </h3>
            <p class="text-sm text-dark/60 leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 数字孪生赋能区块 -->
    <section id="digital" class="py-20 lg:py-28 bg-light scroll-mt-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="数字化驱动"
          title="瑞核V1.0数字孪生态势感知平台"
          description="自主研发面向核医学科场所的下一代智慧物联态势感知运维系统。"
        />

        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
          <!-- 左侧特性列表 -->
          <div class="space-y-6">
            <div
              v-for="feat in digitalTwinFeatures"
              :key="feat.title"
              class="bg-white rounded-2xl p-6 shadow-xs border border-gray-100 flex items-start gap-5 hover:border-primary/20 transition-all duration-300"
            >
              <div
                class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl shrink-0"
              >
                <i :class="feat.icon"></i>
              </div>
              <div>
                <h4 class="text-base font-bold text-dark mb-1">
                  {{ feat.title }}
                </h4>
                <p class="text-sm text-dark/60 leading-relaxed">
                  {{ feat.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- 右侧平台大图 -->
          <div class="rounded-3xl overflow-hidden shadow-2xl bg-dark aspect-4/3 relative group">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1470&auto=format&fit=crop"
              alt="数字孪生大屏"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            >
            <div class="absolute inset-0 bg-linear-to-t from-dark/90 via-transparent to-transparent flex items-end p-8">
              <div class="space-y-2">
                <span class="bg-primary text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase">
                  自主知识产权
                </span>
                <h4 class="text-xl font-bold text-white">
                  让放射性隐形威胁可视化、可追溯、可联动
                </h4>
                <p class="text-xs text-white/70">
                  支持与医院 HIS、PACS、BIM 智慧楼宇集成联动
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 底部行动呼吁 -->
    <CtaBanner
      title="体验核医学数字孪生前沿方案"
      subtitle="预约贝瑞医疗技术专家现场演示瑞核V1.0系统功能并获取试用方案。"
    />
  </div>
</template>
