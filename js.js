
var tiles ; // the number of shown tiles
var tileId; 
var falseCh; //the false choice counter
var trueCh;  //the true choice counter
var score = 0;
var loseEl = document.getElementById("lose"); //lose message element
var winEl = document.getElementById("win"); //win message element
var endEl = document.getElementById("end"); //  end element

//the essential actions before running the main function
function options(){
    document.getElementById('start').style.display = '';
    document.getElementById('end').style.display = 'none';
    tilesNumber = document.querySelector('input[name=tiles-number]:checked').value;
    console.log(typeof(tilesNumber));
    createEl(tilesNumber-1);
    var boardWidth = Math.sqrt(tilesNumber) * 90 + 16; //
    document.getElementById('board').style.width = `${boardWidth}px`;
    document.getElementById('board').classList.add('show');
    document.getElementById('options').style.opacity = '0';
    switch(tilesNumber){
        case '9' : tiles = 4;
        break;
        case '16' : tiles = 7;
        break;
        case '25' : tiles = 10;
        break;
    }
    starter();
}

function starter(){
     
        document.getElementById('tiles').innerHTML= `tiles : ${tiles}`;
    
        var allTiles = document.querySelectorAll(".tile");
        allTiles.forEach(item => item.addEventListener('click',function(){
            choose(Number(item.id));
            this.classList.add('hover');
            document.getElementById('card-effect').play();
            
        }));
}

//the main function
function matrix() {
    document.getElementById('start').style.display = 'none'; 
     falseCh = 2;
     trueCh = tiles;
    
        setTimeout(function(){showTiles()},500);
        setTimeout(function(){clear()},1500); 
    
}

// creating a random number
function getRandomNumber(max){
    
    return Math.floor(Math.random() * max);  
}    

//creating an array of random numbers
function getId(){
            var id=[];
            for(var i = 0 ; i < tiles ; i++){
                var a = getRandomNumber(tilesNumber);
                if(id.indexOf(a) > -1){
                    i--;
                }else{
                    
                    id[i] = a;
                }
            }
    return id;
}

function showTiles(){
   tileId = getId();
    for(var i=0 ; i<tileId.length ; i++){
           var box = document.getElementById(tileId[i]);
           
           box.classList.add('hover');
    }  
}

//checking the input and compare with random numbers array
function choose(num){
    var scoreEl=document.getElementById('score');
    var a=tileId.indexOf(num);
    const clickedTile = document.getElementById(num);
    
      
    if(!clickedTile.classList.contains('hover')){
    
    
    if(a>-1){
       //the true choice 
        clickedTile.querySelector('.back').style.backgroundColor = "#2ECC71";
        trueCh--;
        score += 10;
        if(trueCh == 0){
            endEl.style.display = "block";
            winEl.style.display = "block";
            scoreEl.innerHTML=`score : ${score}`;
        }
    }else{
         //the false choice 
        clickedTile.querySelector('.back').style.backgroundColor = "#ED5565";
        
        falseCh--;
        score -=20;
        if(falseCh == 0){
            endEl.style.display = "block";
            loseEl.style.display = "block";
            scoreEl.innerHTML=`score : ${score}`;
        }
    }  
}
}


//back to default
function clear(){
    
    var hoverTiles = document.querySelectorAll(".hover");
    
    hoverTiles.forEach(item => {
        item.classList.remove('hover');
        item.querySelector('.back').removeAttribute('style');
    });

}

//checking the elements status (default or changed) 
function check(){
    
    var hoverTiles = document.querySelectorAll(".hover");
    return (hoverTiles.length > 0) ? false : true;
}

//playing again
function continu(){
    
    endEl.style.display = "none";
    loseEl.style.display = "none";
    winEl.style.display = "none";
    
      clear();
   
     if(check()){
       setTimeout(matrix,500);
     }

}
// create html elements of matrix
function createEl(n){
    for(var i= 0 ; i <= n ; i++){
           var t = document.createElement("div");
            t.id = i;
            t.className = "tile";
            var flipper = document.createElement('div');
            flipper.className = "flipper";
            var front = document.createElement('div');
            front.className = "front";
            var back = document.createElement("div");
            back.className = "back";
            flipper.appendChild(front);
            flipper.appendChild(back);
            t.appendChild(flipper);
            document.querySelector('.matrix').appendChild(t); 
        
    }

}
function removeEl(){
    var t = document.querySelectorAll('.tile');
    console.log(t);
    for(var i= 0 ; i < t.length ; i++){
        document.querySelector('.matrix').removeChild(t[i]);
    }
    document.getElementById('board').classList.remove('show');
    document.getElementById('options').style.opacity = '1';
}


