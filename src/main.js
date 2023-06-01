import Vue from 'vue';
import VueHighlightJS from 'vue-highlight.js';

// Highlight.js languages (Only required languages)
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import vue from 'vue-highlight.js/lib/languages/vue';
import router from './router'

/*
* Import Highlight.js theme
* Find more: https://highlightjs.org/static/demo/
*/
import 'highlight.js/styles/default.css';

import App from './App';

/*
* Use Vue Highlight.js
*/
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
