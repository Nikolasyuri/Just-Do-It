var hcLeftSide = document.querySelector('.hcleft-side');
var userInfo = document.querySelector('.user-info')
var hcRightSide = document.querySelector('.hcright-side');
var todayDate = document.querySelector('#todayDate')
var menuIcon = document.getElementsByName('menuIcon')[0];
var sectionContent = document.querySelector('.Section-Content')
var scMaxWidth = document.querySelector('.scMax-width');
var scLeftSide = document.querySelector('.left-column');
var scRightSide = document.querySelector('.right-column');
var mainButtons = document.querySelector('.mainButtons')
var calendar = document.querySelector('.calendar');
var form = document.querySelector('.form')
var countdown = document.querySelector('.countdown')
var songCountdown = document.querySelector('#song')
var closeCountdown = document.querySelector('#close')

//Header Today date
function carregar(){
    var data = new Date();
    var weekDay = new Array(7);
    weekDay[0] = "Domingo";
    weekDay[1] = "Segunda";
    weekDay[2] = "Terça";
    weekDay[3] = "Quarta";
    weekDay[4] = "Quinta";
    weekDay[5] = "Sexta";
    weekDay[6] = "Sábado";
    var d = weekDay[data.getDay()];
    var monthDay = data.getUTCDate()
    var months = new Array(12);
    months[0] = "Janeiro";
    months[1] = "Fevereiro";
    months[2] = "Março";
    months[3] = "Abril";
    months[4] = "Maio";
    months[5] = "Junho";
    months[6] = "Julho";
    months[7] = "Agosto";
    months[8] = "Setembro";
    months[9] = "Outubro";
    months[10] = "Novembro";
    months[11] = "Dezembro";
    var month = months[data.getUTCMonth()];
    todayDate.innerHTML = `${d}, ${monthDay} de ${month}`;
}

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
    if (scMaxWidth.style.display == "flex"){
        scMaxWidth.style.display = "none";
        calendar.setAttribute('id','openCalendar');
    } else {
        scMaxWidth.style.display = "flex";
        calendar.removeAttribute('id','openCalendar');
    }
}

// New Task
function openForm(){
    if (form.style.display == 'none'){
        form.style.display = 'flex';
    } else {
        form.style.display = 'none';
    }
}
function addNewTask(){
}
function closeTask(){
    
    openForm();
}

//Countdown
function countdownIn(){
    countdown.style.display = 'flex'
    scMaxWidth.style.display = "none";
    mainButtons.style.display = "none";
}
function countdownOut(){
    countdown.style.display = 'none'
    scMaxWidth.style.display = "flex";
    mainButtons.style.display = "flex";
}