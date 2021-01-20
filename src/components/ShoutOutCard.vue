<template>
  <div class="w-250 flex bg-white rounded-lg p-8 space-x-6 flex-shrink-0">
    <div class="w-10 h-10 rounded-full">
      <img src="/davido.png" alt="Davido" class="w-full h-full rounded-full" />
    </div>
    <div>
      <span class="font-bold text-2xl">Davido</span>
      <p>Amet minim mollit non deserunt</p>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "ShoutOutCard",
  setup: (props) => {
    return {};
  },
});
</script>
