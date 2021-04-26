var app = new Vue({
  el: '#app',
  data:{
    message: 'Hello <span style="color:red;">Vue.js!</span>'
  },
  methods:{
    clickHandler: function(event){
      this.message=this.message.split('').reverse().join('')
    }
  }
})