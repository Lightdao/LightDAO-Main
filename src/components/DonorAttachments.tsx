interface GetAttachmentProps {
    array: boolean[];
}

export const GetAttachmentIcons: React.FC<GetAttachmentProps> = ({array}) => {
    //NOTE: this is a temporary solution
    let count = array.filter(element => element === true).length;
    const iconArray = ["/PDF.svg", "/Word.svg", "/PowerPoint.svg", "/Excel.svg", ""];
    const extraIcon = "/+1.svg";
    let imageArray = [];

    for (let i = 0; i < array.length; i++)
    {
        if (array[i] === true)
        {
            imageArray.push(<img key={i} src={iconArray[i]} alt="attachment icon"/>);
        }

        if (imageArray.length == 3)
        {
            break;
        }
    }

    if (count > 3)
    {
        imageArray.push(<img key={-1} src={extraIcon} width={14} height={18} alt="attachment icon"/>);
    }

    return imageArray;
}

interface ReturnAttachmentProps {
    array: boolean[];
    projectName: string;
}

export const ReturnAttachmentNames: React.FC<ReturnAttachmentProps> = ({array, projectName}) => {
    //NOTE: this is a temporary solution
    const attachmentTypes = [".pdf", ".docx", ".ppt", ".xlsx", ".other"];
    const attachmentColors = ["#F71111", "#1470CC", "#FF5722", "#005934", "#CFDBD5"];
    let attachments = [];

    for (let i = 0; i < array.length; i++)
    {
        if (array[i] === false)
            continue;
        
        attachments.push(<div key={i + 1} className="round-corner-box" style={{backgroundColor: attachmentColors[i], color: "#FFFFFF"}}>{projectName + attachmentTypes[i]}</div>);
    }

    return attachments;
}