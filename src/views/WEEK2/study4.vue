<template>
  <my-container>
    <my-title
      title1="Task List Generator"
      title2="Learn to create a dynamic task list with Vue.js and JavaScript"
    ></my-title>

    <study-content>

      <!-- 👇 美化版：项目介绍区 -->
      <section class="task-intro">
        <h2>Why Task Management?</h2>
        <p>
          In real life, there are a lot of tasks every day, and this is when you need a task management application 
          to help you sort out which tasks you should do in a day.
        </p>
        <p>
          This project will help you learn how to create a basic task management application using JavaScript,
          including <strong>data binding</strong>, <strong>event handling</strong>, and <strong>dynamic DOM rendering</strong>.
        </p>
        <p>
          You can <strong>add tasks</strong>, <strong>mark them as completed</strong>, and <strong>track their status in real-time</strong>.
        </p>
      </section>


      <!-- 👇 美化版：代码讲解区域 -->
      <div class="study-highlight">
        <p><strong>Core Vue.js Concepts Covered:</strong></p>

        <p>
          <code>&lt;input v-model="newTask"&gt;</code><br />
          Two-way data binding for form input.
        </p>

        <p>
          <code>@click="addTask"</code><br />
          Bind button click to method execution.
        </p>

        <p>
          <code>v-for="(task, index) in tasks" :key="index"</code><br />
          Render task list dynamically from array.
        </p>
      </div>

      <!-- 👇 示例代码模块 -->
      <h2>Code Example</h2>
      <my-demo>
        <template #code>
          <demo-code type="HTML" code='
<div id="app">
  <input v-model="newTask" type="text" placeholder="Enter task description">
  <button @click="addTask">Add Task</button>
  
  <h2>Tasks:</h2>
  <div v-for="(task, index) in tasks" :key="index" class="task">
    <span :class="{ completed: task.completed }">{{ task.description }}</span>
    <button @click="toggleTask(index)">
      {{ task.completed ? "Undo" : "Complete" }}
    </button>
  </div>
</div>'></demo-code>
          <demo-code type="JS" code='
          
export default {
  data() {
    return {
      newTask: "",
      tasks: []
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({ description: this.newTask.trim(), completed: false });
        this.newTask = ""; 
      } else {
        alert("Task description cannot be empty.");
      }
    },
    toggleTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    }
  }
};'></demo-code>
        </template>
      </my-demo>

      <!-- 👇 实例图片展示 -->
      <h2>Task List in Action</h2>
      <img src="@/assets/week2/task-list-example.png" alt="Example of task list application" />

      <!-- 👇 交互功能模块 -->
      <h2>Try It Yourself</h2>
      <div class="task-list-generator">
        <input v-model="newTask" type="text" placeholder="Enter a description of the task" />
        <button @click="addTask">Add Task</button>

        <div v-for="(task, index) in tasks" :key="index" class="task">
          <span :class="{ completed: task.completed }">{{ task.description }}</span>
          <button @click="toggleTask(index)">
            {{ task.completed ? "Undo" : "Complete" }}
          </button>
        </div>
      </div>

    </study-content>

    <my-footer week="2" num="4" />
  </my-container>
</template>


<script>
import MyFooter from '@/components/MyFooter.vue';
import MyTitle from '@/components/MyTitle.vue';
import MyContainer from '@/components/MyContainer.vue';
import StudyContent from '@/components/StudyContent.vue';
import codeItem from '@/components/codeItem.vue';
import mydemo from '@/components/demo.vue';
import demoCode from '@/components/demoCode.vue';

export default {
  components: {
    'my-title': MyTitle,
    'my-footer': MyFooter,
    'my-container': MyContainer,
    'study-content': StudyContent,
    'code-item': codeItem,
    'my-demo': mydemo,
    'demo-code': demoCode,
  },
  data() {
    return {
      newTask: '',
      tasks: []
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({ description: this.newTask.trim(), completed: false });
        this.newTask = ''; // Clear the input box
      } else {
        alert('The task description cannot be empty.');
      }
    },
    toggleTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    }
  }
};
</script>

<style scoped>
.task-intro {
  margin-top: 30px;
  padding: 20px;
  background: #eef6f6;
  border-left: 6px solid #3aa;
  border-radius: 8px;
  line-height: 1.6;
}

.study-highlight {
  background-color: #fff8dc;
  padding: 20px;
  margin-top: 30px;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.08);
}

.study-highlight p {
  margin-bottom: 10px;
  font-size: 16px;
}

.study-highlight code {
  background: #f0f0f0;
  padding: 4px 6px;
  border-radius: 4px;
  font-family: monospace;
}

.task-list-generator {
  margin-top: 20px;
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
