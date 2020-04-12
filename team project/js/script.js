var p=[[1,-1,1,1],[1,1,-1,-1]],
    t= [-1,1],
    w = [0,0,0,0],
    b = 0,
    s = 1,
    r = 4;
function multiplyMatrix(matrixA, matrixB)
{
    var result = new Array();//declare an array   

    //var numColsRows=$("#matrixRC").val();
    numColsRows=2;
    matrixA[0].length;
    //iterating through first matrix rows
    for (var i = 0; i < numColsRows; i++) 
    {
        //iterating through second matrix columns
        for (var j = 0; j < numColsRows; j++) 
        { 
            var matrixRow = new Array();//declare an array
            var rrr = new Array();
            var resu = new Array();
            //calculating sum of pairwise products
            for (var k = 0; k < numColsRows; k++) 
            {
                rrr.push(parseInt(matrixA[i][k])*parseInt(matrixB[k][j]));
            }//for 3
            resu.push(parseInt(rrr[i])+parseInt(rrr[i+1]));

            result.push(resu);
            //result.push(matrixRow);
        }//for 2
    }//for 1
    return result;
}

function transferFunction(fname,n){
    var a = new Array();
    switch(fname){
        case 'hardlim':
            for(i=0 ; i<= n.length ; i++){
                if(n[i] >= 0){
                    a.push(1);
                }else{
                    a.push(0);
                }
            }
            break;
            
        case 'hardlims':
            for(i=0 ; i<= n.length ; i++){
                if(n[i] >= 0){
                    a.push(1);
                }else{
                    a.push(-1);
                }
            }
            break;
            
    }
    console.log(a);
}

function mulByConstant(arr,c){
    for(i=0 ; i<arr.length; i++){
        arr[i] *= c;
    }
    return arr;
}

function addTwoArray(arr1,arr2){
    for(i=0 ; i<arr1.length; i++){
        arr1[i] += arr2[i];
    }
    return arr;
}
function subTwoArray(arr1,arr2){
    for(i=0 ; i<arr1.length; i++){
        arr1[i] -= arr2[i];
    }
    return arr;
}
function compare(arr1,arr2){
    for(i=0 ; i<arr1.length; i++){
        if(arr1[i] != arr2[i]){
            return false;
        }
    }
    return true;
}
function learning(){
    var test = 0;
    var i = 0,e=0,a;
    while(true){
        
        for(j = 0 ; j < p.length ; j++){
            if(i == p.length){
                i = 0;
            }
            
            a=(multiplyMatrix(w,p[i]) + b);
            
            if( compare(a,t[i])){
                i++;
                test = test + 1;
            }else{
                break;
            }
        }
        
        if(test == p.length){
            break;
        }else{
            test = 0;
            e = subTwoArray(t[i],a);
            w = addTwoArray(w,multiplyMatrix(e,p[i]));
            b = addTwoArray(b,e);
        }
    }
}