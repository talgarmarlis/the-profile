import apiClient from "../axios";

function queryDatabase(database_id: any){
    // return notionFetch("POST", `databases/${database_id}/query`, {});
    return apiClient.post(`databases/${database_id}/query`)
}

function getArticleList() {
    return queryDatabase('bd581e1674cf4fbc8bce782d67e7492e')
}

function getPage(pageId: string) {
    return apiClient.get(`pages/${pageId}`)
}

function getBlocks(blockId: string) {
    return apiClient.get(`blocks/${blockId}/children`)
}

export const notionService = {
    getArticleList,
    getPage,
    getBlocks
};