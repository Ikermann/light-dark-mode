const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById("text-box");

// Constants for Dark and light Mode

const darkModeBackground = 'rgb(0 0 0 / 50%)';
const lightModeBackground = 'rgb(255 255 255 / 50%)';
const darkModeTextBackground = 'rgb(255 255 255 / 50%)';
const lightModeTextBackground = 'rgb(0 0 0 / 50%)';

const darkModeImages = [
      './img/undraw_proud_coder_dark.svg',
      './img/undraw_feeling_proud_dark.svg',
      './img/undraw_conceptual_idea_dark.svg'
];

const lightModeImages = [
      './img/undraw_proud_coder_light.svg',
      './img/undraw_feeling_proud_light.svg',
      './img/undraw_conceptual_idea_light.svg'

]



//Dark and Light Mode Style Swicth

function toggleDarkLightMode(isDark) {
    nav.style.backgroundColor = isDark ? darkModeBackground : lightModeBackground;
    textBox.style.backgroundColor = isDark ? darkModeTextBackground: lightModeTextBackground;
    toggleIcon.children[0].textContent =  isDark ? 'Dark Mode' : "Light Mode";
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : 
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    [image1, image2, image3].forEach((img, index) => img.src = isDark ? darkModeImages[index] : lightModeImages[index]);
}





//Switch Theme Dynamically

function switchTheme(event){
    if(event.target.checked === true ){
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(true);
    } else {document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(false);
    };
    
}

//Event Listener

toggleSwitch.addEventListener("change", switchTheme);

//Check local storage for theme

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    toggleSwitch.checked = currentTheme === "dark";
    toggleDarkLightMode(currentTheme === "dark");
}
