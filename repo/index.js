Vue.component('clientes-list', {
    props: ['clientes'],
    template: '<li>{{clientes.nombres}}</li>'
  })


//comentario en JS
var app = new Vue({ 
    el: '#app',
    data () {
        return {
            cliente: null,
        }
    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/cliente/').then(response => this.cliente = response.data)
    },
});
