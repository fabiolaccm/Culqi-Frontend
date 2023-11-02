import { ref } from "vue";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
import axios from "@/config/axios";

export default {
  setup() {
    const toast = useToast();
    const router = useRouter();

    const username = ref("");
    const password = ref("");

    const login = async () => {
      const request = {
        user: username.value,
        password: password.value,
      };

      try {
        const response = await axios.post("/v1/login", request);
        localStorage.setItem("currentUser", JSON.stringify(response.data));
        router.push({ name: "Tokenize" });
      } catch (error) {
        showError(error.response.data.message);
      }
    };

    const showError = (message) => {
      toast.error(message, {
        position: "top-right",
        timeout: 5000,
        closeOnClick: true,
        closeButton: "button",
        icon: "fas fa-rocket",
        rtl: false,
      });
    };

    return {
      username,
      password,
      login,
    };
  },
};