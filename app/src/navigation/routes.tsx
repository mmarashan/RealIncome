import type { ComponentType, JSX } from 'react';

import { IndexPage } from '@/pages/IndexPage/IndexPage';
import { InitDataPage } from '@/pages/InitDataPage.tsx';
import { LaunchParamsPage } from '@/pages/LaunchParamsPage.tsx';
import { Calculator } from '@/pages/calculator/Calculator';

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: '/', Component: Calculator },
  { path: '/init-data', Component: InitDataPage, title: 'Init Data' },
  { path: '/launch-params', Component: LaunchParamsPage, title: 'Launch Params' },
  { path: '/index', Component: IndexPage, title: 'Calculator' },
];
