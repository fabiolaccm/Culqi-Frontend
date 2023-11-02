import { ref } from 'vue';
import axios from '@/config/axios';
import { useToast } from 'vue-toastification';

export default {
  setup() {
    const toast = useToast();
    const token = ref('');
    const card = ref(null);
    const error = ref(null);

    const searchCard = async () => {
      const currentUserStr = localStorage.getItem('currentUser');
      const currentUser = JSON.parse(currentUserStr);
      const headers = {
        'commerce-identifier': currentUser.pk,
        Authorization: token.value,
        'Content-Type': 'application/json',
      };

      try {
        const response = await axios.get('/v1/tokens/card-info', { headers });
        card.value = {
          cardNumber: response.data.card_number,
          cardExpiry: `${response.data.expiration_month}/${response.data.expiration_year}`,
        };
      } catch (error) {
        card.value = null;
        showError(error.response.data.message);
      }
    };

    const showError = (message) => {
      toast.error(message, {
        position: 'top-right',
        timeout: 5000,
        closeOnClick: true,
        closeButton: 'button',
        icon: 'fas fa-rocket',
        rtl: false,
      });
    };

    return {
      token,
      card,
      error,
      searchCard,
    };
  },
};