// Modified from http://steamcommunity.com/sharedfiles/filedetails/?id=892374811
var canvas = document.getElementById("matrix");
var ctx = canvas.getContext("2d");

canvas.width = screen.width;
canvas.height = screen.height;

// Unicode Russian characters
var characters = [
  '𝌆', '𝌇', '𝌈', '𝌉', '𝌊', '𝌋', '𝌌', '𝌍', '𝌎', '𝌏', '𝌐', '𝌑', '𝌒', '𝌓', '𝌔', '𝌕', '𝌖', '𝌗', '𝌘', '𝌙', '𝌚', '𝌛', '𝌜', '𝌝', '𝌞', '𝌟', '𝌠', '𝌡', '𝌢', '𝌣', '𝌤', '𝌥', '𝌦', '𝌧', '𝌨', '𝌩', '𝌪', '𝌫', '𝌬', '𝌭', '𝌮', '𝌯', '𝌰', '𝌱', '𝌲', '𝌳', '𝌴', '𝌵', '𝌶', '𝌷', '𝌸', '𝌹', '𝌺', '𝌻', '𝌼', '𝌽', '𝌾', '𝌿', '𝍀', '𝍁', '𝍂', '𝍃', '𝍄', '𝍅', '𝍆', '𝍇', '𝍈', '𝍉', '𝍊', '𝍋', '𝍌', '𝍍', '𝍎', '𝍏', '𝍐', '𝍑', '𝍒', '𝍓', '𝍔', '𝍕', '𝍖'
];
var rainColor = "rgb(0, 255, 0)";
var backgroundColor = "#000000";
var rainbowMode = false;

var style = window.getComputedStyle(canvas, null).getPropertyValue("font-size");
canvas.style.fontSize = (font_size + 1) + "px";
var font_size = parseFloat(style);

var drops = [];
function createDrops() {
  drops = [];
  var num_columns = canvas.width / font_size;
  
  for (let xCoord = 0; xCoord < num_columns; xCoord++) {
    drops[xCoord] = 1;
  }
}
createDrops();

const getRandomColor = () => Math.floor(Math.random() * 256);

function draw() {
  canvas.style.fontSize = (font_size + 1) + 'px';

  let viewportHeight = (typeof window.innerHeight != 'undefined' ? window.innerHeight : document.body.offsetHeight);
  document.getElementById("container").setAttribute("style","height:" + viewportHeight + "px")

  // Makes the previous letters dim
  ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let rainbowColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
  ctx.fillStyle = rainbowMode ? rainbowColor : rainColor;
  ctx.font = font_size + "px arial";

  for (let i = 0; i < drops.length; i++) {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(i * font_size, drops[i] * font_size, font_size, font_size);
    ctx.fillStyle = rainbowMode ? rainbowColor : rainColor;

    let letter = characters[Math.floor(Math.random() * characters.length)];
    ctx.fillText(letter, i * font_size, drops[i] * font_size);

    if (drops[i] * font_size > canvas.height && Math.random() > 0.975)
      drops[i] = 0;

    drops[i]++;
  }

  if (fastSpeedOver) setTimeout(draw, speed);
}

// Makes it start off fast (to cover the whole screen) then slow down
let speed = 40;
let fastSpeedOver = false;
let interval = setInterval(draw, 10); // TODO: Figure out some math to make this exactly fit the SCREEN height on every device?
setTimeout(function() {
  clearInterval(interval);
  fastSpeedOver = true;
  draw();
}, 1000);


/* ################################################
            Wallpaper Engine Interaction
   ################################################ */
window.wallpaperPropertyListener = {
  applyUserProperties: function(properties) {
    // Read text
    if (properties.text) {
      let text = properties.text.value;
      document.getElementById("text").innerText = text;
    }

    if (properties.textcolor) {
      // Convert the text color to be applied as a CSS style
      let textColor = properties.textcolor.value.split(' ');
      textColor = textColor.map(c => Math.ceil(c * 255));
      textColor = `rgb(${textColor})`;
      document.getElementById("text").style.color = textColor;
    }

    // Read text size
    if (properties.textsize) {
      let textSize = properties.textsize.value + "px";
      document.getElementById("text").style.fontSize = textSize;
    }

    // Read rain color
    if (properties.raincolor) {
      // Convert the rain color to be applied as a CSS style
      let color = properties.raincolor.value.split(' ');
      color = color.map(c => Math.ceil(c * 255));
      rainColor = `rgb(${color})`;
    }

    if (properties.rainbowmode) rainbowMode = properties.rainbowmode.value;
    if (properties.speed) speed = 101 - properties.speed.value;
    if (properties.rainsize) {
      font_size = properties.rainsize.value;
      createDrops();
    }

    // Read rain background color
    if (properties.rainbackground) {
      if (properties.rainbackground.value === "0") {
        backgroundColor = "#000000";
      } else {
        // Convert the rain background color to be applied as a CSS style
        let backColor = properties.rainbackground.value.split(' ');
        backColor = backColor.map(c => Math.ceil(c * 255));
        backgroundColor = `rgb(${backColor})`;
      }
    }

    // Read scheme color
    if (properties.schemecolor) {
      // Convert the scheme color to be applied as a CSS style
      let schemeColor = properties.schemecolor.value.split(' ');
      schemeColor = schemeColor.map(c => Math.ceil(c * 255));
      var schemeColorAsCSS = `rgb(${schemeColor})`;
    }
  }
};
