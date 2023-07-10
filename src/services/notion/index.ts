import apiClient from './../axios'

// eslint-disable-next-line import/prefer-default-export
export const notionService = {
    getPostList
};

function queryDatabase(database_id: any){
    return apiClient.post(`/v1/databases/${database_id}/query`);
}

function getPostList() {
    return queryDatabase('bd581e1674cf4fbc8bce782d67e7492e')
}