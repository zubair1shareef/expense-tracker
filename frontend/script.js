// var text = "foo bar loo zoo moo";
// text = text.toLowerCase()
//     .split(' ')
//     // .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
//     .map((s)=>s.charAt(0).toUpperCase() +s.substring(1))
//     // .join(' ');

//     console.log(text)
//     let str=''
//     for(let i=0;i<text.length;i++){
//         str=str+text[i]+' ';
       
//     }
//     console.log(str)

















// var str='fdsf fdf gdg wer fxf uytu';

// str=str.split(' ');
// for(var i=0;i<str.length;i++){
//     str[i]=str[i].charAt(1).toUpperCase()+str[i].substring(1)
// }
// var ans=''
// for(var i=0;i<str.length;i++){
// ans=ans+str[i]+' '
// }


// console.log(ans)

// function x(){
//     var a=7;
//     return function b(){
//         console.log(a)
//     }
//     a=100
//     // return b;
// }
// x()()

function a(str){
    // str=str.replaceAll(' ','')
    str=str.split(' ');
    console.log(str[2].length)

}
a('fsdf dsf fdsf')