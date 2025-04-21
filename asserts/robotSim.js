
// robotSim.js —— Mitchell 风格机器人模拟核心

const canvasId = "robotCanvas";
let canvas, ctx;
let robot = null;
let wall = { x: 600, y: 300, width: 20, height: 100 };

// 初始化画布
export function initSim() {
  canvas = document.getElementById(canvasId);
  ctx = canvas.getContext("2d");
  canvas.width = 1000;
  canvas.height = 600;

  robot = new Robot(200, 300, 30);
  drawScene();
}

// 绘制整体场景
export function drawScene() {
  ctx.fillStyle = "#f0f0f0";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawWall(wall);
  robot.draw(ctx);
  robot.drawSensorBeam(ctx, wall);
}

// 机器人类
class Robot {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.sensorLength = 400;
  }

  draw(ctx) {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();

    // 天线
    ctx.beginPath();
    ctx.moveTo(this.x, this.y - this.radius);
    ctx.lineTo(this.x, this.y - this.radius - 10);
    ctx.lineWidth = 6;
    ctx.strokeStyle = "blue";
    ctx.stroke();
  }

  drawSensorBeam(ctx, wall) {
    const beamEndX = this.x + this.sensorLength;
    const beamEndY = this.y;

    const hit = getWallIntersection(this.x, this.y, beamEndX, beamEndY, wall);

    ctx.strokeStyle = hit ? "green" : "red";
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(hit?.x || beamEndX, hit?.y || beamEndY);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.setLineDash([]);
  }
}

// 绘制墙体
function drawWall(wall) {
  ctx.fillStyle = "black";
  ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
}

// 碰撞检测 —— 线段与矩形碰撞点
function getWallIntersection(x1, y1, x2, y2, wall) {
  const lines = [
    // top, right, bottom, left
    [wall.x, wall.y, wall.x + wall.width, wall.y],
    [wall.x + wall.width, wall.y, wall.x + wall.width, wall.y + wall.height],
    [wall.x + wall.width, wall.y + wall.height, wall.x, wall.y + wall.height],
    [wall.x, wall.y + wall.height, wall.x, wall.y]
  ];

  for (let line of lines) {
    const pt = getLineIntersection(x1, y1, x2, y2, ...line);
    if (pt) return pt;
  }
  return null;
}

// 线段相交算法
function getLineIntersection(x1, y1, x2, y2, x3, y3, x4, y4) {
  const denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
  if (denom === 0) return null;

  const px =
    ((x1 * y2 - y1 * x2) * (x3 - x4) -
      (x1 - x2) * (x3 * y4 - y3 * x4)) /
    denom;
  const py =
    ((x1 * y2 - y1 * x2) * (y3 - y4) -
      (y1 - y2) * (x3 * y4 - y3 * x4)) /
    denom;

  // Check if the intersection point is on both segments
  if (
    isBetween(px, x1, x2) &&
    isBetween(py, y1, y2) &&
    isBetween(px, x3, x4) &&
    isBetween(py, y3, y4)
  ) {
    return { x: px, y: py };
  }

  return null;
}

function isBetween(a, b1, b2) {
  return a >= Math.min(b1, b2) && a <= Math.max(b1, b2);
}
