<template>
  <div>
    <InternalMenu />
  </div>

  <div class="container mx-auto p-6">
    <h2 class="text-2xl font-semibold mb-4">Consultar Tarjeta</h2>
    <div class="mb-4">
      <label class="block text-left text-gray-600 font-bold mb-2" for="token">Ingresa token</label>
      <input v-model="token" type="text" id="token" name="token" class="w-full border rounded-md py-2 px-3" />
    </div>
    <button @click="searchCard" class="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Consultar</button>

    <div v-if="card">
      <div class="mb-4">
        <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
          <h3 class="text-lg font-semibold mt-4">Datos de la Tarjeta:</h3>
          <p class="font-bold">Número de Tarjeta: {{ card.cardNumber }}</p>
          <p class="font-bold">Fecha de Vencimiento: {{ card.cardExpiry }}</p>
        </div>
      </div>
    </div>
    <div v-if="error" class="text-red-600 mt-4">{{ error }}</div>
  </div>
</template>

<script>
import SearchToken from './SearchToken.js';

export default {
  setup() {
    return SearchToken.setup();
  },
};
</script>