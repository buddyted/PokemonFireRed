const canvas=  document.querySelector('canvas')

const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = './img/map.png'

const playerImage = new Image()
playerImage.src = './img/Player-Down.png'


image.onload = () => {
    c.drawImage(image, 0, -150)
    c.drawImage(playerImage, canvas.width/2 - playerImage.width , canvas.height/2 + playerImage.height *4)
}