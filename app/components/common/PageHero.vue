<script setup lang="ts">
interface Props {
  tag: string;
  tagIcon?: string;
  title: string;
  highlight?: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
}

withDefaults(defineProps<Props>(), {
  tagIcon: "fa-solid fa-circle-check",
  highlight: "",
  imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1470&auto=format&fit=crop",
  imageAlt: "贝瑞医疗",
});
</script>

<template>
  <section class="bg-linear-to-br from-white via-light to-white overflow-hidden border-b border-gray-100/60">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- 左侧文字 -->
        <div class="space-y-6">
          <div
            class="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide"
          >
            <i :class="[tagIcon, 'text-[10px]']"></i> {{ tag }}
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-[1.15] tracking-tight">
            {{ title }}<br v-if="highlight">
            <span v-if="highlight" class="text-primary">{{ highlight }}</span>
          </h1>
          <p class="text-base text-dark/60 leading-relaxed max-w-lg">
            {{ description }}
          </p>

          <!-- 槽位：行动号召按钮或锚点导航 -->
          <div v-if="$slots.actions" class="flex flex-wrap items-center gap-3 pt-2">
            <slot name="actions" />
          </div>
        </div>

        <!-- 右侧主视觉 -->
        <div
          v-if="imageUrl"
          class="rounded-3xl overflow-hidden shadow-2xl shadow-dark/10 bg-light aspect-4/3 flex items-center justify-center border border-gray-100"
        >
          <img
            :src="imageUrl"
            :alt="imageAlt"
            class="w-full h-full object-cover hover:scale-102 transition duration-700"
            loading="eager"
          >
        </div>
      </div>
    </div>
  </section>
</template>
