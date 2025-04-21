<template>
  <my-container>
    <my-title
      title1="Implementing a task list counter"
      title2="In this task, you need to add a real-time updated task counter to the existing Task List Builder. I will give the code below, you will need to add some of the code yourself to implement the functionality"
    ></my-title>
    <study-content>
      <div>
        <h1>Task 4 Code Example</h1>
        <pre>
          <code>
            &lt;!DOCTYPE html&gt;
            &lt;html lang=&quot;en&quot;&gt;
            &lt;head&gt;
                &lt;meta charset=&quot;UTF-8&quot;&gt;
                &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
                &lt;title&gt;Task list generator&lt;/title&gt;
                &lt;style&gt;
                    body {
                        font-family: Arial, sans-serif;
                        margin: 20px;
                    }
                    #taskInput {
                        width: 300px;
                        padding: 10px;
                        font-size: 16px;
                    }
                    #addTaskButton {
                        padding: 10px;
                        font-size: 16px;
                        cursor: pointer;
                    }
                    .task {
                        padding: 10px;
                        margin: 5px 0;
                        border: 1px solid #ccc;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    .completed {
                        text-decoration: line-through;
                        color: grey;
                    }
                &lt;/style&gt;
            &lt;/head&gt;
            &lt;body&gt;
    
                &lt;h1&gt;Task list generator&lt;/h1&gt;
                &lt;input type=&quot;text&quot; id=&quot;taskInput&quot; placeholder=&quot;Enter task description&quot;&gt;
                &lt;button id=&quot;addTaskButton&quot;&gt;Add Task&lt;/button&gt;
                &lt;h2&gt;Tasks:&lt;/h2&gt;
                &lt;div id=&quot;taskList&quot;&gt;&lt;/div&gt;
    
                &lt;script&gt;
                    let tasks = [];
    
                    document.getElementById('addTaskButton').addEventListener('click', () =&gt; {
                        const taskInput = document.getElementById('taskInput');
                        const description = taskInput.value.trim();
    
                        if (description) {
                            const newTask = {
                                description: description,
                                completed: false
                            };
                            tasks.push(newTask);
                            renderTasks();
                            taskInput.value = ''; // Clear the input box
                        } else {
                            alert('Task description cannot be empty.');
                        }
                    });
    
                    function renderTasks() {
                        const taskList = document.getElementById('taskList');
                        taskList.innerHTML = '';
    
                        tasks.forEach((task, index) =&gt; {
                            const taskDiv = document.createElement('div');
                            taskDiv.className = 'task';
                            taskDiv.innerHTML = `
                                &lt;span class=&quot;${task.completed ? 'completed' : ''}&quot;&gt;${task.description}&lt;/span&gt;
                                &lt;button onclick=&quot;toggleTask(${index})&quot;&gt; ${task.completed ? 'Undo' : 'Complete'} &lt;/button&gt;
                            `;
                            taskList.appendChild(taskDiv);
                        });
                    }
    
                    function toggleTask(index) {
                        tasks[index].completed = !tasks[index].completed;
                        renderTasks();
                    }
                &lt;/script&gt;
                
            &lt;/body&gt;
            &lt;/html&gt;
          </code>
        </pre>
      </div>
      <h2>mission statement</h2>
      <p>
        You will extend the existing Task List Builder to add a task counter that displays the number of tasks currently outstanding. 
        When a user adds a new task or marks a task as completed, the task counter should update in real time to reflect the latest task status.
      </p>



      <h2>Task List Generator (with counter)</h2>
      <p>
        Here is a task list generator with a task counter. You can manipulate this generator to see how the number of tasks changes.
      </p>

      <div class="task-list-generator">
        <div class="task-counter">
          Current number of outstanding tasks: {{ incompleteTasks }}
        </div>

        <input v-model="newTask" type="text" placeholder="Enter a description of the task" />
        <button @click="addTask">Add Tasks</button>

        <h2>Task List:</h2>
        <div v-for="(task, index) in tasks" :key="index" class="task">
          <span :class="{ completed: task.completed }">{{ task.description }}</span>
          <button @click="toggleTask(index)">
            {{ task.completed ? "undo " : "complete" }}
          </button>
        </div>
      </div>
    </study-content>

    <my-footer week="2" num="4"></my-footer>
  </my-container>
</template>



<script>
import MyFooter from '@/components/MyFooter.vue';
import MyTitle from '@/components/MyTitle.vue';
import MyContainer from '@/components/MyContainer.vue';
import StudyContent from '@/components/StudyContent.vue';
import mydemo from '@/components/demo.vue';
import demoCode from '@/components/demoCode.vue';

export default {
  components: {
    'my-title': MyTitle,
    'my-footer': MyFooter,
    'my-container': MyContainer,
    'study-content': StudyContent,
    'my-demo': mydemo,
    'demo-code': demoCode,
  },
  data() {
    return {
      newTask: '',
      tasks: [],
      incompleteTasks: 0, // Added: Counter for uncompleted tasks
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({ description: this.newTask.trim(), completed: false });
        this.newTask = ''; // Clear the input box
        this.updateTaskCounter(); // Updated task counters
      } else {
        alert('The task description cannot be empty.');
      }
    },
    toggleTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
      this.updateTaskCounter(); // Updated task counters
    },
    updateTaskCounter() {
      // Calculation of the number of outstanding tasks
      this.incompleteTasks = this.tasks.filter(task => !task.completed).length;
    },
  },
};


</script>
<style scoped>
.task-list-generator {
  margin-top: 20px;
}

.task-counter {
  font-weight: bold;
  margin-bottom: 10px;
}

input[type="text"] {
  padding: 10px;
  font-size: 16px;
  width: 300px;
  margin-right: 10px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.task {
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.completed {
  text-decoration: line-through;
  color: grey;
}
</style>
