let members=[];

Entity = document.getElementById('name');
entry = document.getElementsByClassName('entry');
add = document.getElementById('add');
random = document.getElementById('random');
result= document.getElementsByClassName('result');


add.addEventListener('click', ()=>{
    members[members.length] = Entity.value;
    for(i=0;i<members.length;i++){
        entry[i].innerHTML = members[i];
    }
    Entity.value="";
} );

random.addEventListener('click', ()=>{
const block = members.length;    
    for(i=0;i<block;i++){
        remain = true;
        randomNumber= Math.random();
        randomNumber*=members.length;
        randomNumber = Math.floor(randomNumber);
        result[i].innerHTML = 'THEME ';
        result[i].innerHTML += i+1;
        result[i].innerHTML +=': ';
        result[i].innerHTML += members[randomNumber];
        members.splice(randomNumber,1);
    }
});

Entity.value="";
