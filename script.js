const deg = 6;

const hr = document.querySelector('.hr');
const mn = document.querySelector('.mn');
const sc = document.querySelector('.sc');

setInterval(()=>{
    let day = new Date();

    let hh = day.getHours() * deg;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    document.querySelector('.hours-t').innerHTML = day.getHours();
    document.querySelector('.minutes-t').innerHTML = day.getMinutes();
    document.querySelector('.seconds-t').innerHTML = day.getSeconds();

    hr.style.transform = `rotateZ(${hh}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
});