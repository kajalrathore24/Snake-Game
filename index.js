// let canvas=document.querySelector('canvas');
// let ctx=canvas.getContext('2d');
// // get context helps to determine which type to define a structure what you want to create
// ctx.beginPath()     //decides path to draw a line
// ctx.moveTo(10,10)     //where to start the line
// ctx.lineTo(30,30) 
//      //where x cordinates ends and y coordinates end
// ctx.stroke()          //break the line
  
// // moveto tells where the line start and where it be ended

// // ctx.fillStyle='red';
// // ctx.fillRect(220,220,50,50)

// // tells to determine what you want to make eg:like to create 2d cube 4 parameters(x coordinate,y coordinate,height,width)
// // by default fillrect is black in color


let canvas=document.querySelector('canvas');
let pen=canvas.getContext('2d');
let cell=50
let snakeCells=[[0,0]]
let direction='right'
// pen.fillRect(0,0,50,50)
// pen.clearRect(0,0,50,50)
pen.fillStyle='purple'

function draw(){
     // pen.fillRect()
     pen.clearRect(0,0,1000,600)
     for(let i of snakeCells){
          pen.fillRect(i[0],i[1],cell,cell)
     }
}         //draw the snake     
// setInterval

document.addEventListener('keydown',(event)=>{
     if(event.key==='ArrowUp'){
          direction='Up'
     }else if(event.key==='ArrowDown'){
          direction='down'
     }else if(event.key==='ArrowLeft'){
          direction='left'
     }else{
          direction='right'
     }
})

function update(){
     let headx=snakeCells[snakeCells.length-1][0];
     let heady=snakeCells[snakeCells.length-1][1];
     // let newx=headx+cell;
     // let newy=heady;
     let newx
     let newy
     if(direction==='right'){
          newx=headx+cell
          newy=heady
     }else if(direction==='Up'){
          newx=headx;
          newy=heady-cell
     }else if(direction==='down'){
          newx=headx
          newy=heady+cell
     }else{
          newx=headx-cell
          newy=heady
     }

     snakeCells.push([newx,newy]);
     snakeCells.shift()    //removes the first index of array


}        //update the snake

setInterval(()=>{
     draw()
     update()
},100)