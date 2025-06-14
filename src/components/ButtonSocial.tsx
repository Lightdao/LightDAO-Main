import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ButtonSocialType = {
  className?: string;
  buttonsSocialLogoPlacehol?: string;

  /** Style props */
  buttonsSocialWoLableOWidth?: CSSProperties["width"];
  buttonsSocialWoLableOHeight?: CSSProperties["height"];
  buttonsSocialWoLableOPosition?: CSSProperties["position"];
  buttonsSocialWoLableOTop?: CSSProperties["top"];
  buttonsSocialWoLableORight?: CSSProperties["right"];
  buttonsSocialWoLableOBottom?: CSSProperties["bottom"];
  buttonsSocialWoLableOLeft?: CSSProperties["left"];
  bgWidth?: CSSProperties["width"];
  bgRight?: CSSProperties["right"];
  bgLeft?: CSSProperties["left"];
  bgBorder?: CSSProperties["border"];
  bgBackgroundColor?: CSSProperties["backgroundColor"];
  buttonsSocialLogoPlacehWidth?: CSSProperties["width"];
  buttonsSocialLogoPlacehHeight?: CSSProperties["height"];
};

const ButtonSocial: FunctionComponent<ButtonSocialType> = ({
  className = "",
  buttonsSocialLogoPlacehol,
  buttonsSocialWoLableOWidth,
  buttonsSocialWoLableOHeight,
  buttonsSocialWoLableOPosition,
  buttonsSocialWoLableOTop,
  buttonsSocialWoLableORight,
  buttonsSocialWoLableOBottom,
  buttonsSocialWoLableOLeft,
  bgWidth,
  bgRight,
  bgLeft,
  bgBorder,
  bgBackgroundColor,
  buttonsSocialLogoPlacehWidth,
  buttonsSocialLogoPlacehHeight,
}) => {
  const buttonsSocialWoLableOStyle: CSSProperties = useMemo(() => {
    return {
      width: buttonsSocialWoLableOWidth,
      height: buttonsSocialWoLableOHeight,
      position: buttonsSocialWoLableOPosition,
      top: buttonsSocialWoLableOTop,
      right: buttonsSocialWoLableORight,
      bottom: buttonsSocialWoLableOBottom,
      left: buttonsSocialWoLableOLeft,
    };
  }, [
    buttonsSocialWoLableOWidth,
    buttonsSocialWoLableOHeight,
    buttonsSocialWoLableOPosition,
    buttonsSocialWoLableOTop,
    buttonsSocialWoLableORight,
    buttonsSocialWoLableOBottom,
    buttonsSocialWoLableOLeft,
  ]);

  const bgStyle: CSSProperties = useMemo(() => {
    return {
      width: bgWidth,
      right: bgRight,
      left: bgLeft,
      border: bgBorder,
      backgroundColor: bgBackgroundColor,
    };
  }, [bgWidth, bgRight, bgLeft, bgBorder, bgBackgroundColor]);

  const buttonsSocialLogoPlaceh1Style: CSSProperties = useMemo(() => {
    return {
      width: buttonsSocialLogoPlacehWidth,
      height: buttonsSocialLogoPlacehHeight,
    };
  }, [buttonsSocialLogoPlacehWidth, buttonsSocialLogoPlacehHeight]);

  return (
    <div
      className={`w-[116px] h-[46px] ${className}`}
      style={buttonsSocialWoLableOStyle}
    >
      <div
        className="absolute h-[102.17%] w-[100.86%] top-[-1.09%] right-[-0.43%] bottom-[-1.09%] left-[-0.43%] rounded-4xl box-border mix-blend-normal border-[1px] border-solid border-cfdbd5-outline-onlight"
        style={bgStyle}
      />
      <img
        className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] w-4 h-4"
        alt=""
        src={buttonsSocialLogoPlacehol}
        style={buttonsSocialLogoPlaceh1Style}
      />
    </div>
  );
};

export default ButtonSocial;
