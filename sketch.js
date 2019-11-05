let osc
let noise
let snarePic
let kickPic
let snare
let kick
let bass
let hat
let ppl = [100, 100, 200]
let frequency = 50
let amplitude = 1
let width = 500
let height = 500
let widthC = 400
let heightC = 400
let snareFill = 100
let snareFill2 = 100
let kickFill = 100
let kickFill2 = 100
let hatFill = 100
let hatFill2 = 100
let bassFill = 100
let bassFill2 = 100
let snareButton = 150
let snareButton2 = 100
let kickButton = 150
let kickButton2 = 150
let hatButton = 200
let hatButton2 = 200
let bassButton = 150
let bassButton2 = 150
let fxButton = 150
let fxButton2 = 150
let snareMove = false
let snareMove2 = false
let kickMove = false
let kickMove2 = false
let hatMove = false
let hatMove2 = false
let bassMove = false
let bassMove2 = false
let fxMove = false
let fxMove2 = false
let fxFill = 100
let fxFill2 = 100
let directionSnare = "right"
let snareSpeed = 5
let xSnare = 300
let ySnare = 20
let directionSnare2 = "right"
let snareSpeed2 = 2.5
let xSnare2 = 75
let ySnare2 = 60
let directionKick = "right"
let kickSpeed = 5
let xKick = 0
let yKick = 100
let directionKick2 = "right"
let kickSpeed2 = 5
let xKick2 = 150
let yKick2 = 140
let directionHat = "right"
let hatSpeed = 20
let xHat = 0
let yHat = 180
let directionHat2 = "right"
let hatSpeed2 = 20
let xHat2 = 200
let yHat2 = 220
let directionBass = "right"
let bassSpeed = 2.5
let xBass = 200
let yBass = 260
let directionBass2 = "right"
let bassSpeed2 = 2.5
let xBass2 = 125
let yBass2 = 300
let directionFx = "right"
let fxSpeed = 2.5
let xFx = 300
let yFx = 340
let directionFx2 = "right"
let fxSpeed2 = 2.5
let xFx2 = 0
let yFx2 = 380

function preload() {
	// snarePic = loadImage('snare.png')
	// kickPic = loadImage('kick.png')
	snare = loadSound('snare.wav')
	kick = loadSound('kick.wav')
	hat = loadSound('hat.wav')
	bass = loadSound('bass.wav')
	fx = loadSound('fx.wav')
	fx2 = loadSound('fx2.wav')
}

function setup() {

	angleMode(DEGREES)

	// rotate(90)
	let canvas = createCanvas(width, height)
	canvas.parent("p5")


	osc = new p5.Oscillator()
	osc.setType("sine")
	osc.start()
	osc.amp(0)
	osc.freq(55)

	noise = new p5.Noise()
	noise.setType("white")
	noise.amp(0)

	env = new p5.Envelope()
	env.setADSR(.01, .2, .5, .1)

	env2 = new p5.Envelope()
	env2.setADSR(.01, .1, .1, .1)

}

function draw() {

	// print(xSnare)
	// rotate(90)
	// translate(0, -400)

			// background(255)

			stroke(0)
	strokeWeight(1)
	fill(0)
	rect(0, 0, width, heightC)
	rect(0, 0, widthC, heightC)

	// push()
	// stroke(snareFill)
	// strokeWeight(5)
	// line(0, 40, 400, 40)
	// pop()

	push()
	stroke(ppl)
	strokeWeight(5)
	line(0, 80, 500, 80)
	pop()

	push()
	stroke(ppl)
	strokeWeight(5)
	line(0, 160, 500, 160)
	pop()

	push()
	stroke(ppl)
	strokeWeight(5)
	line(0, 240, 500, 240)
	pop()

	push()
	stroke(ppl)
	strokeWeight(5)
	line(0, 320, 500, 320)
	pop()


	textSize(20)
	noStroke()
	fill(ppl)
	text('Snare', 20, 45)
	text('Kick', 20, 127.5)
	text('Hat', 20, 205)
	text('808', 20, 287.5)
	text('FX', 20, 367.5)


//snare
	push()
	stroke(ppl)
	strokeWeight(2)
	fill(snareFill)
	rect(400, 0, 433, 40)
	pop()

	push()
	stroke(ppl)
	strokeWeight(2)
	fill(0, 0, 255)
	rect(433, 0, 433, 40)
	pop()

	push()
	stroke(ppl)
	strokeWeight(2)
	fill(snareButton, 0, 0)
	rect(466, 0, 433, 40)
	pop()

	if (snareSpeed == 2.5) {
		snareButton = 100
	} else if (snareSpeed == 5) {
		snareButton = 150
	} else if (snareSpeed == 10) {
		snareButton = 200
	}

//snare2
	push()
	stroke(ppl)
	strokeWeight(2)
	fill(snareFill2)
	rect(400, 40, 433, 40)
	pop()

	push()
	stroke(ppl)
	strokeWeight(2)
	fill(0, 0, 255)
	rect(433, 40, 433, 40)
	pop()

	push()
	stroke(ppl)
	strokeWeight(2)
	fill(snareButton2, 0, 0)
	rect(466, 40, 433, 40)
	pop()

	if (snareSpeed2 == 2.5) {
		snareButton2 = 100
	} else if (snareSpeed2 == 5) {
		snareButton2 = 150
	} else if (snareSpeed2 == 10) {
		snareButton2 = 200
	}

//kick
	push()
	stroke(ppl)
	strokeWeight(2)
	fill(kickFill)
	rect(400, 80, 433, 40)
	pop()

	push()
	stroke(ppl)
	strokeWeight(2)
	fill(0, 0, 255)
	rect(433, 80, 433, 40)
	pop()

	push()
	stroke(ppl)
	strokeWeight(2)
	fill(kickButton, 0, 0)
	rect(466, 80, 433, 40)
	pop()

	if (kickSpeed == 2.5) {
		kickButton = 100
	} else if (kickSpeed == 5) {
		kickButton = 150
	} else if (kickSpeed == 10) {
		kickButton = 200
	}

//kick2
	push()
	stroke(ppl)
	strokeWeight(2)
	fill(kickFill2)
	rect(400, 120, 433, 40)
	pop()

	push()
	stroke(ppl)
	strokeWeight(2)
	fill(0, 0, 255)
	rect(433, 120, 433, 40)
	pop()

	push()
	stroke(ppl)
	strokeWeight(2)
	fill(kickButton2, 0, 0)
	rect(466, 120, 433, 40)
	pop()

	if (kickSpeed2 == 2.5) {
		kickButton2 = 100
	} else if (kickSpeed2 == 5) {
		kickButton2 = 150
	} else if (kickSpeed2 == 10) {
		kickButton2 = 200
	}

//hat
	push()
	stroke(ppl)
	strokeWeight(2)
	fill(hatFill)
	rect(400, 160, 433, 40)
	pop()

	push()
	stroke(ppl)
	strokeWeight(2)
	fill(0, 0, 255)
	rect(433, 160, 433, 40)
	pop()

	push()
	stroke(ppl)
	strokeWeight(2)
	fill(hatButton, 0, 0)
	rect(466, 160, 433, 40)
	pop()

	if (hatSpeed == 5) {
		hatButton = 100
	} else if (hatSpeed == 10) {
		hatButton = 150
	} else if (hatSpeed == 20) {
		hatButton = 200
	}

//hat2
	push()
	stroke(ppl)
	strokeWeight(2)
	fill(hatFill2)
	rect(400, 200, 433, 40)
	pop()

	push()
	stroke(ppl)
	strokeWeight(2)
	fill(0, 0, 255)
	rect(433, 200, 433, 40)
	pop()

	push()
	stroke(ppl)
	strokeWeight(2)
	fill(hatButton2, 0, 0)
	rect(466, 200, 433, 40)
	pop()

	if (hatSpeed2 == 5) {
		hatButton2 = 100
	} else if (hatSpeed2 == 10) {
		hatButton2 = 150
	} else if (hatSpeed2 == 20) {
		hatButton2 = 200
	}

//bass
	push()
	stroke(ppl)
	strokeWeight(2)
	fill(bassFill)
	rect(400, 240, 433, 40)
	pop()

	push()
	stroke(ppl)
	strokeWeight(2)
	fill(0, 0, 255)
	rect(433, 240, 433, 40)
	pop()

	push()
	stroke(ppl)
	strokeWeight(2)
	fill(bassButton, 0, 0)
	rect(466, 240, 433, 40)
	pop()

	if (bassSpeed == 1.25) {
		bassButton = 100
	} else if (bassSpeed == 2.5) {
		bassButton = 150
	} else if (bassSpeed == 5) {
		bassButton = 200
	}

//bass2
	push()
	stroke(ppl)
	strokeWeight(2)
	fill(bassFill2)
	rect(400, 280, 433, 40)
	pop()

	push()
	stroke(ppl)
	strokeWeight(2)
	fill(0, 0, 255)
	rect(433, 280, 433, 40)
	pop()

	push()
	stroke(ppl)
	strokeWeight(2)
	fill(bassButton2, 0, 0)
	rect(466, 280, 433, 40)
	pop()

	if (bassSpeed2 == 1.25) {
		bassButton2 = 100
	} else if (bassSpeed2 == 2.5) {
		bassButton2 = 150
	} else if (bassSpeed2 == 5) {
		bassButton2 = 200
	}

//fx
	push()
	stroke(ppl)
	strokeWeight(2)
	fill(fxFill)
	rect(400, 320, 433, 40)
	pop()

	push()
	stroke(ppl)
	strokeWeight(2)
	fill(0, 0, 255)
	rect(433, 320, 433, 40)
	pop()

	push()
	stroke(ppl)
	strokeWeight(2)
	fill(fxButton, 0, 0)
	rect(466, 320, 433, 40)
	pop()

	if (fxSpeed == 1.25) {
		fxButton = 100
	} else if (fxSpeed == 2.5) {
		fxButton = 150
	} else if (fxSpeed == 5) {
		fxButton = 200
	}

//fx2
	push()
	stroke(ppl)
	strokeWeight(2)
	fill(fxFill2)
	rect(400, 360, 433, 40)
	pop()

	push()
	stroke(ppl)
	strokeWeight(2)
	fill(0, 0, 255)
	rect(433, 360, 433, 40)
	pop()

	push()
	stroke(ppl)
	strokeWeight(2)
	fill(fxButton2, 0, 0)
	rect(466, 360, 433, 40)
	pop()

	if (fxSpeed2 == 1.25) {
		fxButton2 = 100
	} else if (fxSpeed2 == 2.5) {
		fxButton2 = 150
	} else if (fxSpeed2 == 5) {
		fxButton2 = 200
	}





	if (snareMove == true && directionSnare == "left") {
		xSnare += (snareSpeed/2)
	} else if (snareMove == true && directionSnare == "right") {
		xSnare -= (snareSpeed/2)
	}

	if (snareMove2 == true && directionSnare2 == "left") {
		xSnare2 += (snareSpeed2/2)
	} else if (snareMove2 == true && directionSnare2 == "right") {
		xSnare2 -= (snareSpeed2/2)
	}

	if (kickMove == true && directionKick == "left") {
		xKick += (kickSpeed/2)
	} else if (kickMove == true && directionKick == "right") {
		xKick -= (kickSpeed/2)
	}

	if (kickMove2 == true && directionKick2 == "left") {
		xKick2 += (kickSpeed2/2)
	} else if (kickMove2 == true && directionKick2 == "right") {
		xKick2 -= (kickSpeed2/2)
	}

	if (hatMove == true && directionHat == "left") {
		xHat += (hatSpeed/2)
	} else if (hatMove == true && directionHat == "right") {
		xHat -= (hatSpeed/2)
	}

	if (hatMove2 == true && directionHat2 == "left") {
		xHat2 += (hatSpeed2/2)
	} else if (hatMove2 == true && directionHat2 == "right") {
		xHat2 -= (hatSpeed2/2)
	}

	if (bassMove == true && directionBass == "left") {
		xBass += (bassSpeed/2)
	} else if (bassMove == true && directionBass == "right") {
		xBass -= (bassSpeed/2)
	}

	if (bassMove2 == true && directionBass2 == "left") {
		xBass2 += (bassSpeed2/2)
	} else if (bassMove2 == true && directionBass2 == "right") {
		xBass2 -= (bassSpeed2/2)
	}

	if (fxMove == true && directionFx == "left") {
		xFx += (fxSpeed/2)
	} else if (fxMove == true && directionFx == "right") {
		xFx -= (fxSpeed/2)
	}

	if (fxMove2 == true && directionFx2 == "left") {
		xFx2 += (fxSpeed2/2)
	} else if (fxMove2 == true && directionFx2 == "right") {
		xFx2 -= (fxSpeed2/2)
	}

	//negatives

	if (xSnare <= 0) {
		xSnare = (xSnare + xSnare)
	}

	if (xSnare2 <= 0) {
		xSnare2 = (xSnare2 + xSnare2)
	}

	if (xKick <= 0) {
		xKick = (xKick + xKick)
	}

	if (xKick2 <= 0) {
		xKick2 = (xKick2 + xKick2)
	}

	if (xHat <= 0) {
		xHat = (xHat + xHat)
	}

	if (xHat2 <= 0) {
		xHat2 = (xHat2 + xHat2)
	}


	if (xBass <= 0) {
		xBass = (xBass + xBass)
	}

	if (xBass2 <= 0) {
		xBass2 = (xBass2 + xBass2)
	}

	if (xFx <= 0) {
		xFx = (xFx + xFx)
	}

	if (xFx2 <= 0) {
		xFx2 = (xFx2 + xFx2)
	}



//snare
	strokeWeight(10)
	stroke(snareFill)
	point(xSnare, ySnare, 10)
	// image(snarePic, xSnare, ySnare)

	if (directionSnare == "right") {
		xSnare += snareSpeed
	} else if (directionSnare == "left") {
		xSnare -= snareSpeed
	}

	if (xSnare >= widthC) {
		directionSnare = "left"
		if (snareFill == 220) {
		snare.play()
	}

	} else if (xSnare <= 0) {
		directionSnare = "right"
		if (snareFill == 220) {
		snare.play()
	}

	}

//snare2
	strokeWeight(10)
	stroke(snareFill2)
	point(xSnare2, ySnare2, 10)

	if (directionSnare2 == "right") {
		xSnare2 += snareSpeed2

	} else if (directionSnare2 == "left") {
		xSnare2 -= snareSpeed2
	}

	if (xSnare2 >= widthC) {
		directionSnare2 = "left"
	if (snareFill2 == 220) {
		snare.play()
	}

	} else if (xSnare2 <= 0) {
		directionSnare2 = "right"
	if (snareFill2 == 220) {
		snare.play()
	}
	}

//kick
	strokeWeight(10)
	stroke(kickFill)
	point(xKick, yKick, 10)

	if (directionKick == "right") {
		xKick += kickSpeed

	} else if (directionKick == "left") {
		xKick -= kickSpeed

	}

	if (xKick >= widthC) {
		directionKick = "left"
	if (kickFill == 220) {
		kick.play()
	}
	} else if (xKick <= 0) {
		directionKick = "right"
	if (kickFill == 220) {
		kick.play()
	}
	}

//kick2
	strokeWeight(10)
	stroke(kickFill2)
	point(xKick2, yKick2, 10)

	if (directionKick2 == "right") {
		xKick2 += kickSpeed2

	} else if (directionKick2 == "left") {
		xKick2 -= kickSpeed2

	}

	if (xKick2 >= widthC) {
		directionKick2 = "left"
	if (kickFill2 == 220) {
		kick.play()
	}

	} else if (xKick2 <= 0) {
		directionKick2 = "right"
	if (kickFill2 == 220) {
		kick.play()
	}
	}

//hat
	strokeWeight(10)
	stroke(hatFill)
	point(xHat, yHat, 10)

	if (directionHat == "right") {
		xHat += hatSpeed

	} else if (directionHat == "left") {
		xHat -= hatSpeed
	
	}

	if (xHat >= widthC) {
		directionHat = "left"
	if (hatFill == 220) {
		hat.play()
	}

	} else if (xHat <= 0) {
		directionHat = "right"
	if (hatFill == 220) {
		hat.play()
	}
	}

//hat2
	strokeWeight(10)
	stroke(hatFill2)
	point(xHat2, yHat2, 10)

	if (directionHat2 == "right") {
		xHat2 += hatSpeed2

	} else if (directionHat2 == "left") {
		xHat2 -= hatSpeed2
	
	}

	if (xHat2 >= widthC) {
		directionHat2 = "left"
	if (hatFill2 == 220) {
		hat.play()
	}

	} else if (xHat2 <= 0) {
		directionHat2 = "right"
	if (hatFill2 == 220) {
		hat.play()
	}
	}

//bass
	strokeWeight(10)
	stroke(bassFill)
	point(xBass, yBass, 10)

	if (directionBass == "right") {
		xBass += bassSpeed

	} else if (directionBass == "left") {
		xBass -= bassSpeed
	
	}

	if (xBass >= widthC) {
		directionBass = "left"
	if (bassFill == 220) {
		bass.play()
	}

	} else if (xBass <= 0) {
		directionBass = "right"
	if (bassFill == 220) {
		bass.play()
	}	
	}

//bass2
	strokeWeight(10)
	stroke(bassFill2)
	point(xBass2, yBass2, 10)

	if (directionBass2 == "right") {
		xBass2 += bassSpeed2

	} else if (directionBass2 == "left") {
		xBass2 -= bassSpeed2

	}

	if (xBass2 >= widthC) {
		directionBass2 = "left"
	if (bassFill2 == 220) {
		bass.play()
	}

	} else if (xBass2 <= 0) {
		directionBass2 = "right"
	if (bassFill2 == 220) {
		bass.play()
	}
	}

//fx
	strokeWeight(10)
	stroke(fxFill)
	point(xFx, yFx, 10)

	if (directionFx == "right") {
		xFx += fxSpeed

	} else if (directionFx == "left") {
		xFx -= fxSpeed
	
	}

	if (xFx >= widthC) {
		directionFx = "left"
	if (fxFill == 220) {
		fx.play()
	}

	} else if (xFx <= 0) {
		directionFx = "right"
	if (fxFill == 220) {
		fx.play()
	}
	}

//fx2
	strokeWeight(10)
	stroke(fxFill2)
	point(xFx2, yFx2, 10)

	if (directionFx2 == "right") {
		xFx2 += fxSpeed2

	} else if (directionFx2 == "left") {
		xFx2 -= fxSpeed2
	}

	if (xFx2 >= widthC) {
		directionFx2 = "left"
	if (fxFill2 == 220) {
		fx2.play()
	}

	} else if (xFx2 <= 0) {
		directionFx2 = "right"
	if (fxFill2 == 220) {
		fx2.play()
	}
	}

}

	function mouseClicked() {
		
		//snare
		if (mouseX >= 400 && mouseX <= 433 && mouseY >= 0 && mouseY <= 40 && snareFill == 220) {
		snareFill = 100
		} else if (mouseX >= 400 && mouseX <= 433 && mouseY >= 0 && mouseY <= 40 && snareFill == 100) {
		snareFill = 220 }

	
		if (mouseX >= 466 && mouseX <= 500 && mouseY >= 0 && mouseY <= 40 && snareSpeed == 2.5) {
		snareSpeed = (snareSpeed*2)}
		else if (mouseX >= 466 && mouseX <= 500 && mouseY >= 0 && mouseY <= 40 && snareSpeed == 5) {
		snareSpeed = (snareSpeed*2)}
		else if (mouseX >= 466 && mouseX <= 500 && mouseY >= 0 && mouseY <= 40 && snareSpeed == 10) {
		snareSpeed = (snareSpeed/4)}


		//snare2
		if (mouseX >= 400 && mouseX <= 433 && mouseY >= 40 && mouseY <= 80 && snareFill2 == 220) {
		snareFill2 = 100
		} else if (mouseX >= 400 && mouseX <= 433 && mouseY >= 40 && mouseY <= 80 && snareFill2 == 100) {
		snareFill2 = 220 }

		

		if (mouseX >= 466 && mouseX <= 500 && mouseY >= 40 && mouseY <= 80 && snareSpeed2 == 2.5) {
		snareSpeed2 = (snareSpeed2*2)}
		else if (mouseX >= 466 && mouseX <= 500 && mouseY >= 40 && mouseY <= 80 && snareSpeed2 == 5) {
		snareSpeed2 = (snareSpeed2*2)}
		else if (mouseX >= 466 && mouseX <= 500 && mouseY >= 40 && mouseY <= 80 && snareSpeed2 == 10) {
		snareSpeed2 = (snareSpeed2/4)}

		//kick
		if (mouseX >= 400 && mouseX <= 433 && mouseY >= 80 && mouseY <= 120 && kickFill == 220) {
		kickFill = 100
		} else if (mouseX >= 400 && mouseX <= 433 && mouseY >= 80 && mouseY <= 120 && kickFill == 100) {
		kickFill = 220 }


		if (mouseX >= 466 && mouseX <= 500 && mouseY >= 80 && mouseY <= 120 && kickSpeed == 2.5) {
		kickSpeed = (kickSpeed*2)}
		else if (mouseX >= 466 && mouseX <= 500 && mouseY >= 80 && mouseY <= 120 && kickSpeed == 5) {
		kickSpeed = (kickSpeed*2)}
		else if (mouseX >= 466 && mouseX <= 500 && mouseY >= 80 && mouseY <= 120 && kickSpeed == 10) {
		kickSpeed = (kickSpeed/4)}

		//kick2
		if (mouseX >= 400 && mouseX <= 433 && mouseY >= 120 && mouseY <= 160 && kickFill2 == 220) {
		kickFill2 = 100
		} else if (mouseX >= 400 && mouseX <= 433 && mouseY >= 120 && mouseY <= 160 && kickFill2 == 100) {
		kickFill2 = 220 }

		

		if (mouseX >= 466 && mouseX <= 500 && mouseY >= 120 && mouseY <= 160 && kickSpeed2 == 2.5) {
		kickSpeed2 = (kickSpeed2*2)}
		else if (mouseX >= 466 && mouseX <= 500 && mouseY >= 120 && mouseY <= 160 && kickSpeed2 == 5) {
		kickSpeed2 = (kickSpeed2*2)}
		else if (mouseX >= 466 && mouseX <= 500 && mouseY >= 120 && mouseY <= 160 && kickSpeed2 == 10) {
		kickSpeed2 = (kickSpeed2/4)}

		//hat
		if (mouseX >= 400 && mouseX <= 433 && mouseY >= 160 && mouseY <= 200 && hatFill == 220) {
		hatFill = 100
		} else if (mouseX >= 400 && mouseX <= 433 && mouseY >= 160 && mouseY <= 200 && hatFill == 100) {
		hatFill = 220 }

		

		if (mouseX >= 466 && mouseX <= 500 && mouseY >= 160 && mouseY <= 200 && hatSpeed == 5) {
		hatSpeed = (hatSpeed*2)}
		else if (mouseX >= 466 && mouseX <= 500 && mouseY >= 160 && mouseY <= 200 && hatSpeed == 10) {
		hatSpeed = (hatSpeed*2)}
		else if (mouseX >= 466 && mouseX <= 500 && mouseY >= 160 && mouseY <= 200 && hatSpeed == 20) {
		hatSpeed = (hatSpeed/4)}

		//hat2
		if (mouseX >= 400 && mouseX <= 433 && mouseY >= 200 && mouseY <= 240 && hatFill2 == 220) {
		hatFill2 = 100
		} else if (mouseX >= 400 && mouseX <= 433 && mouseY >= 200 && mouseY <= 240 && hatFill2 == 100) {
		hatFill2 = 220 }

		

		if (mouseX >= 466 && mouseX <= 500 && mouseY >= 200 && mouseY <= 240 && hatSpeed2 == 5) {
		hatSpeed2 = (hatSpeed2*2)}
		else if (mouseX >= 466 && mouseX <= 500 && mouseY >= 200 && mouseY <= 240 && hatSpeed2 == 10) {
		hatSpeed2 = (hatSpeed2*2)}
		else if (mouseX >= 466 && mouseX <= 500 && mouseY >= 200 && mouseY <= 240 && hatSpeed2 == 20) {
		hatSpeed2 = (hatSpeed2/4)}

		//bass
		if (mouseX >= 400 && mouseX <= 433 && mouseY >= 240 && mouseY <= 280 && bassFill == 220) {
		bassFill = 100
		} else if (mouseX >= 400 && mouseX <= 433 && mouseY >= 240 && mouseY <= 280 && bassFill == 100) {
		bassFill = 220 }

		

		if (mouseX >= 466 && mouseX <= 500 && mouseY >= 240 && mouseY <= 280 && bassSpeed == 1.25) {
		bassSpeed = (bassSpeed*2)}
		else if (mouseX >= 466 && mouseX <= 500 && mouseY >= 240 && mouseY <= 280 && bassSpeed == 2.5) {
		bassSpeed = (bassSpeed*2)}
		else if (mouseX >= 466 && mouseX <= 500 && mouseY >= 240 && mouseY <= 280 && bassSpeed == 5) {
		bassSpeed = (bassSpeed/4)}

		//bass2
		if (mouseX >= 400 && mouseX <= 433 && mouseY >= 280 && mouseY <= 320 && bassFill2 == 220) {
		bassFill2 = 100
		} else if (mouseX >= 400 && mouseX <= 433 && mouseY >= 280 && mouseY <= 320 && bassFill2 == 100) {
		bassFill2 = 220 }

		

		if (mouseX >= 466 && mouseX <= 500 && mouseY >= 280 && mouseY <= 320 && bassSpeed2 == 1.25) {
		bassSpeed2 = (bassSpeed2*2)}
		else if (mouseX >= 466 && mouseX <= 500 && mouseY >= 280 && mouseY <= 320 && bassSpeed2 == 2.5) {
		bassSpeed2 = (bassSpeed2*2)}
		else if (mouseX >= 466 && mouseX <= 500 && mouseY >= 280 && mouseY <= 320 && bassSpeed2 == 5) {
		bassSpeed2 = (bassSpeed2/4)}

		//fx
		if (mouseX >= 400 && mouseX <= 433 && mouseY >= 320 && mouseY <= 360 && fxFill == 220) {
		fxFill = 100
		} else if (mouseX >= 400 && mouseX <= 433 && mouseY >= 320 && mouseY <= 360 && fxFill == 100) {
		fxFill = 220 }

		

		if (mouseX >= 466 && mouseX <= 500 && mouseY >= 320 && mouseY <= 360 && fxSpeed == 1.25) {
		fxSpeed = (fxSpeed*2)}
		else if (mouseX >= 466 && mouseX <= 500 && mouseY >= 320 && mouseY <= 360 && fxSpeed == 2.5) {
		fxSpeed = (fxSpeed*2)}
		else if (mouseX >= 466 && mouseX <= 500 && mouseY >= 320 && mouseY <= 360 && fxSpeed == 5) {
		fxSpeed = (fxSpeed/4)}

		//fx2
		if (mouseX >= 400 && mouseX <= 433 && mouseY >= 360 && mouseY <= 400 && fxFill2 == 220) {
		fxFill2 = 100
		} else if (mouseX >= 400 && mouseX <= 433 && mouseY >= 360 && mouseY <= 400 && fxFill2 == 100) {
		fxFill2 = 220 }

		

		if (mouseX >= 466 && mouseX <= 500 && mouseY >= 360 && mouseY <= 400 && fxSpeed2 == 1.25) {
		fxSpeed2 = (fxSpeed2*2)}
		else if (mouseX >= 466 && mouseX <= 500 && mouseY >= 360 && mouseY <= 400 && fxSpeed2 == 2.5) {
		fxSpeed2 = (fxSpeed2*2)}
		else if (mouseX >= 466 && mouseX <= 500 && mouseY >= 360 && mouseY <= 400 && fxSpeed2 == 5) {
		fxSpeed2 = (fxSpeed2/4)}
	}

	function mousePressed() {
		if (mouseX >= 433 && mouseX <= 466 && mouseY >= 0 && mouseY <= 40) {
		snareMove = true }
		if (mouseX >= 433 && mouseX <= 466 && mouseY >= 40 && mouseY <= 80) {
		snareMove2 = true }
		if (mouseX >= 433 && mouseX <= 466 && mouseY >= 80 && mouseY <= 120) {
		kickMove = true }
		if (mouseX >= 433 && mouseX <= 466 && mouseY >= 120 && mouseY <= 160) {
		kickMove2 = true }
		if (mouseX >= 433 && mouseX <= 466 && mouseY >= 160 && mouseY <= 200) {
		hatMove = true }
		if (mouseX >= 433 && mouseX <= 466 && mouseY >= 200 && mouseY <= 240) {
		hatMove2 = true }
		if (mouseX >= 433 && mouseX <= 466 && mouseY >= 240 && mouseY <= 280) {
		bassMove = true }
		if (mouseX >= 433 && mouseX <= 466 && mouseY >= 280 && mouseY <= 320) {
		bassMove2 = true }
		if (mouseX >= 433 && mouseX <= 466 && mouseY >= 320 && mouseY <= 360) {
		fxMove = true }
		if (mouseX >= 433 && mouseX <= 466 && mouseY >= 360 && mouseY <= 400) {
		fxMove2 = true }
	}

	function mouseReleased() {
		snareMove = false
		snareMove2 = false
		kickMove = false
		kickMove2 = false
		hatMove = false
		hatMove2 = false
		bassMove = false
		bassMove2 = false
		fxMove = false
		fxMove2 = false
	}

	function presetOne() {

 directionSnare = "right"
 snareSpeed = 5
 xSnare = 300
 ySnare = 20
 directionSnare2 = "right"
 snareSpeed2 = 2.5
 xSnare2 = 75
 ySnare2 = 60
 directionKick = "right"
 kickSpeed = 5
 xKick = 0
 yKick = 100
 directionKick2 = "right"
 kickSpeed2 = 5
 xKick2 = 150
 yKick2 = 140
 directionHat = "right"
 hatSpeed = 20
 xHat = 0
 yHat = 180
 directionHat2 = "right"
 hatSpeed2 = 20
 xHat2 = 200
 yHat2 = 220
 directionBass = "right"
 bassSpeed = 2.5
 xBass = 200
 yBass = 260
 directionBass2 = "right"
 bassSpeed2 = 2.5
 xBass2 = 125
 yBass2 = 300
 directionFx = "right"
 fxSpeed = 2.5
 xFx = 300
 yFx = 340
 directionFx2 = "right"
 fxSpeed2 = 2.5
 xFx2 = 0
 yFx2 = 380


	}

	function presetTwo() {

 directionSnare = "right"
 snareSpeed = 5
 xSnare = 200
 ySnare = 20
 directionSnare2 = "right"
 snareSpeed2 = 5
 xSnare2 = 200
 ySnare2 = 60
 directionKick = "right"
 kickSpeed = 2.5
 xKick = 75
 yKick = 100
 directionKick2 = "right"
 kickSpeed2 = 10
 xKick2 = 0
 yKick2 = 140
 directionHat = "right"
 hatSpeed = 5
 xHat = 0
 yHat = 180
 directionHat2 = "right"
 hatSpeed2 = 5
 xHat2 = 200
 yHat2 = 220
 directionBass = "right"
 bassSpeed = 5
 xBass = 200
 yBass = 260
 directionBass2 = "right"
 bassSpeed2 = 5
 xBass2 = 250
 yBass2 = 300
 directionFx = "right"
 fxSpeed = 1.25
 xFx = 2.5
 yFx = 340
 directionFx2 = "right"
 fxSpeed2 = 1.25
 xFx2 = 25
 yFx2 = 380


	}

	function presetThree() {

 directionSnare = "right"
 snareSpeed = 10
 xSnare = 325
 ySnare = 20
 directionSnare2 = "right"
 snareSpeed2 = 2.5
 xSnare2 = 250
 ySnare2 = 60
 directionKick = "right"
 kickSpeed = 10
 xKick = 125
 yKick = 100
 directionKick2 = "right"
 kickSpeed2 = 10
 xKick2 = 0
 yKick2 = 140
 directionHat = "right"
 hatSpeed = 20
 xHat = 0
 yHat = 180
 directionHat2 = "right"
 hatSpeed2 = 20
 xHat2 = 200
 yHat2 = 220
 directionBass = "right"
 bassSpeed = 1.25
 xBass = 75
 yBass = 260
 directionBass2 = "right"
 bassSpeed2 = 1.25
 xBass2 = 75
 yBass2 = 300
 directionFx = "right"
 fxSpeed = 1.25
 xFx = 100
 yFx = 340
 directionFx2 = "right"
 fxSpeed2 = 1.25
 xFx2 = 100
 yFx2 = 380


	}


