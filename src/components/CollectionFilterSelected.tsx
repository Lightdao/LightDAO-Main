import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type CollectionFilterSelectedType = {
  className?: string;
  bgHover?: string;
  tag?: string;

  /** Style props */
  elementTags00D066SoftWidth?: CSSProperties["width"];
  elementTags00D066SoftHeight?: CSSProperties["height"];
  elementTags00D066SoftPosition?: CSSProperties["position"];
  tagLeft?: CSSProperties["left"];
  tagFontSize?: CSSProperties["fontSize"];
  tagLineHeight?: CSSProperties["lineHeight"];
};

const CollectionFilterSelected: FunctionComponent<
  CollectionFilterSelectedType
> = ({
  className = "",
  bgHover,
  tag,
  elementTags00D066SoftWidth,
  elementTags00D066SoftHeight,
  elementTags00D066SoftPosition,
  tagLeft,
  tagFontSize,
  tagLineHeight,
}) => {
  const elementTags00D066SoftStyle: CSSProperties = useMemo(() => {
    return {
      width: elementTags00D066SoftWidth,
      height: elementTags00D066SoftHeight,
      position: elementTags00D066SoftPosition,
    };
  }, [
    elementTags00D066SoftWidth,
    elementTags00D066SoftHeight,
    elementTags00D066SoftPosition,
  ]);

  const tagStyle: CSSProperties = useMemo(() => {
    return {
      left: tagLeft,
      fontSize: tagFontSize,
      lineHeight: tagLineHeight,
    };
  }, [tagLeft, tagFontSize, tagLineHeight]);

  return (
    <div
      className={`w-[84px] h-9 text-center text-xs text-a52f4-primary font-heading-h4 ${className}`}
      style={elementTags00D066SoftStyle}
    >
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg max-w-full overflow-hidden max-h-full"
        alt=""
        src={bgHover}
      />
      <b
        className="absolute top-[calc(50%_-_9px)] left-[36.9%] leading-[18px]"
        style={tagStyle}
      >
        {tag}
      </b>
    </div>
  );
};

export default CollectionFilterSelected;
