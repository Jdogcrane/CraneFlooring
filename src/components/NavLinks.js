// import React from 'react'
// import { Link } from 'react-router-dom';
// const NavLink = ({ currentPage, handlePageChange, page }) => {
//   const onClick = () => handlePageChange(page);
//   const to = "/" + (page === 'About' ? '' : page.toLowerCase());
//   const className = currentPage === page ? 'nav-link active' : 'nav-link';
//   const data = { onClick, to, className };

//   // Standard App <a href=""></a>
//   // React Router <Link to=""></Link>

//   return (
//     <li>
//       <Link {...data}>{page}</Link>
      
//     </li>
//   );
// };

// const NavLinks = ({ currentPage, handlePageChange, pages }) => {
//   return pages.map(page => {
//     const data = { page, currentPage, handlePageChange }; 
//     return <NavLink key={page} {...data} />;
//   }); 
// };


// export default NavLinks;