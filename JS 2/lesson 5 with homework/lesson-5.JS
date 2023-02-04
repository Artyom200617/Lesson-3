let obj1 = {
    name:'hello',
getName:function () {
    console.log(this.name);
}
    // function getName(){
    //     console.log(obj1.name);
    // }
}

const obj2 = obj1

obj1 = 28
obj2.getName()
obj1.getName()