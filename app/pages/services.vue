<script setup lang="ts">
import PageHero from "~/components/common/PageHero.vue";
import SectionHeader from "~/components/common/SectionHeader.vue";
import CtaBanner from "~/components/common/CtaBanner.vue";
import { serviceChapters } from "~/data/services";

useSeoMeta({
  title: "服务内容 - 贝瑞医疗 · 核医学场所建设整体解决方案",
  description: "从设计到施工，从设备到运维，贝瑞医疗提供设计篇、施工篇、设备篇核医学场所建设全生命周期一站式闭环服务。",
});

const layoutPrinciples = [
  "使工作场所的外照射水平和放射性污染发生的概率达到国家标准最小化。",
  "保持影像检查设备工作场所内极低辐射本底水平，避免对微小病灶成像质量造成干扰。",
  "控制区入口和出口设置门禁权限控制、互锁铅防护门与单向动线，限制受检者与污染扩散。",
  "在分装和给药室出口设计专用卫生通过间与气闸缓冲，强制进行表面污染监测。",
  "放射性废水经专用三级或多级串联衰变池充分衰变达标后，方可排入医院污水处理管网。",
];
</script>

<template>
  <div>
    <!-- 首屏 Hero -->
    <PageHero
      tag="SERVICE CONTENT"
      tag-icon="fa-solid fa-layer-group"
      title="核医学场所建设"
      highlight="整体解决方案"
      description="从设计到施工，从设备到运维，贝瑞医疗提供核医学场所建设一站式服务，覆盖全生命周期需求。"
      image-url="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1470&auto=format&fit=crop"
      image-alt="核医学场所建设服务"
    >
      <template #actions>
        <a
          href="#design"
          class="bg-primary text-white font-semibold px-5 py-2.5 rounded-full shadow-md shadow-primary/20 hover:bg-primary/90 transition text-sm flex items-center gap-2"
        >
          <i class="fa-solid fa-drafting-compass text-xs"></i> 设计篇
        </a>
        <a
          href="#construction"
          class="bg-white text-dark font-semibold px-5 py-2.5 rounded-full border border-gray-200 hover:border-primary/30 hover:text-primary transition text-sm flex items-center gap-2"
        >
          <i class="fa-solid fa-helmet-safety text-xs"></i> 施工篇
        </a>
        <a
          href="#equipment"
          class="bg-white text-dark font-semibold px-5 py-2.5 rounded-full border border-gray-200 hover:border-primary/30 hover:text-primary transition text-sm flex items-center gap-2"
        >
          <i class="fa-solid fa-microchip text-xs"></i> 设备篇
        </a>
      </template>
    </PageHero>

    <!-- 服务总览三大篇章 -->
    <section class="py-20 lg:py-24 bg-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="服务总览"
          title="三大专业篇章"
          description="设计、施工、设备三大篇章，构建核医学场所建设完整交付矩阵。"
        />

        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="chap in serviceChapters"
            :key="chap.id"
            class="bg-white rounded-3xl p-8 hover:shadow-xl transition duration-300 border border-transparent hover:border-primary/20 group flex flex-col justify-between"
          >
            <div>
              <div
                class="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-3xl mb-6 group-hover:bg-primary group-hover:text-white transition duration-300"
              >
                <i :class="chap.icon"></i>
              </div>
              <span class="text-xs font-bold text-primary tracking-wider">{{ chap.code }}</span>
              <h3 class="text-2xl font-bold text-dark mt-2 mb-3">
                {{ chap.title }}
              </h3>
              <p class="text-sm text-dark/60 leading-relaxed mb-6">
                {{ chap.description }}
              </p>
            </div>
            <a
              :href="`#${chap.id}`"
              class="text-primary text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
            >
              深入了解{{ chap.title }} <i class="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 篇章一：设计篇 -->
    <section id="design" class="py-20 lg:py-28 bg-white scroll-mt-24 border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4 mb-12">
          <div
            class="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center text-2xl shadow-lg shadow-primary/30"
          >
            <i class="fa-solid fa-drafting-compass"></i>
          </div>
          <div>
            <span class="text-xs font-bold text-primary tracking-wider">01 DESIGN CHAPTER</span>
            <h2 class="text-3xl sm:text-4xl font-bold text-dark tracking-tight">设计篇：科学选址与专业方案深化</h2>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          <div class="space-y-6">
            <p class="text-dark/70 leading-relaxed">
              选址、方案及专项施工图设计：新建、改建项目定制方案，融合功能优化、成本控制与美学设计，严格遵循行业规范，从选址到布局确保辐射防护、制药用药安全及空间利用合理。
            </p>
            <div class="bg-light rounded-2xl p-6 border border-gray-100">
              <h3 class="text-base font-bold text-dark mb-4 flex items-center gap-2">
                <i class="fa-solid fa-circle-check text-primary text-sm"></i> 规范红线与选址要求
              </h3>
              <ul class="space-y-3 text-sm text-dark/60">
                <li class="flex items-start gap-3">
                  <span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                  场址选择充分考虑周围场所的辐射敏感安全，避开产科、儿科、食堂等密集区，做到相对独立或端头布置。
                </li>
                <li class="flex items-start gap-3">
                  <span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                  设置单独出、入口，患者出口严格避开门诊大厅、收费处等人群稠密区域。
                </li>
              </ul>
            </div>
          </div>

          <!-- 右侧布局原则 -->
          <div class="bg-light rounded-3xl p-8 border border-gray-100">
            <h3 class="text-base font-bold text-dark mb-6 flex items-center gap-2">
              <i class="fa-solid fa-list-check text-primary text-sm"></i> 平面布局五大核心原则
            </h3>
            <ol class="space-y-4">
              <li
                v-for="(p, i) in layoutPrinciples"
                :key="i"
                class="flex items-start gap-4"
              >
                <span
                  class="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                >
                  {{ i + 1 }}
                </span>
                <p class="text-sm text-dark/70 leading-relaxed">
                  {{ p }}
                </p>
              </li>
            </ol>
          </div>
        </div>

        <!-- 平面案例展示 -->
        <div class="grid md:grid-cols-2 gap-6">
          <div class="rounded-3xl overflow-hidden shadow-lg bg-light border border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1470&auto=format&fit=crop"
              alt="核医学场所整体分区布局"
              class="w-full h-64 object-cover"
            >
            <div class="p-5">
              <span class="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">方案设计</span>
              <p class="text-base font-bold text-dark mt-3">核医学场所整体控制区/监督区布局设计</p>
            </div>
          </div>
          <div class="rounded-3xl overflow-hidden shadow-lg bg-light border border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1470&auto=format&fit=crop"
              alt="放射性药物制备区功能分区"
              class="w-full h-64 object-cover"
            >
            <div class="p-5">
              <span class="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">净化设计</span>
              <p class="text-base font-bold text-dark mt-3">放射性药物制备区 C+A 级净化布局方案</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 篇章二：施工篇 -->
    <section id="construction" class="py-20 lg:py-28 bg-light scroll-mt-24 border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4 mb-12">
          <div
            class="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center text-2xl shadow-lg shadow-primary/30"
          >
            <i class="fa-solid fa-helmet-safety"></i>
          </div>
          <div>
            <span class="text-xs font-bold text-primary tracking-wider">02 CONSTRUCTION CHAPTER</span>
            <h2 class="text-3xl sm:text-4xl font-bold text-dark tracking-tight">施工篇：高标准辐射防护与工程落地</h2>
          </div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="feat in serviceChapters[1]?.features"
            :key="feat.title"
            class="bg-white rounded-3xl p-8 shadow-xs border border-gray-100 hover:shadow-xl transition-all duration-300 group"
          >
            <div
              class="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300"
            >
              <i :class="feat.icon"></i>
            </div>
            <h3 class="text-lg font-bold text-dark mb-2">
              {{ feat.title }}
            </h3>
            <p class="text-sm text-dark/60 leading-relaxed">
              {{ feat.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 篇章三：设备篇 -->
    <section id="equipment" class="py-20 lg:py-28 bg-white scroll-mt-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4 mb-12">
          <div
            class="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center text-2xl shadow-lg shadow-primary/30"
          >
            <i class="fa-solid fa-microchip"></i>
          </div>
          <div>
            <span class="text-xs font-bold text-primary tracking-wider">03 EQUIPMENT CHAPTER</span>
            <h2 class="text-3xl sm:text-4xl font-bold text-dark tracking-tight">设备篇：核仪器装备与全链条运维</h2>
          </div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div
            v-for="feat in serviceChapters[2]?.features"
            :key="feat.title"
            class="bg-light rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
          >
            <div
              class="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300"
            >
              <i :class="feat.icon"></i>
            </div>
            <h3 class="text-lg font-bold text-dark mb-2">
              {{ feat.title }}
            </h3>
            <p class="text-sm text-dark/60 leading-relaxed">
              {{ feat.description }}
            </p>
          </div>
        </div>

        <!-- 7x24小时运维保障横幅 -->
        <div class="bg-linear-to-r from-dark to-[#2b2726] rounded-3xl p-8 lg:p-12 text-white">
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div class="space-y-4">
              <span class="text-primary text-xs font-bold tracking-[0.2em] uppercase">运维保障</span>
              <h3 class="text-2xl sm:text-3xl font-bold tracking-tight">7×24小时专业技术保障与运维</h3>
              <p class="text-white/70 text-sm leading-relaxed">
                建立长效设备巡检、屏蔽层有效性复测、衰变池菌群监测及数字孪生应急预警体系，为科室常态化安全运营保驾护航。
              </p>
            </div>
            <div class="flex flex-wrap lg:justify-end gap-4">
              <NuxtLink
                to="/contact"
                class="bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition text-sm flex items-center gap-2"
              >
                <i class="fa-solid fa-headset"></i> 咨询运维服务
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 底部 CTA -->
    <CtaBanner />
  </div>
</template>
