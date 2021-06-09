import { lazy } from 'react';

export const routePath = {
    demo: {
        index: '/demo',
    },
    error: {
        index: '/error',
    },
    dashboard: {
        index: '/dashboard',
    },
    vendor: {
        index: '/vendor',
    },
    archive: {
        index: '/archive',
    },
    reports: {
        index: '/reports',
    },
    exports: {
        index: '/exports',
    },
    admin: {
        index: '/admin',
    },
};

const routes = [
    {
        id: 0,
        title: 'Error',
        path: routePath.error.index,
        component: lazy(() => import('../components/error-boundary/error')),
        exact: true,
    },
    {
        id: 1,
        title: 'Dashboard',
        path: routePath.dashboard.index,
        component: lazy(() => import('../pages/dashboard/dashboard')),
        exact: true,
    },
    {
        id: 2,
        title: 'Vendor',
        path: routePath.vendor.index,
        component: lazy(() => import('../pages/vendor/vendor')),
        exact: true,
    },
    {
        id: 3,
        title: 'Archive',
        path: routePath.archive.index,
        component: lazy(() => import('../pages/demo/demo')),
        exact: true,
    },
    {
        id: 4,
        title: 'Reports',
        path: routePath.reports.index,
        component: lazy(() => import('../pages/demo/demo')),
        exact: true,
    },
    {
        id: 5,
        title: 'Exports',
        path: routePath.exports.index,
        component: lazy(() => import('../pages/demo/demo')),
        exact: true,
    },
    {
        id: 6,
        title: 'Admin',
        path: routePath.admin.index,
        component: lazy(() => import('../pages/demo/demo')),
        exact: true,
    },
];

export default routes;
