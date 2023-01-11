// import React, { useState, useEffect } from "react";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { Rating } from "primereact/rating";
// import { ProductService } from "./services/ProductService";

// const DataTableResponsiveDemo = () => {
//   const [products, setProducts] = useState([]);
//   const productService = new ProductService();

//   useEffect(() => {
//     productService.getProductsSmall().then((data) => setProducts(data));
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   const statusTemplate = (rowData) => {
//     return (
//       <span
//         className={`product-badge status-${
//           rowData.inventoryStatus ? rowData.inventoryStatus.toLowerCase() : ""
//         }`}
//       >
//         {rowData.inventoryStatus}
//       </span>
//     );
//   };

//   const ratingTemplate = (rowData) => {
//     return <Rating value={rowData.rating} readOnly cancel={false} />;
//   };

//   return (
//     <div>
//       <div className="card">
//         <DataTable value={products} header="Scroll" responsiveLayout="scroll">
//           <Column field="code" header="Code" />
//           <Column field="name" header="Name" />
//           <Column field="category" header="Category" />
//           <Column field="quantity" header="Quantity" />
//           <Column
//             field="inventoryStatus"
//             header="Status"
//             body={statusTemplate}
//           />
//           <Column field="rating" header="Rating" body={ratingTemplate} />
//         </DataTable>
//       </div>
//     </div>
//   );
// };

// export default DataTableResponsiveDemo;
