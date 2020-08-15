var str0 = "2020/8/15 22:00:00";
var str1 = "2020/8/14 10:00:00";
// setTimeout(() => {
//     console.log('1', countTime(str0, str1))
// }, 1000)
// setInterval(() => {
//     console.log('1', countTime(str0, str1))
// }, 1000)
var time;
export default time = function countTime(startStr, endStr) {
    //获取当前时间  
    var date = new Date();
    var now = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();

    //设置截止时间  
    //    endStr = "2020/8/13 22:00:00";
    var endDate = new Date(endStr);



    //设置开始时间
    //开始时间小于现在时间，返回false
    // startStr = '2020/8/14 09:10:90'
    var startDate = new Date(startStr);
    // console.log("startDate - now", startDate - date > 0)
    if (startDate - date > 0) {
        return false
    }


    //判断时间差  
    // var end = endDate.getTime();
    var end = 24 * 60 * 60 * 1000;
    var leftTime = end - now * 1000;


    if (date.getMonth() == endDate.getMonth() && date.getDate() == endDate.getDate()) {
        end = endDate.getTime();
        leftTime = end - date.getTime();
        // console.log("12", end, leftTime)
    }
    //时间差  
    // console.log("12", leftTime)
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