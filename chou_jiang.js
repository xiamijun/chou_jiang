window.onload=function () {
    let personCount=500;    //参加抽奖人数
    let timer;
    let running=false;
    let resultNum=document.getElementById('resultNum');
    let begin=document.getElementById('begin');
    begin.onclick=function () {
        if (running){
            running=false;
            clearTimeout(timer);
            this.value='开始';
            resultNum.style.color='red';
        }else {
            running=true;
            resultNum.style.color='#000';
            this.value='停止';
            //每隔1ms刷新一个随机数数
            timer=setInterval(function () {
                let num=Math.floor(Math.random()*(personCount+1));
                resultNum.innerHTML=num;
            },1);
        }
    }
};