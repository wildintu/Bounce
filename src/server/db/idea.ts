import { Query } from './index';

// const getAllIdeas = async () => 
// Query('SELECT * from tags');

// const getOneIdea = async (id: number) => {
//     return Query('SELECT * FROM tags WHERE id = ?', [id]);
// };

// const postOneIdea = async (name: string, description: string, displaytype: any) => {
//     let values = [name, description, displaytype];
//     return Query('INSERT INTO sessions(name,description,displaytype) VALUES(?,?,?)', values)
// }

// const updateOneIdea = async (id: number, name: string, description: string, displaytype: any) => {
//     let values = [name, description, displaytype, id];
//     return Query('UPDATE sessions SET title= ?,content=? ,authorid=? WHERE id = ?', values);
// }

// const deleteIdea = async (id: number) =>
// Query('DELETE FROM sessions WHERE id =?', [id])

// export default {
//     getAllSessions,
//     getOneSession,
//     deleteSession
// }