/*
1 sistema di aggiunta aggietto ad array tasks
*/

const { createApp } = Vue ;

createApp({
  data(){
    return {
      tasks: [
        {text : 'test task a', done: false, bgColor : '', priority:''},
        {text : 'test task b', done: true,  bgColor : '', priority:''},
        {text : 'test task c', done: false, bgColor : '', priority:''},
        {text : 'test task c', done: false, bgColor : '', priority:''},
        {text : 'test task c', done: true,  bgColor : '', priority:''},
        {text : 'test task c', done: false, bgColor : '', priority:''},
      ],

      inputTsk : '',
      newTask : {text : '', done: false, bgColor : '', priority:''}

    }
  },

  methods: {
    pressEnter(){
      this.newTask = {text : '', done: false, bgColor : '', priority:''}
      text = this.inputTsk;
      this.newTask.text = text;
      this.tasks.push(this.newTask)
      console.log('press enter',this.inputTsk,this.newTask)
      this.inputTsk =''
    },

  },

  mounted(){
    addNewTask();
    function addNewTask(){

    }
    
  }
}).mount('#app')