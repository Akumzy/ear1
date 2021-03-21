<template>
  <nav
    class="h-16 md:h-20 w-full border-b border-gray-200 sticky top-0 bg-white z-10"
  >
    <div class="flex items-center justify-between w-full h-full px-2 md:hidden">
      <a href="#menu" class="flex h-full items-center px-2">
        <span class="border-t-2 border-b-2 h-4 border-black inline-flex w-8" />
      </a>

      <a href="/"> <span class="uppercase">Maxwosleys</span></a>

      <div class="flex h-full space-x-1">
        <a
          href="#search"
          class="inline-flex px-2 items-center justify-center h-full"
        >
          <search-icon />
        </a>
        <a
          href="#cart"
          class="inline-flex px-2 items-center justify-center h-full"
        >
          <bag-icon />
        </a>
      </div>
    </div>
    <div class="container md:flex justify-between items-center h-full hidden">
      <div class="space-x-4 w-1/3">
        <template v-for="page of pagesLeft" :key="page.path">
          <router-link
            class="font-semibold text-black text-lg px-4"
            :to="page.path"
            v-text="page.name"
          />
        </template>
      </div>
      <div class="w-1/3 flex justify-center">
        <span class="uppercase text-4xl">Maxwosley</span>
      </div>
      <div class="space-x-4 w-1/3 justify-end flex">
        <a
          href="#search"
          class="inline-flex px-2 items-center justify-center h-full"
        >
          <search-icon />
        </a>
        <a
          href="#cart"
          class="inline-flex px-2 items-center justify-center h-full"
        >
          <bag-icon />
        </a>
        <router-link
          class="font-semibold text-black text-lg px-4"
          to="/login"
          v-text="'Log in'"
        />
      </div>
    </div>
  </nav>
</template>
    
<script lang="ts">
import { defineComponent } from "vue";
import BagIcon from "./icons/BagIcon.vue";
import SearchIcon from "./icons/SearchIcon.vue";

const pagesLeft = [
  { name: "Men", path: "/men" },
  { name: "Women", path: "/women" },
  { name: "Children", path: "/children" },
  { name: "Sale", path: "/sale" },
];
const pagesRight = [
  { name: "Search", path: "/search" },
  { name: "Stories", path: "/stories" },
  { name: "Log in", path: "/login" },
  { name: "Bag", path: "/bag" },
];
export default defineComponent({
  components: { BagIcon, SearchIcon },
  name: "AppNav",
  setup() {
    return { pagesLeft, pagesRight };
  },
});
</script>