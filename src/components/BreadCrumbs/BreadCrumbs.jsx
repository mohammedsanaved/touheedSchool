import React from 'react';
import { BreadCrumbsStyles } from './BreadCrumbsStyles';
import { Link, useLocation } from 'react-router-dom';


const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};


const replaceSymbols = (str) => {
  return str.replace(/[_-]/g, ' ');
};
const skipText = ['School about us', 'schooldetail' ];


const BreadCrumbs = () => {


  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const indexOfEventDetails = pathnames.indexOf('EVENT DETAILS');
  const isEventDetailsIncluded = indexOfEventDetails !== -1;

  


    return (
        <BreadCrumbsStyles>
             <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          let displayName = replaceSymbols(capitalize(name));
          // Skip specific text
          skipText.forEach(text => {
            if (displayName.toLowerCase().includes(text.toLowerCase())) {
              displayName = displayName.replace(new RegExp(text, 'gi'), '');
            }
          });
          displayName = displayName.trim();
          // Check if "Event Details" is included in the breadcrumbs and stop rendering breadcrumbs after that
          if (isEventDetailsIncluded && index > indexOfEventDetails) {
            return null;
          }
          // Render breadcrumb link only if displayName is not empty and the routeTo doesn't contain adjacent slashes
          if (displayName && !/\/{2,}/.test(routeTo)) {
            return isLast ? (
              <li key={name} className="breadcrumb-item active" aria-current="page">
                <span style={{ color: 'green' }}>{displayName}</span>
              </li>
            ) : (
              <li key={name} className="breadcrumb-item">
                <Link to={routeTo}>{displayName}</Link>
              </li>
            );
          }
          return null;
        })}
      </ol>
        </BreadCrumbsStyles>
    )
}

export default BreadCrumbs