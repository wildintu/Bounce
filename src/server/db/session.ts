import { Query } from './index';

const getAllSession = async () => 
Query('SELECT * from main');

const getOneSession = async (id: number) => {
    return Query('SELECT * FROM main WHERE id = ?', [id]);
};

const postOneSession = async (origUserName: string, origUserPost: string, ideaType: string) => {
    let values = [origUserName, origUserPost, ideaType];
    return Query('INSERT INTO main(origUserName, origUserPost, ideaType) VALUES(?,?,?,?)', values)
}

// const updateOneSession = async (id: number, origUserName: string, origUserPost: string, ideaType: string) => {
//     let values = [id, origUserName, origUserPost, ideaType];
//     return Query('UPDATE main SET origUserName=?, origUserPost=? ,ideaType=? WHERE id = ?', values);
// }

// const deleteSession = async (id: number) =>
// Query('DELETE FROM session WHERE id =?', [id])

export default {
    getAllSession,
    getOneSession,
    postOneSession,
    // updateOneSession,
    // deleteSession
}