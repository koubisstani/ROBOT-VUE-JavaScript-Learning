<template>
  <my-container>
    <header>
      <my-title title1="Reaction Time Test" ></my-title>
      <h1></h1>
      <p>
        In this task, you will test your reaction time. When the canvas turns green, click as quickly as possible to measure your reaction time.
      </p>
      <p>The Start button begins the test. Wait for the canvas to turn green, then click as quickly as you can.</p>
      <p>Pros in various games are about 0.2 seconds long, try and see if you can beat them!</p>
    </header>
    <main style="margin-top: 20px">
      <canvas id="reactionCanvas" width="400" height="400"></canvas>
      <button @click="startTest">Start Test</button>
      <p>{{ result }}</p>
    </main>
    <footer>
      <study-content>
        <code-item>
          <template #code>setTimeout(function, delay)</template>
          <template #item>
            We use this function to set a delay before the canvas changes color, simulating a random wait time before you need to react.
          </template>
        </code-item>

        <code-item>
          <template #code>requestAnimationFrame(function)</template>
          <template #item>
            This function is used to continuously update the canvas or check for user interaction, providing smooth animation or immediate response handling.
          </template>
        </code-item>
        <code-item>
          <template #code>Math.random() and Math.floor()</template>
          <template #item>
            Math.random() is a function in JavaScript for generating pseudo-random numbers. It returns a pseudo-random floating-point number
             between 0 (including 0) and 1 (excluding 1). math.floor() is a function in JavaScript used to round numbers down. It returns the 
             largest integer less than or equal to the given value. In terms of generating random numbers, the two functions work in conjunction 
             with each other for generating random integers in various ranges, randomly selecting elements in arrays, simulating random events, 
             and so on. Understanding and applying these two functions is the key to mastering JavaScript's numeric manipulation and randomness control.  
          </template>
        </code-item>
      <my-demo>
        <template #code>
          <demo-code
            type="JavaScript"
            code="
let startTime = new Date().getTime();
console.log(startTime);  // Output example: 163821231425
let startTime = new Date().getTime();
// perform certain operations
let endTime = new Date().getTime();
let duration = endTime - startTime;
console.log('The operation took ' + duration + ' milliseconds.');

              "
          ></demo-code>
        </template>

      </my-demo>

        <p>
          The test is simple: wait for the canvas to turn green, then click as fast as you can. Your reaction time will be displayed in seconds.
        </p>

        <my-footer week="1" num="4"></my-footer>
      </study-content>
    </footer>
  </my-container>
</template>

<script>
import MyFooter from '@/components/MyFooter.vue'
import MyContainer from '@/components/MyContainer.vue'
import StudyContent from '@/components/StudyContent.vue'
import codeItem from '@/components/codeItem.vue'
import MyTitle from '@/components/MyTitle.vue'
import mydemo from '@/components/demo.vue'
import demoCode from '@/components/demoCode.vue'

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
      startTime: null,
      result: '',
      isGreen: false,
    };
  },
  methods: {
    drawCanvas(color) {
      const canvas = document.getElementById('reactionCanvas');
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    },
    startTest() {
      this.result = '';
      const randomDelay = Math.floor(Math.random() * 2000) + 1000;

      setTimeout(() => {
        this.drawCanvas('green');
        this.startTime = new Date().getTime();
        this.isGreen = true;
      }, randomDelay);

      const canvas = document.getElementById('reactionCanvas');
      canvas.addEventListener('click', this.handleClick);
    },
    handleClick() {
      if (this.isGreen) {
        const endTime = new Date().getTime();
        const reactionTime = (endTime - this.startTime) / 1000;
        this.result = 'Your reaction time: ' + reactionTime + ' seconds';
        this.drawCanvas('#f0f0f0'); // Reset canvas color
        this.isGreen = false;
      }
    },
  },
  mounted() {
    this.drawCanvas('#f0f0f0'); // Initialize the canvas with a default color
  },
};
</script>

<style lang="less" scoped>
#reactionCanvas {
  background-color: #d3d3d3; /* Light grey background for the canvas */
}

button {
  margin-top: 20px;
  padding: 10px;
  font-size: 16px;
}

p {
  margin-top: 20px;
}
</style>
