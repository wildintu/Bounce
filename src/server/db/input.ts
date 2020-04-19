import { Query } from './index';

const getAllInput = async () =>
    Query('SELECT * from secondary');

const getOneInput = async (inputid: number) => {
    return Query('SELECT * FROM secondary WHERE id = ?', [inputid]);
};

const getInputBySession = async (origId: number) => {
    return Query('SELECT * FROM secondary WHERE origId = ?', [origId]);
}

const getDetailsOfNode = async (origiId: number, inputId: number) => {
    return Query('SELECT * FROM secondary WHERE origId = ? AND id = ?', [origiId, inputId])
}

const getChildrenNodes = async (origId: number, nodeId: number, branchId: number) => {
    let values = [origId, nodeId, branchId];
    return Query('SELECT * FROM secondary WHERE origId = ? AND nodeId = ? AND branchId = ?', values)
}

const postSessionToInput = async (origId: number, secName: string, secInput: string, level: number, branchId: number, branchCount: number) => {
    let count: string = branchCount + ','
    let values = [origId, secName, secInput, level, branchId, count];
    return Query('INSERT INTO secondary(origId, secName, secInput, level, branchId, branchCount) VALUES(?,?,?,?,?,?)', values);
}

const updateNodeId = async (nodeId: number, id: number) => {
    let values = [nodeId, id];
    return Query('UPDATE secondary SET nodeId=? WHERE id=?', values)
}

const updateBranchCount = async (origId: number, inputId: number, oldBranchCount: string, newBranchCount: number) => {
    let count = oldBranchCount+newBranchCount+',';
    let values = [count, inputId, origId];
    return Query('UPDATE secondary SET branchCount = ? WHERE id = ? AND origId = ?', values)
}

const postToInput = async (origId: number, secName: string, secInput: string, nodeId: number, level: number, branchId: number, branchCount: number) => {
    let count: string = branchCount + ','
    let values = [origId, secName, secInput, nodeId, level, branchId, count];
    return Query('INSERT INTO secondary(origId, secName, secInput, nodeId, level, branchId, branchCount) VALUES(?,?,?,?,?,?,?)', values)
}

const updateOneInput = async (origId: number, secName: string, secInput: string, inputid: number) => {
    let values = [secName, secInput, origId, inputid];
    return Query('UPDATE secondary SET secName=?, secInput=? WHERE origId = ? AND id=?', values)
}

const deleteInput = async (inputid: number, origId: number) =>
    Query('DELETE FROM secondary WHERE id =? AND origId=?', [inputid, origId])

const deleteFromBranchCount = async(origId: number, inputId: number, newBranchCount: string) => {
    return Query('UPDATE secondary SET branchCount = ? WHERE id = ? AND origId = ?', [newBranchCount, inputId, origId])
}

export default {
    getAllInput,
    getDetailsOfNode,
    getOneInput,
    getInputBySession,
    getChildrenNodes,
    postSessionToInput,
    updateNodeId,
    postToInput,
    updateBranchCount,
    updateOneInput,
    deleteInput,
    deleteFromBranchCount,
}