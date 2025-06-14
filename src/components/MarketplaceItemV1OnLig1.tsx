import { FunctionComponent, useMemo, type CSSProperties } from "react";
import IconTransparent from "./IconTransparent";
import ButtonsIconTransparent from "./ButtonsIconTransparent";

export type MarketplaceItemV1OnLig1Type = {
  className?: string;
  buttonsSocialLogoFlow?: string;
  titleCopy?: string;
  title?: string;
  art?: string;
  author?: string;

  /** Style props */
  propRight?: CSSProperties["right"];
  propLeft?: CSSProperties["left"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const MarketplaceItemV1OnLig1: FunctionComponent<
  MarketplaceItemV1OnLig1Type
> = ({
  className = "",
  buttonsSocialLogoFlow,
  titleCopy,
  title,
  art,
  author,
  propRight,
  propLeft,
  propBackgroundColor,
}) => {
  const marketplaceItemV1OnLigStyle: CSSProperties = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  const bg2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className={`absolute h-full w-[23.59%] top-[0%] right-[76.41%] bottom-[0%] left-[0%] bg-ffffff text-left text-[0.875rem] text-d5d5b font-heading-h4 ${className}`}
      style={marketplaceItemV1OnLigStyle}
    >
      <div
        className="absolute h-[100.24%] w-[100.33%] top-[-0.12%] right-[-0.17%] bottom-[-0.12%] left-[-0.17%] rounded-2xl box-border mix-blend-normal border-[1px] border-solid border-cfdbd5-outline-onlight"
        style={bg2Style}
      />
      <div className="absolute top-[23.25rem] left-[1.5rem] flex flex-row items-center justify-start gap-[0.375rem]">
        <img
          className="w-[1.375rem] relative h-[1.375rem] object-cover"
          alt=""
          src={buttonsSocialLogoFlow}
        />
        <div className="relative leading-[1.313rem]">from</div>
        <b className="relative leading-[1.313rem] text-primary">{titleCopy}</b>
      </div>
      <IconTransparent
        icon=""
        lable="99"
        buttonsIconLabelTranspWidth="2.875rem"
        buttonsIconLabelTranspPosition="absolute"
        buttonsIconLabelTranspRight="1.5rem"
        buttonsIconLabelTranspBottom="0.75rem"
        buttonsIconLabelTranspHeight="2.875rem"
        linkLeft="calc(50% - 22.5px)"
        linkGap="0.5rem"
        iconFontSize="1.125rem"
        lableFontSize="0.875rem"
        lableLineHeight="1.313rem"
      />
      <div className="absolute top-[21.313rem] left-[1.5rem] text-[1.125rem] leading-[1.5rem] font-extrabold text-primary">
        {title}
      </div>
      <img
        className="absolute w-[calc(100%_-_48px)] top-[4.5rem] right-[1.5rem] left-[1.5rem] rounded-3xs max-w-full overflow-hidden h-[15.875rem] object-cover"
        alt=""
        src={art}
      />
      <ButtonsIconTransparent
        buttonsIconTransparentPosition="absolute"
        buttonsIconTransparentTop="1rem"
        buttonsIconTransparentRight="0.813rem"
        buttonsIconTransparentWidth="2.875rem"
        buttonsIconTransparentHeight="2.875rem"
        iconFontSize="1.125rem"
      />
      <img
        className="absolute top-[1.375rem] left-[1.625rem] w-[5.125rem] h-[2.125rem]"
        alt=""
        src={author}
      />
    </div>
  );
};

export default MarketplaceItemV1OnLig1;
