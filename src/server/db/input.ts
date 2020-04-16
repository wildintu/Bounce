import { Query } from './index';

const getAllInput = async () => 
Query('SELECT * from secondary');

const getOneInput = async (inputid: number) => {
    return Query('SELECT * FROM secondary WHERE id = ?', [inputid]);
};

const getInputBySession = async (origId: number) => {
    return Query('SELECT * FROM secondary WHERE origId = ?', [origId]);
}

const filterInput = async (origId: number, inputid: number) => {
    return Query('SELECT id, level FROM secondary WHERE origId=? AND id=?',[origId, inputid]);
}

const filterLevel = async (origId: number, nodeId: number, level: number) => {
    let values = [origId, nodeId, level];
    return Query('SELECT * FROM secondary WHERE origId=? AND nodeId=? AND level=?', values);
}

const postOneInput = async (origId: number, secName: string, secInput: string, level: number) => {
    let values = [origId, secName, secInput, level];
    return Query('INSERT INTO secondary(origId, secName, secInput, level) VALUES(?,?,?,?)', values);
}

const updateNodeId = async (nodeId: number, id: number) => {
    let values = [nodeId, id];
    return Query('UPDATE secondary SET nodeId=? WHERE id=?', values)
}

const putToOrigId = async (origId: number, secName: string, secInput: string, nodeId: number, level: number) => {
    let values = [origId, secName, secInput, nodeId, level];
    return Query('INSERT INTO secondary(origId, secName, secInput, nodeId, level) VALUES(?,?,?,?,?)', values)
}

// const putToOrigId = async (origId: number, secName: string, secInput: string) => {
//     let values = [secName, secInput, origId];
//     return Query('UPDATE secondary SET secName=?, secInput=? WHERE origId = ?', values)
// }

const updateOneInput = async (origId: number, secName: string, secInput: string, inputid: number) => {
    let values = [secName, secInput, origId, inputid];
    return Query('UPDATE secondary SET secName=?, secInput=? WHERE origId = ? AND id=?', values)
}

const deleteInput = async (inputid: number, origId: number) =>
Query('DELETE FROM secondary WHERE id =? AND origId=?', [inputid, origId])

const deleteOtherInput = async (nodeId: number, origId: number) =>
    Query('DELETE FROM secondary WHERE nodeId = ? AND origId = ?', [nodeId, origId]);

export default {
    getAllInput,
    getOneInput,
    getInputBySession,
    filterInput,
    filterLevel,
    postOneInput,
    updateNodeId,
    putToOrigId,
    updateOneInput,
    deleteInput,
    deleteOtherInput
}