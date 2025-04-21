<script>
import MyFooter from '@/components/MyFooter.vue'
import MyTitle from '@/components/MyTitle.vue'
import MyContainer from '@/components/MyContainer.vue'
import StudyContent from '@/components/StudyContent.vue'
import codeItem from '@/components/codeItem.vue'
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
    'demo-code': demoCode
  }
}
</script>

<script setup></script>

<template>
  <my-container>
    <my-title
      title1="Canvas learn"
      title2="In this section, you'll learn how to use canvas's arc"
    ></my-title>
    <study-content>
      <h2>Arcs</h2>
      <p>To draw arcs or circles, we use the arc() or arcTo() methods.</p>
      <code-item>
        <template #code
          >arc(x, y, radius, startAngle, endAngle, counterclockwise)</template
        >
        <template #item
          >Draws an arc which is centered at (x, y) position with radius r
          starting at startAngle and ending at endAngle going in the given
          direction indicated by counterclockwise (defaulting to
          clockwise).</template
        >
      </code-item>

      <code-item>
        <template #code>arcTo(x1, y1, x2, y2, radius)</template>
        <template #item
          >Draws an arc with the given control points and radius, connected to
          the previous point by a straight line.</template
        >
      </code-item>
      <div>
        <p>
          Let's have a more detailed look at the arc method, which takes six
          parameters: x and y are the coordinates of the center of the circle on
          which the arc should be drawn. radius is self-explanatory. The
          startAngle and endAngle parameters define the start and end points of
          the arc in radians, along the curve of the circle. These are measured
          from the x axis. The counterclockwise parameter is a Boolean value
          which, when true, draws the arc counterclockwise; otherwise, the arc
          is drawn clockwise.
        </p>

        <p>
          The two for loops are for looping through the rows and columns of
          arcs. For each arc, we start a new path by calling beginPath(). In the
          code, each of the parameters for the arc is in a variable for clarity,
          but you wouldn't necessarily do that in real life.
        </p>

        <p>
          The x and y coordinates should be clear enough. radius and startAngle
          are fixed. The endAngle starts at 180 degrees (half a circle) in the
          first column and is increased by steps of 90 degrees, culminating in a
          complete circle in the last column.
        </p>
        <p>
          The statement for the clockwise parameter results in the first and
          third row being drawn as clockwise arcs and the second and fourth row
          as counterclockwise arcs. Finally, the if statement makes the top half
          stroked arcs and the bottom half filled arcs.
        </p>

        <!-- 这个传进去的字符串的@符号不会被解析，而是当作一个字符 -->
        <my-demo demoName="Drawing rectangles">
          <template #code>
            <demo-code
              type="JS"
              code='
function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    for (let i = 0; i &lt; 4; i++) {
      for (let j = 0; j &lt; 3; j++) {
        ctx.beginPath();
        const x = 25 + j * 50; // x coordinate
        const y = 25 + i * 50; // y coordinate
        const radius = 20; // Arc radius
        const startAngle = 0; // Starting point on circle
        const endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
        const counterclockwise = i % 2 !== 0; // clockwise or counterclockwise

        ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

        if (i &gt; 1) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }
  }
}'
            ></demo-code>
          </template>
        </my-demo>
        <img src="@/assets/week2/arc-demo.png" alt="" />
      </div>
    </study-content>

    <my-footer week="2" num="2"></my-footer>
  </my-container>
</template>

<style lang="less" scoped></style>
