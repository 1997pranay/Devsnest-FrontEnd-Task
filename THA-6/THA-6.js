//Question1
var a1=[1,2,3];
var a2='hello';
function is_Array(arr){
 return arr instanceof Array
}
console.log(is_Array(a1))
console.log(is_Array(a2))

// //Question2
var a1=[1,2,3];
var a2=[];
var result=a2.concat(a1);
console.log(result);

// //Question3
a4=[7,9,0,-2]
a5=[]
function first(arr,n){
if(n==undefined)
  return arr[0]
else if(n<0)
  return []
else
  return arr.slice(0,n)
}
console.log(first(a4))
console.log(first(a4,3))
console.log(first(a4,6))
console.log(first(a4,-3))
console.log(first([],3))


//Question4
var a3=["Red","Green","Yellow","Black"]
console.log(a3.join(','))
console.log(a3.join('+'))

// //Question5
var arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var map1=new Map();
var max=0;
var element;
for(let i=0;i<arr.length;i++){
  if(map1.has(arr[i])){
    var k=map1.get(arr[i])
    var j=k+1
    map1.set(arr[i],j)
    if(j>max){
      max=j
      element=arr[i]
    }
  }
  else{
    map1.set(arr[i],1);
  }
}
console.log(element+' '+max+' times')



