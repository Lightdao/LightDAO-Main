import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ButtonIconType = {
  className?: string;
  icon?: string;
  lable?: string;

  /** Style props */
  buttonsIconLabelOutlinWidth?: CSSProperties["width"];
  buttonsIconLabelOutlinPosition?: CSSProperties["position"];
  buttonsIconLabelOutlinTop?: CSSProperties["top"];
  buttonsIconLabelOutlinRight?: CSSProperties["right"];
  buttonsIconLabelOutlinLeft?: CSSProperties["left"];
  buttonsIconLabelOutlinHeight?: CSSProperties["height"];
  bgWidth?: CSSProperties["width"];
  bgRight?: CSSProperties["right"];
  bgLeft?: CSSProperties["left"];
  bgBackgroundColor?: CSSProperties["backgroundColor"];
  linkLeft?: CSSProperties["left"];
  linkGap?: CSSProperties["gap"];
  iconFontSize?: CSSProperties["fontSize"];
  lableFontSize?: CSSProperties["fontSize"];
  lableLineHeight?: CSSProperties["lineHeight"];
};

const ButtonIcon: FunctionComponent<ButtonIconType> = ({
  className = "",
  icon,
  lable,
  buttonsIconLabelOutlinWidth,
  buttonsIconLabelOutlinPosition,
  buttonsIconLabelOutlinTop,
  buttonsIconLabelOutlinRight,
  buttonsIconLabelOutlinLeft,
  buttonsIconLabelOutlinHeight,
  bgWidth,
  bgRight,
  bgLeft,
  bgBackgroundColor,
  linkLeft,
  linkGap,
  iconFontSize,
  lableFontSize,
  lableLineHeight,
}) => {
  const buttonsIconLabelOutlinStyle: CSSProperties = useMemo(() => {
    return {
      width: buttonsIconLabelOutlinWidth,
      position: buttonsIconLabelOutlinPosition,
      top: buttonsIconLabelOutlinTop,
      right: buttonsIconLabelOutlinRight,
      left: buttonsIconLabelOutlinLeft,
      height: buttonsIconLabelOutlinHeight,
    };
  }, [
    buttonsIconLabelOutlinWidth,
    buttonsIconLabelOutlinPosition,
    buttonsIconLabelOutlinTop,
    buttonsIconLabelOutlinRight,
    buttonsIconLabelOutlinLeft,
    buttonsIconLabelOutlinHeight,
  ]);

  const bg1Style: CSSProperties = useMemo(() => {
    return {
      width: bgWidth,
      right: bgRight,
      left: bgLeft,
      backgroundColor: bgBackgroundColor,
    };
  }, [bgWidth, bgRight, bgLeft, bgBackgroundColor]);

  const link3Style: CSSProperties = useMemo(() => {
    return {
      left: linkLeft,
      gap: linkGap,
    };
  }, [linkLeft, linkGap]);

  const icon7Style: CSSProperties = useMemo(() => {
    return {
      fontSize: iconFontSize,
    };
  }, [iconFontSize]);

  const lable4Style: CSSProperties = useMemo(() => {
    return {
      fontSize: lableFontSize,
      lineHeight: lableLineHeight,
    };
  }, [lableFontSize, lableLineHeight]);

  return (
    <div
      className={`w-[98px] h-[46px] text-center text-lg text-primary font-icons-20 ${className}`}
      style={buttonsIconLabelOutlinStyle}
    >
      <div
        className="absolute h-[102.17%] w-[101.02%] top-[-1.09%] right-[-0.51%] bottom-[-1.09%] left-[-0.51%] rounded-4xl box-border mix-blend-normal border-[1px] border-solid border-cfdbd5-outline-onlight"
        style={bg1Style}
      />
      <div
        className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_32px)] flex flex-row items-center justify-center gap-[8px]"
        style={link3Style}
      >
        <div className="relative" style={icon7Style}>
          {icon}
        </div>
        <b
          className="relative text-sm leading-[21px] font-heading-h4 text-left"
          style={lable4Style}
        >
          {lable}
        </b>
      </div>
    </div>
  );
};

export default ButtonIcon;
