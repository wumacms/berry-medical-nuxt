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

const { setCanonical, SITE_URL } = useJsonLd();
setCanonical("/advantages");

useSeoMeta({
  title: "专业优势 - 贝瑞医疗 · 六大专业能力铸就行业标杆",
  description: "从参编国家行业标准到自主研发瑞核V1.0数字孪生系统，贝瑞医疗以全生命周期闭环服务打造核医学场所建设不可替代的专业壁垒。",
  ogTitle: "专业优势 - 贝瑞医疗 · 六大专业能力铸就行业标杆",
  ogDescription: "参编标准、数字孪生驱动、全流程闭环，筑牢核医学科建设专业护城河。",
  ogImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1470&auto=format&fit=crop",
  ogUrl: `${SITE_URL}/advantages`,
});
</script>

<template>
  <div>
    <!-- 首屏 Hero -->
    <PageHero tag="PROFESSIONAL ADVANTAGES" tag-icon="fa-solid fa-award" title="六大专业能力" highlight="铸就行业标杆"
      description="从标准参编到场地改造，从数字孪生到全流程闭环服务，贝瑞医疗构建全方位专业竞争壁垒，为核医学场所安全保驾护航。"
      image-url="/images/shielding_control_suite.jpg" image-alt="贝瑞医疗专业优势 - 防护屏蔽工程与控制中心">
      <template #actions>
        <a href="#features"
          class="bg-linear-to-r from-primary to-[#F28C38] text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 text-sm">
          查看核心优势 <i class="fa-solid fa-arrow-down text-xs"></i>
        </a>
        <a href="#digital"
          class="bg-white text-slate-700 font-semibold px-7 py-3.5 rounded-full border border-slate-200 hover:border-primary/40 hover:text-primary hover:shadow-md transition-all duration-200 flex items-center gap-2 text-sm">
          <i class="fa-solid fa-cubes text-primary"></i> 数字孪生系统
        </a>
      </template>
    </PageHero>

    <!-- 关键数据卡片 -->
    <section class="py-16 lg:py-20 bg-slate-50/70 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard v-for="stat in advantageStats" :key="stat.label" :icon="stat.icon" :number="stat.number"
            :label="stat.label" :desc="stat.desc" />
        </div>
      </div>
    </section>

    <!-- 六大专业能力 -->
    <section id="features" class="py-20 lg:py-28 bg-white scroll-mt-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="核心优势" title="六大专业能力体系" description="深耕核医学建设领域，以高标准、高合规与技术自研驱动服务全方位领先。" />

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(item, idx) in coreAdvantages" :key="idx"
            class="bg-slate-50/80 rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 border border-slate-100 hover:border-primary/30 group">
            <div
              class="w-14 h-14 rounded-2xl bg-linear-to-br from-primary/10 to-primary/5 text-primary flex items-center justify-center text-2xl mb-6 group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/25 transition-all duration-300">
              <i :class="item.icon"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">
              {{ item.title }}
            </h3>
            <p class="text-sm text-slate-500 leading-relaxed font-normal">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========= 沉浸式深色科技展台：数字孪生赋能区块 ========= -->
    <section id="digital"
      class="relative py-20 lg:py-28 bg-navy-dark text-white overflow-hidden scroll-mt-24 border-t border-slate-800">
      <!-- 科技网格与光晕背景装饰 -->
      <div
        class="absolute -top-32 right-1/4 w-[600px] h-[600px] bg-tech-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div
        class="absolute -bottom-32 left-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- 头部导语 -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div
            class="inline-flex items-center gap-2 bg-tech-cyan/15 text-tech-cyan text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide border border-tech-cyan/30 mb-4">
            <i class="fa-solid fa-microchip text-[10px]"></i> 数字化驱动 · 独家研发
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            瑞核 V1.0 数字孪生态势感知平台
          </h2>
          <p class="text-slate-400 text-base leading-relaxed">
            自主研发面向核医学科场所的下一代智慧物联态势感知运维系统，全时段守护场所辐射环境安全。
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
          <!-- 左侧特性列表（深色磨砂卡片） -->
          <div class="space-y-4">
            <div v-for="feat in digitalTwinFeatures" :key="feat.title"
              class="bg-slate-900/70 backdrop-blur-md rounded-2xl p-6 border border-slate-800/90 hover:border-tech-cyan/50 hover:bg-slate-900/95 transition-all duration-300 group flex items-start gap-5 shadow-lg">
              <div
                class="w-12 h-12 rounded-xl bg-tech-cyan/15 text-tech-cyan flex items-center justify-center text-xl shrink-0 border border-tech-cyan/25 group-hover:scale-110 group-hover:bg-tech-cyan group-hover:text-white transition-all duration-300">
                <i :class="feat.icon"></i>
              </div>
              <div>
                <h4 class="text-base font-bold text-white mb-1.5 flex items-center gap-2">
                  {{ feat.title }}
                </h4>
                <p class="text-sm text-slate-400 leading-relaxed font-normal">
                  {{ feat.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- 右侧平台大图 (真实的3D剖面透视数字孪生) -->
          <div class="relative group">
            <div
              class="rounded-3xl overflow-hidden shadow-2xl shadow-tech-cyan/10 bg-slate-950 aspect-16/10 relative border border-slate-700/80 group-hover:border-tech-cyan/40 transition duration-500">
              <img src="/images/digital_twin_system.jpg" alt="瑞核V1.0数字孪生全景空间模型"
                class="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 opacity-95">
              <div
                class="absolute inset-0 bg-linear-to-t from-navy-dark/95 via-navy-dark/20 to-transparent flex items-end p-8">
                <div class="space-y-2">
                  <span
                    class="inline-block bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    国家软著认证 · 自主知识产权
                  </span>
                  <h4 class="text-xl font-bold text-white tracking-tight">
                    让放射性隐形威胁可视化、可追溯、可联动
                  </h4>
                  <p class="text-xs text-slate-300">
                    深度支持与医院 HIS、PACS、BIM 智慧楼宇中控系统全协议对接
                  </p>
                </div>
              </div>
            </div>

            <!-- 实时遥测状态浮标 -->
            <div
              class="absolute -top-4 -right-4 bg-slate-900/90 backdrop-blur-md rounded-xl px-4 py-2 border border-tech-cyan/40 shadow-xl hidden sm:flex items-center gap-2 text-xs text-tech-cyan font-mono">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>TELEMETRY ONLINE: 0.05 μSv/h</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 底部行动呼吁 -->
    <CtaBanner title="体验核医学数字孪生前沿方案" subtitle="预约贝瑞医疗技术专家现场演示瑞核V1.0系统功能并获取试用方案。" />
  </div>
</template>
