// import db from "../firebase";
// import { CATEGORIES } from "./categories";
// import { PRODUCTS } from "./products";

// export const createDataBase = () => {
//   //Categories
//   CATEGORIES.map((category) => {
//     db.collection("categories").doc(category.key).set(category);
//   });

//   //Products
//   PRODUCTS.map((product) => {
//     db.collection("items")
//       .add(product)
//       .then(function (docRef) {
//         console.log("Document written with ID: ", docRef.id);
//       })
//       .catch(function (error) {
//         console.error("Error adding document: ", error);
//       });
//   });
// };
