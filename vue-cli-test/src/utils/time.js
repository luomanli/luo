const { defaults } = require("autoprefixer");

export default function countTime() {
    //获取当前时间  
    var date = new Date();
    var now = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    var now1 = date.getTime();

    //设置截止时间  
    var str = "2020/8/11 15:00:00";
    var endDate = new Date(str);
    // var end = endDate.getTime();
    var end = 24 * 60 * 60 * 1000;
    var leftTime = end - now * 1000;


    if (date.getMonth() == endDate.getMonth() && date.getDate() == endDate.getDate()) {
        end = endDate.getTime();
        leftTime = end - date.getTime();
        console.log("12", end, leftTime)
    }
    //时间差  
    console.log("12", leftTime)
        //定义变量 d,h,m,s保存倒计时的时间  
    var d, h, m, s;
    if (leftTime >= 0) {
        h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
        m = Math.floor(leftTime / 1000 / 60 % 60);
        s = Math.floor(leftTime / 1000 % 60);
    }
    //将0-9的数字前面加上0，例1变为01
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    console.log("111", h, m, s)

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    return h + ':' + m + ':' + s

    //将倒计时赋值到div中  
    //递归每秒调用countTime方法，显示动态时间效果  


}