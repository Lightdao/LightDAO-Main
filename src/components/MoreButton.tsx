import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type MoreButtonType = {
  className?: string;
  lable?: string;

  /** Style props */
  buttonsLabelFilledRestWidth?: CSSProperties["width"];
  buttonsLabelFilledRestHeight?: CSSProperties["height"];
  buttonsLabelFilledRestPosition?: CSSProperties["position"];
  buttonsLabelFilledRestBottom?: CSSProperties["bottom"];
  buttonsLabelFilledRestLeft?: CSSProperties["left"];
  lableLeft?: CSSProperties["left"];
  lableFontSize?: CSSProperties["fontSize"];
  lableLineHeight?: CSSProperties["lineHeight"];
};

const MoreButton: FunctionComponent<MoreButtonType> = ({
  className = "",
  lable,
  buttonsLabelFilledRestWidth,
  buttonsLabelFilledRestHeight,
  buttonsLabelFilledRestPosition,
  buttonsLabelFilledRestBottom,
  buttonsLabelFilledRestLeft,
  lableLeft,
  lableFontSize,
  lableLineHeight,
}) => {
  const buttonsLabelFilledRestStyle: CSSProperties = useMemo(() => {
    return {
      width: buttonsLabelFilledRestWidth,
      height: buttonsLabelFilledRestHeight,
      position: buttonsLabelFilledRestPosition,
      bottom: buttonsLabelFilledRestBottom,
      left: buttonsLabelFilledRestLeft,
    };
  }, [
    buttonsLabelFilledRestWidth,
    buttonsLabelFilledRestHeight,
    buttonsLabelFilledRestPosition,
    buttonsLabelFilledRestBottom,
    buttonsLabelFilledRestLeft,
  ]);

  const lable2Style: CSSProperties = useMemo(() => {
    return {
      left: lableLeft,
      fontSize: lableFontSize,
      lineHeight: lableLineHeight,
    };
  }, [lableLeft, lableFontSize, lableLineHeight]);

  return (
    <div
      className={`w-[98px] h-[46px] text-center text-sm text-a52f4-primary font-heading-h4 ${className}`}
      style={buttonsLabelFilledRestStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-4xl [background:linear-gradient(rgba(255,_255,_255,_0.8),_rgba(255,_255,_255,_0.8)),_#7a52f4]" />
      <b
        className="absolute top-[calc(50%_-_11px)] left-[30.61%] leading-[21px]"
        style={lable2Style}
      >
        {lable}
      </b>
    </div>
  );
};

export default MoreButton;
