import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type NavigationBarType = {
  className?: string;

  /** Style props */
  navigationWebGuestOnLiWidth?: CSSProperties["width"];
  navigationWebGuestOnLiHeight?: CSSProperties["height"];
  navigationWebGuestOnLiPosition?: CSSProperties["position"];
  navigationWebGuestOnLiTop?: CSSProperties["top"];
  navigationWebGuestOnLiLeft?: CSSProperties["left"];
  buttonsLabelFilledRestRight?: CSSProperties["right"];
  buttonsLabelFilledRestWidth?: CSSProperties["width"];
  buttonsLabelFilledRestHeight?: CSSProperties["height"];
  lableFontSize?: CSSProperties["fontSize"];
  lableLineHeight?: CSSProperties["lineHeight"];
  buttonsLabelFilledRestRight1?: CSSProperties["right"];
  buttonsLabelFilledRestWidth1?: CSSProperties["width"];
  buttonsLabelFilledRestHeight1?: CSSProperties["height"];
  lableFontSize1?: CSSProperties["fontSize"];
  lableLineHeight1?: CSSProperties["lineHeight"];
  linksRight?: CSSProperties["right"];
  linksGap?: CSSProperties["gap"];
  exploreFontSize?: CSSProperties["fontSize"];
  exploreLineHeight?: CSSProperties["lineHeight"];
  statsFontSize?: CSSProperties["fontSize"];
  statsLineHeight?: CSSProperties["lineHeight"];
  dropsFontSize?: CSSProperties["fontSize"];
  dropsLineHeight?: CSSProperties["lineHeight"];
  activityFontSize?: CSSProperties["fontSize"];
  activityLineHeight?: CSSProperties["lineHeight"];
  searchLeft?: CSSProperties["left"];
  searchWidth?: CSSProperties["width"];
  searchHeight?: CSSProperties["height"];
  searchIconLeft?: CSSProperties["left"];
  searchIconFontSize?: CSSProperties["fontSize"];
  searchItemsCollecLeft?: CSSProperties["left"];
  searchItemsCollecFontSize?: CSSProperties["fontSize"];
  searchItemsCollecLineHeight?: CSSProperties["lineHeight"];
  elementLogoHiddenLeft?: CSSProperties["left"];
  elementLogoHiddenWidth?: CSSProperties["width"];
  elementLogoHiddenHeight?: CSSProperties["height"];
};

const NavigationBar: FunctionComponent<NavigationBarType> = ({
  className = "",
  navigationWebGuestOnLiWidth,
  navigationWebGuestOnLiHeight,
  navigationWebGuestOnLiPosition,
  navigationWebGuestOnLiTop,
  navigationWebGuestOnLiLeft,
  buttonsLabelFilledRestRight,
  buttonsLabelFilledRestWidth,
  buttonsLabelFilledRestHeight,
  lableFontSize,
  lableLineHeight,
  buttonsLabelFilledRestRight1,
  buttonsLabelFilledRestWidth1,
  buttonsLabelFilledRestHeight1,
  lableFontSize1,
  lableLineHeight1,
  linksRight,
  linksGap,
  exploreFontSize,
  exploreLineHeight,
  statsFontSize,
  statsLineHeight,
  dropsFontSize,
  dropsLineHeight,
  activityFontSize,
  activityLineHeight,
  searchLeft,
  searchWidth,
  searchHeight,
  searchIconLeft,
  searchIconFontSize,
  searchItemsCollecLeft,
  searchItemsCollecFontSize,
  searchItemsCollecLineHeight,
  elementLogoHiddenLeft,
  elementLogoHiddenWidth,
  elementLogoHiddenHeight,
}) => {
  const navigationWebGuestOnLiStyle: CSSProperties = useMemo(() => {
    return {
      width: navigationWebGuestOnLiWidth,
      height: navigationWebGuestOnLiHeight,
      position: navigationWebGuestOnLiPosition,
      top: navigationWebGuestOnLiTop,
      left: navigationWebGuestOnLiLeft,
    };
  }, [
    navigationWebGuestOnLiWidth,
    navigationWebGuestOnLiHeight,
    navigationWebGuestOnLiPosition,
    navigationWebGuestOnLiTop,
    navigationWebGuestOnLiLeft,
  ]);

  const buttonsLabelFilledRest1Style: CSSProperties = useMemo(() => {
    return {
      right: buttonsLabelFilledRestRight,
      width: buttonsLabelFilledRestWidth,
      height: buttonsLabelFilledRestHeight,
    };
  }, [
    buttonsLabelFilledRestRight,
    buttonsLabelFilledRestWidth,
    buttonsLabelFilledRestHeight,
  ]);

  const lable6Style: CSSProperties = useMemo(() => {
    return {
      fontSize: lableFontSize,
      lineHeight: lableLineHeight,
    };
  }, [lableFontSize, lableLineHeight]);

  const buttonsLabelFilledRest2Style: CSSProperties = useMemo(() => {
    return {
      right: buttonsLabelFilledRestRight1,
      width: buttonsLabelFilledRestWidth1,
      height: buttonsLabelFilledRestHeight1,
    };
  }, [
    buttonsLabelFilledRestRight1,
    buttonsLabelFilledRestWidth1,
    buttonsLabelFilledRestHeight1,
  ]);

  const lable7Style: CSSProperties = useMemo(() => {
    return {
      fontSize: lableFontSize1,
      lineHeight: lableLineHeight1,
    };
  }, [lableFontSize1, lableLineHeight1]);

  const links3Style: CSSProperties = useMemo(() => {
    return {
      right: linksRight,
      gap: linksGap,
    };
  }, [linksRight, linksGap]);

  const exploreStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: exploreFontSize,
      lineHeight: exploreLineHeight,
    };
  }, [exploreFontSize, exploreLineHeight]);

  const statsStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: statsFontSize,
      lineHeight: statsLineHeight,
    };
  }, [statsFontSize, statsLineHeight]);

  const dropsStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: dropsFontSize,
      lineHeight: dropsLineHeight,
    };
  }, [dropsFontSize, dropsLineHeight]);

  const activityStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: activityFontSize,
      lineHeight: activityLineHeight,
    };
  }, [activityFontSize, activityLineHeight]);

  const searchStyle: CSSProperties = useMemo(() => {
    return {
      left: searchLeft,
      width: searchWidth,
      height: searchHeight,
    };
  }, [searchLeft, searchWidth, searchHeight]);

  const searchIconStyle: CSSProperties = useMemo(() => {
    return {
      left: searchIconLeft,
      fontSize: searchIconFontSize,
    };
  }, [searchIconLeft, searchIconFontSize]);

  const searchItemsCollecStyle: CSSProperties = useMemo(() => {
    return {
      left: searchItemsCollecLeft,
      fontSize: searchItemsCollecFontSize,
      lineHeight: searchItemsCollecLineHeight,
    };
  }, [
    searchItemsCollecLeft,
    searchItemsCollecFontSize,
    searchItemsCollecLineHeight,
  ]);

  const elementLogoHiddenStyle: CSSProperties = useMemo(() => {
    return {
      left: elementLogoHiddenLeft,
      width: elementLogoHiddenWidth,
      height: elementLogoHiddenHeight,
    };
  }, [elementLogoHiddenLeft, elementLogoHiddenWidth, elementLogoHiddenHeight]);

  return (
    <div
      className={`w-[1440px] max-w-full h-[84px] text-center text-sm text-d5d5b font-heading-h4 ${className}`}
      style={navigationWebGuestOnLiStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_3px_4px_rgba(153,_155,_168,_0.25)] bg-ffffff" />
      <div
        className="absolute top-[calc(50%_-_22px)] right-[136px] w-[98px] h-10 text-ffffff"
        style={buttonsLabelFilledRest1Style}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-4xl bg-a52f4-primary" />
        <a href="/CreateListing"
          className="absolute top-[calc(50%_-_11px)] left-[26.53%] leading-[21px]"
          style={lable6Style}
        >
          Create
        </a>
      </div>
      <div
        className="absolute top-[calc(50%_-_22px)] right-[32px] w-[98px] h-10 text-primary"
        style={buttonsLabelFilledRest2Style}
      >
        <div className="absolute h-[102.5%] w-[101.02%] top-[-1.25%] right-[-0.51%] bottom-[-1.25%] left-[-0.51%] rounded-4xl box-border mix-blend-normal border-[1px] border-solid border-cfdbd5-outline-onlight" />
        <b
          className="absolute top-[calc(50%_-_11px)] left-[26.53%] leading-[21px]"
          style={lable7Style}
        >
          Sign In
        </b>
      </div>
      <div
        className="absolute top-[calc(50%_-_14px)] right-[271px] flex flex-row items-center justify-end gap-[29px] text-left text-base"
        style={links3Style}
      >
        <a href="Marketplace"
          className="relative leading-[24px] text-primary"
          style={exploreStyle}
        >
          Explore
        </a>
        <a href="/Stats" className="relative leading-[24px]" style={statsStyle}>
          Stats
        </a>
        <a href="/Drops" className="relative leading-[24px]" style={dropsStyle}>
          Drops
        </a>
        <a href="/Dashboard" className="relative leading-[24px]" style={activityStyle}>
          Activity
        </a>
      </div>
      <div
        className="absolute top-[calc(50%_-_22px)] left-[80px] w-[519px] h-10 text-xl font-icons-20"
        style={searchStyle}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-4xl bg-ebf0f0-soft-onlight mix-blend-normal" />
        <div
          className="absolute top-[calc(50%_-_10px)] left-[15px]"
          style={searchIconStyle}
        >
          
        </div>
        <div
          className="absolute top-[calc(50%_-_11px)] left-[48px] text-sm leading-[21px] font-heading-h4 text-left"
          style={searchItemsCollecStyle}
        >
          Search items, collections, and accounts
        </div>
      </div>
      <img
        className="absolute top-[calc(50%_-_22px)] left-[32px] w-10 h-10"
        alt=""
        src="/element-logo--hidden.svg"
        style={elementLogoHiddenStyle}
      />
    </div>
  );
};

export default NavigationBar;
