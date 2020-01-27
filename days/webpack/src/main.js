const {
    a,
    b,
    sum
} = require('./aa.js');

console.log(a);
console.log(b);
console.log(sum(12, 12));

require('./css/nomal.css');

import Vue from "vue";
import vueApp from "./vue_module_build/app.vue"
let app = new Vue({
    template: '<vueApp/>',
    el: '#app',
    data: {
        message: "hello world"
    },
    components: {
        vueApp
    }

});