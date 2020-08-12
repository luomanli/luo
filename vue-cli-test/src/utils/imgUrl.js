let imgUrl = "http://m.dian7.net/mobile-split/img"

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

export let rank = imgUrl + '/icon/rank.png'
export let top = imgUrl + '/icon/top.png'

export let top1 = imgUrl + '/icon/top1.png'

export let top2 = imgUrl + '/icon/top2.png'

export let top3 = imgUrl + '/icon/top3.png'

export let wx = imgUrl + '/icon/wx.png'

export let bd = imgUrl + '/icon/bd.png'

export let iconPhone = imgUrl + '/icon/phone.png'

export let card = imgUrl + '/icon/card.png'
export let outcash = imgUrl + '/bg/outcash.png'
export let phone = imgUrl + '/bg/phone.png'
export let indexbg = imgUrl + '/bg/indexbg.png'


export let king1 = imgUrl + '/icon/king1.png'
export let king2 = imgUrl + '/icon/king2.png'

export let king3 = imgUrl + '/icon/king3.png'

export let vip = imgUrl + '/icon/vip.png'
export let cir2 = imgUrl + '/icon/cir2.png'

export let cir1 = imgUrl + '/icon/cir1.png'