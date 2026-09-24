<script setup lang="ts">
interface Props {
  tag?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
}

withDefaults(defineProps<Props>(), {
  tag: "",
  description: "",
  align: "center",
  dark: false,
});
</script>

<template>
  <div :class="[
    'mb-16',
    align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'
  ]">
    <span v-if="tag" class="text-xs font-bold tracking-[0.2em] uppercase"
      :class="dark ? 'text-primary' : 'text-primary'">
      {{ tag }}
    </span>
    <h2 class="text-3xl sm:text-4xl font-bold mt-3 mb-4 tracking-tight" :class="dark ? 'text-white' : 'text-dark'">
      {{ title }}
    </h2>
    <p v-if="description" class="text-base leading-relaxed" :class="dark ? 'text-white/60' : 'text-dark/50'">
      {{ description }}
    </p>
  </div>
</template>
