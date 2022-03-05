import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const userNamesById: any = { "0": "root", "1": "dir_1", "2": "dir_2", "3": "dir_3" };

const DynamicUserBreadcrumb = ({ match }: any) => {
  return <span>{userNamesById[match.params.id]}</span>
};

const routes = [
  {
    path: "/:id/",
    children: [
      { index: true, breadcrumb: DynamicUserBreadcrumb },
      {
        path: ":id/",
        children: [
          { index: true, breadcrumb: DynamicUserBreadcrumb },
          { path: ":id/", breadcrumb: DynamicUserBreadcrumb },
        ],
        breadcrumb: DynamicUserBreadcrumb,
      },
    ],
    breadcrumb: DynamicUserBreadcrumb,
  }
];

export function DirectoryPath() {
  const breadcrumbs = useBreadcrumbs(routes, { disableDefaults: true });

  return (
    <>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <span key={match.pathname}>
          <NavLink style={{color: "white", textDecoration: 'none'}} to={match.pathname}>{breadcrumb}</NavLink> /
        </span>
      ))}
    </>
  );
}
