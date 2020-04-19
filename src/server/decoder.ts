interface INodeDeets {
    id: number,
    origId: number,
    nodeId: number,
    level: number,
    branchId: number,
    branchCount: string,
    secName: string,
    secInput: string,
    anonymous: any,
    created_at: Date
}


export const decoder = (nodeDetails: INodeDeets) => {
    let branch: string = nodeDetails.branchCount;
    let count: number[] = [];
    let unString = "";
    branch.split("").forEach((element: string) => {
        let num: number = parseInt(element, 10);
        if (Number.isNaN(num) !== true) {
            unString += element
        } else {
            if (Number.isNaN(parseInt(unString, 10)) !== true) {
                count.push(parseInt(unString, 10));
            }
            unString = "";
        }
    })
    count.shift()
    let targets = count.map((element) => {
        return ({
            targetNodeId: nodeDetails.id,
            targetBranchId: element
        })
    })

    return targets
}