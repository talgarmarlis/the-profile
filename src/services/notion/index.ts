const baseURL= 'https://notion-api-proxy.talgarmarlis.workers.dev/v1/';

const notionFetch = async function (method: string, path: string, data?: any){
    try {
        const response = await fetch(`${baseURL}${path}`, {
            method: "GET",
            // body: JSON.stringify(data)
        });
        return response.json()
    } catch (error: any) {
        // console.error(`Error: ${error.message}`);
        return Promise.reject(error)
    }
}

function queryDatabase(database_id: any){
    return notionFetch("GET", `databases/${database_id}/query`, {});
}

function getArticleList() {
    return queryDatabase('bd581e1674cf4fbc8bce782d67e7492e')
}

export const notionService = {
    getArticleList
};