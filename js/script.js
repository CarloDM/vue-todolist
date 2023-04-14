/*
1 sistema di aggiunta aggietto ad array tasks
*/

const { createApp } = Vue ;

createApp({
  data(){
    return {
      tasks: [
        {text : 'test task a', done: false, bgColor : 'green', priority:'1'},
      ],

      inputTsk : '',
      inputPriority : 3,
      inputColor : 'red',
      errorMsg : '',
      newTask : {text : '', done: false, bgColor : '', priority:''}

    }
  },

  methods: {
    pressEnter(){
      this.newTask = {text : '', done: false, bgColor : '', priority:''}     
      this.newTask.text = this.inputTsk;
      this.newTask.bgColor = this.inputColor;
      this.newTask.priority = this.inputPriority;
      this.tasks.push(this.newTask)
      console.log('press enter',parseInt(this.inputPriority),this.inputColor,this.newTask )
      this.inputTsk =''
    },

    doneToggle(ind){
      ind.done = !ind.done;    
      console.log('doneToggle',ind)
    },

    cancel(ind){
      if (this.tasks[ind].done){
        console.log(this.tasks[ind].done)
        this.tasks.splice(ind,1);
        this.errorMsg = ''
      }else {
        this.errorMsg = 'devi completare la task prima di poterla cancellare';
        console.log('not',ind)
      }
    }

  },

  mounted(){

    
  }
}).mount('#app')