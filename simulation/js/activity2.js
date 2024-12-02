function activity2() {
    internal_calculation2();
    let btn_text = get_collapse_btn_text('Activity 2', 'act2-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' id='act2-div'>
      <h3>Activity 2</h3>
      <p class="fs-20px fb-600">
         Find the position of centre of pressure when upper edge of rectangular plate is below 3m from surface of water.
      </p>
      <br>
      <div class="row justify-content-center ">
         <p class="col-md-3">
            d = ${d} m
         </p>
         <p class="col-md-3">
            b = ${b} m
         </p>
      </div>
      <div id="act2-h-bar-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$ \\bar{h} = \\frac{d}{2} + 3 =$$ 
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act2-h-bar-inp' class='form-control fs-16px' /> <span style="display:contents;">m</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_h_bar_a2();'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act2-div');
    }, 150);
}
function internal_calculation2() {
    h_bar_a2 = 0;
    h_star_a2 = 0;
    f_a2 = 0;
    Ig_a2 = 0;
    h_bar_a2 = d / 2 + 3;
    f_a2 = parseFloat((1000 * g * d * b * h_bar_a2).toFixed(3));
    Ig_a2 = parseFloat(((b * Math.pow(d, 3)) / 12).toFixed(3));
    h_star_a2 = parseFloat((Ig_a2 / (b * d * h_bar_a2) + h_bar_a2).toFixed(3));
}
function verify_h_bar_a2() {
    let inp = (document.getElementById('act2-h-bar-inp'));
    console.log(h_bar_a2);
    if (!verify_values(parseFloat(inp.value), h_bar_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-h-bar-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
      $$ \\bar{h} = \\frac{d}{2} + 3 = ${h_bar_a2}m$$ 
      </p>
      
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act2-btn1" onclick='load_total_pressure_force_a2();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_total_pressure_force_a2() {
    let btn = (document.getElementById('act2-btn1'));
    btn && btn.remove();
    let div = (document.getElementById('act2-div'));
    div.innerHTML += `
   <br>
   <div>
      <p style="text-align:left;">
         Total pressure force
      </p>
      <div id="act2-pressure-force">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$
                  F = \ρgA\\bar{h} = 
               $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act2-f-inp' class='form-control fs-16px' /> <span style="display:contents;">N</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_f_a2();'>Verify</button>
      </div>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_f_a2() {
    let inp = (document.getElementById('act2-f-inp'));
    console.log(f_a2);
    if (!verify_values(parseFloat(inp.value), f_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-pressure-force'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$ F = \ρgA\\bar{h} = ${parseFloat(f_a2.toFixed(3))}N$$ 
      </p>
      
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act2-btn2" onclick='load_inertia_div_a2();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_inertia_div_a2() {
    let btn = (document.getElementById('act2-btn2'));
    btn && btn.remove();
    let div = (document.getElementById('act2-div'));
    div.innerHTML += `
   <br>
   <div>
      <p style="text-align:left;">
         Moment of inertia about centre of gravity
      </p>
      <div id="act2-inertia-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$
                  I_g = \\frac{bd^3}{12} =
               $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act2-i-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>4</sup></span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_i_a2();'>Verify</button>
      </div>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_i_a2() {
    let inp = (document.getElementById('act2-i-inp'));
    console.log(Ig_a2);
    if (!verify_values(parseFloat(inp.value), Ig_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-inertia-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$ I_g = \\frac{bd^3}{12} = ${parseFloat(Ig_a2.toFixed(3))}m^4$$ 
      </p>
      
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act2-btn3" onclick='load_depth_div_a2();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_depth_div_a2() {
    let btn = (document.getElementById('act2-btn3'));
    btn && btn.remove();
    let div = (document.getElementById('act2-div'));
    div.innerHTML += `
   <br>
   <div>
      <p style="text-align:left;">
         Depth of centre of pressure
      </p>
      <div id="act2-depth-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$
                  h^* = \\frac{I_g}{A\\bar{h}} + \\bar{h} = 
               $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act2-h-star-inp' class='form-control fs-16px' /> <span style="display:contents;">m</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_depth_centre_of_pressure_a2();'>Verify</button>
      </div>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_depth_centre_of_pressure_a2() {
    let inp = (document.getElementById('act2-h-star-inp'));
    console.log(h_star_a2);
    if (!verify_values(parseFloat(inp.value), h_star_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-depth-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$ h^* = \\frac{I_g}{A\\bar{h}} + \\bar{h} = ${parseFloat(h_star_a2.toFixed(3))}m$$ 
      </p>
      
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act2-btn4" onclick='exp_complete();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function exp_complete() {
    let btn = (document.getElementById('act2-btn4'));
    btn && btn.remove();
    alert('Experiment Completed');
}
// activity2();
//# sourceMappingURL=activity2.js.map