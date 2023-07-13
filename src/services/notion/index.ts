const baseURL= 'https://np.talgarmarlis.workers.dev/v1/';
// const NOTION_API_KEY = 'secret_tmzKXTcRFUhFsFWEZPDetLNG4d5BMhHP5upjIe72fPh'
const notionFetch = async function (method: string, path: string, data?: any){
    try {
        const response = await fetch(`${baseURL}${path}`, {
            method: method,
            // headers: {
            //     'Authorization': `Bearer ${NOTION_API_KEY}`,
            //     'Notion-Version': '2022-06-28',
            // }
            // body: JSON.stringify(data)
        });
        return response.json()
    } catch (error: any) {
        // console.error(`Error: ${error.message}`);
        return Promise.reject(error)
    }
}

function queryDatabase(database_id: any){
    return notionFetch("POST", `databases/${database_id}/query`, {});
}

function getArticleList() {
    return queryDatabase('bd581e1674cf4fbc8bce782d67e7492e')
}

export const notionService = {
    getArticleList
};