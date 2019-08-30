import { lazy } from 'react'

export default [
  {
    name: '首页',
    path: '/home',
    component: import('@/routes/Home')
  },
  {
    name: '管理中心',
    path: '/manage',
    children: [
      {
        name: '用户管理',
        path: '/manage/users',
        component: import('@/routes/Manage/Users')
      },
      {
        name: 'Hook分享',
        path: '/manage/hook',
        component: import('@/routes/Manage/Users')
      },
    ],
  },
]
