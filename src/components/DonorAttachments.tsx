interface GetAttachmentProps {
    array: boolean[];
}

export const GetAttachments: React.FC<GetAttachmentProps> = ({array}) => {
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