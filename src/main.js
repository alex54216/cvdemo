let str1 = `/* 你好，我叫小亮
 * 接下来我在线画一个太极图案，很有趣的
 * 首先我要准备一个div
 **/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`;
let htmlDemo = document.querySelector('#html')
let str2 = ''
let n = 0
let style = document.querySelector('#style')
function step(){
    setTimeout(()=>{

        if(str1[n] === '\n'){
            str2 += '<br/>'
        }else if(str1 === ' '){
            str2 += '&nbsp;'
        }else{
            str2 += str1[n]
        }
        htmlDemo.innerHTML = str2
        style.innerHTML = str1.substring(0,n)
        window.scrollTo(0, 9999);
        htmlDemo.scrollTo(0, 9999);
        if(n<str1.length-1){
            n += 1
            step()
        }else{
            console.log('结束')
        }
    },50)
}
step()