var lastRemaining = function(n) {
    let arr = [];

    for(i=0; i<n; i++){
        arr.push(i+1);
    }
    console.log(arr);
    let length = arr.length;
    while(length !== 1){
        let filterArr = arr.filter((item,i) =>{
            if(i%2 !==0 ){
                length --;
                return item;
            }
            
        });
        
        
        filterArr = filterArr.filter((item,i) =>{
            if(i%2 ==0 ){
                length --
                return item;
                ;
            }
            
        });
        console.log(filterArr)
        
    }
    
    
    

    // console.log(filterArr);
    // console.log(filterArr1);

    
    // let newarr = []
    // let newarr1 = []
    // arr.forEach((value, index)=>{
    //   // console.log(value,index);
    //   if(index % 2 !== 0){
    //     arr.splice(index,1);
    //   }
    // })
    // console.log(arr);
    
    // arr.forEach((value, index) => {
    //   console.log(value,index)
    //   if(index % 2 == 0){
    //     arr.splice(value,1);
    //   }
    // })
    // console.log(arr);
    
};

console.log(lastRemaining(9))