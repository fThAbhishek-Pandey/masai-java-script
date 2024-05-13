const rectangel ={
      lth :4,
      wth : 5,
      area (){
        let ar = this.lth *this.wth;
        return ar;
       },
      peri (){
         let ans = this.lth +this.wth;
          return 2*ans;
   },
}
console.log(rectangel);
console.log(rectangel.area);
console.log(rectangel.peri);
console.log(rectangel.area);