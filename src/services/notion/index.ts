const baseURL= 'https://notion-api-proxy.talgarmarlis.workers.dev/';

const notionFetch = async function (method: string, path: string, data?: any){
    try {
        const response = await fetch(baseURL, {
            method: method, // *GET, POST, PUT, DELETE, etc.
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        return response.json()
    } catch (error: any) {
        console.error(`Error: ${error.message}`);
        return Promise.reject(error)
    }
}

function queryDatabase(database_id: any){
    return notionFetch("POST", `/v1/databases/${database_id}/query`);
}

function getArticleList() {
    return queryDatabase('bd581e1674cf4fbc8bce782d67e7492e')
}

export const notionService = {
    getArticleList
};