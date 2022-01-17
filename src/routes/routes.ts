import { lazy, LazyExoticComponent } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyload/components";


type JSXComponent = () => JSX.Element;

interface RouteType {
  to: string;
  path: string;
  Component:  LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const lazy1 = lazy(() => import(/*webpackChunkName: "LazyPage1"*/ "../lazyload/components/LazyPage1"));
const lazy2 = lazy(() => import(/*webpackChunkName: "LazyPage2"*/ "../lazyload/components/LazyPage2"));
const lazy3 = lazy(() => import(/*webpackChunkName: "LazyPage3"*/ "../lazyload/components/LazyPage3"));

export const routes: RouteType[] = [
  { to: "/lazy1", path: "lazy1", Component: lazy1, name: "Lazy-1" },
  { to: "/lazy2", path: "lazy2", Component: lazy2, name: "Lazy-2" },
  { to: "/lazy3", path: "lazy3", Component: lazy3, name: "Lazy-3" },
];
