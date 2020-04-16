import { Query } from './index';

const getBranch = async (origid: number) => {
    let values = [origid];
    return Query(`SELECT * FROM branches WHERE origid=?`, values)
}

const getBranchInput = async (branchid: number) => {
    let values = [branchid];
    return Query(`SELECT * FROM branches WHERE id=?`, values);
}

const postBranch = async (branchid: number, origid: number,nodeid: number,tername: string,terinput: string) => {
    let values = [branchid, origid, nodeid, tername, terinput];
    return Query(`INSERT INTO branches(id, origid, nodeid, tername, terinput) VALUES (?,?,?,?,?)`, values)
}

export default {
    getBranch,
    getBranchInput,
    postBranch
}