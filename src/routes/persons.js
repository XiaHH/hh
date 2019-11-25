// import React from 'react';
// import { connect } from 'dva';
// import personList from '../model/personList';

// const persons = ({ dispatch, persons }) => {
//   function handleDelete(id) {
//     dispatch({
//       type: 'persons/delete',
//       payload: id,
//     });
//   }
//   return (
//     <div>
//       <h2>List of persons</h2>
//       <personList onDelete={handleDelete} persons={persons} />
//     </div>
//   );
// };

// // export default Products;
// export default connect(({ persons }) => ({
//   persons,
// }))(persons);