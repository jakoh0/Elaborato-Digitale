function vaisu(){
    scroll(0,0)
}



function cerchione(){
    document.getElementById("cerchio").style.display = 'none';
    document.getElementById("riga").style.display = 'block';
    document.getElementById("frecce-alte").style.display = 'none';
    document.getElementById("cerchietto").style.display = 'flex';
    document.getElementById("riga").style.animation = "anima1 2s 1"; 
    document.getElementById("cerchietto").style.animation = "anima2 2s 1"; 
}


function tornaIndietro(){
    document.getElementById("cerchio").style.display = 'flex';
    document.getElementById("riga").style.display = 'none';
    document.getElementById("frecce-alte").style.display = 'flex';
    document.getElementById("cerchietto").style.display = 'none';

}

function primoGraph(){
    document.getElementById("primografico").style.display = 'block';
    console.log("ciao");
    document.getElementById("cerchietto").style.display = 'none';
    document.getElementById("riga").style.display = 'none';
}

function ritornoprimo(){
    document.getElementById("primografico").style.display = 'none';
    document.getElementById("cerchietto").style.display = 'flex';
    document.getElementById("riga").style.display = 'block';
}

function secondoGraph(){
    document.getElementById("secondografico").style.display = 'block';
    document.getElementById("cerchietto").style.display = 'none';
    document.getElementById("riga").style.display = 'none';
}

function ritornosecondo(){
    document.getElementById("secondografico").style.display = 'none';
    document.getElementById("riga").style.display = 'block';
    document.getElementById("cerchietto").style.display = 'flex';
}