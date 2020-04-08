import { Query } from './index';

// const getAllInput = async () => 
// Query('SELECT * from secondary');

// const getOneInput = async (id: number) => {
//     return Query('SELECT * FROM secondary WHERE id = ?', [id]);
// };

// const postOneInput = async (name: string, description: string, displaytype: any) => {
//     let values = [name, description, displaytype];
//     return Query('INSERT INTO sessions(name,description,displaytype) VALUES(?,?,?)', values)
// }

// const updateOneInput = async (id: number, name: string, description: string, displaytype: any) => {
//     let values = [name, description, displaytype, id];
//     return Query('UPDATE sessions SET title= ?,content=? ,authorid=? WHERE id = ?', values);
// }

// const deleteInput = async (id: number) =>
// Query('DELETE FROM sessions WHERE id =?', [id])

// export default {
//     getAllInput,
//     getOneInput,
//     deleteInput
// }