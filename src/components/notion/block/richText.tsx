import {Typography } from "antd";

const RichText: React.FC<{ rt: RichText }> = ({ rt }) => {
    const {bold, color, italic, strikethrough, underline, code } = rt.annotations
    const cArr = color.split("_")
    return <Typography.Text
                strong={bold}
                italic={italic}
                delete={strikethrough}
                underline={underline}
                code={code}
                style={{color: cArr.length === 1 ? cArr[0] : '', backgroundColor: cArr.length === 2 ? cArr[0] : '', fontSize:'100%'}}
            >
                {rt.href &&
                    <Typography.Link href={rt.href.startsWith('/') ? `/#/articles${rt.href}` : rt.href}>
                        {rt.plain_text}
                    </Typography.Link>
                }
            {!rt.href && rt.plain_text}
            </Typography.Text>;
};

export default RichText