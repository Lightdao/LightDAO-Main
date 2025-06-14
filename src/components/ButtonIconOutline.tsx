import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ButtonIconOutlineType = {
  className?: string;
  icon?: string;

  /** Style props */
  buttonsIconOutlineRestPosition?: CSSProperties["position"];
  buttonsIconOutlineRestRight?: CSSProperties["right"];
  buttonsIconOutlineRestBottom?: CSSProperties["bottom"];
  buttonsIconOutlineRestWidth?: CSSProperties["width"];
  buttonsIconOutlineRestHeight?: CSSProperties["height"];
  buttonsIconOutlineRestTop?: CSSProperties["top"];
  iconFontSize?: CSSProperties["fontSize"];
};

const ButtonIconOutline: FunctionComponent<ButtonIconOutlineType> = ({
  className = "",
  icon,
  buttonsIconOutlineRestPosition,
  buttonsIconOutlineRestRight,
  buttonsIconOutlineRestBottom,
  buttonsIconOutlineRestWidth,
  buttonsIconOutlineRestHeight,
  buttonsIconOutlineRestTop,
  iconFontSize,
}) => {
  const buttonsIconOutlineRest1Style: CSSProperties = useMemo(() => {
    return {
      position: buttonsIconOutlineRestPosition,
      right: buttonsIconOutlineRestRight,
      bottom: buttonsIconOutlineRestBottom,
      width: buttonsIconOutlineRestWidth,
      height: buttonsIconOutlineRestHeight,
      top: buttonsIconOutlineRestTop,
    };
  }, [
    buttonsIconOutlineRestPosition,
    buttonsIconOutlineRestRight,
    buttonsIconOutlineRestBottom,
    buttonsIconOutlineRestWidth,
    buttonsIconOutlineRestHeight,
    buttonsIconOutlineRestTop,
  ]);

  const icon4Style: CSSProperties = useMemo(() => {
    return {
      fontSize: iconFontSize,
    };
  }, [iconFontSize]);

  return (
    <div
      className={`w-[46px] h-[46px] text-center text-lg text-primary font-icons-20 ${className}`}
      style={buttonsIconOutlineRest1Style}
    >
      <div className="absolute h-[102.17%] w-[102.17%] top-[-1.09%] right-[-1.09%] bottom-[-1.09%] left-[-1.09%] rounded-4xl box-border mix-blend-normal border-[1px] border-solid border-cfdbd5-outline-onlight" />
      <div
        className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_9px)]"
        style={icon4Style}
      >
        {icon}
      </div>
    </div>
  );
};

export default ButtonIconOutline;
