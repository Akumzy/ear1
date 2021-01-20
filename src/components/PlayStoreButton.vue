<template>
  <a
  href="#play-store"
    class="h-14 md:h-16 w-44 space-x-4 rounded-lg border border-ui-green flex items-center justify-center"
  >
    <svg
      width="24"
      height="27"
      viewBox="0 0 24 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.7058 17.1457C20.7498 15.4743 23.0573 14.2007 23.2562 14.1017C23.8925 13.7634 24.5496 12.8678 23.2562 12.1722C22.8386 11.9534 20.5904 10.7195 17.7058 9.1282L13.707 13.1667L17.7058 17.1456V17.1457Z"
        fill="#FFD900"
      />
      <path
        d="M13.7072 13.1668L0.974609 25.9993C1.27347 26.0389 1.61088 25.9597 2.00868 25.741C2.84384 25.2838 11.6974 20.4488 17.706 17.1467L13.7072 13.1668Z"
        fill="#F43249"
      />
      <path
        d="M13.7075 13.1667L17.7063 9.14814C17.7063 9.14814 2.90449 1.0702 2.00893 0.59335C1.67153 0.393513 1.29342 0.334153 0.955078 0.393513L13.7075 13.1667Z"
        fill="#00EE76"
      />
      <path
        d="M13.7073 13.1668L0.954919 0.393585C0.43737 0.513243 0 0.970494 0 1.90563V24.4873C0 25.3432 0.338437 25.9597 0.974706 26.0191L13.7073 13.1668Z"
        fill="#00D3FF"
      />
    </svg>

    <div class="flex flex-col">
      <span class="text-sm">Get Ear1 on</span>
      <span class="font-medium">Play Store</span>
    </div>
  </a>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "PlayStoreButton",
  setup: (props) => {
    return {};
  },
});
</script>
