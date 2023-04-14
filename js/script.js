/*

*/

const { createApp } = Vue ;

createApp({
  data(){
    return {
      tasks: [
        {text : 'test task a', done: false, bgColor : '', priority:''},
        {text : 'test task b', done: true, bgColor : '', priority:''},
        {text : 'test task c', done: false, bgColor : '', priority:''},
        {text : 'test task c', done: false, bgColor : '', priority:''},
        {text : 'test task c', done: true, bgColor : '', priority:''},
        {text : 'test task c', done: false, bgColor : '', priority:''},
      ]

    }
  },

  methods: {

  },

  mounted(){
    
  }
}).mount('#app')