const routes = [
  {
    path: '/',
    name: 'welcome',
    component: () => import('pages/WelcomePage.vue'),
  },
  {
    path: '/dex',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'dex-list',
        component: () => import('pages/DigimonList.vue'),
      },
      {
        path: ':name',
        name: 'dex-detail',
        component: () => import('pages/DigimonDetail.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes