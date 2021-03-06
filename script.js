const fractal__data = {
	navID: "nav-projects",
	page_loc_text: "Live Demo",
	template: `<div id="demo_page" class="demo-page page"><div class="demo_page-head flex"><div class="demo_page-back btn" title="Back to all projects"><svg style="width:24px;height:24px;" viewBox="0 0 24 24"><path fill="currentColor" d="M21,11H6.83L10.41,7.41L9,6L3,12L9,18L10.41,16.58L6.83,13H21V11Z"/></svg></div><div class="demo_page-title">Fractal Generator</div><div class="demo_page-info btn" title="Info"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg></div></div><div class="demo_page-body"><div class="demo_page-cont flex wrap"><div id="frctl_ifs" class="frctl_div"><div id="frctl_ifs-head">IFS Rules</div><div id="frctl_ifs-head-2" class="flex"><div id="frctl_ifs_btn_div"><button id="frctl_ifs_btn" aria-label="IFS rules" class="btn btn--flat" style="margin-left:25px;border:1px solid">IFS Rules</button></div><div id="frctl_feat_btn_div"><button id="frctl_feat_btn" aria-label="help" class="btn btn--flat" style="margin-right:25px;border:1px solid">Help</button></div></div><div id="frctl_editor"><div id="frctl_dbg_num" class="vscode_margin"><div id="frctl_play_btn"><button title="Play fractal animation"><svg style="width:36px;height:36px" viewBox="0 0 24 24"><path fill="#3c763d" d="M8,5.14V19.14L19,12.14L8,5.14Z"></path></svg></button></div><div class="frctl_del_btn"><button title="Delete last row"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#ff0000" d="M19,13H5V11H19V13Z"></path></svg></button></div><div class="frctl_add_btn"><button title="Add a new row"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#00ff00" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path></svg></button></div><div class="frctl_rst_btn"><button title="Reset all rows"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#ffff00" d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"></path></svg></button></div><div class="frctl_animate_slider"><input type="range" orient="vertical" min="0" max="1000" value="800"  title="Simulation speed"></div></div><div class="vs_dark frctl_rule_editor"><div class="frctl_lines_content"><div class="frctl_view_lines" id="frctl_view_lines" role="presentation"><div style="top:0px;height:36px;display:none" id="frctl_dbg_ctrl_dv"></div><div style="top:0px;height:36px;background-color:#3c763d;padding-top:6px" class="frctl_rule_line frctl_rule_line_head"><span><span class="frctl_rule-r frctl_rule-h" contenteditable="false">r</span><span class="frctl_rule-s frctl_rule-h" contenteditable="false">s</span><span class="frctl_rule-t frctl_rule-h" contenteditable="false">θ°</span><span class="frctl_rule-p frctl_rule-h" contenteditable="false">Ф°</span><span class="frctl_rule-e frctl_rule-h" contenteditable="false">e</span><span class="frctl_rule-f frctl_rule-h" contenteditable="false">f</span></span></div></div><div class="fractal_select"><select aria-label="Select predefined fractal"></select></div><div class="frctl_bottom_div"><div id="frctl_rule_count" title="Rules count">rules: ?</div><div id="frctl_itr_count" title="Change iterations">Iterations: 0/?</div></div></div></div><div data-role="popup" id="frctl_popup" class="frctl_hidden" style="text-align:center;display:flex;top:0;left:0;position:fixed"><input type="text" id="frctl_value" placeholder="value" aria-label="input fractal value" tabindex="-1"></input><button style="border:none;background-color:#ffffff;margin:0;width:50px;height:40px" aria-label="Enter popup"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#4CAF50" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg></button></div></div><div id="frctl_ifs_feat" class="frctl_div" style="display:none"><div class="frctl_feat-h3">Features</div><div class="frctl_feat-list"><ul><li>Use custom rules to generate fractals</li><li>As many as required rules can be used</li></ul></div><div class="frctl_feat-h3">Instructions</div><div class="frctl_feat-list"><ul><li>Play button to play the loaded fractal</li><li>Add/Remove rule (at/from the end)</li><li>Reset rules to default</li><li>Click on values to change them</li><li>Chage no of iterations (click Iterations on bottom)</li><li>Control speed using slider</li></ul></div><div class="frctl_feat-h3 highlight"><i>Note:</i></div><div class="frctl_feat-list"><ul><li>2D - Cartesian coordinate system</li><li>Left-Bottom is Origin (0,0)</li></ul></div></div></div><div id="frctl_cnv" class="frctl_div"><canvas id="fractal_canvas" width="400" height="400"></canvas></div><div id="frctl_feat" class="frctl_div"><div class="frctl_feat-h3">Features</div><div class="frctl_feat-list"><ul><li>Use custom rules to generate fractals</li><li>As many as required rules can be used</li></ul></div><div class="frctl_feat-h3">Instructions</div><div class="frctl_feat-list"><ul><li>Play button to play the loaded fractal</li><li>Add/Remove rule (at/from the end)</li><li>Reset rules to default</li><li>Click on values to change them</li><li>Chage no of iterations (click Iterations on bottom)</li><li>Control speed using slider</li></ul></div><div class="frctl_feat-h3 highlight"><i>Note:</i></div><div class="frctl_feat-list"><ul><li>2D - Cartesian coordinate system</li><li>Left-Bottom is Origin (0,0)</li></ul></div></div></div></div></div>`,
	style: `@media (max-width:499px){#demo_page{max-width:100vw;overflow:hidden}}#demo_page .demo_page-head{padding-top:16px;padding-bottom:16px;width:100%;border-bottom:3px double;height:80px}#demo_page .demo_page-back,#demo_page .demo_page-info{background-color:transparent;box-shadow:none}#demo_page .demo_page-back svg,#demo_page .demo_page-info svg{cursor:pointer}#demo_page .demo_page-back svg:hover,#demo_page .demo_page-info svg:hover{color:#f3c669}#demo_page button{outline:0}#demo_page .demo_page-title{width:100%;font-size:28px;text-align:center;margin:auto}@media (max-width:600px){#demo_page .demo_page-title{font-size:4.5vw}}.demo_page-body .demo_page-cont{border-bottom:3px double}.frctl_div{width:450px;height:450px;margin:auto}#frctl_feat{display:none}#frctl_ifs_feat{width:100%;margin:auto}@media (min-width:1360px){#frctl_feat{display:block;width:450px;border-left:3px double}}#frctl_feat .frctl_feat-h3,#frctl_ifs_feat .frctl_feat-h3{font-size:22px;padding-left:20px;margin-top:10px}#frctl_feat .frctl_feat-list,#frctl_ifs_feat .frctl_feat-list{width:auto;font-size:18px;font-weight:250;padding-left:24px}#frctl_feat .frctl_feat-list ul,#frctl_ifs_feat .frctl_feat-list ul{padding-inline-start:30px;list-style-type:disc}#fractal_canvas{border:2px solid #000;margin:23px;background-color:#fff}#frctl_ifs-head{font-size:26px;font-weight:300;text-align:center;width:100%;display:none;margin-top:5px}#frctl_ifs-head-2{justify-content:space-between}#frctl_ifs-head-2 button{border:1px solid rgba(255,255,255,.12);transition:all 280ms cubic-bezier(.5,0,.1,1);box-shadow:0 5px 15px -5px rgba(17,17,17,.5);background-color:#212121!important}#frctl_ifs-head-2 button:hover{cursor:pointer;background-color:#f3c669!important}@media (min-width:1360px){#frctl_ifs-head{display:block}#frctl_ifs-head-2{display:none}}#frctl_editor{width:400px;margin:auto;display:flex}#frctl_play_btn{height:36px;margin-top:10px;padding-left:15px}#frctl_play_btn button{background:0 0;border:none;cursor:pointer;border-radius:30%}#frctl_play_btn button:hover{cursor:pointer}.frctl_add_btn,.frctl_del_btn,.frctl_rst_btn{margin-top:20px;height:28px;padding-left:24px;padding-bottom:4px}.frctl_add_btn button,.frctl_del_btn button,.frctl_rst_btn button{background:0 0;border:none;cursor:pointer;border-radius:30%}.frctl_add_btn button:hover,.frctl_del_btn button:hover,.frctl_rst_btn button:hover{cursor:pointer}.frctl_rule_editor{width:330px;height:360px;color:#d4d4d4;white-space:normal;font-size:13px;line-height:1.4em;user-select:none;border-radius:2px;border:1px solid #d4d4d4}.frctl_lines_content{width:100%;height:100%;will-change:transform;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;background-color:#1e1e1e;color:#d4d4d4;white-space:normal;font-size:13px;line-height:1.4em}.frctl_view_lines{font-weight:400;font-size:14px;line-height:20px;letter-spacing:0;width:100%;height:100%;cursor:text;white-space:nowrap;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;color:#d4d4d4}.frctl_rule_line{height:28px;width:100%;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;font-weight:400;font-size:14px;line-height:20px;letter-spacing:0;white-space:nowrap}.frctl_rule_line.frctl_dbg_line{background:rgba(255,255,0,.2)}.frctl_rule_line>span{min-width:100%;height:100%;display:inline-block;padding-top:4px;text-align:center}.frctl_rule-h{cursor:default!important}.frctl_rule-c,.frctl_rule-h{height:100%;width:51px;display:inline-block;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:51px;cursor:pointer}#frctl_popup{color:#333;-webkit-tap-highlight-color:transparent;z-index:10;position:absolute;background-color:#fff;border-radius:4px;width:100px;height:40px;overflow:hidden;box-shadow:0 0 12px rgba(0,0,0,.6)}#frctl_popup input{width:100%;position:relative;height:40px;caret-color:#4caf50;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:14px;border:none;text-align:center;outline:0;border-right:1px dashed grey}#frctl_popup input::placeholder{color:#0072be88}#frctl_popup.frctl_hidden{opacity:0}.frctl_bottom_div{display:flex;width:100%;height:22px;background-color:#007acc;color:#fff;position:absolute;bottom:0}.frctl_bottom_div.frctl_running{background-color:#c63}.fractal_select{display:flex;width:100%;background-color:transparent;position:absolute;bottom:22px}.fractal_select select{width:100%;text-align:center;text-align-last:center;background:0 0;color:#d4d4d4;font-size:18px;border-radius:0;border-width:1px;border-style:solid;border-color:#a9a9a9;border-image:initial;appearance:menulist-button;-webkit-appearance:menulist-button;-moz-appearance:menulist}.fractal_select select option{color:#1e1e1e}.fractal_select select:focus{outline:0}#frctl_itr_count,#frctl_rule_count{margin-left:5px}#frctl_itr_count:hover{cursor:pointer;background-color:rgba(255,255,255,.12)}.vscode_margin{height:360px;width:70px;background-color:#1e1e1e;color:#d4d4d4;font-size:13px;line-height:1.4em;user-select:none;border-radius:4px;border:1px solid #d4d4d4;border-right:none}.frctl_animate_slider{margin-top:28px;display:flex;justify-content:center}.frctl_animate_slider input[type=range][orient=vertical]{writing-mode:bt-lr;-webkit-appearance:slider-vertical;width:8px;height:100px;padding:0 5px}`,
	IFSDB: {
		0: {
			name: "Tree",
			itr: 8,
			param: ["0.05", "0.6", "0", "0", "0.48", "0.04", "0.05", "-0.6", "0", "0", "0.47", "0.5", "0.5", "0.45", "45", "45", "0.35", "0.16", "0.5", "0.4", "20", "20", "0.45", "0.74", "0.5", "0.5", "-30", "-30", "1.05", "1", "0.55", "0.4", "-40", "-40", "0.34", "0.95"]
		},
		1: {
			name: "Sierpinski Gasket",
			itr: 8,
			param: ["0.5", "0.5", "0", "0", "0", "0", "0.5", "0.5", "0", "0", "0.5", "0", "0.5", "0.5", "0", "0", "0.25", "0.5"]
		},
		2: {
			name: "Cantor Set",
			itr: 5,
			param: ["0.33", "1", "0", "0", "0", "0", "0.33", "1", "0", "0", "0.67", "0"]
		},
		3: {
			name: "Cantor Dust",
			itr: 3,
			param: ["0.25", "0.25", "0", "0", "0", "0", "0.25", "0.25", "0", "0", "0.75", "0", "0.25", "0.25", "0", "0", "0", "0.75", "0.25", "0.25", "0", "0", "0.75", "0.75"]
		},
		4: {
			name: "Vicsek fractal",
			itr: 5,
			param: ["0.33", "0.33", "0", "0", "0", "0", "0.33", "0.33", "0", "0", "0.67", "0", "0.33", "0.33", "0", "0", "0", "0.67", "0.33", "0.33", "0", "0", "0.33", "0.33", "0.33", "0.33", "0", "0", "0.67", "0.67"]
		},
		5: {
			name: "Hexaflake",
			itr: 6,
			param: ["0.33", "0.33", "0", "0", "0", "0.16", "0.33", "0.33", "0", "0", "0", "0.5", "0.33", "0.33", "0", "0", "0.34", "0", "0.33", "0.33", "0", "0", "0.34", "0.67", "0.33", "0.33", "0", "0", "0.67", "0.16", "0.33", "0.33", "0", "0", "0.67", "0.5"]
		},
		6: {
			name: "UnNamed (Assign 2-4)",
			itr: 8,
			param: ["0.5", "0.5", "0", "0", "0", "0", "-0.5", "0.5", "0", "0", "1", "0", "-0.5", "0.5", "0", "0", "0.5", "0.5"]
		}
	},
	apply: (root, URLInfo) => {
		if (root === undefined) {
			console.warn('Error: contentRoot not specified')
			return
		}
		root.innerHTML = fractal__data.template
		const selectElem = root.querySelector('.fractal_select select')
		selectElem.innerHTML = ''
		for (var key in fractal__data.IFSDB) {
			var optionElem = document.createElement('option')
			optionElem.value = key
			optionElem.innerHTML = fractal__data.IFSDB[key].name
			selectElem.appendChild(optionElem)
		}
		fractal__data.IFSTemplate = 0
		fractal__data.resetIFSRules()
		fractal__data.changeIteration(fractal__data.IFSDB[fractal__data.IFSTemplate].itr)
		fractal__data.onStaticLoad(root, URLInfo)
	},
	onStaticLoad: (root, URLInfo) => {
		if (root === undefined) {
			console.warn('Error: contentRoot not specified')
			return
		}
		const frctl_ifs_btn = document.getElementById('frctl_ifs_btn')
		const frctl_feat_btn = document.getElementById('frctl_feat_btn')
		const play_btn = root.querySelector('#frctl_play_btn button')
		const add_btn = root.querySelector('.frctl_add_btn button')
		const del_btn = root.querySelector('.frctl_del_btn button')
		const reset_btn = root.querySelector('.frctl_rst_btn button')
		const select_btn = root.querySelector('.fractal_select select')
		const change_itr_btn = document.getElementById('frctl_itr_count')
		const animate_slider = root.querySelector('.frctl_animate_slider input')
		const demoBackBtn = root.querySelector('.demo_page-back')
		const demoInfoBtn = root.querySelector('.demo_page-info')
		demoBackBtn.addEventListener('click', (e) => {
			if (e.ctrlKey) window.open(URLInfo.protocol + '://' + URLInfo.domain + '/projects')
			else {
				spa.navigate(URLInfo.protocol + '://' + URLInfo.domain + '/projects')
			}
			e.preventDefault()
		})
		demoInfoBtn.addEventListener('click', () => {
			showDialog(`<div class="card" style="height:auto"><div class="card__title headline">About Fractal Generator</div><div class="card__text">The project was assigned during the course <span class='highlight'>Fractals and Applications (IES-301)</span> at IIT Roorkee. This is a program to generate fractal from given IFS (Iterated Function System) rules.</div><div class="card__actions"><div class="spacer"></div><a target="_blank" href="/res-iitr?tab=6-0" class="btn btn--flat green--text text--darken-1"><div class="btn__content">View course</div></a><a target="_blank" rel="noopener" href="https://github.com/ankurparihar/Fractal-Generator" class="btn btn--flat green--text text--darken-1"><div class="btn__content">View on Github</div></a></div></div>`)
		})
		fractal__data.IFSTemplate = 0
		fractal__data.IFSMatrix = fractal__data.IFSDB[0].param
		fractal__data.Iterations = fractal__data.IFSDB[0].itr
		frctl_ifs_btn.addEventListener('click', (e) => {
			showRippleEffect(e, frctl_ifs_btn)
			document.getElementById('frctl_editor').style.display = 'flex'
			document.getElementById('frctl_ifs_feat').style.display = 'none'
		})
		frctl_feat_btn.addEventListener('click', (e) => {
			showRippleEffect(e, frctl_feat_btn)
			document.getElementById('frctl_editor').style.display = 'none'
			document.getElementById('frctl_ifs_feat').style.display = 'block'
		})
		play_btn.addEventListener('click', fractal__data.play)
		add_btn.addEventListener('click', fractal__data.addRow)
		del_btn.addEventListener('click', fractal__data.deleteRow)
		reset_btn.addEventListener('click', () => {
			if (fractal__data.isRunning) return
			fractal__data.resetIFSRules()
			change_itr_btn.innerHTML = "Iterations: 0/" + fractal__data.Iterations
			fractal__data.resetCanvas()
		})
		animate_slider.addEventListener('input', () => {
			fractal__data.simulationDelay = 1000 - animate_slider.value
		})
		select_btn.addEventListener('change', () => {
			if (fractal__data.isRunning) return
			fractal__data.IFSTemplate = select_btn.value
			fractal__data.Iterations = fractal__data.IFSDB[fractal__data.IFSTemplate].itr
			fractal__data.changeIteration(fractal__data.Iterations)
			fractal__data.resetIFSRules()
			fractal__data.resetCanvas()
		})
		change_itr_btn.addEventListener('click', fractal__data.changeIteration)
		var i = 0
		root.querySelectorAll('.frctl_rule-c').forEach(elem => {
			elem.setAttribute('data-index', i)
			i++
			elem.addEventListener('click', fractal__data.showPopUp)
		})
		document.getElementById('frctl_value').onkeydown = (e) => {
			if (e.keyCode === 13) fractal__data.processPopUp()
		}
		document.querySelector('#frctl_popup button').addEventListener('click', fractal__data.processPopUp)
	},
	IFSTemplate: undefined,
	IFSMatrix: undefined,
	Iterations: undefined,
	clientX: undefined,
	clientY: undefined,
	index: undefined,
	simulationDelay: 200,
	isRunning: false,
	play: () => {
		if (fractal__data.isRunning) return
		const canvas = document.getElementById("fractal_canvas")
		const temp_canvas = document.createElement('canvas')
		const width = canvas.width
		const height = canvas.height
		temp_canvas.width = width
		temp_canvas.height = height
		const context = canvas.getContext("2d")
		const temp_context = temp_canvas.getContext("2d")
		context.fillStyle = '#000000ff'
		context.fillRect(0, 0, width, height)
		context.fillStyle = '#ffffffff'
		const rows = fractal__data.IFSMatrix.length / 6
		const cols = 6
		var r, s, t, p, e, f
		const bottom = canvas.getBoundingClientRect().y + canvas.getBoundingClientRect().height
		const hWindow = window.innerHeight
		if (bottom > hWindow) {
			const offSet = bottom - hWindow + 10
			var loop = (offSet + 20) / 20
			var id
			id = setInterval(function () {
				document.documentElement.scrollBy(0, 20) || document.body.scrollBy(0, 20)
				loop--
				if (loop <= 0) {
					clearInterval(id)
				}
			}, 10);
		}
		const frctl_bottom_div = document.querySelector('.frctl_bottom_div')
		frctl_bottom_div.classList.add('frctl_running')
		const frctl_itr_count = document.getElementById('frctl_itr_count')
		const frctl_lines = document.querySelectorAll('.frctl_rule_line:not(.frctl_rule_line_head)')
		const select_btn = document.querySelector('.fractal_select select')
		select_btn.setAttribute('disabled', '')
		var itr = 0
		var row = 0
		// Controlled simulation
		function iterate_itr() {
			fractal__data.isRunning = true
			temp_context.clearRect(0, 0, width, height)
			temp_context.drawImage(canvas, 0, 0)
			context.clearRect(0, 0, width, height)
			frctl_itr_count.innerHTML = 'Iterations: ' + (itr + 1) + '/' + fractal__data.Iterations
			function iterate_row() {
				frctl_lines[(row + rows - 1) % rows].classList.remove('frctl_dbg_line')
				frctl_lines[row].classList.add('frctl_dbg_line')
				context.save()
				r = fractal__data.IFSMatrix[row * cols + 0]
				s = fractal__data.IFSMatrix[row * cols + 1]
				t = fractal__data.IFSMatrix[row * cols + 2]
				p = fractal__data.IFSMatrix[row * cols + 3]
				e = fractal__data.IFSMatrix[row * cols + 4]
				f = fractal__data.IFSMatrix[row * cols + 5]
				context.transform(r, 0, 0, s, e * width - s * height * Math.sin(t), (1 - f - s) * height + s * height * (1 - Math.cos(t)))
				context.rotate(-t * Math.PI / 180)
				context.drawImage(temp_canvas, 0, 0)
				context.restore()
				row++
				if (row == rows) {
					itr++
					row = 0
					if (itr < fractal__data.Iterations) setTimeout(iterate_itr, fractal__data.simulationDelay)
					else {
						frctl_lines[rows - 1].classList.remove('frctl_dbg_line')
						frctl_bottom_div.classList.remove('frctl_running')
						select_btn.removeAttribute('disabled')
						fractal__data.isRunning = false
					}
				} else {
					setTimeout(iterate_row, fractal__data.simulationDelay)
				}
			}
			iterate_row()
		}
		if (fractal__data.simulationDelay <= 10) {
			// Fastest simulation, no delay
			fractal__data.isRunning = true
			for (itr = 0; itr < fractal__data.Iterations; ++itr) {
				temp_context.clearRect(0, 0, width, height)
				temp_context.drawImage(canvas, 0, 0)
				context.clearRect(0, 0, width, height)
				frctl_itr_count.innerHTML = 'Iterations: ' + (itr + 1) + '/' + fractal__data.Iterations
				for (row = 0; row < rows; ++row) {
					frctl_lines[(row + rows - 1) % rows].classList.remove('frctl_dbg_line')
					frctl_lines[row].classList.add('frctl_dbg_line')
					context.save()
					r = fractal__data.IFSMatrix[row * cols + 0]
					s = fractal__data.IFSMatrix[row * cols + 1]
					t = fractal__data.IFSMatrix[row * cols + 2]
					p = fractal__data.IFSMatrix[row * cols + 3]
					e = fractal__data.IFSMatrix[row * cols + 4]
					f = fractal__data.IFSMatrix[row * cols + 5]
					context.transform(r, 0, 0, s, e * width - s * height * Math.sin(t), (1 - f - s) * height + s * height * (1 - Math.cos(t)))
					context.rotate(-t * Math.PI / 180)
					context.drawImage(temp_canvas, 0, 0)
					context.restore()
				}
			}
			frctl_lines[rows - 1].classList.remove('frctl_dbg_line')
			frctl_bottom_div.classList.remove('frctl_running')
			select_btn.removeAttribute('disabled')
			fractal__data.isRunning = false
		}
		else {
			iterate_itr()
		}
	},
	resetCanvas: () => {
		if (fractal__data.isRunning) return
		const canvas = document.getElementById("fractal_canvas")
		const context = canvas.getContext('2d')
		context.clearRect(0, 0, canvas.width, canvas.height)
	},
	addRow: () => {
		if (fractal__data.isRunning) return
		for (var i = 0; i < 6; ++i) fractal__data.IFSMatrix.push(0)
		fractal__data.updateIFSRules()
	},
	deleteRow: () => {
		if (fractal__data.isRunning) return
		for (var i = 0; i < 6; ++i) fractal__data.IFSMatrix.pop()
		fractal__data.updateIFSRules()
	},
	resetIFSRules: () => {
		if (fractal__data.isRunning) return
		fractal__data.IFSMatrix = []
		fractal__data.IFSDB[fractal__data.IFSTemplate].param.forEach(v => {
			fractal__data.IFSMatrix.push(v)
		})
		fractal__data.updateIFSRules()
	},
	updateIFSRules: () => {
		if (fractal__data.isRunning) return
		const ifs_head_div = document.getElementById("frctl_view_lines")
		const frctl_rule_count = document.getElementById("frctl_rule_count")
		var deletable = document.getElementsByClassName("frctl_rule_line")
		var del_length = deletable.length
		for (var i = 1; i < del_length; ++i) {
			deletable[1].parentNode.removeChild(deletable[1])
		}
		deletable = null
		for (var i = 0; i < fractal__data.IFSMatrix.length / 6; ++i) {
			var node = document.createElement("div")
			node.classList.add("frctl_rule_line")
			node.innerHTML = `
			<span>
				<span class="frctl_rule-r frctl_rule-c frctl_rule_deletable" data-index="`+ (i * 6 + 0) + `">` + fractal__data.IFSMatrix[i * 6 + 0] + `</span>\n\
				<span class="frctl_rule-s frctl_rule-c frctl_rule_deletable" data-index="`+ (i * 6 + 1) + `">` + fractal__data.IFSMatrix[i * 6 + 1] + `</span>\n\
				<span class="frctl_rule-t frctl_rule-c frctl_rule_deletable" data-index="`+ (i * 6 + 2) + `">` + fractal__data.IFSMatrix[i * 6 + 2] + `</span>\n\
				<span class="frctl_rule-p frctl_rule-c frctl_rule_deletable" data-index="`+ (i * 6 + 3) + `">` + fractal__data.IFSMatrix[i * 6 + 3] + `</span>\n\
				<span class="frctl_rule-e frctl_rule-c frctl_rule_deletable" data-index="`+ (i * 6 + 4) + `">` + fractal__data.IFSMatrix[i * 6 + 4] + `</span>\n\
				<span class="frctl_rule-f frctl_rule-c frctl_rule_deletable" data-index="`+ (i * 6 + 5) + `">` + fractal__data.IFSMatrix[i * 6 + 5] + `</span>\n\
			</span>`
			ifs_head_div.appendChild(node)
		}
		document.querySelectorAll('.frctl_rule-c').forEach(elem => {
			elem.addEventListener('click', fractal__data.showPopUp)
		})
		frctl_rule_count.innerHTML = "rules: " + fractal__data.IFSMatrix.length / 6
	},
	changeIteration: (new_itr) => {
		if (fractal__data.isRunning) return
		if (!Number.isInteger(new_itr)) new_itr = parseInt(prompt("Please enter no of iterations", "A +ve int"), 10)
		if (Number.isInteger(new_itr) && new_itr > 0) {
			fractal__data.Iterations = new_itr
			document.getElementById('frctl_itr_count').innerHTML = "Iterations: 0/" + new_itr
		}
	},
	showPopUp: (event) => {
		if (fractal__data.isRunning) return
		const elem = event.target
		fractal__data.clientX = elem.getBoundingClientRect().x
		fractal__data.clientY = elem.getBoundingClientRect().y
		fractal__data.index = elem.getAttribute('data-index')
		var popup = document.getElementById('frctl_popup')
		popup.style.left = fractal__data.clientX + "px"
		popup.style.top = fractal__data.clientY + "px"
		popup.classList.remove('frctl_hidden')
		popup.querySelector("#frctl_value").focus()
	},
	processPopUp: () => {
		if (fractal__data.isRunning) return
		var popup = document.getElementById("frctl_popup")
		popup.classList.add("frctl_hidden")
		popup.style.left = "0px"
		popup.style.top = "0px"
		const input = popup.querySelector("#frctl_value").value
		if (input != '' && !isNaN(input)) {
			fractal__data.IFSMatrix[fractal__data.index] = input
			document.querySelectorAll('.frctl_rule-c')[fractal__data.index].innerHTML = input
		}
		popup.querySelector("#frctl_value").value = ""
	}
}

spa.register('/projects/fractal-generator', fractal__data)