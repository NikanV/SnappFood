<template>
  <div class="md:flex flex-col min-h-screen bg-neutral-200 dark:bg-neutral-700 font-body">
  <div class="grid md:grid-cols-6 flex-grow ">
    <div class="md:col-span-1 md:flex md:justify-center " style="background: linear-gradient(to left, #ee782481, #d83639a3, #dd3675, #b44593);">
          <nav>
            <div class="flex justify-between items-center hover:text-red-800 text-4xl tracking-widest transition ease-out duration-500">
              <h1 class="p-4 text-2xl font-bold border-b border-gray-700">
                SnappFood
              </h1>
              <div class="px-4 cursor-pointer md:hidden" id="burger">
                <svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </div>
            </div>
            <ul class="text-center navBar mt-6 hidden md:block " id="menu">
              <li class=" font-bold py-1">
                <a href="#" class="pt-5 block px-4 flex justify-center hover:text-blue-200 transition ease-out duration-500">
                  <router-link to="/">Home</router-link>
                  <svg class="w-5 ml-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                </a>
              </li>
              <li class="py-1">
                <a href="#" class="pt-5 block px-4 flex justify-center hover:text-blue-200 transition ease-out duration-500">
                  <router-link to="/about">About us</router-link>
                  <svg class="w-5 ml-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                </a>
              </li>
              <li class="py-1">
                <a href="#" class="pt-5 block px-4 flex justify-center hover:text-blue-200 transition ease-out duration-500">
                  <span>Contact</span>
                  <svg class="w-5 ml-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </a>
              </li>
              <li class=" font-bold py-1">
                <a href="#" class="pt-5 block px-4 flex justify-center hover:text-blue-200 transition ease-out duration-500">
                  <router-link to="/signup">Profile</router-link>
                  <svg class="w-5 ml-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg>
                </a>
              </li>
              <li class=" font-bold py-1">
                <a href="#" class="pt-5 block px-4 flex justify-center hover:text-blue-200 transition ease-out duration-500">
                  <router-link to="/signup">Cart</router-link>
                  <svg class="w-5 ml-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path></svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
  <section class="gradient-form h-full  md:col-span-5">
  <div class="container h-full p-10">
    <div
      class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
      <div class="w-full">
        <div
          class="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
          <div class="g-0 lg:flex lg:flex-wrap">
            <!-- Left column container-->
            <div class="px-4 md:px-0 lg:w-6/12">
              <div class="md:mx-6 md:p-12">
                <!--Logo-->
                <div class="text-center">
                  <img
                    class="mx-auto w-48"
                    src="../assets/img/logo.png"
                    alt="logo" />
                  <h4 class="mb-12 mt-1 pb-1 text-xl font-semibold">
                    Good food , Good mood!
                  </h4>
                </div>

                <form>
                  <p class="mb-4">Create a new account</p>
                  <!--Username input-->
                  <div class="relative mb-4" data-te-input-wrapper-init>
                    <input
                      type="text"
                      class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="username-id"
                      v-model="username"
                      @input="resetInvalidPass"
                      placeholder="Username" />
                    <label
                      for="exampleFormControlInput1"
                      class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >Username
                    </label>
                  </div>

                  <!--Password input-->
                  <div class="relative mb-4" data-te-input-wrapper-init>
                    <input
                      type="password"
                      class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="password-id"
                      v-model="password"
                      @input="resetInvalidPass"
                      placeholder="Password" />
                    <label
                      for="exampleFormControlInput11"
                      class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >Password
                    </label>
                  </div>

                  <!--re enter Password input-->
                  <div class="relative mb-4" data-te-input-wrapper-init>
                    <input
                      type="password"
                      class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="password2-id"
                      v-model="password2"
                      @input="resetInvalidPass"
                      placeholder="re enter Password" />
                    <label
                      for="exampleFormControlInput11"
                      class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >re-enter Password
                    </label>
                  </div>

                  <!--Submit button-->
                  <div class="mb-6 pb-1 pt-1 text-center">
                    <button
                      @click="submit"
                      class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                      type="button"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      style="
                        background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
                      ">
                      Sign up
                    </button>

                  </div>
                  <div class="mb-6 pb-1 pt-1 text-center" v-show="password.$dirty || invalidPassword">
                    <span class="text-red-600" v-if="invalidPassword && password.length > 0">Passwords don't match!</span>
                  </div>
                  <!--Register button-->
                  <div class="flex items-center justify-between pb-6">
                    <p class="mb-0 mr-2">Already have an account?</p>
                    <button
                      @click="gotoLoginPage"
                      type="button"
                      class="btn hover:bg-red-600 hover:text-white transition ease-out duration-500"
                      data-te-ripple-init
                      data-te-ripple-color="light">
                      Log in
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <!-- Right column container with background and description-->
            <div class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none">
              <img src="../assets/img/pizza.jpg" class=" object-cover rounded-b-lg lg: w-full h-full lg:rounded-r-lg lg:rounded-bl-none">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
</div>
</template>

<script>
import BaseIcon from "@/components/shared/baseIcon.vue";
import Parse from 'parse';

import {Input, Ripple, initTE} from "tw-elements"

initTE({Input, Ripple})

export default {
  name: "SignupPage",
  components: {
    BaseIcon,
  },
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      isPasswordHidden: true,
      emailSuggestion: [
        "@gmail.com",
        "@yahoo.com",
        "@hotmail.com",
        "@outlook.com",
        "@ymail.com",
        "@live.com",
        "@protonmail.com",
        "@proton.me",
        "@icloud.com",
        "@chmail.ir",
      ],
      isUsernameFocus: false,
      isSubmitting: false,
      invalidPassword: false,
    };
  },
  methods: {
    async submit() {
      if (this.password != this.password2) {
        this.invalidPassword = true
      } else {
        const user = new Parse.User();
        user.set('username', this.emailUserPart);
        user.set('email', this.username);
        user.set('password', this.password);
        user.set('credit', 1000);
  
        try {
            let userResult = await user.signUp();
            console.log('User signed up', userResult);
            await this.$router.push({name: "LoginPage"});
        } catch (error) {
            console.error('Error while signing up user', error);
        }
      }
    },
    resetInvalidPass() {
      this.invalidPassword = false
    },
    setUsername(domain) {
      this.username = `${this.emailUserPart}${domain}`;
      this.isUsernameFocus = false;
      this.$nextTick(() => {
        this.$refs.passwordRef?.focus();
      });
    },
    gotoLoginPage() {
      this.$router.push({name: "LoginPage"})
    }
  },
  computed: {
    domain() {
      return this.username.toLowerCase().split("@")[1] || "";
    },
    emailUserPart() {
      return this.username.toLowerCase().split("@")[0] || "";
    },
    emailArray() {
      return this.username.includes("@") ? this.emailSuggestion : [];
    },
    showSuggests() {
      return this.username && this.isUsernameFocus && this.emailArray.length > 0;
    },
    passwordRequirements() {
      return [
        {
          caption: "At least one letter",
          isMet: /.*?[A-Za-z]/.test(this.password),
        },
        {
          caption: "At least one number",
          isMet: /.*[0-9].*/.test(this.password),
        },
        {
          caption: "Minimum eight characters",
          isMet: this.password.length >= 8,
        },
      ];
    },
    password2Requirements() {
      return [
        {
          caption2: "At least one letter",
          isMet2: /.*?[A-Za-z]/.test(this.password2),
        },
        {
          caption2: "At least one number",
          isMet2: /.*[0-9].*/.test(this.password2),
        },
        {
          caption2: "Minimum eight characters",
          isMet2: this.password2.length >= 8,
        },
      ];
    },
    isPasswordRequirementsMet() {
      return this.passwordRequirements.every((item) => item.isMet) && this.password2Requirements.every((item) => item.isMet2);
    },
  },
};
</script>
