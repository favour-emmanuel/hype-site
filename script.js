const buttonIcon = document.getElementById('closeButton');
const navTogg = document.getElementById('navTogg');
const ToggleDiv = document.getElementById('ToggleDiv')

navTogg.onclick = () => {
   ToggleDiv.style.display='block'
}

buttonIcon.onclick = () => {
    ToggleDiv.style.display='none'
}