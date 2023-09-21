let obj={
  arr : [],
  addStudent : function(name,English,Science,Maths){
    let local={};
    local.name= name;
    local.English= English;
    local.Science= Science;
    local.Maths= Maths;
    
    this.arr.push(local);
  },
  leastTotal : function(){
    let min= Infinity;
    let local=null;
    for(let i=0;i<this.arr.length;i++){
      let total=0;
      
      total+=this.arr[i].English +this.arr[i].Science+this.arr[i].Maths;
      if(total<min){
        min=total;
        local=this.arr[i].name + " " + min;
      }
    }
    return local;
  },
  highestTotal : function(){
    let max= -Infinity;
    let local=null;
    for(let i=0;i<this.arr.length;i++){
      let total=0;
      
      total+=this.arr[i].English +this.arr[i].Science +this.arr[i].Maths;
      if(total>max){
        max=total;
        local=this.arr[i].name + " " + max;
      }
    }
    return local;
  },
}
  obj.addStudent("Rajan",50,80,65);
  obj.addStudent("Ankush",70,85,75);
  obj.addStudent("Pratham",80,90,70);

console.log(obj.arr);
console.log(obj.leastTotal());
console.log(obj.highestTotal());
