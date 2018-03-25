const CoreRoutes = [
  {
    path: '/',
    component: resolve => require(['@components/CcCore/CcDashboard'], resolve),
  },
  {
    path: '/Cards',
    component: resolve => require(['@components/CcCore/CcBaseComponents/CcCards'], resolve)
  }
];

export default CoreRoutes;