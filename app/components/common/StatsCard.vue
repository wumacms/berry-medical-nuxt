<script setup lang="ts">
interface Props {
  icon?: string;
  number: string;
  label: string;
  desc?: string;
}

defineProps<Props>();
</script>

<template>
  <div
    class="bg-white rounded-3xl p-8 text-center shadow-xs border border-gray-100 hover:shadow-xl transition-all duration-300 group"
  >
    <div
      v-if="icon"
      class="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300"
    >
      <i :class="icon"></i>
    </div>
    <span class="block text-4xl lg:text-5xl font-bold text-primary tracking-tight">
      {{ number }}
    </span>
    <span class="text-sm text-dark/70 tracking-wide mt-3 block font-semibold">
      {{ label }}
    </span>
    <p v-if="desc" class="text-xs text-dark/40 mt-2 leading-relaxed">
      {{ desc }}
    </p>
  </div>
</template>
