export enum BlockType {
    Bookmark = "bookmark",
    Breadcrumb = "breadcrumb",
    BulletedListItem = "bulleted_list_item",
    Callout = "callout",
    ChildDatabase = "child_database",
    ChildPage = "child_page",
    Code = "code",
    Column = "column",
    ColumnList = "column_list",
    Divider = "divider",
    Embed = "embed",
    Equation = "equation",
    File = "file",
    Heading1 = "heading_1",
    Heading2 = "heading_2",
    Heading3 = "heading_3",
    Image = "image",
    LinkPreview = "link_preview",
    LinkToPage = "link_to_page", // TODO Check if this block type exits
    Mention = "mention", // TODO Check if this block type exits
    NumberedListItem = "numbered_list_item",
    Paragraph = "paragraph",
    PDF = "pdf",
    Quote = "quote",
    SyncedBlock = "synced_block",
    Table = "table",
    TableOfContents = "table_of_contents",
    TableRow = "table_row",
    Template = "template",
    ToDo = "to_do",
    Toggle = "toggle",
    Unsupported = "unsupported",
    Video = "video",
}

export interface BLOCK {
    object: string;
    id: string;
    parent: WorkspaceParent | PageParent | DatabaseParent | BlockParent;
    type: BlockType;
    created_time: string;
    created_by: PartialUser;
    last_edited_time: string;
    last_edited_by: PartialUser;
    archived: boolean;
    has_children: boolean;
}

export interface Block {
    id: string;
    type: BlockType;
    [key: string]: any;
}

export interface BookmarkBlock extends Block {
    type: BlockType.Bookmark;
    bookmark: {
        caption: RichText[];
        url: string;
    };
}

export interface BreadcrumbBlock extends Block {
    type: BlockType.Breadcrumb;
    breadcrumb: any
}

export interface BulletedListItemBlock extends Block {
    type: BlockType.BulletedListItem;
    bulleted_list_item: {
        rich_text: RichText[];
        color: Color;
    }
    children: BlockTypeObject[]
}

export interface CalloutBlock extends Block {
    type: BlockType.Callout;
    callout: {
        rich_text: RichText[];
        icon: Emoji | File | ExternalFile
        color: Color;
    }
}

export interface ChildDatabaseBlock extends Block {
    type: BlockType.ChildDatabase;
    child_database: {
        title: string;
    };
}

export interface ChildPageBlock extends Block {
    type: BlockType.ChildPage;
    child_page: {
        title: string;
    };
}

export interface CodeBlock extends Block {
    type: BlockType.Code;
    code: {
        caption: RichText[];
        rich_text: RichText[];
        language: string;
    };
}

export interface ColumnBlock extends Block {
    type: BlockType.Column;
    column: any;
}

export interface ColumnListBlock extends Block {
    type: BlockType.ColumnList;
    column_list: any
}

export interface DividerBlock extends Block {
    type: BlockType.Divider;
    divider: any
}

export interface EmbedBlock extends Block {
    type: BlockType.Embed;
    embed: {
        url: string;
    }
}

export interface EquationBlock extends Block {
    type: BlockType.Equation;
    equation: {
        expression: string; // The KaTeX or LaTeX string representing the inline equation.
    };
}

export interface FileBlock extends Block {
    type: BlockType.File;
    file: File | ExternalFile;
}

export interface HeadingBlock {
    rich_text: RichText[];
    color: Color;
    is_toggleable: boolean;

}
export interface Heading1Block extends Block {
    type: BlockType.Heading1;
    heading_1: HeadingBlock;
}
export interface Heading2Block extends Block {
    type: BlockType.Heading2;
    heading_2: HeadingBlock;
}
export interface Heading3Block extends Block {
    type: BlockType.Heading3;
    heading_3: HeadingBlock;
}

export interface ImageBlock extends Block {
    type: BlockType.Image;
    image: File | ExternalFile;
}

export interface LinkPreviewBlock extends Block {
    type: BlockType.LinkPreview;
    link_preview: {
        url: string;
    };
}

export interface MentionBlock extends Block {
    type: BlockType.LinkToPage;
    mention: PageMention | DatabaseMention | DateMention | LinkPreviewMention | UserMention;
}

export interface NumberedListItemBlock extends Block {
    type: BlockType.NumberedListItem;
    numbered_list_item: {
        rich_text: RichText[];
        color: Color;
        children: Block[];
    }
}

export interface ParagraphBlock extends Block {
    type: BlockType.Paragraph;
    paragraph: {
        rich_text: RichText[];
        color: Color;
        children: Block[];
    }
}

export interface PDFBlock extends Block {
    type: BlockType.PDF;
    pdf: File | ExternalFile;
}

export interface QuoteBlock extends Block {
    type: BlockType.Quote;
    quote: {
        rich_text: RichText[];
        color: Color;
        children: Block[];
    }
}

export interface SyncedBlock extends Block {
    type: BlockType.SyncedBlock;
    synced_block: {
        synced_from: null | { type: "block_id", block_id: string};
        children: Block[]
    }
}

export interface TableBlock extends Block {
    type: BlockType.Table;
    table: {
        table_width: number;
        has_column_header: boolean;
        has_column_headerhas_row_header: boolean;
    }
}

// @ts-ignore
export interface TableRowBlock extends Block {
    type: BlockType.TableRow;
    table_row: {
        cells: RichText[][];
    }
}

export interface TableOfContentsBlock extends Block {
    type: BlockType.TableOfContents;
    table_of_contents: {
        color: Color;
    }
}

export interface TemplateBlock extends Block {
    type: BlockType.Template;
    template: {
        rich_text: RichText[];
        children: Block;
    }
}

export interface ToDoBlock extends Block {
    type: BlockType.ToDo;
    to_do: {
        rich_text: RichText[];
        checked: boolean;
        color: Color;
        children: Block;
    }
}

export interface ToggleBlock extends Block {
    type: BlockType.Toggle;
    toggle: {
        rich_text: RichText[];
        color: Color;
        children: Block;
    }
}

export interface UnsupportedBlock extends Block {
    type: BlockType.Unsupported;
}

export interface VideoBlock extends Block {
    type: BlockType.Video;
    video: File | ExternalFile;
}

export type BlockTypeObject =
    | BLOCK
    | BookmarkBlock
    | BreadcrumbBlock
    | BulletedListItemBlock
    | CalloutBlock
    | ChildDatabaseBlock
    | ChildPageBlock
    | CodeBlock
    | ColumnBlock
    | ColumnListBlock
    | DividerBlock
    | EmbedBlock
    | EquationBlock
    | FileBlock
    | Heading1Block
    | Heading2Block
    | Heading3Block
    | ImageBlock
    | LinkPreviewBlock
    | MentionBlock
    | NumberedListItemBlock
    | ParagraphBlock
    | PDFBlock
    | QuoteBlock
    | SyncedBlock
    | TableBlock
    | TableOfContentsBlock
    | TableRowBlock
    | TemplateBlock
    | ToDoBlock
    | ToggleBlock
    | UnsupportedBlock
    | VideoBlock;
