import { Query } from './index';

const getAllInput = async () => 
Query('SELECT * from secondary');

const getOneInput = async (inputid: number) => {
    return Query('SELECT * FROM secondary WHERE id = ?', [inputid]);
};

const getInputBySession = async (origId: number) => {
    return Query('SELECT * FROM secondary WHERE origId = ?', [origId]);
}

const postOneInput = async (origId: number) => {
    let values = [origId];
    return Query('INSERT INTO secondary(origId) VALUES(?)', values);
}

const putToOrigId = async (origId: number, secName: string, secInput: string) => {
    let values = [origId, secName, secInput];
    return Query('INSERT INTO secondary(origId, secName, secInput) VALUES(?,?,?)', values)
}

// const putToOrigId = async (origId: number, secName: string, secInput: string) => {
//     let values = [secName, secInput, origId];
//     return Query('UPDATE secondary SET secName=?, secInput=? WHERE origId = ?', values)
// }

const updateOneInput = async (origId: number, secName: string, secInput: string, inputid: number) => {
    let values = [secName, secInput, origId, inputid];
    return Query('UPDATE secondary SET secName=?, secInput=? WHERE origId = ? AND id=?', values)
}

const deleteInput = async (inputid: number) =>
Query('DELETE FROM secondary WHERE id =?', [inputid])

export default {
    getAllInput,
    getOneInput,
    getInputBySession,
    postOneInput,
    putToOrigId,
    updateOneInput,
    deleteInput
}