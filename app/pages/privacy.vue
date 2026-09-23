<script setup lang="ts">
import { companyContact } from "~/data/navigation";

useSeoMeta({
  title: "隐私政策 - 贝瑞医疗",
  description: "贝瑞医疗高度重视您的个人信息保护。本政策说明我们如何收集、使用、存储和保护您的个人信息，以及您所享有的权利。",
});

const menuItems = [
  { id: "collect", title: "一、我们收集的信息" },
  { id: "use", title: "二、信息的使用方式" },
  { id: "share", title: "三、信息的共享与披露" },
  { id: "store", title: "四、信息的存储与保护" },
  { id: "rights", title: "五、您的权利" },
  { id: "cookie", title: "六、Cookie 与同类技术" },
  { id: "minor", title: "七、未成年人信息保护" },
  { id: "update", title: "八、政策更新" },
  { id: "contact", title: "九、联系我们" },
];
</script>

<template>
  <div>
    <!-- 标题区块 Hero Section -->
    <section class="relative bg-linear-to-br from-white via-light to-white overflow-hidden border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div class="max-w-3xl">
          <div
            class="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide"
          >
            <i class="fa-solid fa-shield-halved text-[10px]"></i> PRIVACY POLICY
          </div>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-tight tracking-tight mt-5">
            隐私政策
          </h1>
          <p class="text-sm sm:text-base text-dark/60 leading-relaxed mt-4">
            贝瑞医疗科技（郑州）有限公司（以下简称“我们”）高度重视您的个人信息保护。本政策说明我们如何收集、使用、存储和保护您的个人信息，以及您所享有的法定权利。
          </p>
          <p class="text-xs text-dark/40 mt-4">最近更新时间：2026年9月23日</p>
        </div>
      </div>
    </section>

    <!-- 政策正文区块 Policy Content -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-16 items-start">
          <!-- 侧边目录（桌面端） -->
          <aside class="hidden lg:block sticky top-28 bg-light p-6 rounded-2xl border border-gray-100">
            <h4 class="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">目录导航</h4>
            <ul class="space-y-2.5 text-sm text-dark/60">
              <li v-for="item in menuItems" :key="item.id">
                <a :href="`#${item.id}`" class="hover:text-primary transition line-clamp-1">
                  {{ item.title }}
                </a>
              </li>
            </ul>
          </aside>

          <!-- 正文 -->
          <article class="space-y-12">
            <div id="collect" class="scroll-mt-28">
              <h2 class="text-2xl font-bold text-dark mb-4">一、我们收集的信息</h2>
              <p class="text-sm text-dark/60 leading-relaxed mb-4">
                我们仅在您主动提供或为实现工程咨询服务所必需的范围内收集信息，主要包括：
              </p>
              <ul class="space-y-3 text-sm text-dark/60">
                <li class="flex items-start gap-3">
                  <i class="fa-solid fa-circle-check text-primary mt-1 text-xs"></i>
                  <span><strong class="text-dark font-semibold">咨询信息</strong>：您在咨询表单中填写的姓名、单位名称、职务、联系电话、电子邮箱及拟建项目需求描述。</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fa-solid fa-circle-check text-primary mt-1 text-xs"></i>
                  <span><strong class="text-dark font-semibold">沟通记录</strong>：您通过电话、邮件、微信等方式与我们顾问沟通时产生的内容记录。</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fa-solid fa-circle-check text-primary mt-1 text-xs"></i>
                  <span><strong class="text-dark font-semibold">技术信息</strong>：访问本网站时自动采集的浏览器类型、访问时间与页面浏览记录。</span>
                </li>
              </ul>
            </div>

            <div id="use" class="scroll-mt-28">
              <h2 class="text-2xl font-bold text-dark mb-4">二、信息的使用方式</h2>
              <p class="text-sm text-dark/60 leading-relaxed mb-4">我们收集的信息将严格用于以下目的：</p>
              <ul class="space-y-3 text-sm text-dark/60">
                <li class="flex items-start gap-3">
                  <i class="fa-solid fa-circle-check text-primary mt-1 text-xs"></i>
                  响应您的咨询与需求，提供核医学场所建设相关的方案沟通与技术测算；
                </li>
                <li class="flex items-start gap-3">
                  <i class="fa-solid fa-circle-check text-primary mt-1 text-xs"></i>
                  在工程合作过程中进行业务对接、合同履约与后期7×24小时运维服务；
                </li>
                <li class="flex items-start gap-3">
                  <i class="fa-solid fa-circle-check text-primary mt-1 text-xs"></i>
                  持续优化本网站的内容呈现质量与浏览访问体验。
                </li>
              </ul>
            </div>

            <div id="share" class="scroll-mt-28">
              <h2 class="text-2xl font-bold text-dark mb-4">三、信息的共享与披露</h2>
              <p class="text-sm text-dark/60 leading-relaxed mb-4">
                我们承诺对您的信息严格保密，<strong class="text-dark font-semibold">绝不向任何无关第三方出售您的个人信息</strong>。仅在以下法定或业务协同情形中可能共享：
              </p>
              <ul class="space-y-3 text-sm text-dark/60">
                <li class="flex items-start gap-3">
                  <i class="fa-solid fa-circle-check text-primary mt-1 text-xs"></i>
                  获得您的明确书面同意或授权；
                </li>
                <li class="flex items-start gap-3">
                  <i class="fa-solid fa-circle-check text-primary mt-1 text-xs"></i>
                  为履行项目建设协同所需，向深度合作的资质设计院或设备原厂提供必要技术对接信息；
                </li>
                <li class="flex items-start gap-3">
                  <i class="fa-solid fa-circle-check text-primary mt-1 text-xs"></i>
                  依据国家法律法规、司法机关或监管部门的法定程序调取。
                </li>
              </ul>
            </div>

            <div id="store" class="scroll-mt-28">
              <h2 class="text-2xl font-bold text-dark mb-4">四、信息的存储与安全保障</h2>
              <p class="text-sm text-dark/60 leading-relaxed mb-4">
                您的数据存储于中华人民共和国境内符合国家网络安全等级保护标准的机房。我们采取 HTTPS 加密传输、数据库多重备份与访问权限严格隔离等安全措施。
              </p>
            </div>

            <div id="rights" class="scroll-mt-28">
              <h2 class="text-2xl font-bold text-dark mb-4">五、您的权利</h2>
              <p class="text-sm text-dark/60 leading-relaxed mb-4">在符合法律法规的前提下，您对自己的个人信息享有查阅、更正、删除及撤回授权的权利。</p>
            </div>

            <div id="contact" class="scroll-mt-28">
              <h2 class="text-2xl font-bold text-dark mb-4">六、联系我们</h2>
              <p class="text-sm text-dark/60 leading-relaxed">
                若您对本政策有任何疑问或个人信息安全诉求，请随时通过以下方式与我们联系：<br>
                电话：{{ companyContact.phone }}<br>
                邮箱：{{ companyContact.email }}<br>
                地址：{{ companyContact.address }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
