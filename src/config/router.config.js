// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout, MulLayout } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

export const asyncRouterMap = [

  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/dashboard/workplace',
    children: [
      // 外部链接
      {
        path: 'https://www.baidu.com/',
        name: 'Front',
        component: RouteView,
        meta: { title: '商城前台', keepAlive: true, icon: 'shop', target: '_blank' }
      },
      // dashboard
      {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/workplace',
        component: RouteView,
        meta: { title: '数据统计', keepAlive: true, icon: bxAnaalyse, permission: ['dashboard'] },
        children: [
          {
            path: '/dashboard/analysis/:pageNo([1-9]\\d*)?',
            name: 'Analysis',
            component: () => import('@/views/dashboard/Analysis'),
            meta: { title: '分析页', keepAlive: false, permission: ['dashboard'] }
          },
          {
            path: '/dashboard/workplace',
            name: 'Workplace',
            component: () => import('@/views/dashboard/Workplace'),
            meta: { title: '工作台', keepAlive: true, permission: ['dashboard'] }
          }
        ]
      },

      // forms
      {
        path: '/form',
        redirect: '/form/base-form',
        component: RouteView,
        meta: { title: '商城内容管理', icon: 'form', permission: ['form'] },
        children: [
          {
            path: '/form/base-form',
            name: 'BaseForm',
            component: () => import('@/views/form/basicForm/Index'),
            meta: { title: '首页板块管理', keepAlive: true, permission: ['form'] }
          },
          {
            path: '/home/table-list/:pageNo([1-9]\\d*)?',
            name: 'IndexImages',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/home/IndexImages'),
            meta: { title: '首页轮播图管理', keepAlive: true, permission: ['table'] }
          },
          {
            path: '/home/index-block',
            name: 'IndexBlock',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/home/IndexBlock'),
            meta: { title: '首页板块内容管理', keepAlive: true, permission: ['table'] }
          },
          {
            path: '/home/index-other',
            name: 'IndexOther',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/home/IndexOther'),
            meta: { title: '其他板块内容管理', keepAlive: true, permission: ['table'] }
          }
        ]
      },

      // {
      //  path: '/form/step-form',
      //  name: 'StepForm',
      //  component: () => import('@/views/form/stepForm/StepForm'),
      //  meta: { title: '分步表单', keepAlive: true, permission: ['form'] }
      // }

      // 商品管理
      {
        path: '/product',
        name: 'product',
        component: RouteView,
        redirect: '/product/index',
        meta: { title: '商品管理', icon: 'profile', permission: ['profile'] },
        children: [
          {
            path: '/product/type',
            name: 'ProductType',
            component: () => import('@/views/product/Type'),
            meta: { title: '分类管理', keepAlive: true, permission: ['form'] }
          },
          {
            path: '/product/index',
            name: 'ProductIndex',
            component: () => import('@/views/product/Index'),
            meta: { title: '商品列表', keepAlive: true, permission: ['form'] }
          }
          // {
          //  path: '/product/basic',
          //  name: 'productBasic',
          //  component: () => import('@/views/profile/basic'),
          //  meta: { title: '基础详情页', permission: ['profile'] }
          // },
          // {
          //  path: '/profile/advanced',
          //  name: 'ProfileAdvanced',
          //  component: () => import('@/views/profile/advanced/Advanced'),
          //  meta: { title: '高级详情页', permission: ['profile'] }
          // }
        ]
      },

      // 订单管理
      {
        path: '/order',
        name: 'order',
        component: RouteView,
        redirect: '/order/index',
        meta: { title: '订单管理', icon: 'profile', permission: ['profile'] },
        children: [
          {
            path: '/order/index',
            name: 'OrderIndex',
            component: () => import('@/views/order/Index'),
            meta: { title: '订单列表', keepAlive: true, permission: ['form'] }
          }
        ]
      },

      // 评论管理
      {
        path: '/comment',
        name: 'comment',
        component: RouteView,
        redirect: '/comment/index',
        meta: { title: '评论管理', icon: 'profile', permission: ['profile'] },
        children: [
          {
            path: '/comment/index',
            name: 'CommentIndex',
            component: () => import('@/views/comment/Index'),
            meta: { title: '订单列表', keepAlive: true, permission: ['form'] }
          }
        ]
      },

      // 会员管理
      {
        path: '/member',
        name: 'member',
        component: RouteView,
        redirect: '/member/index',
        meta: { title: '会员管理', icon: 'profile', permission: ['profile'] },
        children: [
          {
            path: '/member/index',
            name: 'MemberIndex',
            component: () => import('@/views/member/Index'),
            meta: { title: '订单列表', keepAlive: true, permission: ['form'] }
          }
        ]
      },

      // 管理员管理
      {
        path: '/admin',
        name: 'admin',
        component: RouteView,
        redirect: '/admin/index',
        meta: { title: '管理员管理', icon: 'profile', permission: ['profile'] },
        children: [
          {
            path: '/admin/index',
            name: 'AdminIndex',
            component: () => import('@/views/admin/Index'),
            meta: { title: '管理员列表', keepAlive: true, permission: ['form'] }
          },
          {
            path: '/admin/role',
            name: 'AdminRole',
            component: () => import('@/views/admin/Role'),
            meta: { title: '角色列表', keepAlive: true, permission: ['form'] }
          },
          {
            path: '/admin/permission',
            name: 'AdminPermission',
            component: () => import('@/views/admin/Permission'),
            meta: { title: '权限列表', keepAlive: true, permission: ['form'] }
          }
        ]
      },

      // list
      // {
      //  path: '/list',
      //  name: 'list',
      //  component: RouteView,
      //  redirect: '/list/table-list',
      //  meta: { title: '列表页', icon: 'table', permission: ['table'] },
      //  children: [
      //    {
      //      path: '/list/basic-list',
      //      name: 'BasicList',
      //      component: () => import('@/views/list/BasicList'),
      //      meta: { title: '标准列表', keepAlive: true, permission: ['table'] }
      //    },
      //    {
      //      path: '/list/card',
      //      name: 'CardList',
      //      component: () => import('@/views/list/CardList'),
      //      meta: { title: '卡片列表', keepAlive: true, permission: ['table'] }
      //    },
      //    {
      //      path: '/list/search',
      //      name: 'SearchList',
      //      component: () => import('@/views/list/search/SearchLayout'),
      //      redirect: '/list/search/article',
      //      meta: { title: '搜索列表', keepAlive: true, permission: ['table'] },
      //      children: [
      //        {
      //          path: '/list/search/article',
      //          name: 'SearchArticles',
      //          component: () => import('../views/list/search/Article'),
      //          meta: { title: '搜索列表（文章）', permission: ['table'] }
      //        },
      //        {
      //          path: '/list/search/project',
      //          name: 'SearchProjects',
      //          component: () => import('../views/list/search/Projects'),
      //          meta: { title: '搜索列表（项目）', permission: ['table'] }
      //        },
      //        {
      //          path: '/list/search/application',
      //          name: 'SearchApplications',
      //          component: () => import('../views/list/search/Applications'),
      //          meta: { title: '搜索列表（应用）', permission: ['table'] }
      //        }
      //      ]
      //    }
      //  ]
      // },

      // profile
      // {
      //  path: '/profile',
      //  name: 'profile',
      //  component: RouteView,
      //  redirect: '/profile/basic',
      //  meta: { title: '详情页', icon: 'profile', permission: ['profile'] },
      //  children: [
      //    {
      //      path: '/profile/basic',
      //      name: 'ProfileBasic',
      //      component: () => import('@/views/profile/basic'),
      //      meta: { title: '基础详情页', permission: ['profile'] }
      //    },
      //    {
      //      path: '/profile/advanced',
      //      name: 'ProfileAdvanced',
      //      component: () => import('@/views/profile/advanced/Advanced'),
      //      meta: { title: '高级详情页', permission: ['profile'] }
      //    }
      //  ]
      // },

      // result
      // {
      //  path: '/result',
      //  name: 'result',
      //  component: RouteView,
      //  redirect: '/result/success',
      //  meta: { title: '结果页', icon: 'check-circle-o', permission: ['result'] },
      //  children: [
      //    {
      //      path: '/result/success',
      //      name: 'ResultSuccess',
      //      component: () => import(/* webpackChunkName: "result" */ '@/views/result/Success'),
      //      meta: { title: '成功', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
      //    },
      //    {
      //      path: '/result/fail',
      //      name: 'ResultFail',
      //      component: () => import(/* webpackChunkName: "result" */ '@/views/result/Error'),
      //      meta: { title: '失败', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
      //    }
      //  ]
      // },

      // Exception
      // {
      //  path: '/exception',
      //  name: 'exception',
      //  component: RouteView,
      //  redirect: '/exception/403',
      //  meta: { title: '异常页', icon: 'warning', permission: ['exception'] },
      //  children: [
      //    {
      //      path: '/exception/403',
      //      name: 'Exception403',
      //      component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
      //      meta: { title: '403', permission: ['exception'] }
      //    },
      //    {
      //      path: '/exception/404',
      //      name: 'Exception404',
      //      component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
      //      meta: { title: '404', permission: ['exception'] }
      //    },
      //    {
      //      path: '/exception/500',
      //      name: 'Exception500',
      //      component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/500'),
      //      meta: { title: '500', permission: ['exception'] }
      //    }
      //  ]
      // },

      // account
      {
        path: '/account',
        component: RouteView,
        redirect: '/account/center',
        name: 'account',
        meta: { title: '个人中心', icon: 'user', keepAlive: true, permission: ['user'] },
        children: [
          {
            path: '/account/center',
            name: 'center',
            component: () => import('@/views/account/center'),
            meta: { title: '个人中心', keepAlive: true, permission: ['user'] }
          }
        ]
      },

      // system
      {
        path: '/system',
        name: 'system',
        component: RouteView,
        meta: { title: '系统设置', icon: 'user', keepAlive: true, permission: ['user'] },
        redirect: '/system/settings/base',
        children: [
          {
            path: '/system/settings/base',
            name: 'BaseSettings',
            component: () => import('@/views/account/settings/BaseSetting'),
            meta: { title: '基本设置', hidden: true, permission: ['user'] }
          },
          {
            path: '/system/settings/security',
            name: 'SecuritySettings',
            component: () => import('@/views/account/settings/Security'),
            meta: { title: '安全设置', hidden: true, keepAlive: true, permission: ['user'] }
          },
          {
            path: '/system/settings/custom',
            name: 'CustomSettings',
            component: () => import('@/views/account/settings/Custom'),
            meta: { title: '个性化设置', hidden: true, keepAlive: true, permission: ['user'] }
          },
          {
            path: '/system/settings/binding',
            name: 'BindingSettings',
            component: () => import('@/views/account/settings/Binding'),
            meta: { title: '快递管理', hidden: true, keepAlive: true, permission: ['user'] }
          },
          {
            path: '/system/settings/notification',
            name: 'NotificationSettings',
            component: () => import('@/views/account/settings/Notification'),
            meta: { title: '权限配置', hidden: true, keepAlive: true, permission: ['user'] }
          },
          {
            path: '/system/settings/log',
            name: 'Log',
            component: () => import('@/views/account/settings/Log'),
            meta: { title: '系统日志', hidden: true, keepAlive: true, permission: ['user'] }
          }
        ]
      }

      // other
      /*
      {
        path: '/other',
        name: 'otherPage',
        component: PageView,
        meta: { title: '其他组件', icon: 'slack', permission: [ 'dashboard' ] },
        redirect: '/other/icon-selector',
        children: [
          {
            path: '/other/icon-selector',
            name: 'TestIconSelect',
            component: () => import('@/views/other/IconSelectorView'),
            meta: { title: 'IconSelector', icon: 'tool', keepAlive: true, permission: [ 'dashboard' ] }
          },
          {
            path: '/other/list',
            component: RouteView,
            meta: { title: '业务布局', icon: 'layout', permission: [ 'support' ] },
            redirect: '/other/list/tree-list',
            children: [
              {
                path: '/other/list/tree-list',
                name: 'TreeList',
                component: () => import('@/views/other/TreeList'),
                meta: { title: '树目录表格', keepAlive: true }
              },
              {
                path: '/other/list/edit-table',
                name: 'EditList',
                component: () => import('@/views/other/TableInnerEditList'),
                meta: { title: '内联编辑表格', keepAlive: true }
              },
              {
                path: '/other/list/user-list',
                name: 'UserList',
                component: () => import('@/views/other/UserList'),
                meta: { title: '用户列表', keepAlive: true }
              },
              {
                path: '/other/list/role-list',
                name: 'RoleList',
                component: () => import('@/views/other/RoleList'),
                meta: { title: '角色列表', keepAlive: true }
              },
              {
                path: '/other/list/system-role',
                name: 'SystemRole',
                component: () => import('@/views/role/RoleList'),
                meta: { title: '角色列表2', keepAlive: true }
              },
              {
                path: '/other/list/permission-list',
                name: 'PermissionList',
                component: () => import('@/views/other/PermissionList'),
                meta: { title: '权限列表', keepAlive: true }
              }
            ]
          }
        ]
      }
      */
    ]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
