let s1 = document.querySelector(".s1");
let s2 = document.querySelector(".s2");
let s3 = document.querySelector(".s3");
let s4 = document.querySelector(".s4");
let s5 = document.querySelector(".s5");
let s6 = document.querySelector(".s6");

//variables
let count=0;
let s1Order=0;
let s2Order=0;
let s3Order=0;
let s4Order=0;
let s5Order=0;
let s6Order=0;
let start=0;

//functions


//after final box is clicked, this function takes away the green color in the order they were clicked.
let colorRev = () =>{
    start=1;
    for(i=1;i<=6;i++){
        //setTimeout does not work on its own here because the loop itself does not pause for the 
        //setTimeout execution, so it wasn't properly going through the iteration, but without set timeout, 
        //all of the boxes were turning transparent at the same time.
        //the fix to that was using let, which introduces the variable, index, that only exists
        //within the scope of each iteration.
        let index = i;
        setTimeout(() => {
            console.log("index: "+i);
      
            
            if(s1Order==index){
              
                console.log("Reversing "+index);
                s1.style.backgroundColor="transparent";
                s1Order=0;
                
                }else if(s2Order==index){
                    console.log("Reversing "+index);
                    s2.style.backgroundColor="transparent";
                    s2Order=0;
                }else if(s3Order==index){
                    console.log("Reversing "+index);
                    s3.style.backgroundColor="transparent";
                    s3Order=0;
                }else if(s4Order==index){
                    console.log("Reversing "+index);
                    s4.style.backgroundColor="transparent";
                    s4Order=0;
                }else if(s5Order==index){
                    console.log("Reversing "+index);
                    s5.style.backgroundColor="transparent";
                    s5Order=0;
                }else if(s6Order==index){
                    console.log("Reversing "+index);
                    s6.style.backgroundColor="transparent";
                    s6Order=0;
                }
                //adding this disables you from being to click on a square while
                //they are being de-colorized. It had to go here inside of the 
                //scope of index so that the timing worked out with setTimeout,
                //otherwise it was setting before this all completed.
                if(index==6){
                    start=0;
                    count=0;
                }
        },index*1000);

    }



};


//this function checks to see if the last box has been clicked and, if so, runs the 
//color reverse function
let end = () =>{
    if(count==6){
        colorRev();
      }
}


//event listeners for squares

s1.addEventListener('click', () =>{
   
    if(s1Order==0 && start ==0){
        console.log("Clicking start: "+ start)
        s1.style.backgroundColor="green";
        count++;
        console.log(count);
        s1Order=count;
        end();
        
    }

})
s2.addEventListener('click', () =>{

    if(s2Order==0 && start==0){
        s2.style.backgroundColor="green";
        count++;
        console.log(count);
        s2Order=count;
        end();
       
    }
})
s3.addEventListener('click', () =>{
    if(s3Order==0 &&start==0){
        s3.style.backgroundColor="green";
        count++;
        console.log(count);
        s3Order=count;
        end();
      
    }
})
s4.addEventListener('click', () =>{
    if(s4Order==0 && start==0){
        s4.style.backgroundColor="green";
        count++;
        console.log(count);
        s4Order=count;
        end();
        
    }
})
s5.addEventListener('click', () =>{
    if(s5Order==0 && start==0){
        s5.style.backgroundColor="green";
        count++;
        console.log(count);
        s5Order=count;
        end();
       
    }
})
s6.addEventListener('click', () =>{
    if(s6Order==0 && start==0){
        s6.style.backgroundColor="green";
        count++;
        console.log(count);
        s6Order=count;
        end();
        
    }
    
})

