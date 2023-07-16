<template>
  <body class= "font-body">
  <div class="md:flex flex-col min-h-screen bgHome bg-no-repeat bg-cover bg-clip-border">
    <div class="grid md:grid-cols-6 flex-grow">
      <div class="md:col-span-1 md:flex md:justify-center " style="background: linear-gradient(to left, #ee782481, #d83639a3, #dd3675, #b44593);">
          <nav>
            <div class="flex justify-between items-center hover:text-red-800 text-4xl tracking-widest transition ease-out duration-500">
              <h1 class="p-4 text-2xl font-bold border-b border-gray-700">
                SnapFood
              </h1>
              <div class="px-4 cursor-pointer md:hidden" id="burger">
                <svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </div>
            </div>
            <ul class="text-center navBar mt-6 hidden md:block " id="menu">
              <li class=" font-bold py-1">
                <a href="#" class="pt-5 block px-4 flex justify-center hover:text-blue-200 transition ease-out duration-500">
                  <span>Home</span>
                  <svg class="w-5 ml-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                </a>
              </li>
              <li class="py-1">
                <a href="#" class="pt-5 block px-4 flex justify-center hover:text-blue-200 transition ease-out duration-500">
                  <span>About</span>
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
                  <span>Profile</span>
                  <svg class="w-5 ml-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg>
                </a>
              </li>
              <li class=" font-bold py-1">
                <a href="#" class="pt-5 block px-4 flex justify-center hover:text-blue-200 transition ease-out duration-500">
                  <span>Cart</span>
                  <svg class="w-5 ml-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path></svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="md:col-span-5">
        <main class="px-16 py-6 ">
          <div class="flex justify-center md:justify-end mb-3">
              <router-link to="/login" class="btn hover:bg-red-600 hover:text-white transition ease-out duration-500 ">Log in</router-link>
              <router-link to="/signup" class="btn hover:bg-red-600 hover:text-white transition ease-out duration-500 ml-2">Sign up</router-link>
          </div>
          <div id="home" style="background: rgba(222, 218, 218, 0.681);" class=" h-36 justify-center  rounded-2xl">
              <h1 class="mt-40 pb-5 pt-3 font-bold text-3xl mb-3 text-black">Order food from Snappfood</h1>
              <router-link to="/restaurants" class="btn hover:bg-red-600 hover:text-white transition ease-out duration-500 ml-2 ">Explore Restaurants</router-link>
          </div>
        </main>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');


// export default {
  
//   // name: 'HomePage',
//   // data() {
//   //   return {// // Add more featured restaurants as neede
//   //   };
//   // },
//   // methods: {
//   // }
// };
</script>

