import React from 'react';
import { BreadCrumbsStyles } from './BreadCrumbsStyles';
import { Link, useLocation } from 'react-router-dom';


const BreadCrumbs = () => {


    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);


    return (
        <BreadCrumbsStyles>
        <ol className="breadcrumb">
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <li key={name} className="breadcrumb-item active" aria-current="page">
              {name}
            </li>
          ) : (
            <li key={name} className="breadcrumb-item">
              <Link to={routeTo}>{name}</Link>
            </li>
          );
        })}
      </ol>


        </BreadCrumbsStyles>
    )
}

export default BreadCrumbs