// 全局管理数据
export interface globalProps{
  user: userProps;
  otherUser: userProps[];

}




// 用户数据结构
export interface userProps{
  isLogin: boolean;
  _id: string;
  email?: string;
  nickName: string;
  description?: string;
  headImg?: imgProps;
  identity?: string;
}

// 头像数据结构
export interface imgProps{
  _id?: string;
  url?: string;
  createdAt?: string;
  fitUrl?: string;
}

//豆瓣链接数据结构
export interface doubanUrl{
  url: string;
  grade: string;
}

// 书评
export interface bookReview{
  commentatorId: string;
  grade: string;
  content: string;
}

// 书的数据结构
export interface bookProps{
  _id: string;
  bookName: string;
  originPrice: string;
  author: string;
  translator?: string;
  press: string
  publicationTime: string;
  paperBack: string;
  douban: doubanUrl;
  description: string;
  bookReviews: bookReview[];
  tags: string[];
  // 库存量
  stock: string;
  // 预计到货时间
  scheduledTime: string;
}

// 书单数据结构
export interface bookList{
  title: string;
  briefIntroduction: string;
  recommendedNum: number;
  books: bookProps[];
  backgroundImg?: string;
  referrerUserId?: string;
}