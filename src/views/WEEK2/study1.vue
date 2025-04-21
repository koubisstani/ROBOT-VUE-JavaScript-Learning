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
      title2="In this section, you'll learn how to use canvas to draw a simple shape"
    ></my-title>
    <study-content>
      <h2>FILL and STROKE</h2>
      <p>
        Canvas is an HTML canvas tag that you can manipulate with a specific
        syntax to do some painting here
      </p>
      <code-item>
        <template #code
          >&lt;canvas canvas-id="canvasId" width="300" height="300"/
          &gt;</template
        >
        <template #item
          >This canvas is made of size, you need to set the width and height
          size in the tag, you don't need to add px. And after setting, you
          can't set width and height again in the CSS style, otherwise the
          canvas will be distorted and deformed</template
        >
      </code-item>

      <p>
        After writing this tag in HTML, we need to get this element in JS, and
        then use a method inside to get a drawing tool (usually named CTX) for
        this canvas.
      </p>

      <code-item>
        <template #code
          >var canvas = document.getElementById("tutorial"); var ctx =
          canvas.getContext("2d");</template
        >
        <template #item
          >Above, 2D represents the planar tool and 3D represents the 3D
          tool</template
        >
      </code-item>
      <div>
        <p>
          Now let's look at paths. A path is a list of points, connected by
          segments of lines that can be of different shapes, curved or not, of
          different width and of different color. A path, or even a subpath, can
          be closed. To make shapes using paths, we take some extra steps:
        </p>

        <ul>
          <li><p>First, you create the path.</p></li>
          <li><p>Then you use drawing commands to draw into the path.</p></li>
          <li>
            <p>
              Once the path has been created, you can stroke or fill the path to
              render it.
            </p>
          </li>
        </ul>

        <code-item>
          <template #code>beginPath()</template>
          <template #item>
            Creates a new path. Once created, future drawing commands are
            directed into the path and used to build the path up.</template
          >
        </code-item>

        <code-item>
          <template #code>closePath()</template>
          <template #item
            >Adds a straight line to the path, going to the start of the current
            sub-path.</template
          >
        </code-item>

        <code-item>
          <template #code>stroke()</template>
          <template #item>Draws the shape by stroking its outline.</template>
        </code-item>

        <code-item>
          <template #code>fill()</template>
          <template #item
            >Draws a solid shape by filling the path's content area.</template
          >
        </code-item>

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
        <my-demo>
          <template #code>
            <demo-code
              type="HTML"
              code="
&lt;body onload='draw();'&gt;
    &lt;canvas id='canvas' width='500' height='500'&gt;&lt;/canvas&gt;
&lt;/body&gt; "
            ></demo-code>
            <demo-code
              type="JS"
              code='
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    // Fill triangles
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();

    // Stroke triangles
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();
  }
}
'
            ></demo-code>
          </template>
        </my-demo>
        <img src="@/assets/week2/fill-stroke.png" alt="" />
      </div>
    </study-content>

    <my-footer week="2" num="1"></my-footer>
  </my-container>
</template>

<style lang="less" scoped></style>
