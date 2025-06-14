import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type CollectionFilterType = {
  className?: string;
  bgHover?: string;
  tag?: string;

  /** Style props */
  elementTagsF5F5FAOutlinWidth?: CSSProperties["width"];
  elementTagsF5F5FAOutlinHeight?: CSSProperties["height"];
  elementTagsF5F5FAOutlinPosition?: CSSProperties["position"];
  tagLeft?: CSSProperties["left"];
  tagFontSize?: CSSProperties["fontSize"];
  tagLineHeight?: CSSProperties["lineHeight"];
};

const CollectionFilter: FunctionComponent<CollectionFilterType> = ({
  className = "",
  bgHover,
  tag,
  elementTagsF5F5FAOutlinWidth,
  elementTagsF5F5FAOutlinHeight,
  elementTagsF5F5FAOutlinPosition,
  tagLeft,
  tagFontSize,
  tagLineHeight,
}) => {
  const elementTagsF5F5FAOutlinStyle: CSSProperties = useMemo(() => {
    return {
      width: elementTagsF5F5FAOutlinWidth,
      height: elementTagsF5F5FAOutlinHeight,
      position: elementTagsF5F5FAOutlinPosition,
    };
  }, [
    elementTagsF5F5FAOutlinWidth,
    elementTagsF5F5FAOutlinHeight,
    elementTagsF5F5FAOutlinPosition,
  ]);

  const tag1Style: CSSProperties = useMemo(() => {
    return {
      left: tagLeft,
      fontSize: tagFontSize,
      lineHeight: tagLineHeight,
    };
  }, [tagLeft, tagFontSize, tagLineHeight]);

  return (
    <div
      className={`w-[84px] h-9 text-center text-xs text-primary font-heading-h4 ${className}`}
      style={elementTagsF5F5FAOutlinStyle}
    >
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg max-w-full overflow-hidden max-h-full mix-blend-normal"
        alt=""
        src={bgHover}
      />
      <b
        className="absolute top-[calc(50%_-_9px)] left-[30.5px] leading-[18px]"
        style={tag1Style}
      >
        {tag}
      </b>
    </div>
  );
};

export default CollectionFilter;
