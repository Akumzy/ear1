<template>
  <div class="dark:bg-black bg-white">
    <nav class="h-28">
      <container class="flex items-center h-full justify-between">
        <a href="">
          <img src="/logo.png" alt="Ear1's logo" />
        </a>
        <div class="space-x-10 hidden md:block">
          <nav-link href="/">Home</nav-link>
          <nav-link href="/about">About</nav-link>
          <nav-link href="/features">Features</nav-link>
          <nav-link href="/contact">Contact</nav-link>
        </div>
        <div class="space-x-8 hidden md:block">
          <auth-button class="border-ui-green text-black" href="/login"
            >Login</auth-button
          >
          <auth-button class="bg-ui-green text-white" href="/sign-up"
            >Sign Up</auth-button
          >
        </div>
      </container>
    </nav>
    <header class="md:h-600 bg-hero-md-banner bg-cover flex">
      <div
        class="w-full h-full bg-black bg-opacity-80 flex items-center justify-center"
      >
        <div class="md:w-3/5 flex">
          <div>
            <img class="md:w-52" src="/logo-icon.svg" alt="Logo" />
          </div>
          <div class="pl-4 text-white space-y-10">
            <div class="space-y-4 w-4/5">
              <span class="font-bold text-xl flex justify-center md:w-4/5"
                >Ear1</span
              >
              <h1 class="font-bold text-6xl">Talk to anyone</h1>
              <p class="text-center">
                Think: LinkedIn + OnlyFans. Use ear1 to talk to any top person
                in your field for a small fee.
              </p>
            </div>
            <div class="space-x-10 flex">
              <i-store-button />
              <play-store-button />
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="py-6">
      <container class="py-14">
        <section class="grid md:grid-cols-2 gap-14">
          <div class="flex justify-center">
            <img src="/section-1-img.png" />
          </div>
          <div class="">
            <p class="font-semibold text-ui-green text-2xl">
              Talk to audience that pay
            </p>
            <h2 class="font-semibold text-6xl pt-4 pb-6">
              Get paid to check your DM
            </h2>
            <p class="text-accent-1 mb-10">
              Ear1 is built for influencers and audiences in various regions on
              day one. Influencers can collect payments in Naira, Cedis or
              Dollars. Audiences can also pay influencers in similar currencies.
            </p>
            <i-store-button />
          </div>
        </section>
      </container>
      <container class="py-14">
        <section class="grid md:grid-cols-2 gap-14">
          <div class="">
            <p class="font-semibold text-ui-green text-2xl">
              Filters out your messages
            </p>
            <h2 class="font-semibold text-6xl pt-4 pb-6">
              Get important message only
            </h2>
            <p class="text-accent-1 mb-10">
              Sending a DM should no more be an issue of shooting your shot or
              trying your luck. Anyone can setup an ear1 profile and set a price
              for people contacting them.
            </p>
            <play-store-button class="text-black" />
          </div>
          <div class="flex justify-center">
            <img src="/section-2-img.png" />
          </div>
        </section>
      </container>
      <container class="py-14">
        <h2
          class="font-semibold text-6xl text-center md:w-3/6 mx-auto py-10 bg-comment bg-comment-icon bg-no-repeat"
        >
          More than a messaging platform
        </h2>
        <div class="flex justify-evenly mt-14">
          <template
            v-for="text of [
              'Get only serious DMs',
              'Anyone can setup an ear1 profile',
              'Talk to any top person in your field',
              'Get paid while answering questions',
            ]"
            :key="text"
          >
            <outline :text="text" />
          </template>
        </div>
      </container>
      <section class="bg-accent-2">
        <container class="py-14 text-center">
          <h2 class="font-semibold text-6xl mb-6">Everyone loves Ear1</h2>
          <p>
            And they get paid while answering questions and making connections.
          </p>
        </container>
        <div class="max-w-1440 overflow-x-hidden mx-auto">
          <div
            class="flex overflow-x-hidden w-full py-4 space-x-4 justify-center"
          >
            <template v-for="user of 10" :key="user">
              <shout-out-card />
            </template>
          </div>
          <p class="text-center pt-8 pb-4">
            With five star rating on all platforms
          </p>
          <div class="flex justify-center">
            <div class="space-x-2 flex">
              <rating-star v-for="rating of 5" :key="rating" />
            </div>
          </div>
          <div class="space-x-10 flex py-14 justify-center">
            <i-store-button />
            <play-store-button />
          </div>
        </div>
      </section>
      <container class="py-14">
        <section class="grid md:grid-cols-2 gap-14">
          <div class="flex flex-col justify-center">
            <p class="font-semibold text-ui-green text-2xl">
              Keep watching out.
            </p>
            <h2 class="font-semibold text-6xl pt-4 pb-6">
              So much more in store
            </h2>
            <p class="text-accent-1 mb-10">
              Can’t wait to start using ear1? Join Us now
            </p>
            <div class="space-x-10 flex space-x-8">
              <i-store-button />
              <play-store-button />
            </div>
          </div>
          <div class="flex justify-center">
            <img src="/section-3-img.png" />
          </div>
        </section>
      </container>
    </main>
    <footer class="bg-black">
      <container class="py-14 flex">
        <div class="w-1/5"><img src="/footer-logo.png" alt="" /></div>
        <div class="text-white w-1/5">
          <dl>
            <dt class="font-medium text-lg pb-4">Company</dt>
            <dd class="font-light text-sm py-1"><a href="/about">About</a></dd>
            <dd class="font-light text-sm py-1">
              <a href="/careers">Careers</a>
            </dd>
          </dl>
        </div>
        <div class="text-white w-1/5">
          <dl>
            <dt class="font-medium text-lg pb-4">Help</dt>
            <dd class="font-light text-sm py-1">
              <a href="/support">Support</a>
            </dd>
            <dd class="font-light text-sm py-1">
              <a href="/contact">Contact</a>
            </dd>
          </dl>
        </div>
        <div class="w-2/5">
          <div class="space-x-10 flex justify-center h-full items-center">
            <i-store-button />
            <play-store-button class="text-white" />
          </div>
        </div>
      </container>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AuthButton from "./components/AuthButton.vue";
import Container from "./components/Container.vue";
import IStoreButton from "./components/IStoreButton.vue";
import NavLink from "./components/NavLink.vue";
import Outline from "./components/Outline.vue";
import PlayStoreButton from "./components/PlayStoreButton.vue";
import RatingStar from "./components/RatingStar.vue";
import ShoutOutCard from "./components/ShoutOutCard.vue";

export default defineComponent({
  name: "App",
  components: {
    Container,
    NavLink,
    AuthButton,
    IStoreButton,
    PlayStoreButton,
    Outline,
    ShoutOutCard,
    RatingStar,
  },
});
</script>
