/*function drop(array ,n=1){
    const length=array.length;
	var a=[];
	for (let i=n;i<length ;i++)
	{
		a[i-n] =array[i];                     //1
	}
	return a;
}
var a=drop([1,2,3],1);
document.write(a);*/


/*function slice(array, index1,index2)
{
	var a=[];
	if(index2>array.length)
		index2=array.length;
	for(let i=index1;i<index2 ; i++)             //2
		a[i-index1]=array[i];
	return a;
}
var c=slice([1,2,3,4,6,7],1,4);
document.write("<br/>"+ c);*/

/*function fill(array ,n){
    
	var a=[];
	for (let i=0;i<array.length ;i++)              //3
	{
		a[i] =n;
	}
	return a;
}
var x=fill([1,2,3],'a');
document.write(x);*/

/*function last(array){
    
	
	for (let i=0;i<array.length ;i++)
	{                                               //4
		if(i==array.length-1){
			return array[i];
			break;
		}
	}
}
var x=last([1,2,3,4]);
document.write(x);*/

/*function reverse(array){
    
	var a=[];
	
	for (let i=0;i<array.length;i++)              //5
	{
		a[i] =array[(array.length-1)-i];
		
	}
	return a;
}
var x= reverse([1,2,3,4]);
document.write(x);*/

/*function initial(array){
    var a=[];
	
	for (let i=0;i<array.length ;i++)
	{
		if(i==array.length-1){
			break;                                     //6
		}
		else{
			a[i]=array[i];
		}
	}
	return a;
}
var x=initial([1,2,3,4]);
document.write(x);*/

/*function indexof(array,value){
	for(let i=0;i<array.length;i++){
		if(array[i]==value)                           //7
			return i;
	}
}
var x=indexof([1,2,3,4],3);
document.write(x);*/

/*function head(array){
	return array[0];                                 //8
}
var x=head([1,2,3]);
document.write(x);*/

/*function compact(array){
	var a=[];
	var j=0;
	for(i=0;i<array.length;i++){
		if(array[i]==0||"false"||"null"||"undefined"||" "){
		
		}                                                                          //9
		else{
			a[j]=array[i];
			j=j+1;
		}	
	}
	return a;
}
var x=compact([1,2,3,"null",4]);
document.write(x);*/

/*function nth(array,value){
	for(i=0;i<array.length;i++){                                //10
		if(i==value)
			return array[i];
	}
}
var x=nth([10,20,30,40],3);
document.write(x);*/

/*function pull(array,value){
	var a=[];
	var j=0;                                               //11
	for(i=0;i<array.length;i++){
		if(array[i]!=value){
			a[j]=array[i];
			j=j+1;
		}
	}
	return a;
}
var x=pull([1,2,3,4],2);
document.write(x);*/

/*function take(array,value){
	var a=[];
	for(i=0;i<value;i++){
		a[i]=array[i];                                          //12
	}
	return a;
}
var x=take([1,2,3,4],2);
document.write(x);*/

/*function dropright(array,value){
	var a=[];
	for(i=0;i<(array.length-value);i++){
		a[i]=array[i];                                                //13
	}
	return a;
}
var x=dropright([1,2,3,4,5],2);
document.write(x); */

/*function take(array,value){
	var a=[];
	for(i=0;i<value;i++){
		a[i]=array[i];
	}                                                                   //14
	return a;
}
var x=take([1,2,3,4],2);
document.write(x); */

function takeright(array,value){
	var a=[];
	var j=0;
	for(i=(array.length-value);i<=array.length-1;i++){
		a[j]=array[i];
		j=j+1;
	}
	return a;	
}

var x=takeright([1,2,3,4,5],3);
document.write(x);








