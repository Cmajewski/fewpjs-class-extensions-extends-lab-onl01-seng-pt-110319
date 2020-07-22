// Your code here
class Polygon{
    constructor(array){
        this.array=array
    }

    get countSides(){ 
        return this.array.length
    }
    get perimeter(){ 
        const reducer=(accum,cV)=>accum+cV;
        return this.array.reduce(reducer);
    }

}

class Triangle extends Polygon{

    get isValid() {
        const [s1, s2, s3] = this.array;
        return s1 < s2 + s3 && s2 < s3 + s1 && s3 < s1 + s2 ? true : false;
      }

}

class Square extends Polygon{

    get area(){
        return this.array[0]*this.array[1]

    }

    get isValid(){
        return this.perimeter/4==this.array[0];
    }
}
