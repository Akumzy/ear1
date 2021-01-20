<template>
  <a
    class="text-xl w-40 h-14 inline-flex items-center justify-center border border-transparent rounded-lg"
  >
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "NavLink",

  setup: (props) => {
    return {};
  },
});
</script>
