/*
1 sistema di aggiunta aggietto ad array tasks
*/

const { createApp } = Vue ;

createApp({
  data(){
    return {
      tasks: [
        {text :
            'è possibile cambiare colore generale',
            done: false, bgColor : 'task_bg1', priority:'3'},
        {text :
            'le task sono ordinate in base alla priorità',
            done: false, bgColor : 'task_bg3', priority:'2'},
        {text :
            'è possibile variare colore e priorità per ogni task gia inserita',
            done: false, bgColor : 'task_bg4', priority:'1'},
        {text :
            'cosa da fare completata',
            done: true, bgColor : 'task_bg2', priority:'0'},

      ],
      cardColor :'clrPalette0',
      inputTsk : '',
      inputPriority : 0,
      inputColor : 'task_bg1',

      individualPriority : 0,
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
      this.sortTasks();
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
    },

    next(ind){
      if (parseInt(this.tasks[ind].priority) == 4){
        this.tasks[ind].priority = 0 ;
      } else {
        this.tasks[ind].priority ++
      }
      this.sortTasks(),
      console.log(this.tasks[ind]);
    },

    sortTasks(){
      this.tasks.sort((a,b) => (a.priority < b.priority) ? 1 : (a.priority > b.priority) ? -1 : 0);
    }

  },

  mounted(){
    this.sortTasks()
    
  }
}).mount('#app')