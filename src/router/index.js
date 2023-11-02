import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login/LoginForm.vue';
import Tokenize from '../components/Tokenizer/TokenizationForm.vue';
import SearchToken from '../components/SearchToken/SearchTokenView.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/tokenize',  name: 'Tokenize', component: Tokenize },
  { path: '/consult',  name: 'SearchToken', component: SearchToken },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
