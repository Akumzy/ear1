<template>
  <a class="font-semibold text-lg dark:text-white text-black">
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
