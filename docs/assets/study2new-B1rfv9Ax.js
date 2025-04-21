import{_ as L,r as U,l as G,k as Q,o as _,c as ee,w as s,a as e,b as i,d as n,e as h,m as g}from"./index-D_i8rq6_.js";import{M as te,a as ne,S as oe}from"./StudyContent-D6_QEik8.js";import{M as re}from"./MyTitle-lMHn4oIB.js";import{C as Z}from"./codeItem-DlYaIrsL.js";import{_ as w,a as y}from"./demoCode-Dfv_EAqb.js";const ae={class:"controls"},ie={class:"left"},le={class:"option-group"},se={class:"right"},de={class:"option-group"},ce=30,pe={__name:"study2new",setup(ue){let d,o,R=50,W=0,j=R/100,x=0,A=1e3,D=1,k=1e3,T=0;const p=U(0),u=U(0);let I=0,V=0;G();function B(){switch(T){case 70:case 102:b((I+1)%3),C();break;case 67:case 99:m((V+1)%3),M();break;case 77:case 109:C();break;case 82:case 114:M();break;case 66:case 98:F();break}T=0}function X(r,t,a){const c=[1e3,20,4];return t*Math.exp(-a/c[r])*Math.sin(a/2)}function H(r,t=!1){o.beginPath();for(let a=0;a<r.length;a+=2)a===0?o.moveTo(r[a],r[a+1]):o.lineTo(r[a],r[a+1]);t?o.fill():o.stroke()}function $(r,t,a,c,l,S){const z=l?90:22.5,P=S?90:337.5;for(let f=z;f<=P;f+=7.5){const v=f*Math.PI/180,E=r+a*Math.cos(v),Y=t-c*Math.sin(v);o.lineTo(E,Y)}}function N(){const r=d.width/100,t=d.height/100;o.fillStyle="#e9eae8",o.fillRect(r*2,0,r*46,t*100),k++;const a=t*(60+X(I,15,k));o.fillStyle="rgb(64,64,64)",o.fillRect(r*5,t*5,r*40,t*5),o.fillStyle="black",H([r*15,a,r*35,a,r*40,a+t*15,r*10,a+t*15],!0),o.strokeStyle="black",o.lineWidth=3,o.beginPath(),o.moveTo(r*25,t*10);const c=a-t*30;for(let l=1;l<5;l++)$(r*25,t*20+c*l/4,r*8,c/3,l===1,l===4);o.lineTo(r*25,a),o.stroke()}function O(){const r=d.width/100,t=d.height/100;o.fillStyle="#e9eae8",o.fillRect(r*51,0,r*49,t*100),o.strokeStyle="black",o.lineWidth=2,H([r*55,t*75,r*95,t*75]),A++,x=X(V,j,A),Math.abs(x)<Math.PI/120&&(x=0),W+=D*R*Math.PI/1600;const a=r*75,c=t*45,l=t*20;o.save(),o.translate(a,c),o.rotate(W),o.strokeStyle="#888",o.lineWidth=10,o.beginPath(),o.arc(0,0,l,0,2*Math.PI),o.stroke(),o.strokeStyle="#999",o.lineWidth=5,o.beginPath(),o.arc(0,0,l*.85,0,2*Math.PI),o.stroke(),o.strokeStyle="#444",o.lineWidth=3;const S=12;for(let f=0;f<S;f++){o.beginPath(),o.moveTo(0,0);const v=2*Math.PI/S*f,E=l*.85*Math.cos(v),Y=l*.85*Math.sin(v);o.lineTo(E,Y),o.stroke()}o.restore(),o.save(),o.translate(a,c),o.rotate(x);const z=l*1.2,P=l*.4;o.fillStyle="#59a659",o.fillRect(-z/2,-P/2,z,P),o.restore()}function q(){B(),N(),O()}function J(){setInterval(q,ce)}function M(){D=-D,j=D*R/100,A=0}function C(){k=0}function F(){C(),M()}function m(r){u.value=r,V=r,A=0}function b(r){p.value=r,I=r,k=0}function K(){if(!d)return;const r=1e3,t=500;d.width=r,d.height=t}return Q(()=>{d=document.getElementById("myCanvasSYS"),d&&(o=d.getContext("2d"),K(),m(Number(u.value)),b(Number(p.value)),document.addEventListener("keydown",r=>{T=r.keyCode||r.charCode}),J(),F())}),(r,t)=>(_(),ee(te,null,{default:s(()=>[e("header",null,[i(re,{title1:"On Velocity Feedback",title2:`Apply a force to the mass below the spring and see it move. \r
                When ERIC accelerates, its board oscillates. Observe the damping.`}),t[12]||(t[12]=e("div",{class:"info-panel"},[e("p",null,[n(" In the following, the important role of velocity feedback in the motion control of a small robot is demonstrated by simulating a ‘mass-spring-damping’ system. Try to adjust the damping coefficient, spring stiffness and other parameters, and observe the motion response of the system under different control conditions, such as oscillation, decay and stabilisation processes. "),e("br"),e("br"),n(" Think about how effectively velocity feedback can dampen oscillations due to inertia and whether it can bring the system back to equilibrium faster? Does an appropriate feedback gain help improve response speed and stability? Too much or too little damping can affect the quality of motion and needs to be balanced and adjusted in the control strategy. "),e("br"),e("br"),n(" The webpage provides interactive animations and parameter adjustments to try to understand the effect of feedback control on the dynamic behaviour of the robot system. "),e("br"),e("br")]),e("p",null,[n(" With "),e("strong",null,"no friction"),n(", the mass-spring will keep oscillating. With "),e("strong",null,"some friction"),n(" or "),e("strong",null,"more friction"),n(", the oscillations are reduced (damped) more quickly. ")]),e("p",null,[n(" Similarly, when "),e("strong",null,"ERIC"),n(" robot accelerates by reversing direction, the circuit board and motors will oscillate. The "),e("em",null,"control"),n(" radio represents how quickly those oscillations are damped. ")]),e("h3",null,"Keyboard Controls"),e("ul",null,[e("li",null,[e("strong",null,"M"),n(" to move the mass")]),e("li",null,[e("strong",null,"F"),n(" to change friction")]),e("li",null,[e("strong",null,"R"),n(" to reverse ERIC")]),e("li",null,[e("strong",null,"C"),n(" to change control")]),e("li",null,[e("strong",null,"B"),n(" to move both mass & ERIC")])])],-1))]),e("main",null,[t[21]||(t[21]=e("canvas",{id:"myCanvasSYS",width:"1000",height:"500"},null,-1)),t[22]||(t[22]=e("div",{id:"codeDisplay",class:"code-display"},null,-1)),e("div",ae,[e("div",ie,[e("button",{onClick:C},"Force Mass Down"),e("button",{onClick:F},"Move Both"),e("div",le,[t[16]||(t[16]=e("span",null,"Friction Level:",-1)),e("label",null,[h(e("input",{type:"radio",name:"friction",value:"0","onUpdate:modelValue":t[0]||(t[0]=a=>p.value=a),onChange:t[1]||(t[1]=a=>b(0))},null,544),[[g,p.value]]),t[13]||(t[13]=n(" No Friction "))]),e("label",null,[h(e("input",{type:"radio",name:"friction",value:"1","onUpdate:modelValue":t[2]||(t[2]=a=>p.value=a),onChange:t[3]||(t[3]=a=>b(1))},null,544),[[g,p.value]]),t[14]||(t[14]=n(" Some Friction "))]),e("label",null,[h(e("input",{type:"radio",name:"friction",value:"2","onUpdate:modelValue":t[4]||(t[4]=a=>p.value=a),onChange:t[5]||(t[5]=a=>b(2))},null,544),[[g,p.value]]),t[15]||(t[15]=n(" More Friction "))])])]),e("div",se,[e("button",{onClick:M},"Reverse Eric's Motor"),e("div",de,[t[20]||(t[20]=e("span",null,"Control Level:",-1)),e("label",null,[h(e("input",{type:"radio",name:"control",value:"0","onUpdate:modelValue":t[6]||(t[6]=a=>u.value=a),onChange:t[7]||(t[7]=a=>m(0))},null,544),[[g,u.value]]),t[17]||(t[17]=n(" No Control "))]),e("label",null,[h(e("input",{type:"radio",name:"control",value:"1","onUpdate:modelValue":t[8]||(t[8]=a=>u.value=a),onChange:t[9]||(t[9]=a=>m(1))},null,544),[[g,u.value]]),t[18]||(t[18]=n(" Some Control "))]),e("label",null,[h(e("input",{type:"radio",name:"control",value:"2","onUpdate:modelValue":t[10]||(t[10]=a=>u.value=a),onChange:t[11]||(t[11]=a=>m(2))},null,544),[[g,u.value]]),t[19]||(t[19]=n(" More Control "))])])])])]),e("footer",null,[i(oe,null,{default:s(()=>[t[27]||(t[27]=e("p",null,[n(" Here you can see that the vibrations of the mass-spring and the vibrations of Eric's robot plate use the same ‘velocity feedback’ idea.。"),e("br"),e("br"),e("br"),n(" If you need a more complex demo, such as a multi-mass system or more sensor detections, please see the "),e("em",null,"https://www.personal.reading.ac.uk/~shsmchlr/jsrobotstyle/index.html"),n(" Continuing to learn the details in。 ")],-1)),i(Z,null,{code:s(()=>t[23]||(t[23]=[n("ctx.arc()")])),item:s(()=>t[24]||(t[24]=[n("Used to draw springs and robots with various circular structures, as well as updating motion animation frames.")])),_:1}),i(Z,null,{code:s(()=>t[25]||(t[25]=[n("requestAnimationFrame()")])),item:s(()=>t[26]||(t[26]=[n("Smooths out the motion process and updates the position of the mass and ERIC in an animated manner.")])),_:1}),i(w,null,{code:s(()=>[i(y,{type:"JavaScript",code:`\r
    function drawRim3D (ctx, orad, irad, efac, xpos, ypos, xpos2, spokeangle) {\r
	// Define an array of angular intervals to be used later for drawing half-ellipses.\r
	var angs = [90, 270, 270, 450];\r
	\r
	// Fill with the wheel colour and draw the inner half-ellipse outline\r
	ctx.fillStyle = rimColour;\r
	halfEllipseRim(ctx, xpos, xpos2, ypos, irad, irad, efac, angs[0], angs[1]);\r
	\r
	// Draw the main part of the wheel, first using the wheel colour\r
	ctx.fillStyle = wheelColour;\r
	halfEllipseRim(ctx, xpos, xpos, ypos, orad, irad, efac, 90, 270);\r
	halfEllipseRim(ctx, xpos, xpos, ypos, orad, irad, efac, 270, 450);\r
	\r
	// Setting the stroke parameters to draw the spokes\r
	ctx.strokeStyle = wheelColour;\r
	ctx.lineWidth = 5;\r
	for (act = 0; act < 1.9 * Math.PI; act += Math.PI / 5)\r
		drawSpoke(ctx, (xpos + xpos2) / 2, ypos, irad, efac, spokeangle + act);\r
	\r
	// Finally restore the wheel colour and draw the remaining half ellipse\r
	ctx.fillStyle = rimColour;\r
	halfEllipseRim(ctx, xpos, xpos2, ypos, orad, orad, efac, angs[2], angs[3]);\r
}\r
`})]),_:1}),t[28]||(t[28]=e("div",{class:"info-panel"},[e("p",null,[n(" Use a for loop to increment the angle act from 0 (by π/5 each time, i.e. 36° or so) if act < 1.9 * Math.PI. The use of 1.9π instead of 2π (i.e. 360°) is probably to allow for a small gap to more realistically simulate light and shadow or perspective effects. "),e("br"),e("br"),n(" For each angle, the helper function drawSpoke is called to draw a spoke. "),e("br"),e("br"),n(" When drawing, the centre of the spoke is taken as the average of the two x-coordinates ((xpos + xpos2) / 2), which keeps the spoke centred in the whole. The angle at which the spoke is drawn is the spokeangle plus an offset act each time, so that the spoke is evenly distributed over the spoke area. Finally, switch back to rimColour as the fill colour. "),e("br"),e("br"),n(" The halfEllipseRim is called again, this time with (orad, orad), i.e. the same radius inside and outside, and the angle of the overlay is [270, 450] (i.e. the outer half-ellipse angle range defined earlier). This step is mainly used to depict the outer edges of the wheel, to complete the rim portion of the whole wheel and to further emphasise the 3D effect. "),e("br"),e("br")])],-1)),t[29]||(t[29]=e("div",{class:"info-panel"},[e("p",null,[e("b",null," whole drawRim3D function implements a wheel rim drawing with 3D effect by the following steps:"),e("br"),e("br"),e("b",null,"Inner half-ellipse"),n(": Using the specified angle interval and irad parameter, the inner rim of the wheel is first drawn and filled with the wheel colour."),e("br"),e("br"),e("b",null,"Wheel body"),n(": the complete wheel cross-section is drawn in two steps, where the inner and outer radii (irad and orad) are used and filled with the wheel body colour."),e("br"),e("br"),e("b",null,"Spoke drawing:"),n(" Multiple spokes are drawn at regular intervals through a loop to enhance the three-dimensionality and movement of the wheel."),e("br"),e("br"),e("b",null,"Outer half-ellipse"),n(": final trimming of the outer rim, again using the wheel colour to draw the remainder, thus completing the entire rim. ")])],-1)),i(w,null,{code:s(()=>[i(y,{type:"JavaScript",code:`\r
   function drawAWheel (ctx, cw, ch, motorData, viewAngle, posTest, angle, in2D) {\r
	var xoff;\r
	// Calculate the four vertices associated with the wheel for determining wheel position and size, getVert for calculating vertical edges\r
	var worg = getVert(\r
	    motorData[0], motorData[1], 0, \r
	    motorData[5] + 8 * ch, \r
	    motorData[4] + 2 * ch, \r
	    0, (posTest) ? 4 : 5, \r
	    viewAngle, 0\r
	);\r
	// The motorData array [0],[1] is the centre point; [5] is the depth (which affects the wheel size) and [4] is the motor width\r
	\r
	if (viewAngle != 0) {\r
		// Calculate a factor for perspective effects (when viewAngle is not 0)\r
		var efac = Math.sin(viewAngle * Math.PI / 180);\r
		// Set the x-direction offset according to the drawing mode (2D/3D).\r
		if (in2D) \r
		    xoff = 0;\r
		else \r
		    xoff = (viewAngle > 0) ? 10 - 6 * efac : -10 - 6 * efac;\r
		\r
		// Calculate the radius of the wheel from worg (based on the difference between the two y-coordinates)\r
		var orad = (worg[3] - worg[1]) / 2;\r
		// Call drawRim3D to draw a wheel with 3D effect.\r
		drawRim3D(ctx, orad, orad * 0.9, efac, \r
		    worg[0] - xoff / 2, (worg[1] + worg[3]) / 2, \r
		    worg[0] + xoff / 2, angle);\r
	}	\r
	else {\r
		// Simply draws the wheel in 2D when viewAngle is 0\r
		ctx.fillStyle = rimColour;\r
		xoff = (posTest) ? -1 : 1;\r
		worg[4] = worg[2] + 5 * ch * xoff;\r
		worg[5] = worg[3];\r
		worg[6] = worg[4];\r
		worg[7] = worg[1];\r
		worg[0] = worg[0] + xoff;\r
		worg[2] = worg[0];\r
		putPoints(ctx, worg, true);\r
	}\r
}\r
`})]),_:1}),t[30]||(t[30]=e("div",{class:"info-panel"},[e("p",null,[n(" Use motorData[0] and motorData[1] as centre coordinates."),e("br"),e("br"),n(" Use motorData[5] and motorData[4] plus a scale of ch (canvas height) to adjust the depth and width of the wheel (this affects the dimensions)."),e("br"),e("br"),n(" The conditional judgement of 4 : 5 selects different modes depending on posTest, and may give different sets of vertices for different contexts."),e("br"),e("br"),n(" The view angle parameter viewAngle affects the vertex calculation and may be used for perspective adjustment. ")])],-1)),t[31]||(t[31]=e("br",null,null,-1)),t[32]||(t[32]=e("br",null,null,-1)),t[33]||(t[33]=e("br",null,null,-1)),t[34]||(t[34]=e("div",{class:"info-panel"},[e("p",null,[e("b",null," Perspective Factor:"),n("Use the sine function to convert the viewing angle to the perspective factor efac, which determines how much the ellipse is compressed to achieve 3D perspective. "),e("br"),e("br"),n(" Determine the x-direction offset xoff "),e("br"),e("br"),n(" If in2D is true, set xoff to 0 directly without perspective offset. "),e("br"),e("br"),n(" Otherwise, the value of xoff is determined according to the positive or negative viewAngle. Positive angle and negative angle will cause different horizontal displacement, simulating the wheel shape under the change of viewing angle. "),e("br"),e("br"),e("b",null,"Calculate wheel radius orad"),n(": Calculate the radius of the wheel by half of the difference between two y-coordinates (assumed to be upper and lower) in the worg. "),e("br"),e("br"),e("b",null,"Call drawRim3D"),n(": Using the calculated radius, perspective factor, offset and rotation angle, the drawing task is given to the drawRim3D function, which is responsible for drawing the rims, spokes, and other details of the wheel with a 3D effect. ")])],-1)),t[35]||(t[35]=e("br",null,null,-1)),t[36]||(t[36]=e("br",null,null,-1)),i(w,null,{code:s(()=>[i(y,{type:"JavaScript",code:`\r
function getXYZ (xo, yo, xs, ys, zs, ndx, viewAngle, boardAngle) {\r
	var angs = [-135, -45, 45, 135, -90, 90];\r
	// Determine the position of the current corner in the array and decide the positive or negative direction of z\r
	var zfac = (angs[ndx] >= -90 && angs[ndx] <= 90) ? 1 : -1;\r
	// Determine the positive and negative x components according to the angle ndx\r
	var xm = xs * ((angs[ndx] <= 0) ? -1 : 1);\r
	\r
	// Applying plate rotation angles to mix y and z components\r
	var y = ys * Math.cos(boardAngle) - zs * zfac * Math.sin(boardAngle);\r
	var zm = ys * Math.sin(boardAngle) + zs * zfac * Math.cos(boardAngle);\r
	\r
	// Viewing angle rotation: convert to radians\r
	var vARad = viewAngle * Math.PI / 180;\r
	var x = xm * Math.cos(vARad) + zm * Math.sin(vARad);\r
	var z = -xm * Math.sin(vARad) + zm * Math.cos(vARad);\r
	 \r
	// Depth scaling to simulate simple perspective effects\r
	var xdepth = 1 + 0.1 * z / xs;\r
	var zdepth = 1 + 0.1 * z / xs;\r
	return [xo + x * xdepth, yo - y * zdepth];\r
}\r
\r
`})]),_:1}),t[37]||(t[37]=e("div",{class:"info-panel"},[e("p",null,[e("b",null,"Function Description"),n(":"),e("br"),n(" Converts a point located in 3D space to final coordinates on a 2D canvas after a boardAngle and viewAngle transformation. "),e("br"),e("br"),e("b",null,"Key calculation steps"),n(":"),e("br"),n(" Obtain the orientation factor (which determines the z-direction positive and negative and the sign of the x-component) from the predefined array of angs and the index ndx; "),e("br"),e("br"),n(" Calculate the y and z change using boardAngle blending to reflect the board tilt; Then rotate according to viewAngle to get the new x and z components; "),e("br"),e("br"),n(" The coordinates in the 2D plane are finally calculated using simple perspective scaling factors (xdepth and zdepth). ")])],-1)),t[38]||(t[38]=e("br",null,null,-1)),t[39]||(t[39]=e("br",null,null,-1)),i(w,null,{code:s(()=>[i(y,{type:"JavaScript",code:`\r
\r
function getVert(xo, yo, yoff, vh, xs, zs, ndx, viewAngle, boardAngle) {\r
    var point1 = getXYZ(xo, yo, xs, yoff + vh, zs, ndx, viewAngle, boardAngle);\r
    var point2 = getXYZ(xo, yo, xs, yoff - vh, zs, ndx, viewAngle, boardAngle);\r
    return point1.concat(point2);\r
}\r
\r
\r
function getPlane(pData, ndx1, ndx2, viewAngle, boardAngle) { \r
    var plane1 = getVert(pData[0], pData[1], pData[2], pData[3], pData[4], pData[5], ndx1, viewAngle, boardAngle);\r
    var plane2 = getVert(pData[0], pData[1], pData[2], -pData[3], pData[4], pData[5], ndx2, viewAngle, boardAngle);\r
    return plane1.concat(plane2);\r
}\r
\r
\r
function getXYZHoriz(pData, viewAngle, boardAngle, ndx, istop) {\r
    var tfac = (istop) ? 1 : -1;\r
    return getXYZ(pData[0], pData[1], pData[4], pData[2] + tfac * pData[3], pData[5], ndx, viewAngle, boardAngle);\r
}\r
\r
\r
`})]),_:1}),t[40]||(t[40]=e("div",{class:"info-panel"},[e("p",null,[e("b",null,"Function Encapsulation and Modular Design"),e("br"),e("br"),e("b",null,"Reusability"),n(": By encapsulating similar computation tasks into independent functions (e.g., getVert, getPlane, getXYZHoriz), duplicate code is avoided, and code reusability and maintainability are improved. "),e("br"),e("br"),e("b",null,"Abstraction"),n(": Abstracts the underlying point coordinate computation (which relies on getXYZ calls) so that higher-level functions only need to focus on how to combine multiple vertices into a face or boundary. "),e("br"),e("br"),e("br"),e("b",null,"Coordinate and vector computation"),e("br"),e("br"),n(" Vertical computation: in getVert, the upper and lower vertices are computed by adjusting the incoming y-axis offsets (yoff + vh vs. yoff - vh), reflecting the component's boundaries in the vertical direction. "),e("br"),e("br"),e("b",null,"Horizontal Face Calculation"),n(": In getXYZHoriz, flexible calculation of the top face or bottom face is achieved by tfac determining the offset direction based on istop. "),e("br"),e("br"),e("br"),e("b",null,"Array Manipulation and Data Structures"),e("br"),e("br"),e("b",null,"Array merging"),n(": Use the concat method of JavaScript arrays to merge two separate arrays of vertices into a complete array of points, which is commonly used for constructing the vertex set of a polygon or a face (e.g., a quadrilateral). "),e("br"),e("br"),e("br"),e("b",null,"Parameterised design"),e("br"),e("br"),e("b",null,"Parameter passing"),n(": Each function controls the computation process by passing multiple parameters (e.g. xo, yo, yoff, vh, xs, zs, ndx, viewAngle, boardAngle), which ensures the flexibility of the function to be applied to different components and scenarios. "),e("br"),e("br"),e("b",null,"Orientation control"),n(": for example, using the parameter istop in getXYZHoriz, which determines the positive and negative orientations via tfac, enables fine control. "),e("br"),e("br"),e("br"),e("b",null,"Basic ideas for combining complex shapes"),e("br"),e("br"),e("b",null,"Hierarchical construction"),n(": Multiple simple computational functions can be combined to form a more complex graphical drawing logic, e.g. getPlane uses getVert to compute two boundaries, which are then combined into a single surface. "),e("br"),e("br"),e("b",null,"For perspective and projection"),n(": viewAngle, boardAngle and other parameters can be used to calculate the coordinates of components in different viewpoints, which provides the basis for 3D projection and perspective effects. ")])],-1)),t[41]||(t[41]=e("br",null,null,-1)),t[42]||(t[42]=e("br",null,null,-1)),i(w,null,{code:s(()=>[i(y,{type:"JavaScript",code:`\r
\r
function topPlane(ctx, planeData, col, viewAngle, boardAngle, istop) {\r
	var point1 = getXYZHoriz(planeData, viewAngle, boardAngle, 0, istop);\r
	var point2 = getXYZHoriz(planeData, viewAngle, boardAngle, 1, istop);\r
	var point3 = getXYZHoriz(planeData, viewAngle, boardAngle, 2, istop);\r
	var point4 = getXYZHoriz(planeData, viewAngle, boardAngle, 3, istop);\r
	ctx.fillStyle = col;\r
	putPoints(ctx, point1.concat(point2, point3, point4), true);\r
}\r
\r
function sidePlane (ctx, planeData, col, viewAngle, boardAngle, forMain) {\r
	var points = [];\r
	if (forMain)\r
		points = getPlane(planeData, 1, 2, viewAngle, boardAngle);\r
	else if (viewAngle > 0)\r
		points = getPlane(planeData, 0, 1, viewAngle, boardAngle);\r
	else\r
		points = getPlane(planeData, 2, 3, viewAngle, boardAngle);\r
	ctx.fillStyle = col;\r
	putPoints(ctx, points, true);\r
\r
\r
`})]),_:1}),t[43]||(t[43]=e("div",{class:"info-panel"},[e("p",null,[e("b",null," Vertex Calculation with Wrapper Functions"),e("br"),e("br"),n(" topPlane calls getXYZHoriz four times to compute the projection points for each corner of the horizontal plane at different corner scales (0, 1, 2, 3). This encapsulates the complexity of the projection algorithm and keeps the calls simple. "),e("br"),e("br"),n(" sidePlane calls getPlane to compute the four side vertices based on logical branches (forMain and viewAngle positive and negative), and getVert inside the getPlane function to compute the boundaries of the positive and negative directions, and then merge the arrays. "),e("br"),e("br"),e("b",null,"Parameter-driven drawing"),e("br"),e("br"),n(" Both functions pass key data through parameters, such as planeData, viewAngle, boardAngle, which make the vertex computation versatile and flexible for different drawing scenarios (e.g., changing viewpoints, adjusting the board angle). "),e("br"),e("br"),n(" In topPlane, the istop parameter is used to decide whether to calculate the coordinates of the top or bottom surface, and thus control how the projected points are calculated. "),e("br"),e("br"),n(" In sidePlane, the forMain parameter and viewAngle judgement decide which set of vertices is used to construct the side, reflecting the design idea of choosing different drawing modes according to the actual needs. "),e("br"),e("br"),e("b",null,"Array manipulation and drawing"),e("br"),e("br"),n(" Both functions use array concatenation (e.g. concat) to combine multiple vertices to form a complete set of polygon vertices. "),e("br"),e("br"),n(" The call to putPoints passes the computed vertex array to the draw function, which renders the corresponding faces on the Canvas, whose fill colour is set by ctx.fillStyle = col; to ensure that the faces are drawn as designed. ")])],-1)),t[44]||(t[44]=e("br",null,null,-1)),t[45]||(t[45]=e("br",null,null,-1)),i(ne,{week:"3",num:"2"})]),_:1})])]),_:1}))}},ve=L(pe,[["__scopeId","data-v-03f7f8df"]]);export{ve as default};
