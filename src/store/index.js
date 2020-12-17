import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    banner:[],
    list:[ ],
    swiper:[],
    navActive:"",
    addCard:[],
    custom:[],
    title:[],
    dialogImgVisible:false,
    imgBankSrc:""
  },
  mutations: {
    addCard(state,value){
      console.log(value)
      Vue.set(state.addCard, state.addCard.length , value)
      // Object.keys(value).forEach(key => state.addCard[key] = value[key])
    },
    navActiveEdit(state,value){
      state.navActive= value;
    },
    navRemove(state,value){
      state.addCard.forEach((item,index)=>{
        if(item.num==value.num){
          state.addCard.splice(index , 1  )
          // state.addCard.splice(index , 1 ,{ })
          this.commit('dataRemove',{name:item.storeName,num:item.num})
        }
      })
      // console.log("9999999999",state.addCard)
      // state[value.editName].forEach((item,index)=>{
      //   if(item.num==value.num)  state[value.editName].splice(index , 1)
      // })

    },

    swiperEdit(state,value) {
      this.commit('dataCheck',{data:state.swiper,value:value})

    },
    bannerEdit(state,value) {
      this.commit('dataCheck',{data:state.banner,value:value})
      console.log("---0000000",state.banner)
      // Object.keys(value).forEach(key => state.banner[key] = value[key])
    },
    listEdit(state,value){
      this.commit('dataCheck',{data:state.list,value:value})
    },
    customEdit(state,value){
      // Vue.set(state.custom, state.custom.length , value);
      this.commit('dataCheck',{data:state.custom,value:value})
    },
    titleEdit(state,value){
      this.commit('dataCheck',{data:state.title,value:value})
    },
    dataRemove(state,value){
      state[value.name].forEach((item,index)=>{
        if(item.num==value.num){
          state[value.name].splice(index , 1 ,{ })
        }
      })
    },
    dataCheck(state,data){
      let num= window.sessionStorage.getItem( "num" )
      let num2=""
      console.log("**********",data)
      data.data.map((item,index)=>{
        if( item.num==num ){
          num2=index+""
          Vue.set(data.data, num2, data.value);
        }
      })
      if( num2==""){Vue.set(data.data, data.data.length , data.value); }

    },
    imgBankCheck(state,data){
        let num= window.sessionStorage.getItem( "num" )
        let num2=""
        let dataArr
        typeof data.data.name == "string"?dataArr=data.state[data.data.name]:dataArr=data.state[data.data.name[0]]
        dataArr.map((item,index)=>{
          if( item.num==num ){
            num2=index
          }
        })
      window.sessionStorage.setItem( "num2",num2 )
    },
    changDialogImgVisible(state,value){
      state.dialogImgVisible=value
    },
    changimgBankSrc(state,data){
      let changSrc
      let _this=this
      Promise.resolve(
          _this.commit('imgBankCheck',{state,data})
      ).then(res=>{
        let num2 =window.sessionStorage.getItem( "num2" )
        if(typeof data.name == "string"){
          state[data.name][num2].imageUrl=data.imageUrl
          changSrc=state[data.name][num2]
          Vue.set(state[data.name] ,num2, changSrc);
        }else{
          state[data.name[0]][num2][data.name[1]][data.index].imageUrl=data.imageUrl
          changSrc=state[data.name[0]][num2][data.name[1]][data.index]
          Vue.set(state[data.name[0]][num2][data.name[1]], data.index, changSrc);
        }
      })
    },
    deleImgSrc(state,data){
      let changSrc
      let _this=this
      Promise.resolve(
          _this.commit('imgBankCheck',{state,data})
      ).then(res=>{
        let num2 =window.sessionStorage.getItem( "num2" )
        if(typeof data.name == "string"){
          state[data.name][num2].imageUrl=""
          changSrc=state[data.name][num2]
          Vue.set(state[data.name],num2, changSrc);
        }else{
          state[data.name[0]][num2][data.name[1]][data.index].imageUrl=""
          changSrc=state[data.name[0]][num2][data.name[1]][data.index]
          Vue.set(state[data.name[0]][num2][data.name[1]], data.index, changSrc);
        }
      })
    }
  },
  actions: {
    bannerEdit (context) {
      context.commit('bannerEdit')
    }
  },
  modules: {
  }
})
