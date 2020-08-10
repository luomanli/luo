let imgUrl = "http://m.dian7.net/mobile-split/static/img"

function random() {　　
    var arr = [];　　
    while (arr.length < 10) { //原数组长度为0，每次成功添加一个元素后长度加1，则当数组添加最后一个数字之前长度为9即可
        　　　　
        var num = Math.floor(Math.random() * 10); //生成一个0-100的随机整数
        　　　　
        if (arr.length === 0) { //如果数组长度为0则直接添加到arr数组
            let imgramf = imgUrl + num + '.png';　　　　　　
            arr.push(imgramf);　　　　
        } else {　　　　　　
            for (var i = 0; i < arr.length; i++) { //当新生成的数字与数组中的元素不重合时则添加到arr数组
                　　　　　　　　
                if (arr.join(',').indexOf(num) < 0) {
                    let imgram = imgUrl + num + '.png';　　　　　　　　　　
                    arr.push(imgram);　　　　　　　　
                }　　　　　　
            }　　　　
        }　　
    }
    return arr
}

export let nopay = imgUrl + '/bg/nopay.png'
export let custom = imgUrl + '/icon/custom.png'
export let buyok = imgUrl + '/bg/buyok.png'
export let home = imgUrl + '/icon/home.png'

export let come = imgUrl + '/icon/come.png'

export let order = imgUrl + '/icon/order.png'