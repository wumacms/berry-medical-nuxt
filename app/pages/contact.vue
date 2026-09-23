<script setup lang="ts">
import PageHero from "~/components/common/PageHero.vue";
import SectionHeader from "~/components/common/SectionHeader.vue";
import ContactForm from "~/components/contact/ContactForm.vue";
import FaqAccordion from "~/components/common/FaqAccordion.vue";
import CtaBanner from "~/components/common/CtaBanner.vue";
import { companyContact } from "~/data/navigation";
import type { FaqItem } from "~/types";

useSeoMeta({
  title: "联系我们 - 贝瑞医疗 · 期待与您携手“核”作",
  description: "欢迎联系贝瑞医疗科技，获取专属核医学场所建设、辐射防护施工、环评药监验收全套定制解决方案。",
});

const contactCards = [
  {
    icon: "fa-solid fa-phone",
    title: "联系电话",
    lines: [companyContact.phone, companyContact.phoneSecondary],
  },
  {
    icon: "fa-regular fa-envelope",
    title: "电子邮箱",
    lines: [companyContact.email],
  },
  {
    icon: "fa-solid fa-location-dot",
    title: "公司地址",
    lines: [companyContact.address],
  },
  {
    icon: "fa-solid fa-globe",
    title: "官方网站",
    lines: [companyContact.website],
  },
];

const faqs: FaqItem[] = [
  {
    question: "核医学场所建设一般需要多长时间？",
    answer: "项目周期因场所规模、改造难度及审批流程而异，通常为3-12个月不等。我们会在方案设计阶段提供详细的时间规划与工期倒排表。",
  },
  {
    question: "是否提供环评、卫评及药监验收支持？",
    answer: "是的，我们提供从环境影响评价、职业病危害放射防护预评价/控制效果评价到药监放射性药品使用许可证（第四类）的全流程技术咨询与专家指导服务。",
  },
  {
    question: "有限空间的场地改造能否承接？",
    answer: "可以。实施难度大、既有院区空间受限的场地改造服务是我们的专长，团队拥有成熟的重载楼面强化、精密屏蔽测算与空间极致利用经验。",
  },
  {
    question: "设备采购后是否提供安装与长效运维服务？",
    answer: "是的，我们不仅提供设备现场安装调试与操作人员培训，还提供7×24小时驻场或远程技术运维保障，确保合规与稳定生产。",
  },
];
</script>

<template>
  <div>
    <!-- 首屏 Hero -->
    <PageHero tag="CONTACT US" tag-icon="fa-solid fa-headset" title="期待与您" highlight="携手“核”作"
      description="贝瑞医疗期待与您携手“核”作，共筑医疗健康新蓝图！欢迎通过以下方式联系我们，获取专属核医学场所建设方案。"
      image-url="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1470&auto=format&fit=crop"
      image-alt="贝瑞医疗环境">
      <template #actions>
        <a :href="`tel:${companyContact.phone}`"
          class="bg-primary text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-primary/30 hover:bg-primary/90 transition flex items-center gap-2 text-sm">
          <i class="fa-solid fa-phone"></i> {{ companyContact.phone }}
        </a>
        <a :href="`mailto:${companyContact.email}`"
          class="bg-white text-dark font-semibold px-7 py-3.5 rounded-full border border-gray-200 hover:border-primary/30 hover:text-primary transition flex items-center gap-2 text-sm">
          <i class="fa-regular fa-envelope text-primary"></i> 发送邮件
        </a>
      </template>
    </PageHero>

    <!-- 联系方式总览 -->
    <section id="info" class="py-16 lg:py-20 bg-light scroll-mt-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="card in contactCards" :key="card.title"
            class="bg-white rounded-3xl p-8 text-center shadow-xs border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div
              class="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl mx-auto mb-6">
              <i :class="card.icon"></i>
            </div>
            <h3 class="text-lg font-bold text-dark mb-2">
              {{ card.title }}
            </h3>
            <p v-for="(line, idx) in card.lines" :key="idx" class="text-sm text-dark/70 leading-relaxed">
              {{ line }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 在线咨询表单与流程 -->
    <section class="py-20 lg:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <!-- 左侧：表单流程说明 -->
          <div class="space-y-6">
            <span class="text-primary text-xs font-bold tracking-[0.2em] uppercase">在线咨询</span>
            <h2 class="text-3xl sm:text-4xl font-bold text-dark tracking-tight leading-tight">
              提交您的需求<br>获取专属解决方案
            </h2>
            <p class="text-dark/60 leading-relaxed">
              请填写在线表单，我们的专业顾问将在 24 小时内与您联系，为您提供核医学场所建设前期规划与方案建议。
            </p>

            <!-- 服务流程步骤 -->
            <div class="space-y-4 pt-4">
              <div class="flex items-start gap-4">
                <div
                  class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0">
                  1
                </div>
                <div>
                  <p class="text-sm font-semibold text-dark">提交建设需求</p>
                  <p class="text-xs text-dark/40">填写基本信息与项目拟建类型</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div
                  class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0">
                  2
                </div>
                <div>
                  <p class="text-sm font-semibold text-dark">顾问1对1对接</p>
                  <p class="text-xs text-dark/40">资深工程设计专家沟通技术要点</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div
                  class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0">
                  3
                </div>
                <div>
                  <p class="text-sm font-semibold text-dark">定制专属方案</p>
                  <p class="text-xs text-dark/40">出具初步规划布局与造价估算建议</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧：交互式表单 -->
          <ContactForm />
        </div>
      </div>
    </section>

    <!-- 交通与位置 -->
    <section class="py-20 lg:py-24 bg-light border-y border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <span class="text-primary text-xs font-bold tracking-[0.2em] uppercase">地理位置</span>
            <h2 class="text-3xl sm:text-4xl font-bold text-dark tracking-tight">欢迎到访莅临考察</h2>
            <div class="space-y-4 text-sm text-dark/70">
              <p class="flex items-start gap-3">
                <i class="fa-solid fa-location-dot text-primary mt-1 text-sm"></i>
                <span><strong>公司地址：</strong>{{ companyContact.address }}</span>
              </p>
              <p class="flex items-start gap-3">
                <i class="fa-solid fa-subway text-primary mt-1 text-sm"></i>
                <span><strong>交通指引：</strong>地铁1号线梧桐街站步行约10分钟，公交B12路、B2路、45路可直达。</span>
              </p>
            </div>
          </div>

          <!-- 地图展示卡片 -->
          <div class="rounded-3xl overflow-hidden shadow-xl aspect-4/3 bg-white relative border border-gray-100">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1470&auto=format&fit=crop"
              alt="公司位置地图" class="w-full h-full object-cover">
            <div class="absolute inset-0 flex items-center justify-center">
              <div
                class="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl px-6 py-4 text-center border border-gray-100">
                <div
                  class="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-lg mx-auto mb-2">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <p class="text-sm font-bold text-dark">贝瑞医疗总部</p>
                <p class="text-xs text-dark/50 mt-1">郑州高新区睿达广场1栋14层</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 常见问题 FAQ -->
    <section id="faq" class="py-20 lg:py-28 bg-white scroll-mt-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="常见问题" title="您可能想了解的合作疑问" description="我们梳理了医疗机构在前期核医学立项与场所建设中的常见高频咨询。" />

        <FaqAccordion :items="faqs" />
      </div>
    </section>

    <!-- 底部行动呼吁 -->
    <CtaBanner />
  </div>
</template>
