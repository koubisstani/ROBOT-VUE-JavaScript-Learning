<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'


const router = useRouter()


let week1_data = ref([
  {
    id: 1,
    detail: 'Defines the color size of the ball',
    'difficulty level': 'Easy'
  },
  {
    id: 2,
    detail: 'Moving Circle Robot',
    'difficulty level': 'Easy'
  },
  {
    id: 3,
    detail: 'Move up, down, left and right',
    'difficulty level': 'Medium'
  },
  {
    id: 4,
    detail: 'Reaction Time Test',
    'difficulty level': 'Hard'
  },
])

let week2_data = ref([
  {
    id: 1,
    detail: 'The keyboard controls the ball movement',
    'difficulty level': 'Easy'
  },
  {
    id: 2,
    detail: 'The ball follows the mouse',
    'difficulty level': 'Easy'
  },
  {
    id: 3,
    detail: 'bounce ball',
    'difficulty level': 'Medium'
  },
  {
    id: 4,
    detail: 'Dynamically generated task list application',
    'difficulty level': 'Hard'
  },
])

let week3_data = ref([
  {
    id: 1,
    detail: 'Drawing Robot Top View',
    'difficulty level': 'Medium'
  },
  {
    id: 2,
    detail: 'On Velocity Feedback',
    'difficulty level': 'Hard'
  },
  {
    id: 3,
    detail: 'PWM Motor Speed Control',
    'difficulty level': 'Hard'
  }
])

let week4_data = ref([
  {
    id: 1,
    detail: 'Ultrasonic Sensor Simulation',
    'difficulty level': 'Hard'
  },
  {
    id: 2,
    detail: 'Command-Based Robot Control',
    'difficulty level': 'Hard'
  },
  {
    id: 3,
    detail: 'Learning Robot Simulator',
    'difficulty level': 'Hard'
  }
])

const w1HandleStudy = (data) => {
  // console.log('Successful Trigger Functions ' + data)
  router.push({
    name: `w1_study${data}`
  })
}

const w1HandleTask = (data) => {
  // console.log('Successful Trigger Functions ' + data)
  router.push({
    name: `w1_task${data}`
  })
}

const w2HandleStudy = (data) => {
  // console.log('Successful Trigger Functions ' + data)
  router.push({
    name: `w2_study${data}`
  })
}

const w2HandleTask = (data) => {
  // console.log('Successful Trigger Functions ' + data)
  router.push({
    name: `w2_task${data}`
  })
}

const w3HandleStudy = (data) => {
  // console.log('Successful Trigger Functions ' + data)
  router.push({
    name: `w3_study${data}`
  })
}

const w3HandleTask = (data) => {
  // console.log('Successful Trigger Functions ' + data)
  router.push({
    name: `w3_task${data}`
  })
}

const w4HandleStudy = (data) => {
  // console.log('Successful Trigger Functions ' + data)
  router.push({
    name: `w4_study${data}`
  })
}

const w4HandleTask = (data) => {
  // console.log('Successful Trigger Functions ' + data)
  router.push({
    name: `w4_task${data}`
  })
}


</script>

<template>
  <div class="container">
    <header>
      <h1 style="color: red; font-weight: bolder">
        JavaScript Learning Course
      </h1>
      <p>
        Welcome to the JavaScript Learning Course! This course is desined to
        teach you the fundamentals ofJavaScriot through inieracive HIML5
        exercises over a soan of fourweeks 
      </p>
      <p>Each week focuses on different topics to build your skills progressively.Please complete the weekly exercises to the best of your ability</p>
      <p>
        To fuly experience this course, ensure you are using a web browser that
        supports HTML5 canas (e..firefox, Chrome, modem versions of
        intemetExplorer and has Javascipt enabled
      </p>
      <p>
        Simply click on the appropriate inks below to view and download the
        exercise files. Enjoy your learning jourey, and feel free to provide any
        feedback!
      </p>
      <!-- 推荐的 JavaScript 学习资源 -->
  <div class="recommended-resources">
    <h2>Recommended Resources</h2>
    <p>
      Here are some excellent resources to deepen your understanding of JavaScript fundamentals and interactive robot programming. Exploring these resources alongside the course will significantly enhance your learning journey.
    </p>
    <ul>
      <li>
        <a href="https://eloquentjavascript.net/" target="_blank">📘 Eloquent JavaScript</a>
        – Clear explanations and interactive examples to master JavaScript from scratch.
      </li>
      <li>
        <a href="https://developer.mozilla.org/en-US/" target="_blank">📚 MDN Web Docs</a>
        – Comprehensive documentation on web technologies, essential for every JavaScript developer.
      </li>
      <li>
        <a href="https://www.personal.reading.ac.uk/~shsmchlr/jsrobotstyle/index.html" target="_blank">🤖 Begin Robotics by Richard Mitchell</a>
        – An interactive exploration of robot programming with JavaScript, great for practical learning.
      </li>
    </ul>
  </div>
  
  <div class="course-feedback">
  <p>
    After completing all the exercises, I would love to hear from you!  
    Please feel free to send me an email sharing your thoughts, feedback, or what you found most interesting during the course.
    I genuinely hope you enjoyed the learning process!
  </p>
  <p>
    📩 Email: <a href="mailto:koubisstani@gmail.com">koubisstani@gmail.com</a>
  </p>
  </div>

    </header>

    <div>
      <div class="week-wrapper">
        <div class="week-title">WEEK1</div>
        <div class="week-content">
          <el-table
            ref="tableRef"
            row-key="date"
            :data="week1_data"
            style="width: 100%"
          >
            <el-table-column prop="detail" label="detail" width="470" />
            <el-table-column prop="difficulty level" label="difficulty level" width="250" />

            <el-table-column label="STUDY" width="200" prop="id">
              <template #default="scope">
                <el-button type="success" @click="w1HandleStudy(scope.row.id)"
                  >STUDY</el-button
                >
              </template>
            </el-table-column>

            <el-table-column label="TASK" width="200" prop="id">
              <template #default="scope">
                <el-button type="primary" @click="w1HandleTask(scope.row.id)"
                  >TASK</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>

      <div class="week-wrapper">
        <div class="week-title">WEEK2</div>
        <div class="week-content">
          <el-table
            ref="tableRef"
            row-key="date"
            :data="week2_data"
            style="width: 100%"
          >
            <el-table-column prop="detail" label="detail" width="470" />
            <el-table-column prop="difficulty level" label="difficulty level" width="250" />

            <el-table-column label="STUDY" width="200" prop="id">
              <template #default="scope">
                <el-button type="success" @click="w2HandleStudy(scope.row.id)"
                  >STUDY</el-button
                >
              </template>
            </el-table-column>

            <el-table-column label="TASK" width="200" prop="id">
              <template #default="scope">
                <el-button type="primary" @click="w2HandleTask(scope.row.id)"
                  >TASK</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>

      <div class="week-wrapper">
        <div class="week-title">WEEK3</div>
        <div class="week-content">
          <el-table
            ref="tableRef"
            row-key="date"
            :data="week3_data"
            style="width: 100%"
          >
            <el-table-column prop="detail" label="detail" width="470" />
            <el-table-column prop="difficulty level" label="difficulty level" width="250" />

            <el-table-column label="STUDY" width="200" prop="id">
              <template #default="scope">
                <el-button type="success" @click="w3HandleStudy(scope.row.id)"
                  >STUDY</el-button
                >
              </template>
            </el-table-column>

            <el-table-column label="TASK" width="200" prop="id">
              <template #default="scope">
                <el-button type="primary" @click="w3HandleTask(scope.row.id)"
                  >TASK</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>

      <div class="week-wrapper">
        <div class="week-title">WEEK4</div>
        <div class="week-content">
          <el-table
            ref="tableRef"
            row-key="date"
            :data="week4_data"
            style="width: 100%"
          >
            <el-table-column prop="detail" label="detail" width="470" />
            <el-table-column prop="difficulty level" label="difficulty level" width="250" />

            <el-table-column label="STUDY" width="200" prop="id">
              <template #default="scope">
                <el-button type="success" @click="w4HandleStudy(scope.row.id)"
                  >STUDY</el-button
                >
              </template>
            </el-table-column>

            <el-table-column label="TASK" width="200" prop="id">
              <template #default="scope">
                <el-button type="primary" @click="w4HandleTask(scope.row.id)"
                  >TASK</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div>
      <h1>JavaScript Learning Course</h1>
      <p>Welcome to the course! You can download the resources below:</p>
  
      <!-- 添加下载链接 -->
      <ul>
        <li>
          <a 
            href="https://koubisstani.github.io/JavaScript-Learning-Course/Answers%20for%20week%201%20to%203.pdf" 
            download
          >
            Download Week 1-3 Answers (PDF)
          </a>
        </li>
        <li>
          <a 
            href="https://koubisstani.github.io/JavaScript-Learning-Course/week4t1.zip" 
            download
          >
            Download Week 4 Task 1 (ZIP)
          </a>
        </li>
        <li>
          <a 
            href="https://koubisstani.github.io/JavaScript-Learning-Course/week4t2.zip" 
            download
          >
            Download Week 4 Task 2 (ZIP)
          </a>
        </li>
        <li>
          <a 
            href="https://koubisstani.github.io/JavaScript-Learning-Course/week4t3.zip" 
            download
          >
            Download Week 4 Task 3 (ZIP)
          </a>
        </li>
      </ul>
    </div>
  </div>

</template>

<style scoped lang="less">
template {
  background-color: #fff;
}
.container {
  width: 1125px;
  margin: 0 auto;
  padding: 100px 0;
}
header {
  text-align: center;
  margin-bottom: 80px;
}
header p {
  font-size: 13px;
}

.week-wrapper {
  margin-bottom: 50px;
}

.week-title {
  font-size: 24px;
  font-weight: bold;
  padding: 10px 0;
  border-bottom: 2px solid #c6c6c6;
  margin-bottom: 20px;
}
.week-content ul {
  list-style: none;
  padding: 0;
}
.task-item {
  width: 1200px;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
}
.recommended-resources {
  text-align: left; 
  margin-top: 60px;
  padding: 20px;
  border-top: 2px solid #c6c6c6;
}
.course-feedback {
  margin-top: 60px;
  padding: 20px;
  font-size: 14px;
  line-height: 1.8;
  background-color: #f9f9f9;
  border-left: 4px solid #409EFF;
}
h1 {
  font-size: 24px;
}
a {
  text-decoration: none;
  color: blue;
}
ul {
  list-style-type: none;
}
</style>
