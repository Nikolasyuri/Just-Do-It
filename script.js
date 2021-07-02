var hcLeftSide = document.querySelector('.hcleft-side');
var hcRightSide = document.querySelector('.hcright-side');
var userInfo = document.querySelector('.user-info')
var menuIcon = document.getElementsByName('menuIcon')[0];
var sectionContent = document.querySelector('.Section-Content')
var maxWidth = document.querySelector('.max-width');
var scLeftSide = document.querySelector('.left-column');
var scRightSide = document.querySelector('.right-column');
var calendar = document.querySelector('.calendar');
var form = document.querySelector('.form')

//Left Column Minimize
function minimizeLeftSide(){
    hcLeftSide.setAttribute('id','minimize')
    userInfo.setAttribute('id','minimize')
    hcRightSide.setAttribute('id','maximize')
    scLeftSide.setAttribute('id','minimizeLeftColumn')
    scRightSide.setAttribute('id','maximizeRightColumn')
}
function maximizeLeftSide(){
    hcLeftSide.removeAttribute('id','minimize')
    userInfo.removeAttribute('id','minimize')
    hcRightSide.removeAttribute('id','maximize')
    scLeftSide.removeAttribute('id','minimizeLeftColumn')
    scRightSide.removeAttribute('id','maximizeRightColumn')
}

//Calendar
function openCalendar(){
    if (maxWidth.style.display == "flex"){
        maxWidth.style.display = "none";
        calendar.setAttribute('id','openCalendar');
    } else {
        maxWidth.style.display = "flex";
        calendar.removeAttribute('id','openCalendar');
    }
}

// New Task
function openNewTask(){
    if (form.style.display == 'none'){
        form.style.display = 'flex';
    } else {
        form.style.display = 'none';
    }
}
