interface Props {
  component: () => JSX.Element;
  routeKey: string;
}

const AppRoute = ({
  component: Component,
  routeKey,
  ...props
}: Props) => {
  return <Component {...props} />;
};

export default AppRoute;
