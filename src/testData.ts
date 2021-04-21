import { userProps, bookList, } from './dataType'

//当前登录用户
export const testUserData: userProps = {
  isLogin: true,
  _id: '111',
  nickName: 'tuzikou',
}

// 书单
export const testBookList: bookList = {
  title: '不服从',
  briefIntroduction: '',
  recommendedNum: 15,
  books: [],
  backgroundImg: '',
  referrerUserId: '111',
}

export const testBookLists: bookList[] = [testBookList,testBookList,testBookList,testBookList,testBookList]


// 当前页面用户信息
export const testOtherUserData: userProps[] = [
  {
    isLogin: false,
    _id: '111',
    nickName: 'tuzikou',
    identity: '客座鱼编'
  },
  {
    isLogin: false,
    _id: '222',
    nickName: 'tuzikou'
  },
  {
    isLogin: false,
    _id: '333',
    nickName: 'tuzikou'
  }
]