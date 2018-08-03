var boxId;
var falseCh;
var trueCh;
var score = 0;
function getRandomNumber(max){
    
    return Math.floor(Math.random() * max);  
}    

function getId(){
            var id=[];
            for(var i=0 ; i<6 ; i++){
                var a = getRandomNumber(16);
                if(id.indexOf(a) > -1){
                    i--;
                }else{
                    
                    id[i] = a;
                }
            }
    return id;
        }

function matrix() {
    var startBox = document.getElementById('start');
    startBox.style.display = 'none';
 falseCh = 2;
 trueCh = 6;
 
 boxId = getId();
    for(var i=0 ; i<boxId.length ; i++){
           const box = document.getElementById(boxId[i]);
           box.style.backgroundColor = "#FC6E51";
    }

        setTimeout(function(){clear()},1000); 
    }


function choose(num){
    var aa=document.querySelector('.score');
    var a=boxId.indexOf(num);
    const bb = document.getElementById(num);
    while(!bb.hasAttribute("style")){
        
    
    if(a>-1){
        
        bb.style.backgroundColor = "green";
        trueCh--;
        score += 10;
        if(trueCh == 0){
            document.getElementById("end").style.display = "block";
            aa.innerHTML='score: '+score;
        }
    }else{
         
        bb.style.backgroundColor = "red";
        falseCh--;
        score -=20;
        if(falseCh == 0){
            document.getElementById("end").style.display = "block";
            aa.innerHTML='score: '+score;
        }
    }  
}
}
 
function check(){
    var aa = document.querySelectorAll(".box");
    var boxLe= aa.length;
    var i;
    for(i=0 ; i < boxLe ; i++){
    
        if( aa[i].hasAttribute('style')){
        return false;
        }


    }
    return true;
}
function clear(){
    
    var allBoxs = document.querySelectorAll(".box");
    var boxsLe= allBoxs.length;
    var i;
    for(i=0 ; i < boxsLe ; i++){
    
     allBoxs[i].removeAttribute('style')
        
    }
}
function continu(){
     document.getElementById("end").style.display = "none";
    clear();
    if(check){
        
        matrix();
    }
}




