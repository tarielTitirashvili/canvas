const canvas = document.getElementById('canvas')
canvas.width = 800
canvas.height = 500
const c = canvas.getContext('2d')

c.fillRect(0, 0, 200, 150)
c.fillRect(400, 0, 200, 150)
c.fillRect(200, 150, 200, 150)

console.log(canvas)
const x = 0
const y = 250

// line
c.beginPath()
c.moveTo(x, y)
c.lineTo(200, 400)
c.lineTo(350, 400)
c.lineTo(550, 300)
c.lineTo(700, 450)
c.lineTo(800, 350)
c.stroke()