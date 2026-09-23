<script setup lang="ts">
import PageHero from "~/components/common/PageHero.vue";
import SectionHeader from "~/components/common/SectionHeader.vue";
import CtaBanner from "~/components/common/CtaBanner.vue";

useSeoMeta({
  title: "行业背景 - 贝瑞医疗 · 核医学迎来精准医疗新时代",
  description: "全球健康挑战日益凸显，癌症与神经退行性疾病高发。核医学凭借在重大疾病诊疗中的独特优势，成为精准医疗领域的核心力量。",
});

const challenges = [
  {
    icon: "fa-solid fa-heart-pulse",
    title: "癌症发病率持续攀升",
    desc: "全球癌症负担不断加重，早期发现与精准治疗成为提升生存率的关键。",
  },
  {
    icon: "fa-solid fa-brain",
    title: "神经退行性疾病高发",
    desc: "阿尔茨海默病、帕金森病等给医疗体系带来严峻考验，亟需更精准的诊断手段。",
  },
  {
    icon: "fa-solid fa-microscope",
    title: "传统影像局限待突破",
    desc: "传统影像仅能呈现解剖结构，核医学可深度揭示分子代谢与功能信息，让早期微小病灶无处遁形。",
  },
];

const drivers = [
  {
    icon: "fa-solid fa-x-ray",
    title: "多模态设备普及",
    desc: "PET/CT、PET/MR 加速普及，分辨率与工作效率持续迭代升级。",
  },
  {
    icon: "fa-solid fa-flask",
    title: "新型放射性药物",
    desc: "PSMA、Ga-68 DOTATATE、Lu-177 等相继获批上市并加速临床转化。",
  },
  {
    icon: "fa-solid fa-atom",
    title: "核素选择多样化",
    desc: "Ga-68、Cu-64、Lu-177、Ac-225、Y-90 等精准适配不同疾病靶点。",
  },
  {
    icon: "fa-solid fa-arrows-spin",
    title: "诊疗一体化",
    desc: "诊断与治疗协同发展，推动核医学向更细分、更高疗效方向演进。",
  },
];

const diagnosticIsotopes = ["F-18", "Tc-99m", "I-131", "Ga-68", "Cu-64"];
const therapeuticIsotopes = ["Lu-177", "Ac-225", "Y-90", "I-131"];
</script>

<template>
  <div>
    <!-- 首屏 Hero -->
    <PageHero tag="INDUSTRY BACKGROUND" tag-icon="fa-solid fa-chart-line" title="核医学迎来" highlight="精准医疗新时代"
      description="全球健康挑战日益凸显，癌症与神经退行性疾病高发。核医学凭借在重大疾病诊疗中的独特优势，成为精准医疗领域的核心力量。"
      image-url="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1470&auto=format&fit=crop"
      image-alt="核医学影像设备">
      <template #actions>
        <a href="#challenges"
          class="bg-primary text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-primary/30 hover:bg-primary/90 transition flex items-center gap-2 text-sm">
          了解行业挑战 <i class="fa-solid fa-arrow-down text-xs"></i>
        </a>
        <NuxtLink to="/contact"
          class="bg-white text-dark font-semibold px-7 py-3.5 rounded-full border border-gray-200 hover:border-primary/30 hover:text-primary transition flex items-center gap-2 text-sm">
          <i class="fa-regular fa-circle-question text-primary"></i> 咨询解决方案
        </NuxtLink>
      </template>
    </PageHero>

    <!-- 行业挑战区块 -->
    <section id="challenges" class="py-20 lg:py-28 bg-white scroll-mt-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="行业背景" title="全球健康挑战与核医学价值" description="核医学在疾病早期诊断、精准分期、疗效评估及靶向治疗全流程中，展现出无可替代的临床价值。" />

        <div class="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <!-- 挑战列表 -->
          <div class="space-y-6">
            <div v-for="item in challenges" :key="item.title"
              class="flex items-start gap-5 bg-light rounded-2xl p-6 border border-transparent hover:border-primary/20 transition-all duration-300">
              <div
                class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl shrink-0">
                <i :class="item.icon"></i>
              </div>
              <div>
                <h3 class="text-lg font-bold text-dark mb-1">
                  {{ item.title }}
                </h3>
                <p class="text-sm text-dark/60 leading-relaxed">
                  {{ item.desc }}
                </p>
              </div>
            </div>
          </div>

          <!-- 右侧插图 -->
          <div class="rounded-3xl overflow-hidden shadow-xl bg-white aspect-4/3 border border-gray-100">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop"
              alt="核医学实验室" class="w-full h-full object-cover">
          </div>
        </div>
      </div>
    </section>

    <!-- 技术红利驱动 -->
    <section class="py-20 lg:py-28 bg-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="技术红利" title="多重技术驱动核医学跨越式发展" description="设备、药物、核素三大领域持续突破，不断拓展核医学应用边界与临床可及性。" />

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="driver in drivers" :key="driver.title"
            class="bg-white rounded-3xl p-8 shadow-xs hover:shadow-xl transition duration-300 border border-transparent hover:border-primary/20 group">
            <div
              class="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition duration-300">
              <i :class="driver.icon"></i>
            </div>
            <h3 class="text-lg font-bold text-dark mb-2">
              {{ driver.title }}
            </h3>
            <p class="text-sm text-dark/60 leading-relaxed">
              {{ driver.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 图文深度解读 -->
    <section class="py-20 lg:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- 行 1 -->
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
          <div class="space-y-6 order-2 lg:order-1">
            <span class="text-primary text-xs font-bold tracking-[0.2em] uppercase">精准医疗时代</span>
            <h2 class="text-3xl sm:text-4xl font-bold text-dark tracking-tight leading-tight">
              核医学契合“量身定制”的精准化理念
            </h2>
            <p class="text-dark/60 leading-relaxed">
              PET/CT 等显像技术突破传统影像局限，不仅能呈现病灶结构，更能深度揭示代谢与功能信息，让早期病变无处遁形。
            </p>
            <ul class="space-y-3 text-sm text-dark/70">
              <li class="flex items-start gap-3">
                <i class="fa-solid fa-circle-check text-primary mt-1 text-xs"></i>
                早期诊断与精准分期评估
              </li>
              <li class="flex items-start gap-3">
                <i class="fa-solid fa-circle-check text-primary mt-1 text-xs"></i>
                疗效评估与微小残留病灶监测
              </li>
              <li class="flex items-start gap-3">
                <i class="fa-solid fa-circle-check text-primary mt-1 text-xs"></i>
                靶向精准打击，实现高效治疗与低副作用兼具
              </li>
            </ul>
            <NuxtLink to="/services"
              class="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all pt-2">
              了解核医学场所建设服务 <i class="fa-solid fa-arrow-right text-xs"></i>
            </NuxtLink>
          </div>
          <div class="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-xl aspect-4/3 bg-light">
            <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1470&auto=format&fit=crop"
              alt="精准医疗" class="w-full h-full object-cover">
          </div>
        </div>

        <!-- 行 2 -->
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div class="rounded-3xl overflow-hidden shadow-xl aspect-4/3 bg-light order-1">
            <img src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1470&auto=format&fit=crop"
              alt="放射性药物研发" class="w-full h-full object-cover">
          </div>
          <div class="space-y-6 order-2">
            <span class="text-primary text-xs font-bold tracking-[0.2em] uppercase">药物研发成果丰硕</span>
            <h2 class="text-3xl sm:text-4xl font-bold text-dark tracking-tight leading-tight">
              新型放射性药物不断拓展临床边界
            </h2>
            <p class="text-dark/60 leading-relaxed">
              针对前列腺癌的 PSMA 显像剂、针对神经内分泌瘤的 Ga-68 DOTATATE 显像剂，以及 Lu-177 标记的靶向治疗药物等相继获批上市，推动场所建设需求井喷。
            </p>
            <div class="grid grid-cols-3 gap-4 pt-4">
              <div class="bg-light rounded-2xl p-4 text-center border border-gray-100">
                <span class="block text-lg font-bold text-primary">PSMA</span>
                <span class="text-[11px] text-dark/50">前列腺癌显像</span>
              </div>
              <div class="bg-light rounded-2xl p-4 text-center border border-gray-100">
                <span class="block text-lg font-bold text-primary">Ga-68</span>
                <span class="text-[11px] text-dark/50">神经内分泌瘤</span>
              </div>
              <div class="bg-light rounded-2xl p-4 text-center border border-gray-100">
                <span class="block text-lg font-bold text-primary">Lu-177</span>
                <span class="text-[11px] text-dark/50">靶向治疗</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核素分类 -->
    <section class="py-20 bg-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="核素分类" title="诊断与治疗核素" description="不同能量特性的医用同位素对场所辐射屏蔽厚度与衰变池容积提出差异化严苛要求。" />

        <div class="grid md:grid-cols-2 gap-8">
          <!-- 诊断用核素 -->
          <div class="bg-white rounded-3xl p-8 shadow-xs border border-gray-100">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <i class="fa-solid fa-eye"></i>
              </div>
              <h3 class="text-xl font-bold text-dark">诊断用核素</h3>
            </div>
            <div class="flex flex-wrap gap-3">
              <span v-for="iso in diagnosticIsotopes" :key="iso"
                class="bg-light text-dark/80 font-medium text-sm px-4 py-2 rounded-full border border-gray-100">
                {{ iso }}
              </span>
            </div>
          </div>

          <!-- 治疗用核素 -->
          <div class="bg-white rounded-3xl p-8 shadow-xs border border-gray-100">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <i class="fa-solid fa-bolt"></i>
              </div>
              <h3 class="text-xl font-bold text-dark">治疗用核素</h3>
            </div>
            <div class="flex flex-wrap gap-3">
              <span v-for="iso in therapeuticIsotopes" :key="iso"
                class="bg-light text-dark/80 font-medium text-sm px-4 py-2 rounded-full border border-gray-100">
                {{ iso }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 底部 CTA -->
    <CtaBanner title="抢占核医学精准诊疗发展先机" subtitle="贝瑞医疗协助各级医疗机构高质量规划并建成符合最高国家防护标准的现代化核医学场所。" />
  </div>
</template>
