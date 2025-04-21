<script>
import MyTitle from '@/components/MyTitle.vue'
import MyContainer2 from '@/components/MyContainer2.vue'

export default {
  components: {
    'my-title': MyTitle,
    'my-container2': MyContainer2
  }
}
</script>

<script setup>
import { ref } from 'vue'

let answer = `
let ball = document.querySelector(".ball");
console.log(ball);
document.onkeydown = function(event){
    console.log("出发了事件");
    event = event || window.event;
    console.log(event);
    let code = event.keyCode;
    console.log(code);
    if(code=='37'){
        console.log('左');
        ball.style.left = ball.offsetLeft-10+'px';
    }else if(code=='38'){
        console.log('上');
        ball.style.top= ball.offsetTop-10+"px";
    }else if(code=='39'){
        console.log('右');
        ball.style.left=ball.offsetLeft+10+'px';
    } else if(code=='40'){
        console.log('下');
        ball.style.top=ball.offsetTop+10+'px';
    }
}

`
console.log(answer)

let codeLeft = ref('')

const executeCodeLeft = () => {
  // 获取代码的值
  const code = codeLeft.value
  // 执行代码
  try {
    eval(code)
  } catch (error) {
    console.error('代码执行出错:', error)
  }
}
</script>

<template>
  <my-container2>
    <my-title
      title1="move ball"
      title2="Bounce when moving to the edge"
    ></my-title>
    <div class="title">
      <div class="title-content">Code input area</div>
      <div class="title-content">Effect display area</div>
    </div>
    <main>
      <!-- 左边代码输入区 -->
      <div class="code_area">
        <textarea
          type="text"
          v-model="codeLeft"
          placeholder="Enter the javascript code here"
          style="
            width: 763px;
            height: 495px;
            border: none;
            outline: none;
            resize: none;
            font-size: 20px;
          "
        />
      </div>
      <!-- 中间执行按钮 -->
      <button @click="executeCodeLeft" class="executeButton">run</button>
      <!-- 右边效果展示区 -->
      <div class="effect_area">
        <div class="ball"></div>
      </div>
    </main>
  </my-container2>
</template>

<style lang="less" scoped>
.title {
  display: flex;
  margin-bottom: 20px;
  .title-content {
    font-size: 40px;
    font-weight: bolder;
    &:nth-child(1) {
      margin-right: 500px;
    }
  }
}
main {
  display: flex;
  justify-content: space-between;
  .code_area {
    width: 48%;
    height: 500px;
    border: 3px solid black;
  }

  .effect_area {
    width: 48%;
    height: 500px;
    border: 2px solid black;
  }
}
.executeButton {
  width: 40px;
  height: 100px;
  margin-top: 200px;
  text-align: center;
  background-color: rgb(24, 163, 24);
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: lightgreen;
  }
}

.effect_area {
  position: relative;
}
.ball {
  width: 100px;
  height: 100px;
  background-color: rgb(14, 255, 58);
  position: absolute;
  border-radius: 50%;
  top: 0px;
  left: 0px;
}
</style>
