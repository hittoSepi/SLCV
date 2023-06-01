import Vue from 'vue';
import VueHighlightJS from 'vue-highlight.js';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import vue from 'vue-highlight.js/lib/languages/vue';
import App from './App';
import router from './router';
import 'highlight.js/styles/default.css';

Vue.use(VueHighlightJS, {
	// Register only languages that you want
	languages: {
		css,
		javascript,
		vue
	}
});


require('@/assets/css/style.css');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
