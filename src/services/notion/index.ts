import apiClient from "../axios";

function queryDatabase(database_id: any, filterData?: any) {
  // return notionFetch("POST", `databases/${database_id}/query`, {});
  return apiClient.post(`databases/${database_id}/query`, filterData);
}

function getArticleList() {
  return queryDatabase("bd581e1674cf4fbc8bce782d67e7492e");
}

function getLatestCompendiumPages() {
  return queryDatabase("1ba1d77a4f1c80738717c96853c6e427", {
    filter: {
      property: "Completed Date",
      date: {
        is_not_empty: true,
      },
    },
    sorts: [
      {
        property: "Completed Date",
        direction: "descending",
      },
    ],
  });
}

function getPage(pageId: string) {
  return apiClient.get(`pages/${pageId}`);
}

function getBlocks(blockId: string) {
  return apiClient.get(`blocks/${blockId}/children`);
}

export const notionService = {
  getArticleList,
  getLatestCompendiumPages,
  getPage,
  getBlocks,
};
