
interface DatabaseParent {
    type: "database_id";
    database_id: string;
}


interface PageParent {
    type: "page_id";
    page_id: string;
}


interface WorkspaceParent {
    type: "workspace";
    workspace: boolean;
}


interface BlockParent {
    type: "block_id";
    block_id: string;
}


interface PartialUser {
    object: string;
    id: string;
}


interface ExternalFile {
    type: 'external';
    external: {
        url: string;
    };
    caption?: RichText[];
}
interface File {
    type: "file";
    file: {
        url: string;
        expiry_time: string;
    }
    caption?: RichText[];
}
interface Emoji {
    type: "emoji";
    emoji: string;
}

enum Color {
    Blue = "blue",
    BlueBackground = "blue_background",
    Brown = "brown",
    BrownBackground = "brown_background",
    Default = "default",
    Gray = "gray",
    GrayBackground = "gray_background",
    Green = "green",
    GreenBackground = "green_background",
    Orange = "orange",
    OrangeBackground = "orange_background",
    Yellow = "yellow",
    Pink = "pink",
    PinkBackground = "pink_background",
    Purple = "purple",
    PurpleBackground = "purple_background",
    Red = "red",
    RedBackground = "red_background",
    YellowBackground = "yellow_background",
}