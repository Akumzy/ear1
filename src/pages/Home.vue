<template>
  <app-nav />
  <header class="h-[400px] md:h-700 bg-m-brown">
    <div
      class="container grid md:grid-cols-2 h-full border-l border-r border-dashed border-gray-50 pb-8"
    >
      <div class="pl-4 md:pl-6 flex flex-col items-stretch">
        <div class="relative flex items-end md:items-center justify-center h-full">
          <div class="md:w-2/3">
            <h1 class="text-4xl md:text-6xl font-black capitalize mb-6">
              High quality tailoring
            </h1>
            <p class="mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, quo corporis unde tempora velit mollitia vel tempore
              nam illo dolores!
            </p>
            <a
              href=""
              class="h-12 bg-black w-52 uppercase text-white font-semibold inline-flex justify-center items-center"
              >Gallery</a
            >
          </div>
        </div>
      </div>
      <div class="h-full justify-center py-10 hidden md:flex">
        <img src="/images/img1.png" width="350" alt="" />
      </div>
    </div>
  </header>
  <main>
    <section
      class="container px-4 md:px-0 py-8 md:py-32 border-l border-r border-dashed border-m-brown"
    >
      <div
        class="md:w-3/4 flex flex-wrap  overflow-x-auto items-stretch mx-auto md:grid md:grid-cols-3 gap-6"
      >
        <div class="md:w-80">
          <div class="bg-yellow-200 h-80 w-full"></div>
          <div>
            <h3 class="text-2xl my-4 font-semibold">Tailor corrections</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              minima fuga sequi maiores modi labore consequuntur alias dolorum!
              Distinctio, reprehenderit.
            </p>
          </div>
        </div>
        <div class="">
          <div class="bg-yellow-200 h-80 w-full"></div>
          <div>
            <h3 class="text-2xl my-4 font-semibold">Tailor corrections</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              minima fuga sequi maiores modi labore consequuntur alias dolorum!
              Distinctio, reprehenderit.
            </p>
          </div>
        </div>
        <div class="">
          <div class="bg-yellow-200 h-80 w-full"></div>
          <div>
            <h3 class="text-2xl my-4 font-semibold">Tailor corrections</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              minima fuga sequi maiores modi labore consequuntur alias dolorum!
              Distinctio, reprehenderit.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="container px-4 md:px-0 py-14 md:py-32 md:grid md:grid-cols-2 md:grid-rows-2 md:h-700 w-full gap-4 border-l border-r border-dashed border-m-brown"
    >
      <div class="col-span-1 row-start-1 row-end-2">
        <div class="md:w-2/3 md:ml-8">
          <h2 class="text-2xl md:text-4xl font-black uppercase leading-normal">
            Modern Look <br />
            Fresh & Clean style
          </h2>
          <p class="text-xl mt-6 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            nisi excepturi quis?
          </p>
        </div>
      </div>
      <div class="col-start-1 col-end-2 bg-red-50 row-start-2 row-end-3">
        <img src="/images/img3.png" alt="" />
      </div>
      <div
        class="col-start-2 col-end-3 bg-gray-50 row-start-1 row-end-3 flex justify-center"
      >
        <img src="/images/img1.png" alt="" />
      </div>
    </section>
    <section
      class="container md:py-32 border-l border-r border-dashed border-m-brown"
    >
      <div class="grid md:grid-cols-3 md:h-700 w-full gap-8">
        <div class="bg-gray-200"></div>
        <div class="bg-gray-100"></div>
        <div class="bg-gray-100"></div>
      </div>
    </section>
  </main>
  <footer class="bg-black">
    <div
      class="container px-4 py-10 md:py-32 text-m-brown border-l border-r border-dashed border-m-brown"
    >
      <div class="grid gap-y-6 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-x-8">
        <div>
          <div class="text-m-brown uppercase text-4xl">Maxwosley</div>
        </div>
        <div class="flex md:justify-center">
          <dl>
            <dt class="text-lg font-semibold mb-4">Services</dt>
            <dd><a class="py-2" href="#">Service on2</a></dd>
            <dd><a class="py-2" href="#">Service on2</a></dd>
            <dd><a class="py-2" href="#">Service on2</a></dd>
            <dd><a class="py-2" href="#">Service on2</a></dd>
          </dl>
        </div>
        <div class="flex md:justify-center">
          <dl>
            <dt class="text-lg font-semibold mb-4">Services</dt>
            <dd><a class="py-2" href="#">Service on2</a></dd>
            <dd><a class="py-2" href="#">Service on2</a></dd>
            <dd><a class="py-2" href="#">Service on2</a></dd>
            <dd><a class="py-2" href="#">Service on2</a></dd>
          </dl>
        </div>
        <div class="flex md:justify-center">
          <dl>
            <dt class="text-lg font-semibold mb-4">Services</dt>
            <dd><a class="py-2" href="#">Service on2</a></dd>
            <dd><a class="py-2" href="#">Service on2</a></dd>
            <dd><a class="py-2" href="#">Service on2</a></dd>
            <dd><a class="py-2" href="#">Service on2</a></dd>
          </dl>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppNav from '../components/AppNav.vue';

export default defineComponent({
  name: "Home",
  components: {AppNav},
});
</script>
