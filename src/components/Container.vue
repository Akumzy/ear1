<template>
  <section class="md:max-w-1180 mx-auto px-4 md:px-0">
    <slot></slot>
  </section>
</template>
    
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Container",
  setup() {
    return {};
  },
});
</script>