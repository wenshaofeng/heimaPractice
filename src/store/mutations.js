export default {
    addToShopcar(state,goodsInfo) {
        var flag = false       
        state.car.some(item =>{
            if(item.id === goodsInfo.id){
                item.count += parseInt(goodsInfo.count)
                flag = true
                return true 

            }
        })
        if(!flag) {
            state.car.push(goodsInfo)
        }
        // 当更新car之后，把car数组保存到 本地存储中
        localStorage.setItem('car',JSON.stringify(state.car))
    }
  }
 