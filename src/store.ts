import { createStore, Commit } from 'vuex'
import { userProps, globalProps } from './dataType'
import { testUserData, testOtherUserData } from './testData'
import axios from 'axios'


const getAndCommit = async function(url: string, mutationName: string, commit: Commit){
  const { data } = await axios.get(url)
  commit(mutationName, data)
  return data
}

const store = createStore<globalProps>({
  state: {
    user: testUserData,
    otherUser: testOtherUserData
  },
  mutations: {
    fetchCurrcntUser(state,rawData) {
      state.user = {isLogin:true, ...rawData}
    },
    fetchUserById(state, rawData) {
      state.otherUser.push(rawData.data)
    }
    
  },
  actions: {
    // 获取当前登录用户
    fetchCurrentUser({ commit }) {
      return getAndCommit('user/current', 'fetchCurrentUser', commit)
    },
    //根据id查询用户信息
    fetchUserById({ commit }, cid) {
      return getAndCommit(`user/${cid}`,'fetchUserById', commit)
    }

  },
  getters: {
    getOtherUserById: (state) => (cid: string) => {
      return state.otherUser.find(c => c._id == cid)
    }

  }

})


export default store