// import * as mysql from 'mysql';
// import config from '../config';

// import session from './session';
// import input from './input';


// // export const Connection = mysql.createConnection(config.mysql);

// Connection.connect(err => {
//     if(err) console.log(err)
// });

// export const Query = (query: string, values?: Array<string | number>) => {
//     return new Promise<Array<any>>((resolve,reject) => {
//         Connection.query(query, values, (err, results) => {
//             if(err) return reject(err);
//             return resolve(results);
//         })
//     })
// }

// export default {
//     session,
//     input
// };