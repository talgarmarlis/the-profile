import {DATABASE_ID, NOTION_API_KEY} from "../utils/config";
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: NOTION_API_KEY });

export async function getPostList(){
    console.log("getposts")
    const response = await notion.databases.query({database_id: DATABASE_ID});
    return response
}

export async function getPostContent(pageId){
    const response = await notion.blocks.children.list({
        block_id: pageId,
        page_size: 50,
    });
    console.log(response);
    return response
}
