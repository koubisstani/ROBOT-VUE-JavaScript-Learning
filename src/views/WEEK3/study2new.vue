<template>
  <my-container>
    <!-- 标题、介绍部分 -->
    <header>
      <my-title
        title1="On Velocity Feedback"
        title2="Apply a force to the mass below the spring and see it move. 
                When ERIC accelerates, its board oscillates. Observe the damping."
      />
    <div class="info-panel">
      <p>
      In the following, the important role of velocity feedback in the motion control of a small robot is demonstrated by simulating a ‘mass-spring-damping’ system. Try to adjust the damping coefficient, spring stiffness and other parameters, and observe the motion response of the system under different control conditions, such as oscillation, decay and stabilisation processes.
<br><br>
Think about how effectively velocity feedback can dampen oscillations due to inertia and whether it can bring the system back to equilibrium faster? Does an appropriate feedback gain help improve response speed and stability? Too much or too little damping can affect the quality of motion and needs to be balanced and adjusted in the control strategy.
<br><br>
The webpage provides interactive animations and parameter adjustments to try to understand the effect of feedback control on the dynamic behaviour of the robot system.
<br><br>
      </p>
      <p>
        With <strong>no friction</strong>, the mass-spring will keep oscillating.
        With <strong>some friction</strong> or <strong>more friction</strong>, 
        the oscillations are reduced (damped) more quickly.  
      </p>
      <p>
        Similarly, when <strong>ERIC</strong> robot accelerates by reversing direction,
        the circuit board and motors will oscillate. The <em>control</em> radio 
        represents how quickly those oscillations are damped. 
      </p>
    
      <h3>Keyboard Controls</h3>
      <ul>
        <li><strong>M</strong> to move the mass</li>
        <li><strong>F</strong> to change friction</li>
        <li><strong>R</strong> to reverse ERIC</li>
        <li><strong>C</strong> to change control</li>
        <li><strong>B</strong> to move both mass & ERIC</li>
      </ul>
    </div>
    </header>

    <!-- 主体内容 -->
    <main>
      <!-- 绘制质量-弹簧和 ERIC 的画布 -->
      <canvas id="myCanvasSYS" width="1000" height="500"></canvas>
      <div id="codeDisplay" class="code-display"></div>
      <!-- 操作面板 -->
      <div class="controls">
        <div class="left">
          <button @click="moveMass">Force Mass Down</button>
          <button @click="moveThemBoth">Move Both</button>
          <div class="option-group">
            <span>Friction Level:</span>
            <label>
              <input 
                type="radio" 
                name="friction" 
                value="0" 
                v-model="currentFriction" 
                @change="toggleFriction(0)"
              />
              No Friction
            </label>
            <label>
              <input 
                type="radio" 
                name="friction" 
                value="1" 
                v-model="currentFriction" 
                @change="toggleFriction(1)"
              />
              Some Friction
            </label>
            <label>
              <input 
                type="radio" 
                name="friction" 
                value="2" 
                v-model="currentFriction" 
                @change="toggleFriction(2)"
              />
              More Friction
            </label>
          </div>
        </div>
        <div class="right">
          <button @click="reverseMotor">Reverse Eric's Motor</button>
          <div class="option-group">
            <span>Control Level:</span>
            <label>
              <input 
                type="radio" 
                name="control" 
                value="0" 
                v-model="currentControl" 
                @change="toggleControl(0)"
              />
              No Control
            </label>
            <label>
              <input 
                type="radio" 
                name="control" 
                value="1" 
                v-model="currentControl" 
                @change="toggleControl(1)"
              />
              Some Control
            </label>
            <label>
              <input 
                type="radio" 
                name="control" 
                value="2" 
                v-model="currentControl" 
                @change="toggleControl(2)"
              />
              More Control
            </label>
          </div>
        </div>
      </div>
    </main>

    <!-- 底部说明与跳转按钮 -->
    <footer>
      <study-content>
      
        <p>
          Here you can see that the vibrations of the mass-spring and the vibrations of Eric's robot plate use the same ‘velocity feedback’ idea.。<br /><br><br>
          If you need a more complex demo, such as a multi-mass system or more sensor detections, please see the <em>https://www.personal.reading.ac.uk/~shsmchlr/jsrobotstyle/index.html</em> Continuing to learn the details in。
        </p>
        <code-item>
          <template #code>ctx.arc()</template>
          <template #item>Used to draw springs and robots with various circular structures, as well as updating motion animation frames.</template>
        </code-item>
        <code-item>
          <template #code>requestAnimationFrame()</template>
          <template #item>Smooths out the motion process and updates the position of the mass and ERIC in an animated manner.</template>
        </code-item>
      
        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
    function drawRim3D (ctx, orad, irad, efac, xpos, ypos, xpos2, spokeangle) {
	// Define an array of angular intervals to be used later for drawing half-ellipses.
	var angs = [90, 270, 270, 450];
	
	// Fill with the wheel colour and draw the inner half-ellipse outline
	ctx.fillStyle = rimColour;
	halfEllipseRim(ctx, xpos, xpos2, ypos, irad, irad, efac, angs[0], angs[1]);
	
	// Draw the main part of the wheel, first using the wheel colour
	ctx.fillStyle = wheelColour;
	halfEllipseRim(ctx, xpos, xpos, ypos, orad, irad, efac, 90, 270);
	halfEllipseRim(ctx, xpos, xpos, ypos, orad, irad, efac, 270, 450);
	
	// Setting the stroke parameters to draw the spokes
	ctx.strokeStyle = wheelColour;
	ctx.lineWidth = 5;
	for (act = 0; act < 1.9 * Math.PI; act += Math.PI / 5)
		drawSpoke(ctx, (xpos + xpos2) / 2, ypos, irad, efac, spokeangle + act);
	
	// Finally restore the wheel colour and draw the remaining half ellipse
	ctx.fillStyle = rimColour;
	halfEllipseRim(ctx, xpos, xpos2, ypos, orad, orad, efac, angs[2], angs[3]);
}
"
            />
          </template>
        </my-demo>
      <div class="info-panel">
        <p>
        Use a for loop to increment the angle act from 0 (by π/5 each time, i.e. 36° or so) if act < 1.9 * Math.PI.
The use of 1.9π instead of 2π (i.e. 360°) is probably to allow for a small gap to more realistically simulate light and shadow or perspective effects.
<br><br>
For each angle, the helper function drawSpoke is called to draw a spoke.
<br><br>
When drawing, the centre of the spoke is taken as the average of the two x-coordinates ((xpos + xpos2) / 2), which keeps the spoke centred in the whole. The angle at which the spoke is drawn is the spokeangle plus an offset act each time, so that the spoke is evenly distributed over the spoke area.
Finally, switch back to rimColour as the fill colour.
<br><br>
The halfEllipseRim is called again, this time with (orad, orad), i.e. the same radius inside and outside, and the angle of the overlay is [270, 450] (i.e. the outer half-ellipse angle range defined earlier).
This step is mainly used to depict the outer edges of the wheel, to complete the rim portion of the whole wheel and to further emphasise the 3D effect.
<br><br>
        </p>
      </div>
      <div class="info-panel">
        <p>
        <b> whole drawRim3D function implements a wheel rim drawing with 3D effect by the following steps:</b><br>
        <br>
<b>Inner half-ellipse</b>: Using the specified angle interval and irad parameter, the inner rim of the wheel is first drawn and filled with the wheel colour.<br>
<br>
<b>Wheel body</b>: the complete wheel cross-section is drawn in two steps, where the inner and outer radii (irad and orad) are used and filled with the wheel body colour.<br>
<br>
<b>Spoke drawing:</b> Multiple spokes are drawn at regular intervals through a loop to enhance the three-dimensionality and movement of the wheel.<br>
<br>
<b>Outer half-ellipse</b>: final trimming of the outer rim, again using the wheel colour to draw the remainder, thus completing the entire rim.
        </p>
      </div>
        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
   function drawAWheel (ctx, cw, ch, motorData, viewAngle, posTest, angle, in2D) {
	var xoff;
	// Calculate the four vertices associated with the wheel for determining wheel position and size, getVert for calculating vertical edges
	var worg = getVert(
	    motorData[0], motorData[1], 0, 
	    motorData[5] + 8 * ch, 
	    motorData[4] + 2 * ch, 
	    0, (posTest) ? 4 : 5, 
	    viewAngle, 0
	);
	// The motorData array [0],[1] is the centre point; [5] is the depth (which affects the wheel size) and [4] is the motor width
	
	if (viewAngle != 0) {
		// Calculate a factor for perspective effects (when viewAngle is not 0)
		var efac = Math.sin(viewAngle * Math.PI / 180);
		// Set the x-direction offset according to the drawing mode (2D/3D).
		if (in2D) 
		    xoff = 0;
		else 
		    xoff = (viewAngle > 0) ? 10 - 6 * efac : -10 - 6 * efac;
		
		// Calculate the radius of the wheel from worg (based on the difference between the two y-coordinates)
		var orad = (worg[3] - worg[1]) / 2;
		// Call drawRim3D to draw a wheel with 3D effect.
		drawRim3D(ctx, orad, orad * 0.9, efac, 
		    worg[0] - xoff / 2, (worg[1] + worg[3]) / 2, 
		    worg[0] + xoff / 2, angle);
	}	
	else {
		// Simply draws the wheel in 2D when viewAngle is 0
		ctx.fillStyle = rimColour;
		xoff = (posTest) ? -1 : 1;
		worg[4] = worg[2] + 5 * ch * xoff;
		worg[5] = worg[3];
		worg[6] = worg[4];
		worg[7] = worg[1];
		worg[0] = worg[0] + xoff;
		worg[2] = worg[0];
		putPoints(ctx, worg, true);
	}
}
"
            />
          </template>
        </my-demo>
      <div class="info-panel">
        <p>
        Use motorData[0] and motorData[1] as centre coordinates.<br>
<br>
Use motorData[5] and motorData[4] plus a scale of ch (canvas height) to adjust the depth and width of the wheel (this affects the dimensions).<br>
<br>
 The conditional judgement of 4 : 5 selects different modes depending on posTest, and may give different sets of vertices for different contexts.<br>
<br>
The view angle parameter viewAngle affects the vertex calculation and may be used for perspective adjustment.
        </p>
      </div>
        <br><br><br>
      <div class="info-panel">
        <p>
        <b> Perspective Factor:</b>Use the sine function to convert the viewing angle to the perspective factor efac, which determines how much the ellipse is compressed to achieve 3D perspective.
<br><br>
Determine the x-direction offset xoff
<br><br>
If in2D is true, set xoff to 0 directly without perspective offset.
<br><br>
Otherwise, the value of xoff is determined according to the positive or negative viewAngle. Positive angle and negative angle will cause different horizontal displacement, simulating the wheel shape under the change of viewing angle.
<br><br>
<b>Calculate wheel radius orad</b>: Calculate the radius of the wheel by half of the difference between two y-coordinates (assumed to be upper and lower) in the worg.
<br><br>
<b>Call drawRim3D</b>: Using the calculated radius, perspective factor, offset and rotation angle, the drawing task is given to the drawRim3D function, which is responsible for drawing the rims, spokes, and other details of the wheel with a 3D effect.
        </p>
      </div>
<br><br>
        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="
function getXYZ (xo, yo, xs, ys, zs, ndx, viewAngle, boardAngle) {
	var angs = [-135, -45, 45, 135, -90, 90];
	// Determine the position of the current corner in the array and decide the positive or negative direction of z
	var zfac = (angs[ndx] >= -90 && angs[ndx] <= 90) ? 1 : -1;
	// Determine the positive and negative x components according to the angle ndx
	var xm = xs * ((angs[ndx] <= 0) ? -1 : 1);
	
	// Applying plate rotation angles to mix y and z components
	var y = ys * Math.cos(boardAngle) - zs * zfac * Math.sin(boardAngle);
	var zm = ys * Math.sin(boardAngle) + zs * zfac * Math.cos(boardAngle);
	
	// Viewing angle rotation: convert to radians
	var vARad = viewAngle * Math.PI / 180;
	var x = xm * Math.cos(vARad) + zm * Math.sin(vARad);
	var z = -xm * Math.sin(vARad) + zm * Math.cos(vARad);
	 
	// Depth scaling to simulate simple perspective effects
	var xdepth = 1 + 0.1 * z / xs;
	var zdepth = 1 + 0.1 * z / xs;
	return [xo + x * xdepth, yo - y * zdepth];
}

"
            />
          </template>
        </my-demo>
      <div class="info-panel">
        <p>
        <b>Function Description</b>:<br>
Converts a point located in 3D space to final coordinates on a 2D canvas after a boardAngle and viewAngle transformation.
<br><br>
<b>Key calculation steps</b>:<br>
Obtain the orientation factor (which determines the z-direction positive and negative and the sign of the x-component) from the predefined array of angs and the index ndx;
<br><br>
Calculate the y and z change using boardAngle blending to reflect the board tilt;
Then rotate according to viewAngle to get the new x and z components;
<br><br>
The coordinates in the 2D plane are finally calculated using simple perspective scaling factors (xdepth and zdepth).
        </p>
      </div>
        <br><br>
        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="

function getVert(xo, yo, yoff, vh, xs, zs, ndx, viewAngle, boardAngle) {
    var point1 = getXYZ(xo, yo, xs, yoff + vh, zs, ndx, viewAngle, boardAngle);
    var point2 = getXYZ(xo, yo, xs, yoff - vh, zs, ndx, viewAngle, boardAngle);
    return point1.concat(point2);
}


function getPlane(pData, ndx1, ndx2, viewAngle, boardAngle) { 
    var plane1 = getVert(pData[0], pData[1], pData[2], pData[3], pData[4], pData[5], ndx1, viewAngle, boardAngle);
    var plane2 = getVert(pData[0], pData[1], pData[2], -pData[3], pData[4], pData[5], ndx2, viewAngle, boardAngle);
    return plane1.concat(plane2);
}


function getXYZHoriz(pData, viewAngle, boardAngle, ndx, istop) {
    var tfac = (istop) ? 1 : -1;
    return getXYZ(pData[0], pData[1], pData[4], pData[2] + tfac * pData[3], pData[5], ndx, viewAngle, boardAngle);
}


"
            />
          </template>
        </my-demo>
      <div class="info-panel">
        <p>
        <b>Function Encapsulation and Modular Design</b>
<br><br>
<b>Reusability</b>: By encapsulating similar computation tasks into independent functions (e.g., getVert, getPlane, getXYZHoriz), duplicate code is avoided, and code reusability and maintainability are improved.
<br><br>
<b>Abstraction</b>: Abstracts the underlying point coordinate computation (which relies on getXYZ calls) so that higher-level functions only need to focus on how to combine multiple vertices into a face or boundary.
<br><br><br>
<b>Coordinate and vector computation</b>
  <br><br>
Vertical computation: in getVert, the upper and lower vertices are computed by adjusting the incoming y-axis offsets (yoff + vh vs. yoff - vh), reflecting the component's boundaries in the vertical direction.
<br><br>
<b>Horizontal Face Calculation</b>: In getXYZHoriz, flexible calculation of the top face or bottom face is achieved by tfac determining the offset direction based on istop.
<br><br><br>
<b>Array Manipulation and Data Structures</b>
<br><br>
<b>Array merging</b>: Use the concat method of JavaScript arrays to merge two separate arrays of vertices into a complete array of points, which is commonly used for constructing the vertex set of a polygon or a face (e.g., a quadrilateral).
<br><br><br>
<b>Parameterised design</b>
<br><br>
<b>Parameter passing</b>: Each function controls the computation process by passing multiple parameters (e.g. xo, yo, yoff, vh, xs, zs, ndx, viewAngle, boardAngle), which ensures the flexibility of the function to be applied to different components and scenarios.
<br><br>
<b>Orientation control</b>: for example, using the parameter istop in getXYZHoriz, which determines the positive and negative orientations via tfac, enables fine control.
<br><br><br>
<b>Basic ideas for combining complex shapes</b>
<br><br>
<b>Hierarchical construction</b>: Multiple simple computational functions can be combined to form a more complex graphical drawing logic, e.g. getPlane uses getVert to compute two boundaries, which are then combined into a single surface.
<br><br>
<b>For perspective and projection</b>: viewAngle, boardAngle and other parameters can be used to calculate the coordinates of components in different viewpoints, which provides the basis for 3D projection and perspective effects.
        </p>
      </div>
<br><br>
        <my-demo>
          <template #code>
            <demo-code
              type="JavaScript"
              code="

function topPlane(ctx, planeData, col, viewAngle, boardAngle, istop) {
	var point1 = getXYZHoriz(planeData, viewAngle, boardAngle, 0, istop);
	var point2 = getXYZHoriz(planeData, viewAngle, boardAngle, 1, istop);
	var point3 = getXYZHoriz(planeData, viewAngle, boardAngle, 2, istop);
	var point4 = getXYZHoriz(planeData, viewAngle, boardAngle, 3, istop);
	ctx.fillStyle = col;
	putPoints(ctx, point1.concat(point2, point3, point4), true);
}

function sidePlane (ctx, planeData, col, viewAngle, boardAngle, forMain) {
	var points = [];
	if (forMain)
		points = getPlane(planeData, 1, 2, viewAngle, boardAngle);
	else if (viewAngle > 0)
		points = getPlane(planeData, 0, 1, viewAngle, boardAngle);
	else
		points = getPlane(planeData, 2, 3, viewAngle, boardAngle);
	ctx.fillStyle = col;
	putPoints(ctx, points, true);


"
            />
          </template>
        </my-demo>
      <div class="info-panel">
        <p>
       <b> Vertex Calculation with Wrapper Functions</b>
<br><br>
topPlane calls getXYZHoriz four times to compute the projection points for each corner of the horizontal plane at different corner scales (0, 1, 2, 3). This encapsulates the complexity of the projection algorithm and keeps the calls simple.
<br><br>
sidePlane calls getPlane to compute the four side vertices based on logical branches (forMain and viewAngle positive and negative), and getVert inside the getPlane function to compute the boundaries of the positive and negative directions, and then merge the arrays.
<br><br>
<b>Parameter-driven drawing</b>
<br><br>
Both functions pass key data through parameters, such as planeData, viewAngle, boardAngle, which make the vertex computation versatile and flexible for different drawing scenarios (e.g., changing viewpoints, adjusting the board angle).
<br><br>
In topPlane, the istop parameter is used to decide whether to calculate the coordinates of the top or bottom surface, and thus control how the projected points are calculated.
<br><br>
In sidePlane, the forMain parameter and viewAngle judgement decide which set of vertices is used to construct the side, reflecting the design idea of choosing different drawing modes according to the actual needs.
<br><br>
<b>Array manipulation and drawing</b>
<br><br>
Both functions use array concatenation (e.g. concat) to combine multiple vertices to form a complete set of polygon vertices.
<br><br>
The call to putPoints passes the computed vertex array to the draw function, which renders the corresponding faces on the Canvas, whose fill colour is set by ctx.fillStyle = col; to ensure that the faces are drawn as designed.
        </p>
      </div>
        <br><br>
        <my-footer week="3" num="2" />
      </study-content>
    </footer>
  </my-container>
</template>



<script setup>
import { ref, onMounted,nextTick} from 'vue'
import { useRouter } from 'vue-router'

import MyContainer from '@/components/MyContainer.vue'
import MyTitle from '@/components/MyTitle.vue'
import MyFooter from '@/components/MyFooter.vue'
import StudyContent from '@/components/StudyContent.vue'
import CodeItem from '@/components/codeItem.vue'
import MyDemo from '@/components/demo.vue'
import DemoCode from '@/components/demoCode.vue'



// --------------------- 全局变量与状态 ---------------------
let canvas, ctx
const simtime = 30
let speed = 50
let angle = 0
let impSize = speed / 100
let boardAngle = 0
let boardtime = 1000
let dirn = 1
let masstime = 1000
let keySpecial = 0

// 分别表示摩擦等级 / 控制等级
const currentFriction = ref(0)
const currentControl = ref(0)
let famount = 0
let camount = 0

// 路由跳转
const router = useRouter()
function toTask() {
  // 请根据实际路由配置修改
  router.push({ name: 'week4_task1' })
}

// --------------------- 主要方法 ---------------------
function checkKeySpecial() {
  switch (keySpecial) {
    case 70: // F / f
    case 102:
      toggleFriction((famount + 1) % 3)
      moveMass()
      break
    case 67: // C / c
    case 99:
      toggleControl((camount + 1) % 3)
      reverseMotor()
      break
    case 77: // M / m
    case 109:
      moveMass()
      break
    case 82: // R / r
    case 114:
      reverseMotor()
      break
    case 66: // B / b
    case 98:
      moveThemBoth()
      break
    default:
      break
  }
  keySpecial = 0
}

function simulateOsc(oamount, ampOsc, theTime) {
  const TCs = [1000, 20, 4]  // 不同摩擦/控制时的衰减时常
  return ampOsc * Math.exp(-theTime / TCs[oamount]) * Math.sin(theTime / 2)
}

function putPoints(points, isFill = false) {
  ctx.beginPath()
  for (let i = 0; i < points.length; i += 2) {
    if (i === 0) ctx.moveTo(points[i], points[i + 1])
    else ctx.lineTo(points[i], points[i + 1])
  }
  isFill ? ctx.fill() : ctx.stroke()
}

function myellipse(xo, yo, xr, yr, isFirst, isLast) {
  const startAngle = isFirst ? 90 : 22.5
  const endAngle   = isLast ? 90 : 337.5
  for (let ang = startAngle; ang <= endAngle; ang += 7.5) {
    const rad = ang * Math.PI / 180
    const xpos = xo + xr * Math.cos(rad)
    const ypos = yo - yr * Math.sin(rad)
    ctx.lineTo(xpos, ypos)
  }
}

// --------------------- 质量-弹簧绘制 ---------------------
function doMass() {
  const cw = canvas.width / 100
  const ch = canvas.height / 100
  // 左半区背景
  ctx.fillStyle = '#e9eae8'
  ctx.fillRect(cw * 2, 0, cw * 46, ch * 100)

  masstime++
  // massPos 根据当前的 “famount” 进行阻尼衰减
  const massPos = ch * (60 + simulateOsc(famount, 15, masstime))

  // 天花板
  ctx.fillStyle = 'rgb(64,64,64)'
  ctx.fillRect(cw * 5, ch * 5, cw * 40, ch * 5)

  // 质量块
  ctx.fillStyle = 'black'
  putPoints([
    cw * 15, massPos,
    cw * 35, massPos,
    cw * 40, massPos + ch * 15,
    cw * 10, massPos + ch * 15
  ], true)

  // 画弹簧
  ctx.strokeStyle = 'black'
  ctx.lineWidth = 3
  ctx.beginPath()
  ctx.moveTo(cw * 25, ch * 10)

  const springSize = (massPos - ch * 30)
  for (let i = 1; i < 5; i++) {
    myellipse(cw * 25, ch * 20 + (springSize * i / 4), cw * 8, springSize / 3, i === 1, i === 4)
  }
  ctx.lineTo(cw * 25, massPos)
  ctx.stroke()
}

// --------------------- ERIC 绘制 ---------------------
function doWheel() {
  const cw = canvas.width / 100;
  const ch = canvas.height / 100;

  // 绘制右半区背景和底线
  ctx.fillStyle = '#e9eae8';
  ctx.fillRect(cw * 51, 0, cw * 49, ch * 100);

  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  putPoints([cw * 55, ch * 75, cw * 95, ch * 75]);

  // 更新 boardAngle（电机板摇摆，取决于控制值）
  boardtime++;
  boardAngle = simulateOsc(camount, impSize, boardtime);
  if (Math.abs(boardAngle) < Math.PI / 120) boardAngle = 0;

  // 更新轮子旋转角度（当 reverse eric's motor 被点击时，dirn 会变号）
  angle += dirn * speed * Math.PI / 1600;

  // 计算轮子中心及半径（可根据需要调整）
  const xMid = cw * 75;
  const yMid = ch * 45;
  const radius = ch * 20;

  // ---------- 绘制轮子部分 ----------
  ctx.save();
  ctx.translate(xMid, yMid);
  ctx.rotate(angle); // 轮子独立旋转

  // 绘制外圈
  ctx.strokeStyle = '#888';
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.stroke();

  // 绘制内圈
  ctx.strokeStyle = '#999';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.85, 0, 2 * Math.PI);
  ctx.stroke();

  // 绘制辐条（这里绘制 12 条辐条）
  ctx.strokeStyle = '#444';
  ctx.lineWidth = 3;
  const numSpokes = 12;
  for (let i = 0; i < numSpokes; i++) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    const spokeAngle = (2 * Math.PI / numSpokes) * i;
    const spokeEndX = (radius * 0.85) * Math.cos(spokeAngle);
    const spokeEndY = (radius * 0.85) * Math.sin(spokeAngle);
    ctx.lineTo(spokeEndX, spokeEndY);
    ctx.stroke();
  }
  ctx.restore();

  // ---------- 绘制电机板部分 ----------
  // 这里的电机板和轮子分开绘制，其摇摆角度由 boardAngle 控制，
  // 控制等级（currentControl）越高，camount 越大（你在 toggleControl 中已赋值），摇摆幅度就会较小。
  ctx.save();
  ctx.translate(xMid, yMid);
  // 注意：这里不叠加 angle，电机板不随轮子转动，只是摇摆
  ctx.rotate(boardAngle);
  
  // 绘制电机板，这里以一个矩形示例，颜色和尺寸可根据设计调整
  const boardWidth = radius * 1.2;
  const boardHeight = radius * 0.4;
  ctx.fillStyle = '#59a659';  // 电路板颜色
  ctx.fillRect(-boardWidth / 2, -boardHeight / 2, boardWidth, boardHeight);
  ctx.restore();
}

// --------------------- 动画循环 ---------------------
function doSimulation() {
  checkKeySpecial()
  doMass()
  doWheel()
}

// 定时器
function setMotorTimer() {
  setInterval(doSimulation, simtime)
}

// --------------------- 交互操作 ---------------------
function reverseMotor() {
  dirn = -dirn
  impSize = (dirn * speed) / 100
  boardtime = 0
}
function moveMass() {
  masstime = 0
}
function moveThemBoth() {
  moveMass()
  reverseMotor()
}
function toggleControl(val) {
  currentControl.value = val
  camount = val
  boardtime = 0
}
function toggleFriction(val) {
  currentFriction.value = val
  famount = val
  masstime = 0
}

// 自适应
function handleResize() {
  if (!canvas) return
  // 可自行修改适配逻辑
  const wrapWidth = 1000
  const newHeight = 500
  canvas.width = wrapWidth
  canvas.height = newHeight
}

onMounted(() => {
  canvas = document.getElementById('myCanvasSYS')
  if (!canvas) return
  ctx = canvas.getContext('2d')
  handleResize()

  // 初始化单选按钮
  toggleControl(Number(currentControl.value))
  toggleFriction(Number(currentFriction.value))

  // 键盘监听
  document.addEventListener('keydown', (e) => {
    keySpecial = e.keyCode || e.charCode
  })

  // 开始动画
  setMotorTimer()
  moveThemBoth()
})
</script>

<style scoped>
/* 你可参考 style.css 中相应内容做适当修改 */

canvas {
  background-color: #eee;
  display: block;
  margin: 20px auto;
  border-radius: 10px;
}

.controls {
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  font-size: 16px;
  margin-top: 20px;
}

.controls .left,
.controls .right {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.option-group {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

button {
  padding: 6px 12px;
  font-size: 16px;
  cursor: pointer;
}

label {
  cursor: pointer;
  margin-top: 4px;
}

.info-panel {
  background-color: #e8f6f4;           /* 浅青底 */
  border-left: 4px solid #00796b;      /* 左侧彩色标识条 */
  padding: 20px;                       /* 内边距 */
  border-radius: 4px;                  /* 圆角 */
  margin: 20px 0;                      /* 上下间距 */
  line-height: 1.6;                    /* 段落行高 */
  color: #333;                         /* 正文字色 */
  font-family: sans-serif;
}

/* 一级标题 */
.info-panel h2 {
  margin-top: 0;
  margin-bottom: 0.5em;
  color: #00796b;
  font-size: 1.5rem;
  font-weight: 600;
}

/* 二级标题 */
.info-panel h3 {
  margin-top: 1.2em;
  margin-bottom: 0.4em;
  color: #004d40;
  font-size: 1.1rem;
  font-weight: 500;
}

/* 正文段落 */
.info-panel p {
  margin: 0 0 1em;
}

/* 列表样式 */
.info-panel ul {
  margin: 0 0 1em 1.5em;
  padding: 0;
  list-style-type: disc;
}
.info-panel ul li {
  margin-bottom: 0.5em;
}


/* ③ 新增：代码展示区样式 */
.code-display {
  background: #f5f5f5;      /* 浅灰底 */
  border-radius: 8px;       /* 圆角 */
  padding: 12px;            /* 内边距 */
  margin: 20px auto;        /* 居中并留白 */
  max-width: 900px;         /* 不要太宽 */
  font-family: monospace;   /* 等宽字体 */
  white-space: pre-wrap;    /* 保持换行 */
  line-height: 1.4;         /* 阅读舒适 */
}

</style>
