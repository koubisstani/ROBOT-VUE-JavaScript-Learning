<template>
  <canvas id="robotCanvas" width="400" height="300"></canvas>
</template>

<script>
export default {
  name: 'Robot',
  mounted() {
    const canvas = document.getElementById('robotCanvas')
    const ctx = canvas.getContext('2d')

    function drawRobot() {
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // 绘制机器人的蓝色椭圆形身体
      ctx.fillStyle = '#007b7b'
      ctx.beginPath()
      ctx.ellipse(centerX, centerY, 20, 25, 0, 0, Math.PI * 2)
      ctx.fill()

      // 绘制轮轴（中间粗黑线）
      ctx.strokeStyle = '#000'
      ctx.lineWidth = 6
      ctx.beginPath()
      ctx.moveTo(centerX, centerY - 30)
      ctx.lineTo(centerX, centerY + 30)
      ctx.stroke()

      // 绘制两个轮子（黑色矩形）
      ctx.fillStyle = '#000'
      ctx.fillRect(centerX - 15, centerY - 35, 30, 10) // 上轮
      ctx.fillRect(centerX - 15, centerY + 25, 30, 10) // 下轮

      // 新增：机器人右侧红色传感器小圆点
      ctx.fillStyle = 'red'
      ctx.beginPath()
      ctx.arc(centerX + 20, centerY, 4, 0, Math.PI * 2)
      ctx.fill()
    }

    drawRobot()
  }
}
</script>

<style scoped>
#robotCanvas {
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
