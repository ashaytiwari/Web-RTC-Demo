export interface IGenericChildrenProps {
  children: React.ReactNode
}

export interface IRoute {
  path: string,
  element: React.ReactNode
}

export interface IRouteComponentProps {
  routes: Array<IRoute>
}