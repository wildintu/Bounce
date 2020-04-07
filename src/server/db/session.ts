import { Query } from './index';

// const getAllSessions = async () => 
// Query('SELECT * from tags');

// const getOneSession = async (id: number) => {
//     return Query('SELECT * FROM tags WHERE id = ?', [id]);
// };

const postOneSession = async (name: string, description: string, displaytype: any) => {
    let values = [name, description, displaytype];
    return Query('INSERT INTO sessions(name,description,displaytype) VALUES(?,?,?)', values)
}

const updateOneSession = async (id: number, name: string, description: string, displaytype: any) => {
    let values = [name, description, displaytype, id];
    return Query('UPDATE sessions SET title= ?,content=? ,authorid=? WHERE id = ?', values);
}

const deleteSession = async (id: number) =>
Query('DELETE FROM sessions WHERE id =?', [id])

// export default {
//     getAllSessions,
//     getOneSession
// }