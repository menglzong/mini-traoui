export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/cart/index',
    'pages/center/index',
    'pages/detail/index',
  ],
  // tabBar: {
  //   list: [{
  //     'pagePath': 'pages/home/index',
  //     'text': '首页',
  //     'iconPath': './assets/images/tabbar/home.png',
  //     'selectedIconPath': './assets/images/tabbar/home_active.png'
  //   }, {
  //     'pagePath': 'pages/cart/index',
  //     'text': '购物车',
  //     'iconPath': './assets/images/tabbar/cart.png',
  //     'selectedIconPath': './assets/images/tabbar/cart_active.png'
  //   }, {
  //     'pagePath': 'pages/center/index',
  //     'text': '我的',
  //     'iconPath': './assets/images/tabbar/profile.png',
  //     'selectedIconPath': './assets/images/tabbar/profile_active.png'
  //   }],
  //   'color': '#000',
  //   'selectedColor': '#ff5777',
  //   'backgroundColor': '#fff',
  //   'borderStyle': 'black'
  // },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
