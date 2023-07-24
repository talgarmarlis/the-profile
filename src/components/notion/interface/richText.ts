// TODO mention and expression RichText types to be added
interface RichText {
    type: string;
    annotations: {
        bold: boolean;
        italic: boolean;
        strikethrough: boolean;
        underline: boolean;
        code: boolean;
        color: Color;
    };
    plain_text: string;
    href?: string;
}

interface Text extends RichText {
    type: "text";
    text: {
        content: string;
        link: {
            url: string
        } | null
    };
}

interface Equation extends RichText {
    type: "equation";
    equation: {
        expression: string; // The KaTeX or LaTeX string representing the inline equation.
    };
}

interface Mention extends RichText {
    type: "mention";
    mention: PageMention | DatabaseMention | DateMention | LinkPreviewMention | UserMention;
}

interface PageMention {
    type: "page";
    page: {
        id: string;
    }
}

interface DatabaseMention {
    type: "database";
    database: {
        id: string;
    }
}

interface DateMention {
    type: "date";
    date: {
        start: string;
        end: string;
    }
}

interface LinkPreviewMention {
    type: "link_preview";
    link_preview: {
        url: string;
    }
}

interface UserMention {
    type: "user";
    user: {
        object: "user";
        id: string;
    }
}