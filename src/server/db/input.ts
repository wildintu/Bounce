import { Query } from './index';

const getAllInput = async () => 
Query('SELECT * from secondary');

const getOneInput = async (inputid: number) => {
    return Query('SELECT * FROM secondary WHERE id = ?', [inputid]);
};

const postOneInput = async (origId: number) => {
    let values = [origId];
    return Query('INSERT INTO secondary(origId) VALUES(?)', values);
    // console.log([result])
    // let insertId: any = Object.entries([result])[2][1];
    // console.log(insertId);
    // return Query('INSERT INTO secondary(origId) VALUES(?,?,?)', values)
}

const putToOrigId = async (origId: number, secName: string, secInput: string) => {
    let values = [secName, secInput, origId];
    return Query('UPDATE secondary SET secName=?, secInput=? WHERE origId = ?', values)
}

// const updateOneInput = async (id: number, name: string, description: string, displaytype: any) => {
//     let values = [name, description, displaytype, id];
//     return Query('UPDATE sessions SET title= ?,content=? ,authorid=? WHERE id = ?', values);
// }

// const deleteInput = async (id: number) =>
// Query('DELETE FROM sessions WHERE id =?', [id])

export default {
    getAllInput,
    getOneInput,
    postOneInput,
    putToOrigId,
    // updateOneInput,
    // deleteInput
}