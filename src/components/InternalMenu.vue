<template>
  <nav class="bg-green-500 p-4 fixed top-0 left-0 right-0 z-10">
    <div class="container mx-auto">
      <ul class="flex justify-center items-center">
        <li>
          <router-link to="/tokenize" active-class="router-link-active" class="px-4 py-2 text-white hover:bg-indigo-600 rounded">Tokenizar Tarjeta</router-link>
        </li>
        <li>
          <router-link to="/consult" active-class="router-link-active" class="px-4 py-2 text-white hover:bg-indigo-600 rounded">Consultar Token</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>