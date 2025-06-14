import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ActiveButtonType = {
  className?: string;
  lable?: string;

  /** Style props */
  buttonsLabelFilledActiHeight?: CSSProperties["height"];
  buttonsLabelFilledActiPosition?: CSSProperties["position"];
  buttonsLabelFilledActiTop?: CSSProperties["top"];
  buttonsLabelFilledActiRight?: CSSProperties["right"];
  buttonsLabelFilledActiWidth?: CSSProperties["width"];
  buttonsLabelFilledActiLeft?: CSSProperties["left"];
  lableLeft?: CSSProperties["left"];
  lableFontSize?: CSSProperties["fontSize"];
  lableLineHeight?: CSSProperties["lineHeight"];
};

const ActiveButton: FunctionComponent<ActiveButtonType> = ({
  className = "",
  lable,
  buttonsLabelFilledActiHeight,
  buttonsLabelFilledActiPosition,
  buttonsLabelFilledActiTop,
  buttonsLabelFilledActiRight,
  buttonsLabelFilledActiWidth,
  buttonsLabelFilledActiLeft,
  lableLeft,
  lableFontSize,
  lableLineHeight,
}) => {
  const buttonsLabelFilledActiStyle: CSSProperties = useMemo(() => {
    return {
      height: buttonsLabelFilledActiHeight,
      position: buttonsLabelFilledActiPosition,
      top: buttonsLabelFilledActiTop,
      right: buttonsLabelFilledActiRight,
      width: buttonsLabelFilledActiWidth,
      left: buttonsLabelFilledActiLeft,
    };
  }, [
    buttonsLabelFilledActiHeight,
    buttonsLabelFilledActiPosition,
    buttonsLabelFilledActiTop,
    buttonsLabelFilledActiRight,
    buttonsLabelFilledActiWidth,
    buttonsLabelFilledActiLeft,
  ]);

  const lable5Style: CSSProperties = useMemo(() => {
    return {
      left: lableLeft,
      fontSize: lableFontSize,
      lineHeight: lableLineHeight,
    };
  }, [lableLeft, lableFontSize, lableLineHeight]);

  return (
    <div
      className={`w-[98px] h-[46px] text-center text-sm text-ffffff font-heading-h4 ${className}`}
      style={buttonsLabelFilledActiStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-4xl bg-a52f4-primary" />
      <b
        className="absolute top-[calc(50%_-_11px)] left-[30.61%] leading-[21px]"
        style={lable5Style}
      >
        {lable}
      </b>
    </div>
  );
};

export default ActiveButton;
