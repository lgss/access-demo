import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

import 'vuetify/dist/vuetify.min.css';

let vuetify = new Vuetify({
    theme: {
        themes: { 
            light: {
                primary: "#000000",
                secondary: "#999",
            }
        }
    },
});

Vue.use(vuetify)

export default vuetify