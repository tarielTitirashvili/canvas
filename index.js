const canvas = document.getElementById('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const c = canvas.getContext('2d')
c.fillStyle = 'rgba(168,120,150,100)'
c.fillRect(0, 0, 200, 150)
c.fillStyle = 'rgba(18,120,150,100)'
c.fillRect(400, 0, 200, 150)
c.fillStyle = 'rgba(168,10,150,100)'
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
c.strokeStyle = '#ffffff'
c.stroke()

//circle
c.beginPath()
c.arc(
  300, //
  300, // position
  100, //radius
  0, //radiants start?
  600, //radiants end?
  false//clockWithe
  )
c.strokeStyle='red'
c.stroke()

const radius = Math.round(Math.random()*200)
const generateWidth = ()=>Math.random()*window.innerWidth+Math.round(radius/2)

for (let i=0; i<100; i++){
  c.beginPath()
  c.arc(
    generateWidth(), //
    Math.random()*window.innerHeight-radius, // position
    radius, //radius
    0, //radiants start?
    600, //radiants end?
    false//clockWithe
    )
  c.strokeStyle='red'
  c.stroke()
}