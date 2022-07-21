var dropDownMenu = document.querySelector('.drop-down--menu')
var darkMode = document.getElementById('dark')
var root = document.querySelector('.root')

function showDropdownMenu(){
    dropDownMenu.classList.toggle('drop-down--menu---view')
}

function changeColor(){
    darkMode.classList.toggle('white')
    darkMode.classList.toggle('black')
    root.classList.toggle('dark-theme')
    
    if (localStorage.getItem("theme") === "light"){
        localStorage.setItem("theme", "dark")
    }
    else{
        localStorage.setItem("theme", "light")
    }
}

if (localStorage.getItem("theme") === "light"){
    darkMode.classList.remove('white')
    darkMode.classList.remove('black')
    root.classList.remove('dark-theme')
}
else if (localStorage.getItem("theme") === "dark"){
    darkMode.classList.add('white')
    darkMode.classList.add('black')
    root.classList.add('dark-theme')
}
else{
    localStorage.setItem("theme", "light")
}

