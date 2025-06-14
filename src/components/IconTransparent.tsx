import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type IconTransparentType = {
  className?: string;
  icon?: string;
  lable?: string;

  /** Style props */
  buttonsIconLabelTranspWidth?: CSSProperties["width"];
  buttonsIconLabelTranspPosition?: CSSProperties["position"];
  buttonsIconLabelTranspRight?: CSSProperties["right"];
  buttonsIconLabelTranspBottom?: CSSProperties["bottom"];
  buttonsIconLabelTranspHeight?: CSSProperties["height"];
  linkLeft?: CSSProperties["left"];
  linkGap?: CSSProperties["gap"];
  iconFontSize?: CSSProperties["fontSize"];
  lableFontSize?: CSSProperties["fontSize"];
  lableLineHeight?: CSSProperties["lineHeight"];
};

const IconTransparent: FunctionComponent<IconTransparentType> = ({
  className = "",
  icon,
  lable,
  buttonsIconLabelTranspWidth,
  buttonsIconLabelTranspPosition,
  buttonsIconLabelTranspRight,
  buttonsIconLabelTranspBottom,
  buttonsIconLabelTranspHeight,
  linkLeft,
  linkGap,
  iconFontSize,
  lableFontSize,
  lableLineHeight,
}) => {
  const buttonsIconLabelTranspStyle: CSSProperties = useMemo(() => {
    return {
      width: buttonsIconLabelTranspWidth,
      position: buttonsIconLabelTranspPosition,
      right: buttonsIconLabelTranspRight,
      bottom: buttonsIconLabelTranspBottom,
      height: buttonsIconLabelTranspHeight,
    };
  }, [
    buttonsIconLabelTranspWidth,
    buttonsIconLabelTranspPosition,
    buttonsIconLabelTranspRight,
    buttonsIconLabelTranspBottom,
    buttonsIconLabelTranspHeight,
  ]);

  const link2Style: CSSProperties = useMemo(() => {
    return {
      left: linkLeft,
      gap: linkGap,
    };
  }, [linkLeft, linkGap]);

  const icon5Style: CSSProperties = useMemo(() => {
    return {
      fontSize: iconFontSize,
    };
  }, [iconFontSize]);

  const lable3Style: CSSProperties = useMemo(() => {
    return {
      fontSize: lableFontSize,
      lineHeight: lableLineHeight,
    };
  }, [lableFontSize, lableLineHeight]);

  return (
    <div
      className={`w-[98px] h-[46px] text-center text-lg text-primary font-icons-20 ${className}`}
      style={buttonsIconLabelTranspStyle}
    >
      <div
        className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_32px)] flex flex-row items-center justify-center gap-[8px]"
        style={link2Style}
      >
        <div className="relative" style={icon5Style}>
          {icon}
        </div>
        <b
          className="relative text-sm leading-[21px] font-heading-h4 text-left"
          style={lable3Style}
        >
          {lable}
        </b>
      </div>
    </div>
  );
};

export default IconTransparent;
