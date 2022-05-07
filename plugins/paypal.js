import Vue from 'vue'
import braintree from 'braintree-web'
import paypal from 'paypal-checkout'
Vue.prototype.$Braintree = braintree
Vue.prototype.$Paypal = paypal