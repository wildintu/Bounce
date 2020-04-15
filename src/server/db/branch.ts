import { Query } from './index';

const getBranch = async (origid: number, nodeid: number) => {
    let values = [origid, nodeid];
    return Query(`SELECT * FROM branches WHERE origid=? AND nodeid=?`, values)
}

const postBranch = async (origid: number,nodeid: number,tername: string,terinput: string) => {
    let values = [origid, nodeid, tername, terinput];
    return Query(`INSERT INTO branches(origid, nodeid, tername, terinput) VALUES (?,?,?,?)`, values)
}



export default {
    getBranch,
    postBranch,

}