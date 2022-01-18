import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface RouteType {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const lazyLayout = lazy(
  () =>
    import(
      /*webpackChunkName: "LazyLayout"*/ "../lazyload/components/layout/LazyLayout"
    )
);
const NoLazy = lazy(
  () =>
    import(
      /*webpackChunkName: "NoLazy"*/ "../lazyload/components/pages/NoLazyLoaded"
    )
);

export const routes: RouteType[] = [
  {
    to: "/lazyload/",
    path: "/lazyload/*",
    Component: lazyLayout,
    name: "LazyLayout",
  },
  { to: "/no-lazy", path: "no-lazy", Component: NoLazy, name: "No Lazy" },
];
