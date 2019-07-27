// ========================================================== //
//                      Fractal Generator                     //
// ========================================================== //

const rows = 400, cols = 400;	// canvas strength
// var canvas_w = 400, canvas_h = 400;
const canvas = document.getElementById("fractal_canvas");
const ifs_head_div = document.getElementById("frctl_view_lines");
const frctl_rule_count = document.getElementById("frctl_rule_count");
const frctl_select = document.querySelector(".fractal_select select");
const frctl_bottom_div = document.getElementsByClassName("frctl_bottom_div")[0];
var context = canvas.getContext("2d");
var imgData = context.createImageData(rows, cols);
var i, p;
var clientX, clientY;	// position of event
var ifs_c, ifs_r;	// Coordinate of scanned input
var tot_c, tot_r;	// total cols and rows in ifs
var IFSMatrix;
var iterations = 8;
const ifsList = {
	r: 0, s: 1, t: 2, p: 3, e: 4, f: 5
};
const frctl_itr_count = document.getElementById("frctl_itr_count");
const resetCanvasLayer = context.createImageData(rows, cols);
fill(resetCanvasLayer, 0, 0, 0, 0);

const IFSDB = {
	0: {
		name: "Tree",
		param: ["0.05", "0.6", "0", "0", "0.48", "0.04", "0.05", "-0.6", "0", "0", "0.47", "0.5", "0.5", "0.45", "45", "45", "0.3", "0.08", "0.5", "0.4", "20", "20", "0.28", "0.5", "0.5", "0.5", "-30", "-30", "0.3", "0.65", "0.55", "0.4", "-40", "-40", "0.32", "0.4"]
	},
	1: {
		name: "Sierpinski Gasket",
		param: ["0.5", "0.5", "0", "0", "0", "0", "0.5", "0.5", "0", "0", "0.5", "0", "0.5", "0.5", "0", "0", "0.25", "0.5"]
	},
	2: {
		name: "Cantor Set",
		param: ["0.33", "1", "0", "0", "0", "0", "0.33", "1", "0", "0", "0.67", "0"]
	},
	3: {
		name: "Cantor Dust",
		param: ["0.25", "0.25", "0", "0", "0", "0", "0.25", "0.25", "0", "0", "0.75", "0", "0.25", "0.25", "0", "0", "0", "0.75", "0.25", "0.25", "0", "0", "0.75", "0.75"]
	},
	4: {
		name: "Vicsek fractal",
		param: ["0.33", "0.33", "0", "0", "0", "0", "0.33", "0.33", "0", "0", "0.67", "0", "0.33", "0.33", "0", "0", "0", "0.67", "0.33", "0.33", "0", "0", "0.33", "0.33", "0.33", "0.33", "0", "0", "0.67", "0.67"]
	},
	5: {
		name: "Hexaflake",
		param: ["0.33", "0.33", "0", "0", "0", "0.16", "0.33", "0.33", "0", "0", "0", "0.5", "0.33", "0.33", "0", "0", "0.34", "0", "0.33", "0.33", "0", "0", "0.34", "0.67", "0.33", "0.33", "0", "0", "0.67", "0.16", "0.33", "0.33", "0", "0", "0.67", "0.5"]
	},
	6: {
		name: "UnNamed (Assign 2-4)",
		param: ["0.5", "0.5", "0", "0", "0", "0", "0.5", "0.5", "180", "0", "1", "0", "0.5", "0.5", "180", "0", "0.5", "0.5"]
	}
};

var IFSMatrix = ["0.5", "0.5", "0", "0", "0", "0", "0.5", "0.5", "0", "0", "0.5", "0", "0.5", "0.5", "0", "0", "0.25", "0.5"];

function getIFSCord(elem) {
	clientX = elem.getBoundingClientRect().x;
	clientY = elem.getBoundingClientRect().y;
}

function getIFSRule(i, r) {
	// alert("Gimme " + ifs + " for row " + row);
	ifs_c = i;
	ifs_r = r;
	showPopUp();
}

function changeIteration() {
	var new_itr = parseInt(prompt("Please enter no of iterations", "A +ve int"), 10);
	if (Number.isInteger(new_itr) && new_itr > 0) {
		iterations = new_itr;
		frctl_itr_count.innerHTML = "Iterations: 0/" + new_itr;
		resetCanvas();
	}
}

function showPopUp() {
	var popup = document.getElementById('frctl_popup');
	popup.style.left = clientX + "px";
	popup.style.top = clientY + "px";
	popup.classList.remove('frctl_hidden');
	popup.querySelector("#frctl_value").focus();
}

function processPopUp() {
	var popup = document.getElementById("frctl_popup");
	popup.classList.add("frctl_hidden");
	popup.style.left = "0px";
	popup.style.top = "0px";
	var input = popup.querySelector("#frctl_value").value;
	if (input != '' && !isNaN(input)) {
		document.getElementsByClassName('frctl_rule-' + ifs_c)[ifs_r + 1].innerHTML = input;
		scanIFS();
	}
	popup.querySelector("#frctl_value").value = "";
}


// Tests
// context.fillText("Ankur",10,50);
// imgData = context.getImageData(0,0,400,400);
// setInterval(function(){
// 	revertImg();
// 	context.putImageData(imgData,0,0);
// },1000);

function scanIFS() {
	var allIFS = document.getElementsByClassName("frctl_rule-c");
	tot_c = 6;
	tot_r = allIFS.length / 6;
	// IFSMatrix = new Array();
	IFSMatrix = [];
	for (var i = 0; i < tot_r; ++i) {
		for (var j = 0; j < tot_c; ++j) {
			IFSMatrix.push(allIFS[tot_c * i + j].innerHTML);
		}
	}
}
// scanIFS();

function loadIFS() {
	var deletable = document.getElementsByClassName("frctl_rule_line");
	var del_length = deletable.length;
	for (var i = 1; i < del_length; ++i) {
		deletable[1].parentNode.removeChild(deletable[1]);
	}
	for (var i = 0; i < IFSMatrix.length / 6; ++i) {
		var node = document.createElement("div");
		node.classList.add("frctl_rule_line");
		var string = '\
		<span>\n\
			<span class="frctl_rule-r frctl_rule-c frctl_rule_deletable" onclick="getIFSCord(this);getIFSRule(\'r\','+ i + ')">' + IFSMatrix[i * 6 + 0] + '</span>\n\
			<span class="frctl_rule-s frctl_rule-c frctl_rule_deletable" onclick="getIFSCord(this);getIFSRule(\'s\','+ i + ')">' + IFSMatrix[i * 6 + 1] + '</span>\n\
			<span class="frctl_rule-t frctl_rule-c frctl_rule_deletable" onclick="getIFSCord(this);getIFSRule(\'t\','+ i + ')">' + IFSMatrix[i * 6 + 2] + '</span>\n\
			<span class="frctl_rule-p frctl_rule-c frctl_rule_deletable" onclick="getIFSCord(this);getIFSRule(\'p\','+ i + ')">' + IFSMatrix[i * 6 + 3] + '</span>\n\
			<span class="frctl_rule-e frctl_rule-c frctl_rule_deletable" onclick="getIFSCord(this);getIFSRule(\'e\','+ i + ')">' + IFSMatrix[i * 6 + 4] + '</span>\n\
			<span class="frctl_rule-f frctl_rule-c frctl_rule_deletable" onclick="getIFSCord(this);getIFSRule(\'f\','+ i + ')">' + IFSMatrix[i * 6 + 5] + '</span>\n\
		</span>'
		node.innerHTML = string;
		ifs_head_div.appendChild(node);
	}
	frctl_rule_count.innerHTML = "rules: " + IFSMatrix.length / 6;
}

function addRowIFS() {
	for (var i = 0; i < tot_c; ++i) {
		IFSMatrix.push("0");
	}
	loadIFS();
}

function deleteRowIFS(row) {
	var temp = [];
	for (var i = 0; i < tot_c * row; ++i) {
		temp.push(IFSMatrix[i]);
	}
	i += 6;
	while (IFSMatrix[i] != undefined) {
		temp.push(IFSMatrix[i]);
		++i;
	}
	IFSMatrix = temp;
	loadIFS();
}

function deleteLastRowIFS() {
	for (var i = 0; i < 6; ++i) {
		IFSMatrix.pop();
	}
	loadIFS();
}

function resetIFS() {
	for (var i = 0; i < IFSMatrix.length; ++i) {
		IFSMatrix[i] = "0";
	}
	loadIFS();
	resetCanvas();
}

function updateIFS() {
	IFSMatrix = IFSDB[frctl_select.value].param.slice(0);
	loadIFS();
}

function revertImg(img) {
	var temp, p, q;
	for (var row = 0; row < rows / 2; ++row) {
		for (var col = 0; col < cols; ++col) {
			p = (cols * row + col) * 4;
			q = (cols * (rows - row - 1) + col) * 4;
			temp = img.data[p + 0];
			img.data[p + 0] = img.data[q + 0];
			img.data[q + 0] = temp;
			temp = img.data[p + 1];
			img.data[p + 1] = img.data[q + 1];
			img.data[q + 1] = temp;
			temp = img.data[p + 2];
			img.data[p + 2] = img.data[q + 2];
			img.data[q + 2] = temp;
			temp = img.data[p + 3];
			img.data[p + 3] = img.data[q + 3];
			img.data[q + 3] = temp;
		}
	}
}

function fill(img, color_r, color_g, color_b, color_a) {
	for (var row = 0; row < rows; ++row) {
		for (var col = 0; col < cols; ++col) {
			pk = (cols * row + col) * 4;
			img.data[pk + 0] = color_r;
			img.data[pk + 1] = color_g;
			img.data[pk + 2] = color_b;
			img.data[pk + 3] = color_a;
		}
	}
}

function displayImg(img) {
	revertImg(img);
	context.putImageData(img, 0, 0);
}

var transImg;
var whiteImg;
var oprtnImg;
var tranCImg;
// fill(transImg, 0, 0, 0, 0);
// fill(whiteImg, 255, 255, 255, 255);
// fill(oprtnImg, 0, 0, 0, 255);

function mainv1() {
	// displayImg(oprtnImg);
	var p;
	oprtnImg = context.createImageData(rows, cols);
	fill(oprtnImg, 0, 0, 0, 255);
	for (var k = 0; k < iterations; ++k) {
		console.log(k);
		whiteImg = context.createImageData(rows, cols);
		tranCImg = context.createImageData(rows, cols);
		fill(whiteImg, 255, 255, 255, 255);
		fill(tranCImg, 0, 0, 0, 0);
		for (var i = 0; i < tot_r; ++i) {
			p = tot_c * i;
			transImg = context.createImageData(rows, cols);
			fill(transImg, 0, 0, 0, 0);
			transformImg(oprtnImg, transImg, IFSMatrix[p + 0], IFSMatrix[p + 1], IFSMatrix[p + 2], IFSMatrix[p + 3], IFSMatrix[p + 4], IFSMatrix[p + 5]);
			blitImg(transImg, tranCImg);
			// oprtnImg = transImg;
		}
		oprtnImg = tranCImg;
		frctl_itr_count.innerHTML = "Iterations: " + (k + 1) + "/" + iterations;
		blitImg(oprtnImg, whiteImg);
		// warning: Do not directly display image as it is inverted in displayImg function
		displayImg(whiteImg);
	}
}
// displayImg(whiteImg);

function blitImg(img1, img2) {
	// img1 -> img2 // img1 overlaps img2 i.e. img2 will be base layer
	for (var row = 0; row < rows; ++row) {
		for (var col = 0; col < cols; ++col) {
			p = (cols * row + col) * 4;
			if (img1.data[p + 3] == 255) {
				img2.data[p + 0] = img1.data[p + 0];
				img2.data[p + 1] = img1.data[p + 1];
				img2.data[p + 2] = img1.data[p + 2];
				img2.data[p + 3] = img1.data[p + 3];
			}
		}
	}
}

function transformImg(img1, img2, r, s, t, p, e, f) {
	var px, py, p1, p2;
	for (var row = 0; row < rows; ++row) {
		for (var col = 0; col < cols; ++col) {
			px = parseInt((r * Math.cos(t * Math.PI / 180) * col - s * Math.sin(p * Math.PI / 180) * row) + e * cols, 10);
			py = parseInt((r * Math.sin(t * Math.PI / 180) * col + s * Math.cos(p * Math.PI / 180) * row) + f * rows, 10);
			if (px >= 0 && px < cols && py >= 0 && py < rows) {
				p1 = (row * cols + col) * 4;
				p2 = (py * cols + px) * 4;
				// console.log(px,py,p1,p2);
				img2.data[p2 + 0] = img1.data[p1 + 0];
				img2.data[p2 + 1] = img1.data[p1 + 1];
				img2.data[p2 + 2] = img1.data[p1 + 2];
				img2.data[p2 + 3] = img1.data[p1 + 3];
			}
		}
	}
}

function resetCanvas() {
	context.putImageData(resetCanvasLayer, 0, 0);
}


// ------------------------- v2.0 ------------------------- //
// Use matrix array instead of ImageData for fast calculation

function resetMatrix(imgMatrix) {
	for (var row = 0; row < rows; ++row) {
		for (var col = 0; col < cols; ++col) {
			imgMatrix[cols * row + col] = 256;
		}
	}
}

function fillMatrix(imgMatrix, color) {
	for (var row = 0; row < rows; ++row) {
		for (var col = 0; col < cols; ++col) {
			imgMatrix[row * cols + col] = color;
		}
	}
}

function initMatrix(imgMatrix, color) {
	for (var row = 0; row < rows; ++row) {
		for (var col = 0; col < cols; ++col) {
			imgMatrix.push(color);
		}
	}
}

function displayMatrixFractal(imgMatrix) {
	var index1, index2, color;
	var matrixIMG = context.createImageData(rows, cols);
	for (var row = 0; row < rows; ++row) {
		for (var col = 0; col < cols; ++col) {
			index1 = row * cols + col;
			index2 = index1 * 4;
			color = imgMatrix[index1];
			if (color == 256) {				// white background
				matrixIMG.data[index2 + 0] = 255;
				matrixIMG.data[index2 + 1] = 255;
				matrixIMG.data[index2 + 2] = 255;
				matrixIMG.data[index2 + 3] = 255;
			} else {						// color
				matrixIMG.data[index2 + 0] = color;
				matrixIMG.data[index2 + 1] = color;
				matrixIMG.data[index2 + 2] = color;
				matrixIMG.data[index2 + 3] = 255;
			}
		}
	}
	displayImg(matrixIMG);
}

function transformMatrix(imgMatrix1, imgMatrix2, r, s, t, p, e, f) {
	var px, py;
	for (var row = 0; row < rows; ++row) {
		for (var col = 0; col < cols; ++col) {
			if (imgMatrix1[row * cols + col] != 256) {
				px = parseInt((r * Math.cos(t * Math.PI / 180) * col - s * Math.sin(p * Math.PI / 180) * row) + e * cols, 10);
				py = parseInt((r * Math.sin(t * Math.PI / 180) * col + s * Math.cos(p * Math.PI / 180) * row) + f * rows, 10);
				if (px >= 0 && px <= cols && py >= 0 && py <= rows) {
					// console.log(px, py);
					imgMatrix2[py * cols + px] = imgMatrix1[row * cols + col];
				}
			}
		}
	}
}

function mainv2() {
	scanIFS();
	resetCanvas();
	var imgMatrix1 = [], imgMatrix2 = [];
	initMatrix(imgMatrix1, 0);
	initMatrix(imgMatrix2, 256);
	// displayMatrixFractal(imgMatrix1);
	var imgMatrixA = [imgMatrix1, imgMatrix2];
	var curImg = 0;
	var ifs_col;
	for (var itr = 0; itr < iterations; ++itr) {
		for (var ifs_row = 0; ifs_row < tot_r; ++ifs_row) {
			ifs_col = ifs_row * 6;
			transformMatrix(imgMatrixA[curImg], imgMatrixA[1 - curImg], IFSMatrix[ifs_col + 0], IFSMatrix[ifs_col + 1], IFSMatrix[ifs_col + 2], IFSMatrix[ifs_col + 3], IFSMatrix[ifs_col + 4], IFSMatrix[ifs_col + 5]);
		}
		resetMatrix(imgMatrixA[curImg]);
		curImg = 1 - curImg;
		console.log(itr);
		frctl_itr_count.innerHTML = "Iterations: " + (itr + 1) + "/" + iterations;
	}
	displayMatrixFractal(imgMatrixA[curImg]);
}


// ------------------------- v3.0 ------------------------- //
// Use setTimeOut instead of for loop for iterations

function mainv3() {
	frctl_itr_count.innerHTML = "Iterations: 0/" + iterations;
	scanIFS();
	resetCanvas();
	var imgMatrix1 = [], imgMatrix2 = [];
	initMatrix(imgMatrix1, 0);
	initMatrix(imgMatrix2, 256);
	var imgMatrixA = [imgMatrix1, imgMatrix2];
	var curImg = 0;
	var ifs_col;
	var itr = 0;
	frctl_bottom_div.classList.add("frctl_running");
	function mainv3_itr() {
		for (var ifs_row = 0; ifs_row < tot_r; ++ifs_row) {
			ifs_col = ifs_row * 6;
			transformMatrix(imgMatrixA[curImg], imgMatrixA[1 - curImg], IFSMatrix[ifs_col + 0], IFSMatrix[ifs_col + 1], IFSMatrix[ifs_col + 2], IFSMatrix[ifs_col + 3], IFSMatrix[ifs_col + 4], IFSMatrix[ifs_col + 5]);
		}
		resetMatrix(imgMatrixA[curImg]);
		curImg = 1 - curImg;
		// console.log(itr);
		++itr;
		frctl_itr_count.innerHTML = "Iterations: " + (itr) + "/" + iterations;
		if (itr < iterations) {
			setTimeout(mainv3_itr, 500);
		}
		else {
			frctl_bottom_div.classList.remove("frctl_running");
		}
		displayMatrixFractal(imgMatrixA[curImg]);
	}
	if (itr < iterations) {
		setTimeout(mainv3_itr, 500);
	}
}

// ------------------------- v4.0 ------------------------- //
// Use in-built canvas functions to produce pictures [!!!Not Implemented Yed]

function mainv4() {
	frctl_itr_count.innerHTML = "Iterations: 0/" + iterations;
	scanIFS();
	var ifs_col;
	var itr = 0;
	frctl_bottom_div.classList.add("frctl_running");
	function mainv4_itr() {
		for (var ifs_row = 0; ifs_row < tot_r; ++ifs_row) {
			ifs_col = ifs_row * 6;
			// r t p s e f
			context.transform(IFSMatrix[ifs_col], IFSMatrix[ifs_col + 2], IFSMatrix[ifs_col + 3], IFSMatrix[ifs_col + 1], IFSMatrix[ifs_row + 4], IFSMatrix[ifs_col + 5]);
			// context.fillStyle = "yellow";
			context.fillRect(0, 0, rows, cols);
		}
		// resetMatrix(imgMatrixA[curImg]);
		// curImg = 1 - curImg;
		// console.log(itr);
		++itr;
		frctl_itr_count.innerHTML = "Iterations: " + (itr) + "/" + iterations;
		if (itr < iterations) {
			setTimeout(mainv4_itr, 500);
		}
		// displayMatrixFractal(imgMatrixA[curImg]);
	}
	if (itr < iterations) {
		setTimeout(mainv4_itr, 500);
	}
	frctl_bottom_div.classList.remove("frctl_running");
}

// ----------------- Onload things -------------------- //

// show default iteration count
document.body.onload = function () {
	frctl_itr_count.innerHTML = "Iterations: 0/" + iterations;
	updateIFS();
	// loadIFS();
	tot_c = 6;
	tot_r = 3;
}
// show default IFSMatrix
