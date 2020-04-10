import { Query } from './index';

const getAllSession = async () => 
Query('SELECT * from main');

const getOneSession = async (sessionid: number) => {
    return Query('SELECT * FROM main WHERE id = ?', [sessionid]);
};

const postOneSession = async (origUserName: string, origUserPost: string, ideaType: string) => {
    let values = [origUserName, origUserPost, ideaType];
    return Query('INSERT INTO main(origUserName, origUserPost, ideaType) VALUES(?,?,?)', values)
}

const updateOneSession = async (origUserName: string, origUserPost: string, ideaType: string, sessionid: number) => {
    let values = [origUserName, origUserPost, ideaType, sessionid];
    return Query('UPDATE main SET origUserName=?, origUserPost=? ,ideaType=? WHERE id = ?', values);
}

const deleteSession = async (sessionid: number) =>
Query('DELETE FROM main WHERE id =?', [sessionid])

export default {
    getAllSession,
    getOneSession,
    postOneSession,
    updateOneSession,
    deleteSession
}