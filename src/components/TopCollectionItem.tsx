import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type TopCollectionItemType = {
  className?: string;
  buttonsSocialLogoFlow?: string;
  price?: string;
  name1?: string;
  art?: string;
  number?: string;

  /** Style props */
  authorWebItemV1OnLiWidth?: CSSProperties["width"];
  authorWebItemV1OnLiHeight?: CSSProperties["height"];
  authorWebItemV1OnLiPosition?: CSSProperties["position"];
  authorWebItemV1OnLiTop?: CSSProperties["top"];
  authorWebItemV1OnLiRight?: CSSProperties["right"];
  authorWebItemV1OnLiBottom?: CSSProperties["bottom"];
  authorWebItemV1OnLiLeft?: CSSProperties["left"];
  volumeLeft?: CSSProperties["left"];
  volumeGap?: CSSProperties["gap"];
  buttonsSocialLogoFlowWidth?: CSSProperties["width"];
  buttonsSocialLogoFlowHeight?: CSSProperties["height"];
  priceFontSize?: CSSProperties["fontSize"];
  priceLineHeight?: CSSProperties["lineHeight"];
  nameLeft?: CSSProperties["left"];
  nameFontSize?: CSSProperties["fontSize"];
  nameLineHeight?: CSSProperties["lineHeight"];
  artIconLeft?: CSSProperties["left"];
  artIconWidth?: CSSProperties["width"];
  artIconHeight?: CSSProperties["height"];
  numberLeft?: CSSProperties["left"];
  numberFontSize?: CSSProperties["fontSize"];
  numberLineHeight?: CSSProperties["lineHeight"];
};

const TopCollectionItem: FunctionComponent<TopCollectionItemType> = ({
  className = "",
  buttonsSocialLogoFlow,
  price,
  name1,
  art,
  number,
  authorWebItemV1OnLiWidth,
  authorWebItemV1OnLiHeight,
  authorWebItemV1OnLiPosition,
  authorWebItemV1OnLiTop,
  authorWebItemV1OnLiRight,
  authorWebItemV1OnLiBottom,
  authorWebItemV1OnLiLeft,
  volumeLeft,
  volumeGap,
  buttonsSocialLogoFlowWidth,
  buttonsSocialLogoFlowHeight,
  priceFontSize,
  priceLineHeight,
  nameLeft,
  nameFontSize,
  nameLineHeight,
  artIconLeft,
  artIconWidth,
  artIconHeight,
  numberLeft,
  numberFontSize,
  numberLineHeight,
}) => {
  const authorWebItemV1OnLiStyle: CSSProperties = useMemo(() => {
    return {
      width: authorWebItemV1OnLiWidth,
      height: authorWebItemV1OnLiHeight,
      position: authorWebItemV1OnLiPosition,
      top: authorWebItemV1OnLiTop,
      right: authorWebItemV1OnLiRight,
      bottom: authorWebItemV1OnLiBottom,
      left: authorWebItemV1OnLiLeft,
    };
  }, [
    authorWebItemV1OnLiWidth,
    authorWebItemV1OnLiHeight,
    authorWebItemV1OnLiPosition,
    authorWebItemV1OnLiTop,
    authorWebItemV1OnLiRight,
    authorWebItemV1OnLiBottom,
    authorWebItemV1OnLiLeft,
  ]);

  const volumeStyle: CSSProperties = useMemo(() => {
    return {
      left: volumeLeft,
      gap: volumeGap,
    };
  }, [volumeLeft, volumeGap]);

  const buttonsSocialLogoFlowStyle: CSSProperties = useMemo(() => {
    return {
      width: buttonsSocialLogoFlowWidth,
      height: buttonsSocialLogoFlowHeight,
    };
  }, [buttonsSocialLogoFlowWidth, buttonsSocialLogoFlowHeight]);

  const priceStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: priceFontSize,
      lineHeight: priceLineHeight,
    };
  }, [priceFontSize, priceLineHeight]);

  const nameStyle: CSSProperties = useMemo(() => {
    return {
      left: nameLeft,
      fontSize: nameFontSize,
      lineHeight: nameLineHeight,
    };
  }, [nameLeft, nameFontSize, nameLineHeight]);

  const artIconStyle: CSSProperties = useMemo(() => {
    return {
      left: artIconLeft,
      width: artIconWidth,
      height: artIconHeight,
    };
  }, [artIconLeft, artIconWidth, artIconHeight]);

  const numberStyle: CSSProperties = useMemo(() => {
    return {
      left: numberLeft,
      fontSize: numberFontSize,
      lineHeight: numberLineHeight,
    };
  }, [numberLeft, numberFontSize, numberLineHeight]);

  return (
    <div
      className={`w-[410px] max-w-full h-[54px] text-left text-sm text-primary font-heading-h4 ${className}`}
      style={authorWebItemV1OnLiStyle}
    >
      <div
        className="absolute top-[calc(50%_+_3.5px)] left-[102px] flex flex-row items-center justify-start gap-[6px]"
        style={volumeStyle}
      >
        <img
          className="w-5 relative h-5 object-cover"
          alt=""
          src={buttonsSocialLogoFlow}
          style={buttonsSocialLogoFlowStyle}
        />
        <div className="relative leading-[21px]" style={priceStyle}>
          {price}
        </div>
      </div>
      <b
        className="absolute top-[calc(50%_-_27px)] left-[102px] text-base leading-[24px]"
        style={nameStyle}
      >
        {name1}
      </b>
      <img
        className="absolute top-[calc(50%_-_27px)] left-[30px] rounded-3xs w-[54px] h-[54px] object-cover"
        alt=""
        src={art}
        style={artIconStyle}
      />
      <b
        className="absolute top-[calc(50%_-_10px)] left-[0px] leading-[21px]"
        style={numberStyle}
      >
        {number}
      </b>
    </div>
  );
};

export default TopCollectionItem;
