
export const appRouter = [
    {
      path: '/',
      redirect: {
        name: 'world'
      }
    },
    {
      path: '/world',
      name: 'world',
      meta: {
        title: '发现'
      },
      component: () => import('@/views/world/h-world'),
      children: []
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        title: 'Family'
      },
      component: () => import('@/views/home/h-home'),
      children: []
    },
    {
      path: '/myself',
      name: 'myself',
      meta: {
        title: '我的'
      },
      component: () => import('@/views/myself/h-my-self'),
      children: []
    }
]
