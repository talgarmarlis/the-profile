export interface PAGE {
    object: string;
    id: string;
    created_time: string;
    created_by: PartialUser;
    last_edited_time: string;
    last_edited_by: PartialUser;
    archived: boolean;
    icon: Emoji | File | ExternalFile;
    cover: File | ExternalFile;
    parent: WorkspaceParent | PageParent | DatabaseParent | BlockParent;
    url: string;
    public_url: null;
    properties: {
        Tags: MultiSelectProperty;
        Subtitle: RichTextProperty;
        Name: TitleProperty;
        Page: TitleProperty;
        title: TitleProperty;
        [key: string]: any; // Add more property types if needed
    };
}

interface MultiSelectProperty {
    id: string;
    type: "multi_select";
    multi_select: MultiSelectOption[];
}

interface MultiSelectOption {
    id: string;
    name: string;
    color: Color;
}

interface RichTextProperty {
    id: string;
    type: "rich_text";
    rich_text: RichText[];
}

interface TitleProperty {
    id: string;
    type: "title";
    title: RichText[];
}