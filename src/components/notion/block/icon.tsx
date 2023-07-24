import {Avatar} from "antd";

const NIcon: React.FC<{ icon: Emoji | File | ExternalFile }> = ({ icon }) => {
    if (icon.type === "emoji") {
        return icon.emoji;
    }

    if (icon.type === "file") {
        return <Avatar style={{margin: '0, 10'}} src={icon.file.url} />
    }

    if (icon.type === "external") {
        return <Avatar style={{margin: '0, 10'}} src={icon.external.url} />
    }

    return null;
};

export default NIcon