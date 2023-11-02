import axios from '@/config/axios';
import { useToast } from "vue-toastification";
import { ref, computed } from 'vue';

export default {
  setup() {
    const toast = useToast();
    const cardNumber = ref('');
    const cardExpiry = ref('');
    const cardCVV = ref('');
    const email = ref('');
    const showResponse = ref(false);
    const serverResponse = ref('');

    const isFormInvalid = computed(() => {
      let isValid = isValidEmail.value && isValidCvv.value && isValidExpirationCard.value && isValidCardNumber.value;
      return !isValid;
    });

    const validateCvv = () => {
      if (cardCVV.value !== null && isNaN(cardCVV.value) || cardCVV.value.length > 4) {
        cardCVV.value = cardCVV.value.slice(0, cardCVV.value.length - 1);
      }
    };

    const validateExpirationCard = () => {
      cardExpiry.value = cardExpiry.value.replace(/[^0-9/]/g, '');
      if (cardExpiry.value.length === 2 && !cardExpiry.value.includes('/')) {
        cardExpiry.value = cardExpiry.value.slice(0, 2) + '/';
      }
      if (cardExpiry.value.length > 7) {
        cardExpiry.value = cardExpiry.value.slice(0, 7);
      }
    };

    const validateCardNumber = () => {
      cardNumber.value = cardNumber.value.replace(/[^0-9-]/g, '');
      if (cardNumber.value.length === 4 || cardNumber.value.length === 9 || cardNumber.value.length === 14) {
        cardNumber.value += '-';
      }

      if (cardNumber.value.length > 19) {
        cardNumber.value = cardNumber.value.slice(0, cardNumber.value.length - 1);
      }
    };

    const isValidEmail = computed(() => {
      const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
      return emailRegex.test(email.value);
    });

    const isValidCvv = computed(() => {
      const cvvRegex = /^[0-9]{3,4}$/;
      return cvvRegex.test(cardCVV.value);
    });

    const isValidExpirationCard = computed(() => {
      const expirationRegex = /^[0-9]{2}\/[0-9]{4}$/;
      return expirationRegex.test(cardExpiry.value);
    });

    const isValidCardNumber = computed(() => {
      const cardNumberRegex = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{1,4}$/;
      const result = cardNumberRegex.test(cardNumber.value);
      return result;
    });

    const showError = (message) => {
      toast.error(message, {
        position: "top-right",
        timeout: 5000,
        closeOnClick: true,
        closeButton: "button",
        icon: "fas fa-rocket",
        rtl: false
      });
    };

    const submitCard = async () => {
      const request = {
        email: email.value,
        card_number: cardNumber.value.replaceAll("-", ""),
        cvv: cardCVV.value,
        expiration_month: cardExpiry.value.slice(0, 2),
        expiration_year: cardExpiry.value.slice(3)
      };

      const currentUserStr = localStorage.getItem('currentUser');
      const currentUser = JSON.parse(currentUserStr);
      const headers = {
        'commerce-identifier': currentUser.pk,
        'Content-Type': 'application/json',
      };

      showResponse.value = true;
      axios.post('/v1/tokens', request, { headers })
        .then(response => {
          serverResponse.value = response.data.token;
        })
        .catch(error => {
          serverResponse.value = 'Error al procesar la solicitud.';
          console.log("errors: " + error);
          if (error.response.data.errors) {
            const errors = error.response.data.errors
              .map(s => s.message)
              .reduce((accumulator, currentValue) => accumulator + "\n" + currentValue);
            showError(errors);
            return;
          }
          showError(error.response.data.message);
        });
    };

    return {
      cardNumber,
      cardExpiry,
      cardCVV,
      email,
      showResponse,
      serverResponse,
      isFormInvalid,
      validateCvv,
      validateExpirationCard,
      validateCardNumber,
      submitCard,
      isValidEmail,
      isValidCvv,
      isValidExpirationCard,
      isValidCardNumber
    };
  },
};