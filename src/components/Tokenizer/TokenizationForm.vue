<template>
  <div>
    <InternalMenu />
    <div class="container mx-auto mt-10">
      <div class="bg-white shadow-md rounded-md p-4 sm:w-1/2 mx-auto">
        <div class="text-center">
          <h3 style="color: #1f263e; font-family:Helvetica; font-size: 25px; font-weight: 400;">Tokenización de Tarjeta</h3>
          <div class="logo"></div>
        </div>
        <div class="mt-6 container shadow">
          <form id="payment-form" @submit.prevent="submitCard">
            <div class="mb-4">
              <label class="block text-left text-gray-600 font-bold mb-2" for="cardNumber">Número de Tarjeta</label>
              <div class="relative rounded-md shadow-sm">
                <input
                  class="form-input py-2 px-3 block w-full rounded-md border focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                  :class="{'border-red-500': !isValidCardNumber}"
                  name="cardNumber"
                  id="cardNumber"
                  v-model="cardNumber"
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                  @input="validateCardNumber"
                  required
                  autofocus
                />
                <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <i class="fa fa-credit-card text-purple-600" style="font-size: 2rem;"></i>
                </div>
              </div>
            </div>
            <div class="mb-4 flex">
              <div class="w-2/3 pr-2">
                <label class="block text-left text-gray-600 font-bold mb-2" for="cardExpiry">Fecha Expiración</label>
                <input
                  class="form-input py-2 px-3 block w-full rounded-md border focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                  :class="{'border-red-500': !isValidExpirationCard}"
                  name="cardExpiry"
                  id="cardExpiry"
                  v-model="cardExpiry"
                  placeholder="MM/YYYY"
                  @input="validateExpirationCard"
                  type="text"
                  required
                />
              </div>
              <div class="w-1/3 pl-2">
                <label class="block text-left text-gray-600 font-bold mb-2" for="cardCVV">CVV</label>
                <input
                  class="form-input py-2 px-3 block w-full rounded-md border focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                  :class="{'border-red-500': !isValidCvv}"
                  @input="validateCvv"
                  name="cardCVV"
                  id="cardCVV"
                  type="text"
                  v-model="cardCVV"
                  placeholder="CVV"
                  required
                />
              </div>
            </div>
            <div class="mb-4">
                <label class="block text-left text-gray-600 font-bold mb-2" for="email">Email</label>
                <input 
                    class="form-input py-2 px-3 block w-full rounded-md border focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200" 
                    :class="{'border-red-500': !isValidEmail}"
                    name="email" 
                    id="email" 
                    type="text" 
                    v-model="email"
                    placeholder="user@gmail.com"
                    required
                />
            </div>
            <div class="mb-4">
              <button 
                class="bg-green-500 text-white font-bold py-2 px-4 rounded-md w-full"
                type="submit"
                :disabled="isFormInvalid"
                 >Generar token</button>
            </div>

            <div v-if="showResponse" class="mb-4">
                <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md" role="alert">
                    <label class="block text-gray-600 font-bold mb-2">Token:</label>
                    <p>{{ serverResponse }}</p>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tokenization from './Tokenization.js';

export default {
  setup() {
    return Tokenization.setup();
  },
};
</script>