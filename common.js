const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/gh/scottschiller/Snowstorm/snowstorm.js";
document.body.appendChild(script);

script.onload = () => {
    snowStorm.snowCharacter = "🌸";
    snowStorm.excludeMobile = false;
    snowStorm.zIndex = 2;
    if (matchMedia("(max-width: 999px)").matches)
    {
        snowStorm.flakesMax = 15;
    }

}



