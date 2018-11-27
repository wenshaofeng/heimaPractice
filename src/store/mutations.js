export default {
    //商品加入购物车
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
    },
    //购物车中修改商品数量
    updateCountNums(state,goodsInfo){
        state.car.some(item =>{
            if(item.id == goodsInfo.id){
                item.count = parseInt(goodsInfo.count)
            }
        })
         // 当购物车内商品数量更新之后，把car数组保存到 本地存储中
         localStorage.setItem('car',JSON.stringify(state.car))
    },
    //购物车中删除商品
    Delete (state,id) {
        state.car.some((item,index) =>{
            if(item.id == id ) {
                state.car.splice(index,1)
                return true
            }
        })

         //当购物车删除商品后，把car数组保存到 本地存储中
        localStorage.setItem('car',JSON.stringify(state.car))
    },
    //  改变商品的选择情况
    ChangeSelected(state,info) {
        state.car.forEach(item => {
            if(item.id == info.id) {
                item.selected = info.selected 
            }
        })  

         //当购物车商品选择改变后，把car数组保存到 本地存储中
         localStorage.setItem('car',JSON.stringify(state.car))
    },
    //全选和全不选
    ChangeAll(state,all) {
        state.car.forEach(item=>{
            item.selected = all

        })
        localStorage.setItem('car',JSON.stringify(state.car))
    },
    ClearCar(state) {
        state.car = []
        localStorage.setItem('car',JSON.stringify(state.car))
    }

    
  }
 