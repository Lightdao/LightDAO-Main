import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ButtonsIconTransparentType = {
  className?: string;

  /** Style props */
  buttonsIconTransparentPosition?: CSSProperties["position"];
  buttonsIconTransparentTop?: CSSProperties["top"];
  buttonsIconTransparentRight?: CSSProperties["right"];
  buttonsIconTransparentWidth?: CSSProperties["width"];
  buttonsIconTransparentHeight?: CSSProperties["height"];
  iconFontSize?: CSSProperties["fontSize"];
};

const ButtonsIconTransparent: FunctionComponent<ButtonsIconTransparentType> = ({
  className = "",
  buttonsIconTransparentPosition,
  buttonsIconTransparentTop,
  buttonsIconTransparentRight,
  buttonsIconTransparentWidth,
  buttonsIconTransparentHeight,
  iconFontSize,
}) => {
  const buttonsIconTransparentStyle: CSSProperties = useMemo(() => {
    return {
      position: buttonsIconTransparentPosition,
      top: buttonsIconTransparentTop,
      right: buttonsIconTransparentRight,
      width: buttonsIconTransparentWidth,
      height: buttonsIconTransparentHeight,
    };
  }, [
    buttonsIconTransparentPosition,
    buttonsIconTransparentTop,
    buttonsIconTransparentRight,
    buttonsIconTransparentWidth,
    buttonsIconTransparentHeight,
  ]);

  const icon6Style: CSSProperties = useMemo(() => {
    return {
      fontSize: iconFontSize,
    };
  }, [iconFontSize]);

  return (
    <div
      className={`w-[46px] h-[46px] text-center text-lg text-primary font-icons-20 ${className}`}
      style={buttonsIconTransparentStyle}
    >
      <div
        className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_9px)]"
        style={icon6Style}
      >
        
      </div>
    </div>
  );
};

export default ButtonsIconTransparent;
