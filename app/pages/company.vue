<script setup lang="ts">
import PageHero from "~/components/common/PageHero.vue";
import SectionHeader from "~/components/common/SectionHeader.vue";
import StatsCard from "~/components/common/StatsCard.vue";
import CtaBanner from "~/components/common/CtaBanner.vue";
import { companyBusinessScope, corporateValues, companyStats } from "~/data/company";

useSeoMeta({
  title: "企业简介 - 贝瑞医疗 · 专注核医学场所建设一站式服务",
  description: "贝瑞医疗科技（郑州）有限公司专注核医学场所建设全生命周期闭环解决方案，汇聚十年以上行业经验团队，赋能医疗机构高质量建设。",
});
</script>

<template>
  <div>
    <!-- 首屏 Hero -->
    <PageHero tag="COMPANY PROFILE" tag-icon="fa-solid fa-building" title="专注核医学场所建设" highlight="全生命周期闭环服务"
      description="贝瑞医疗科技（郑州）有限公司专注核医学场所建设一站式服务，以专业技术与深厚行业经验，为客户提供从规划到运维的全生命周期交钥匙方案。"
      image-url="/images/shielding_control_suite.jpg" image-alt="贝瑞医疗工程技术与控制中心">
      <template #actions>
        <a href="#business"
          class="bg-linear-to-r from-primary to-[#F28C38] text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 text-sm">
          了解业务范围 <i class="fa-solid fa-arrow-down text-xs"></i>
        </a>
        <NuxtLink to="/contact"
          class="bg-white text-slate-700 font-semibold px-7 py-3.5 rounded-full border border-slate-200 hover:border-primary/40 hover:text-primary hover:shadow-sm transition-all duration-200 flex items-center gap-2 text-sm">
          <i class="fa-regular fa-circle-question text-primary"></i> 咨询合作
        </NuxtLink>
      </template>
    </PageHero>

    <!-- 企业定位与业务理念 -->
    <section class="py-20 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <!-- 左侧：定位描述 -->
          <div class="space-y-6">
            <span class="text-primary text-xs font-bold tracking-[0.2em] uppercase">企业定位</span>
            <h2 class="text-3xl sm:text-4xl font-bold text-dark tracking-tight leading-tight">
              专注核医学场所建设<br>打造行业闭环标杆
            </h2>
            <p class="text-dark/60 leading-relaxed">
              公司业务覆盖核医学场所建设全生命周期需求，从选址、设计、施工到环评、验收、运维，为客户提供专业化、定制化、高合规的一揽子交付方案。
            </p>
            <div class="grid grid-cols-2 gap-4 pt-2">
              <div class="bg-slate-50/80 rounded-2xl p-5 shadow-xs border border-slate-100 hover:border-primary/30 hover:bg-white hover:shadow-md transition-all duration-300">
                <i class="fa-solid fa-drafting-compass text-primary text-xl mb-3"></i>
                <p class="text-sm font-bold text-dark">前期规划</p>
                <p class="text-xs text-dark/40 mt-1">选址 · 方案 · 施工图</p>
              </div>
              <div class="bg-slate-50/80 rounded-2xl p-5 shadow-xs border border-slate-100 hover:border-primary/30 hover:bg-white hover:shadow-md transition-all duration-300">
                <i class="fa-solid fa-helmet-safety text-primary text-xl mb-3"></i>
                <p class="text-sm font-bold text-dark">建设落地</p>
                <p class="text-xs text-dark/40 mt-1">防护施工 · 净化工程</p>
              </div>
              <div class="bg-slate-50/80 rounded-2xl p-5 shadow-xs border border-slate-100 hover:border-primary/30 hover:bg-white hover:shadow-md transition-all duration-300">
                <i class="fa-solid fa-file-shield text-primary text-xl mb-3"></i>
                <p class="text-sm font-bold text-dark">验收咨询</p>
                <p class="text-xs text-dark/40 mt-1">环评 · 卫评 · 药监</p>
              </div>
              <div class="bg-slate-50/80 rounded-2xl p-5 shadow-xs border border-slate-100 hover:border-primary/30 hover:bg-white hover:shadow-md transition-all duration-300">
                <i class="fa-solid fa-headset text-primary text-xl mb-3"></i>
                <p class="text-sm font-bold text-dark">后期运维</p>
                <p class="text-xs text-dark/40 mt-1">检测 · 7×24 维护</p>
              </div>
            </div>
          </div>

          <!-- 右侧：工程建设实景大图 -->
          <div class="relative group">
            <div
              class="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 bg-slate-100 aspect-4/3 flex items-center justify-center border border-slate-200/80">
              <img :src="withBase('/images/hero_petct_suite.jpg')" alt="贝瑞医疗 - 核医学工程高标准建设实景"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
              <div class="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />

              <!-- 右上角品质标签 -->
              <div
                class="absolute top-4 right-4 bg-slate-900/70 backdrop-blur-md text-white text-[11px] font-medium px-3.5 py-1.5 rounded-full flex items-center gap-1.5 border border-white/15">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                高标准规范交付
              </div>
            </div>

            <!-- 浮动成就卡片 -->
            <div
              class="absolute -bottom-5 -left-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg">
                <i class="fa-solid fa-award"></i>
              </div>
              <div class="leading-tight">
                <span class="block text-xs font-bold text-slate-900">高品质交钥匙工程</span>
                <span class="block text-[10px] text-slate-400">环评 / 卫评 / 药监 100% 验收通过率</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 独立数据统计通栏区块 -->
    <section class="py-16 lg:py-20 bg-slate-50/70 border-y border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard v-for="stat in companyStats" :key="stat.label"
            :icon="stat.icon"
            :number="stat.number"
            :label="stat.label"
            :desc="stat.desc" />
        </div>
      </div>
    </section>

    <!-- 业务范围全景 -->
    <section id="business" class="py-20 lg:py-28 bg-white scroll-mt-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="业务范围" title="覆盖核医学全生命周期需求" description="从核医学场所初始选址评估，到后期不间断的专业运行维保，满足多元化高难度建设需求。" />

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="item in companyBusinessScope" :key="item.title"
            class="bg-light rounded-3xl p-8 hover:shadow-xl transition duration-300 border border-transparent hover:border-primary/20 group">
            <div
              class="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition duration-300">
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

    <!-- 企业文化与核心价值观 -->
    <section class="py-20 lg:py-28 bg-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="企业文化" title="核心价值观与理念" description="恪守敬畏之心，以安全为基石，以专业立足，以创新引领核医学基础设施建设未来。" />

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="val in corporateValues" :key="val.title"
            class="bg-white rounded-3xl p-8 shadow-xs border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group">
            <div
              class="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <i :class="val.icon"></i>
            </div>
            <h3 class="text-2xl font-bold text-dark mb-1">
              {{ val.title }}
            </h3>
            <span class="text-[11px] font-bold text-primary tracking-wider block mb-4">
              {{ val.subtitle }}
            </span>
            <p class="text-sm text-dark/60 leading-relaxed">
              {{ val.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 底部行动号召 -->
    <CtaBanner title="了解贝瑞医疗更多定制解决方案" subtitle="专业工程团队提供免费现场勘测与前期概念方案咨询支持。" />
  </div>
</template>
