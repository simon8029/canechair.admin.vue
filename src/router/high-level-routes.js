import CoreRoutes from '@router/core-routes';

const HighLevelRoutes = [
    {
        path: '/',
        component: resolve => require(['@components/CcCore'], resolve),
        children: CoreRoutes
    },
    {
        path: '/login',
        component: resolve => require(['@components/CcLogin/Login'], resolve),
        meta: {
            title: 'Login'
        }
    }
];

export default HighLevelRoutes;