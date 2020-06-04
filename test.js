const vSkewSlide = document.getElementById('vSkewSlide')
const hSkewSlide = document.getElementById('hSkewSlide')
const vSkewOut = document.getElementById('vSkewOut')
const hSkewOut = document.getElementById('hSkewOut')
const vTransSlide = document.getElementById('vTransSlide')
const hTransSlide = document.getElementById('hTransSlide')
const vTransOut = document.getElementById('vTransOut')
const hTransOut = document.getElementById('hTransOut')
const vScaleSlide = document.getElementById('vScaleSlide')
const hScaleSlide = document.getElementById('hScaleSlide')
const vScaleOut = document.getElementById('vScaleOut')
const hScaleOut = document.getElementById('hScaleOut')
const rotateSlide = document.getElementById('rotateSlide')
const rotateOut = document.getElementById('rotateOut')

const m11 = document.getElementById('m11')
const m12 = document.getElementById('m12')
const m13 = document.getElementById('m13')
const m14 = document.getElementById('m14')
const m21 = document.getElementById('m21')
const m22 = document.getElementById('m22')
const m23 = document.getElementById('m23')
const m24 = document.getElementById('m24')
const m31 = document.getElementById('m31')
const m32 = document.getElementById('m32')
const m33 = document.getElementById('m33')
const m34 = document.getElementById('m34')
const m41 = document.getElementById('m41')
const m42 = document.getElementById('m42')
const m43 = document.getElementById('m43')
const m44 = document.getElementById('m44')

/**
 * @type {HTMLCanvasElement}
 */
const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");
var vSkew = 0
var hSkew = 0
var vScale = 0.5
var hScale = 0.5
var vTrans = 0
var hTrans = 0
var rot = 0

ctx.fillStyle = "#ffffffff";

vSkewSlide.oninput = () => {
	vSkew = vSkewSlide.value
	vSkewOut.innerHTML = vSkew
	draw()
}
hSkewSlide.oninput = () => {
	hSkew = hSkewSlide.value
	hSkewOut.innerHTML = hSkew
	draw()
}
vTransSlide.oninput = () => {
	vTrans = vTransSlide.value
	vTransOut.innerHTML = vTrans
	draw()
}
hTransSlide.oninput = () => {
	hTrans = hTransSlide.value
	hTransOut.innerHTML = hTrans
	draw()
}
vScaleSlide.oninput = () => {
	vScale = vScaleSlide.value / 100
	vScaleOut.innerHTML = vScale
	draw()
}
hScaleSlide.oninput = () => {
	hScale = hScaleSlide.value / 100
	hScaleOut.innerHTML = hScale
	draw()
}
rotateSlide.oninput = () => {
	rot = rotateSlide.value
	rotateOut.innerHTML = rot
	draw()
}

function draw() {
	ctx.save()
	ctx.fillRect(0, 0, 400, 400)
	ctx.fillStyle = '#eeee00ff'
	ctx.transform(hScale, -Math.tan(vSkew * Math.PI / 180), Math.tan(hSkew * Math.PI / 180), vScale, hTrans, vTrans)
	ctx.rotate(rot * Math.PI / 180)
	ctx.fillRect(0, 0, 400, 400)
	var data = ctx.getTransform()
	m11.innerHTML = data.m11.toFixed(1)
	m12.innerHTML = data.m12.toFixed(1)
	m13.innerHTML = data.m13.toFixed(1)
	m14.innerHTML = data.m14.toFixed(1)
	m21.innerHTML = data.m21.toFixed(1)
	m22.innerHTML = data.m22.toFixed(1)
	m23.innerHTML = data.m23.toFixed(1)
	m24.innerHTML = data.m24.toFixed(1)
	m31.innerHTML = data.m31.toFixed(1)
	m32.innerHTML = data.m32.toFixed(1)
	m33.innerHTML = data.m33.toFixed(1)
	m34.innerHTML = data.m34.toFixed(1)
	m41.innerHTML = data.m41.toFixed(1)
	m42.innerHTML = data.m42.toFixed(1)
	m43.innerHTML = data.m43.toFixed(1)
	m44.innerHTML = data.m44.toFixed(1)
	ctx.restore()
}

draw()
