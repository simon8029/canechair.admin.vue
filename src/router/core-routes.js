const CoreRoutes = [
  {
    path: '/',
    component: resolve => require(['@components/CcCore/CcDashboard'], resolve),
    meta: {
      title: "DashBoard"
    }
  }
];

export default CoreRoutes;