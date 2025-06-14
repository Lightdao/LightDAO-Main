import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FooterType = {
  className?: string;

  /** Style props */
  navigationWebFooterOnLWidth?: CSSProperties["width"];
  navigationWebFooterOnLHeight?: CSSProperties["height"];
  navigationWebFooterOnLPosition?: CSSProperties["position"];
  navigationWebFooterOnLRight?: CSSProperties["right"];
  navigationWebFooterOnLBottom?: CSSProperties["bottom"];
  navigationWebFooterOnLLeft?: CSSProperties["left"];
  lineIconRight?: CSSProperties["right"];
  lineIconLeft?: CSSProperties["left"];
  lineIconHeight?: CSSProperties["height"];
  buttonsLabelIconTranspRight?: CSSProperties["right"];
  buttonsLabelIconTranspBottom?: CSSProperties["bottom"];
  buttonsLabelIconTranspWidth?: CSSProperties["width"];
  buttonsLabelIconTranspHeight?: CSSProperties["height"];
  linkGap?: CSSProperties["gap"];
  lableFontSize?: CSSProperties["fontSize"];
  lableLineHeight?: CSSProperties["lineHeight"];
  iconFontSize?: CSSProperties["fontSize"];
  buttonsIconOutlineRestRight?: CSSProperties["right"];
  buttonsIconOutlineRestBottom?: CSSProperties["bottom"];
  buttonsIconOutlineRestWidth?: CSSProperties["width"];
  buttonsIconOutlineRestHeight?: CSSProperties["height"];
  iconFontSize1?: CSSProperties["fontSize"];
  linksBottom?: CSSProperties["bottom"];
  linksLeft?: CSSProperties["left"];
  linksWidth?: CSSProperties["width"];
  linksHeight?: CSSProperties["height"];
  allRightsReLeft?: CSSProperties["left"];
  allRightsReFontSize?: CSSProperties["fontSize"];
  allRightsReLineHeight?: CSSProperties["lineHeight"];
  privacyPolicyLeft?: CSSProperties["left"];
  privacyPolicyFontSize?: CSSProperties["fontSize"];
  privacyPolicyLineHeight?: CSSProperties["lineHeight"];
  licenseLeft?: CSSProperties["left"];
  licenseFontSize?: CSSProperties["fontSize"];
  licenseLineHeight?: CSSProperties["lineHeight"];
  aPILeft?: CSSProperties["left"];
  aPIFontSize?: CSSProperties["fontSize"];
  aPILineHeight?: CSSProperties["lineHeight"];
  linksWidth1?: CSSProperties["width"];
  linksHeight1?: CSSProperties["height"];
  marketplaceLeft?: CSSProperties["left"];
  marketplaceFontSize?: CSSProperties["fontSize"];
  marketplaceLineHeight?: CSSProperties["lineHeight"];
  exploreHelpCenterContaineLeft?: CSSProperties["left"];
  exploreHelpCenterContaineFontSize?: CSSProperties["fontSize"];
  exploreHelpCenterContaineLineHeight?: CSSProperties["lineHeight"];
  subscribeTop?: CSSProperties["top"];
  subscribeLeft?: CSSProperties["left"];
  subscribeWidth?: CSSProperties["width"];
  subscribeHeight?: CSSProperties["height"];
  subscribeToUpdatesLeft?: CSSProperties["left"];
  subscribeToUpdatesFontSize?: CSSProperties["fontSize"];
  subscribeToUpdatesLineHeight?: CSSProperties["lineHeight"];
  placeholderLeft?: CSSProperties["left"];
  placeholderFontSize?: CSSProperties["fontSize"];
  placeholderLineHeight?: CSSProperties["lineHeight"];
  fieldTitleTop?: CSSProperties["top"];
  fieldTitleLeft?: CSSProperties["left"];
  fieldTitleFontSize?: CSSProperties["fontSize"];
  fieldTitleLineHeight?: CSSProperties["lineHeight"];
  iconRight?: CSSProperties["right"];
  iconFontSize2?: CSSProperties["fontSize"];
  followBottom?: CSSProperties["bottom"];
  followLeft?: CSSProperties["left"];
  followWidth?: CSSProperties["width"];
  followHeight?: CSSProperties["height"];
  followUsLeft?: CSSProperties["left"];
  followUsFontSize?: CSSProperties["fontSize"];
  followUsLineHeight?: CSSProperties["lineHeight"];
  buttonsSocialLogoPlacehWidth?: CSSProperties["width"];
  buttonsSocialLogoPlacehHeight?: CSSProperties["height"];
  buttonsSocialLogoTwittWidth?: CSSProperties["width"];
  buttonsSocialLogoTwittHeight?: CSSProperties["height"];
  buttonsSocialLogoPinteWidth?: CSSProperties["width"];
  buttonsSocialLogoPinteHeight?: CSSProperties["height"];
  linksWidth2?: CSSProperties["width"];
  linksHeight2?: CSSProperties["height"];
  communityLeft?: CSSProperties["left"];
  communityFontSize?: CSSProperties["fontSize"];
  communityLineHeight?: CSSProperties["lineHeight"];
  profileFavoritesWaContainLeft?: CSSProperties["left"];
  profileFavoritesWaContainFontSize?: CSSProperties["fontSize"];
  profileFavoritesWaContainLineHeight?: CSSProperties["lineHeight"];
  languageRight?: CSSProperties["right"];
  languageWidth?: CSSProperties["width"];
  languageHeight?: CSSProperties["height"];
  regionLeft?: CSSProperties["left"];
  regionFontSize?: CSSProperties["fontSize"];
  regionLineHeight?: CSSProperties["lineHeight"];
  buttonsLabelIconTranspRight1?: CSSProperties["right"];
  buttonsLabelIconTranspWidth1?: CSSProperties["width"];
  buttonsLabelIconTranspHeight1?: CSSProperties["height"];
  linkGap1?: CSSProperties["gap"];
  lableFontSize1?: CSSProperties["fontSize"];
  lableLineHeight1?: CSSProperties["lineHeight"];
  iconFontSize3?: CSSProperties["fontSize"];
  theWorldsFirstRight?: CSSProperties["right"];
  theWorldsFirstBottom?: CSSProperties["bottom"];
  theWorldsFirstFontSize?: CSSProperties["fontSize"];
  theWorldsFirstLineHeight?: CSSProperties["lineHeight"];
  theWorldsFirstWidth?: CSSProperties["width"];
  theWorldsFirstHeight?: CSSProperties["height"];
};

const Footer: FunctionComponent<FooterType> = ({
  className = "",
  navigationWebFooterOnLWidth,
  navigationWebFooterOnLHeight,
  navigationWebFooterOnLPosition,
  navigationWebFooterOnLRight,
  navigationWebFooterOnLBottom,
  navigationWebFooterOnLLeft,
  lineIconRight,
  lineIconLeft,
  lineIconHeight,
  buttonsLabelIconTranspRight,
  buttonsLabelIconTranspBottom,
  buttonsLabelIconTranspWidth,
  buttonsLabelIconTranspHeight,
  linkGap,
  lableFontSize,
  lableLineHeight,
  iconFontSize,
  buttonsIconOutlineRestRight,
  buttonsIconOutlineRestBottom,
  buttonsIconOutlineRestWidth,
  buttonsIconOutlineRestHeight,
  iconFontSize1,
  linksBottom,
  linksLeft,
  linksWidth,
  linksHeight,
  allRightsReLeft,
  allRightsReFontSize,
  allRightsReLineHeight,
  privacyPolicyLeft,
  privacyPolicyFontSize,
  privacyPolicyLineHeight,
  licenseLeft,
  licenseFontSize,
  licenseLineHeight,
  aPILeft,
  aPIFontSize,
  aPILineHeight,
  linksWidth1,
  linksHeight1,
  marketplaceLeft,
  marketplaceFontSize,
  marketplaceLineHeight,
  exploreHelpCenterContaineLeft,
  exploreHelpCenterContaineFontSize,
  exploreHelpCenterContaineLineHeight,
  subscribeTop,
  subscribeLeft,
  subscribeWidth,
  subscribeHeight,
  subscribeToUpdatesLeft,
  subscribeToUpdatesFontSize,
  subscribeToUpdatesLineHeight,
  placeholderLeft,
  placeholderFontSize,
  placeholderLineHeight,
  fieldTitleTop,
  fieldTitleLeft,
  fieldTitleFontSize,
  fieldTitleLineHeight,
  iconRight,
  iconFontSize2,
  followBottom,
  followLeft,
  followWidth,
  followHeight,
  followUsLeft,
  followUsFontSize,
  followUsLineHeight,
  buttonsSocialLogoPlacehWidth,
  buttonsSocialLogoPlacehHeight,
  buttonsSocialLogoTwittWidth,
  buttonsSocialLogoTwittHeight,
  buttonsSocialLogoPinteWidth,
  buttonsSocialLogoPinteHeight,
  linksWidth2,
  linksHeight2,
  communityLeft,
  communityFontSize,
  communityLineHeight,
  profileFavoritesWaContainLeft,
  profileFavoritesWaContainFontSize,
  profileFavoritesWaContainLineHeight,
  languageRight,
  languageWidth,
  languageHeight,
  regionLeft,
  regionFontSize,
  regionLineHeight,
  buttonsLabelIconTranspRight1,
  buttonsLabelIconTranspWidth1,
  buttonsLabelIconTranspHeight1,
  linkGap1,
  lableFontSize1,
  lableLineHeight1,
  iconFontSize3,
  theWorldsFirstRight,
  theWorldsFirstBottom,
  theWorldsFirstFontSize,
  theWorldsFirstLineHeight,
  theWorldsFirstWidth,
  theWorldsFirstHeight,
}) => {
  const navigationWebFooterOnLStyle: CSSProperties = useMemo(() => {
    return {
      width: navigationWebFooterOnLWidth,
      height: navigationWebFooterOnLHeight,
      position: navigationWebFooterOnLPosition,
      right: navigationWebFooterOnLRight,
      bottom: navigationWebFooterOnLBottom,
      left: navigationWebFooterOnLLeft,
    };
  }, [
    navigationWebFooterOnLWidth,
    navigationWebFooterOnLHeight,
    navigationWebFooterOnLPosition,
    navigationWebFooterOnLRight,
    navigationWebFooterOnLBottom,
    navigationWebFooterOnLLeft,
  ]);

  const lineIconStyle: CSSProperties = useMemo(() => {
    return {
      right: lineIconRight,
      left: lineIconLeft,
      height: lineIconHeight,
    };
  }, [lineIconRight, lineIconLeft, lineIconHeight]);

  const buttonsLabelIconTranspStyle: CSSProperties = useMemo(() => {
    return {
      right: buttonsLabelIconTranspRight,
      bottom: buttonsLabelIconTranspBottom,
      width: buttonsLabelIconTranspWidth,
      height: buttonsLabelIconTranspHeight,
    };
  }, [
    buttonsLabelIconTranspRight,
    buttonsLabelIconTranspBottom,
    buttonsLabelIconTranspWidth,
    buttonsLabelIconTranspHeight,
  ]);

  const linkStyle: CSSProperties = useMemo(() => {
    return {
      gap: linkGap,
    };
  }, [linkGap]);

  const lableStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: lableFontSize,
      lineHeight: lableLineHeight,
    };
  }, [lableFontSize, lableLineHeight]);

  const iconStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: iconFontSize,
    };
  }, [iconFontSize]);

  const buttonsIconOutlineRestStyle: CSSProperties = useMemo(() => {
    return {
      right: buttonsIconOutlineRestRight,
      bottom: buttonsIconOutlineRestBottom,
      width: buttonsIconOutlineRestWidth,
      height: buttonsIconOutlineRestHeight,
    };
  }, [
    buttonsIconOutlineRestRight,
    buttonsIconOutlineRestBottom,
    buttonsIconOutlineRestWidth,
    buttonsIconOutlineRestHeight,
  ]);

  const icon1Style: CSSProperties = useMemo(() => {
    return {
      fontSize: iconFontSize1,
    };
  }, [iconFontSize1]);

  const linksStyle: CSSProperties = useMemo(() => {
    return {
      bottom: linksBottom,
      left: linksLeft,
      width: linksWidth,
      height: linksHeight,
    };
  }, [linksBottom, linksLeft, linksWidth, linksHeight]);

  const allRightsReStyle: CSSProperties = useMemo(() => {
    return {
      left: allRightsReLeft,
      fontSize: allRightsReFontSize,
      lineHeight: allRightsReLineHeight,
    };
  }, [allRightsReLeft, allRightsReFontSize, allRightsReLineHeight]);

  const privacyPolicyStyle: CSSProperties = useMemo(() => {
    return {
      left: privacyPolicyLeft,
      fontSize: privacyPolicyFontSize,
      lineHeight: privacyPolicyLineHeight,
    };
  }, [privacyPolicyLeft, privacyPolicyFontSize, privacyPolicyLineHeight]);

  const licenseStyle: CSSProperties = useMemo(() => {
    return {
      left: licenseLeft,
      fontSize: licenseFontSize,
      lineHeight: licenseLineHeight,
    };
  }, [licenseLeft, licenseFontSize, licenseLineHeight]);

  const aPIStyle: CSSProperties = useMemo(() => {
    return {
      left: aPILeft,
      fontSize: aPIFontSize,
      lineHeight: aPILineHeight,
    };
  }, [aPILeft, aPIFontSize, aPILineHeight]);

  const links1Style: CSSProperties = useMemo(() => {
    return {
      width: linksWidth1,
      height: linksHeight1,
    };
  }, [linksWidth1, linksHeight1]);

  const marketplaceStyle: CSSProperties = useMemo(() => {
    return {
      left: marketplaceLeft,
      fontSize: marketplaceFontSize,
      lineHeight: marketplaceLineHeight,
    };
  }, [marketplaceLeft, marketplaceFontSize, marketplaceLineHeight]);

  const exploreHelpCenterContainerStyle: CSSProperties = useMemo(() => {
    return {
      left: exploreHelpCenterContaineLeft,
      fontSize: exploreHelpCenterContaineFontSize,
      lineHeight: exploreHelpCenterContaineLineHeight,
    };
  }, [
    exploreHelpCenterContaineLeft,
    exploreHelpCenterContaineFontSize,
    exploreHelpCenterContaineLineHeight,
  ]);

  const subscribeStyle: CSSProperties = useMemo(() => {
    return {
      top: subscribeTop,
      left: subscribeLeft,
      width: subscribeWidth,
      height: subscribeHeight,
    };
  }, [subscribeTop, subscribeLeft, subscribeWidth, subscribeHeight]);

  const subscribeToUpdatesStyle: CSSProperties = useMemo(() => {
    return {
      left: subscribeToUpdatesLeft,
      fontSize: subscribeToUpdatesFontSize,
      lineHeight: subscribeToUpdatesLineHeight,
    };
  }, [
    subscribeToUpdatesLeft,
    subscribeToUpdatesFontSize,
    subscribeToUpdatesLineHeight,
  ]);

  const placeholderStyle: CSSProperties = useMemo(() => {
    return {
      left: placeholderLeft,
      fontSize: placeholderFontSize,
      lineHeight: placeholderLineHeight,
    };
  }, [placeholderLeft, placeholderFontSize, placeholderLineHeight]);

  const fieldTitleStyle: CSSProperties = useMemo(() => {
    return {
      top: fieldTitleTop,
      left: fieldTitleLeft,
      fontSize: fieldTitleFontSize,
      lineHeight: fieldTitleLineHeight,
    };
  }, [fieldTitleTop, fieldTitleLeft, fieldTitleFontSize, fieldTitleLineHeight]);

  const icon2Style: CSSProperties = useMemo(() => {
    return {
      right: iconRight,
      fontSize: iconFontSize2,
    };
  }, [iconRight, iconFontSize2]);

  const followStyle: CSSProperties = useMemo(() => {
    return {
      bottom: followBottom,
      left: followLeft,
      width: followWidth,
      height: followHeight,
    };
  }, [followBottom, followLeft, followWidth, followHeight]);

  const followUsStyle: CSSProperties = useMemo(() => {
    return {
      left: followUsLeft,
      fontSize: followUsFontSize,
      lineHeight: followUsLineHeight,
    };
  }, [followUsLeft, followUsFontSize, followUsLineHeight]);

  const buttonsSocialLogoPlacehStyle: CSSProperties = useMemo(() => {
    return {
      width: buttonsSocialLogoPlacehWidth,
      height: buttonsSocialLogoPlacehHeight,
    };
  }, [buttonsSocialLogoPlacehWidth, buttonsSocialLogoPlacehHeight]);

  const buttonsSocialLogoTwittStyle: CSSProperties = useMemo(() => {
    return {
      width: buttonsSocialLogoTwittWidth,
      height: buttonsSocialLogoTwittHeight,
    };
  }, [buttonsSocialLogoTwittWidth, buttonsSocialLogoTwittHeight]);

  const buttonsSocialLogoPinteStyle: CSSProperties = useMemo(() => {
    return {
      width: buttonsSocialLogoPinteWidth,
      height: buttonsSocialLogoPinteHeight,
    };
  }, [buttonsSocialLogoPinteWidth, buttonsSocialLogoPinteHeight]);

  const links2Style: CSSProperties = useMemo(() => {
    return {
      width: linksWidth2,
      height: linksHeight2,
    };
  }, [linksWidth2, linksHeight2]);

  const communityStyle: CSSProperties = useMemo(() => {
    return {
      left: communityLeft,
      fontSize: communityFontSize,
      lineHeight: communityLineHeight,
    };
  }, [communityLeft, communityFontSize, communityLineHeight]);

  const profileFavoritesWaContainerStyle: CSSProperties = useMemo(() => {
    return {
      left: profileFavoritesWaContainLeft,
      fontSize: profileFavoritesWaContainFontSize,
      lineHeight: profileFavoritesWaContainLineHeight,
    };
  }, [
    profileFavoritesWaContainLeft,
    profileFavoritesWaContainFontSize,
    profileFavoritesWaContainLineHeight,
  ]);

  const languageStyle: CSSProperties = useMemo(() => {
    return {
      right: languageRight,
      width: languageWidth,
      height: languageHeight,
    };
  }, [languageRight, languageWidth, languageHeight]);

  const regionStyle: CSSProperties = useMemo(() => {
    return {
      left: regionLeft,
      fontSize: regionFontSize,
      lineHeight: regionLineHeight,
    };
  }, [regionLeft, regionFontSize, regionLineHeight]);

  const buttonsLabelIconTransp1Style: CSSProperties = useMemo(() => {
    return {
      right: buttonsLabelIconTranspRight1,
      width: buttonsLabelIconTranspWidth1,
      height: buttonsLabelIconTranspHeight1,
    };
  }, [
    buttonsLabelIconTranspRight1,
    buttonsLabelIconTranspWidth1,
    buttonsLabelIconTranspHeight1,
  ]);

  const link1Style: CSSProperties = useMemo(() => {
    return {
      gap: linkGap1,
    };
  }, [linkGap1]);

  const lable1Style: CSSProperties = useMemo(() => {
    return {
      fontSize: lableFontSize1,
      lineHeight: lableLineHeight1,
    };
  }, [lableFontSize1, lableLineHeight1]);

  const icon3Style: CSSProperties = useMemo(() => {
    return {
      fontSize: iconFontSize3,
    };
  }, [iconFontSize3]);

  const theWorldsFirstStyle: CSSProperties = useMemo(() => {
    return {
      right: theWorldsFirstRight,
      bottom: theWorldsFirstBottom,
      fontSize: theWorldsFirstFontSize,
      lineHeight: theWorldsFirstLineHeight,
      width: theWorldsFirstWidth,
      height: theWorldsFirstHeight,
    };
  }, [
    theWorldsFirstRight,
    theWorldsFirstBottom,
    theWorldsFirstFontSize,
    theWorldsFirstLineHeight,
    theWorldsFirstWidth,
    theWorldsFirstHeight,
  ]);

  return (
    <div
      className={`w-[1440px] max-w-full h-[450px] text-left text-base text-primary font-heading-h4 ${className}`}
      style={navigationWebFooterOnLStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-ebf0f0-soft-onlight mix-blend-normal" />
      <img
        className="absolute w-full top-[calc(50%_+_139px)] right-[-0.5px] left-[0.5px] max-w-full overflow-hidden h-px mix-blend-normal"
        alt=""
        src="/line.svg"
        style={lineIconStyle}
      />
      <div
        className="absolute right-[96px] bottom-[21px] w-[73px] h-[46px] text-sm"
        style={buttonsLabelIconTranspStyle}
      >
        <div
          className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_37px)] flex flex-row items-center justify-center gap-[6px]"
          style={linkStyle}
        >
          <b className="relative leading-[21px]" style={lableStyle}>
            English
          </b>
          <div
            className="relative text-lg font-icons-20 text-center"
            style={iconStyle}
          >
            
          </div>
        </div>
      </div>
      <div
        className="absolute right-[32px] bottom-[20px] w-[46px] h-[46px] text-center text-lg font-icons-20"
        style={buttonsIconOutlineRestStyle}
      >
        <div className="absolute h-[102.17%] w-[102.17%] top-[-1.09%] right-[-1.09%] bottom-[-1.09%] left-[-1.09%] rounded-4xl box-border mix-blend-normal border-[1px] border-solid border-cfdbd5-outline-onlight" />
        <div
          className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_9px)]"
          style={icon1Style}
        >
          
        </div>
      </div>
      <div
        className="absolute bottom-[34px] left-[32px] w-[367px] h-[18px] overflow-hidden text-xs"
        style={linksStyle}
      >
        <div
          className="absolute top-[calc(50%_-_9px)] left-[216px] leading-[18px] font-medium text-d5d5b"
          style={allRightsReStyle}
        >
          © 2021 All rights reserved
        </div>
        <b
          className="absolute top-[calc(50%_-_9px)] left-[0px] leading-[18px]"
          style={privacyPolicyStyle}
        >
          Privacy Policy
        </b>
        <b
          className="absolute top-[calc(50%_-_9px)] left-[105px] leading-[18px]"
          style={licenseStyle}
        >
          License
        </b>
        <b
          className="absolute top-[calc(50%_-_9px)] left-[173px] leading-[18px]"
          style={aPIStyle}
        >
          API
        </b>
      </div>
      <div
        className="absolute top-[calc(50%_-_160px)] left-[calc(50%_-_97px)] w-[122px] h-[213px]"
        style={links1Style}
      >
        <b
          className="absolute top-[calc(50%_-_105.5px)] left-[0px] leading-[24px]"
          style={marketplaceStyle}
        >
          Marketplace
        </b>
        <b
          className="absolute top-[calc(50%_-_67.5px)] left-[0px] text-sm leading-[34px] text-d5d5b"
          style={exploreHelpCenterContainerStyle}
        >
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            Explore
          </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            Help Center
          </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            Become a Partner
          </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            About Us
          </p>
          <p className="m-0">Platform Status</p>
        </b>
      </div>
      <div
        className="absolute top-[66px] left-[81px] w-[301px] h-[90px]"
        style={subscribeStyle}
      >
        <b
          className="absolute top-[calc(50%_-_45px)] left-[0px] leading-[24px]"
          style={subscribeToUpdatesStyle}
        >
          Subscribe to updates
        </b>
        <div className="absolute h-4/5 w-full top-[20%] right-[0%] bottom-[0%] left-[0%] text-sm text-d5d5b">
          <div className="absolute h-[68.06%] w-[100.33%] top-[32.64%] right-[-0.17%] bottom-[-0.69%] left-[-0.17%] rounded-3xl box-border mix-blend-normal border-[1px] border-solid border-cfdbd5-outline-onlight" />
          <b
            className="absolute top-[calc(50%_-_0px)] left-[20px] leading-[21px]"
            style={placeholderStyle}
          >
            Enter your e-mail
          </b>
          <div
            className="absolute top-[-2px] left-[0px] text-xs leading-[18px] font-medium text-primary"
            style={fieldTitleStyle}
          >{` `}</div>
          <div
            className="absolute top-[calc(50%_+_3px)] right-[18px] text-lg font-icons-20 text-center"
            style={icon2Style}
          >
            
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-[149px] left-[80.5px] w-[262px] h-[89px]"
        style={followStyle}
      >
        <b
          className="absolute top-[calc(50%_-_43.5px)] left-[0.5px] leading-[24px]"
          style={followUsStyle}
        >
          Follow us
        </b>
        <div className="absolute h-[51.69%] w-[17.56%] top-[48.31%] right-[82.44%] bottom-[0%] left-[0%]">
          <div className="absolute h-[102.17%] w-[102.17%] top-[-1.09%] right-[-1.09%] bottom-[-1.09%] left-[-1.09%] rounded-4xl bg-ffffff box-border mix-blend-normal border-[1px] border-solid border-without-fill" />
          <img
            className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] w-4 h-4"
            alt=""
            src="/buttons--social--logo-placeholder--facebook.svg"
            style={buttonsSocialLogoPlacehStyle}
          />
        </div>
        <img
          className="absolute h-[51.69%] w-[17.56%] top-[48.31%] right-[61.83%] bottom-[0%] left-[20.61%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/buttons-icon--filled--resting--onlight-copy.svg"
        />
        <div className="absolute h-[51.69%] w-[17.56%] top-[48.31%] right-[41.22%] bottom-[0%] left-[41.22%]">
          <div className="absolute h-[102.17%] w-[102.17%] top-[-1.09%] right-[-1.09%] bottom-[-1.09%] left-[-1.09%] rounded-4xl bg-without-fill box-border mix-blend-normal border-[1px] border-solid border-without-fill" />
          <img
            className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] w-4 h-4"
            alt=""
            src="/buttons-social--logo--twitter.svg"
            style={buttonsSocialLogoTwittStyle}
          />
        </div>
        <div className="absolute h-[51.69%] w-[17.56%] top-[48.31%] right-[20.61%] bottom-[0%] left-[61.83%]">
          <div className="absolute h-[102.17%] w-[102.17%] top-[-1.09%] right-[-1.09%] bottom-[-1.09%] left-[-1.09%] rounded-4xl bg-without-fill box-border mix-blend-normal border-[1px] border-solid border-without-fill" />
          <img
            className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] w-4 h-4"
            alt=""
            src="/buttons-social--logo--pinterest.svg"
            style={buttonsSocialLogoPinteStyle}
          />
        </div>
        <img
          className="absolute h-[51.69%] w-[17.56%] top-[48.31%] right-[0%] bottom-[0%] left-[82.44%] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src="/buttons-icon--filled--resting--onlight-copy-4@2x.png"
        />
      </div>
      <div
        className="absolute top-[calc(50%_-_160px)] left-[calc(50%_+_120px)] w-[102px] h-[248px]"
        style={links2Style}
      >
        <b
          className="absolute top-[calc(50%_-_123px)] left-[0px] leading-[24px]"
          style={communityStyle}
        >
          Community
        </b>
        <b
          className="absolute top-[calc(50%_-_85px)] left-[0px] text-sm leading-[34px] text-d5d5b"
          style={profileFavoritesWaContainerStyle}
        >
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            Profile
          </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            Favorites
          </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            Watchlist
          </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            My Collections
          </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            Rankings
          </p>
          <p className="m-0">Activity</p>
        </b>
      </div>
      <div
        className="absolute top-[calc(50%_-_159px)] right-[77px] w-[305px] h-[182px] text-sm"
        style={languageStyle}
      >
        <b
          className="absolute top-[calc(50%_-_91px)] left-[0px] text-base leading-[24px]"
          style={regionStyle}
        >
          Region
        </b>
        <div
          className="absolute top-[calc(50%_+_45px)] right-[147px] w-[158px] h-[46px]"
          style={buttonsLabelIconTransp1Style}
        >
          <div className="absolute h-[102.17%] w-[100.63%] top-[-1.09%] right-[-0.32%] bottom-[-1.09%] left-[-0.32%] rounded-4xl box-border mix-blend-normal border-[1px] border-solid border-cfdbd5-outline-onlight" />
          <div
            className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_65.5px)] flex flex-row items-center justify-center gap-[6px]"
            style={link1Style}
          >
            <b className="relative leading-[21px]" style={lable1Style}>
              Currency - USD
            </b>
            <div
              className="relative text-lg font-icons-20 text-center"
              style={icon3Style}
            >
              
            </div>
          </div>
        </div>
        <div
          className="absolute right-[0px] bottom-[71px] leading-[21px] text-d5d5b inline-block w-[305px] h-[71px]"
          style={theWorldsFirstStyle}
        >
          The world’s first marketplace for collectibles and non-fungible tokens
          NFTs where anything is possible and all are welcome
        </div>
      </div>
    </div>
  );
};

export default Footer;
