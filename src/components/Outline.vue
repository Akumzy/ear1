<template>
  <div class="flex space-x-4 w-52">
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="50" height="50" rx="5" fill="#CCFFE8" />
      <path
        d="M35 24.0801V25.0001C34.9988 27.1565 34.3005 29.2548 33.0093 30.9819C31.7182 32.7091 29.9033 33.9726 27.8354 34.584C25.7674 35.1954 23.5573 35.122 21.5345 34.3747C19.5117 33.6274 17.7847 32.2462 16.611 30.4372C15.4373 28.6281 14.8798 26.4882 15.0217 24.3364C15.1636 22.1847 15.9972 20.1364 17.3983 18.4972C18.7994 16.8579 20.6928 15.7155 22.7962 15.2403C24.8996 14.765 27.1003 14.9824 29.07 15.8601"
        stroke="#00BF69"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M35 17L25 27.01L22 24.01"
        stroke="#00BF69"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <div>{{text}}</div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "Outline",
  props: {
    text: { required: true, type: String },
  },
  setup: (props) => {
    return {};
  },
});
</script>
