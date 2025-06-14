import { FunctionComponent, useMemo, type CSSProperties } from "react";
import ButtonIcon from "./ButtonIcon";

export type MarketplaceItemV1OnLigType = {
  className?: string;
  img?: string;
  name1?: string;
  buttonsSocialLogoEthereum?: string;
  priceAuction?: string;
  title?: string;
  art?: string;
  lable?: string;
  lable1?: string;

  /** Style props */
  propRight?: CSSProperties["right"];
  propLeft?: CSSProperties["left"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propLeft1?: CSSProperties["left"];
  propLeft2?: CSSProperties["left"];
};

const MarketplaceItemV1OnLig: FunctionComponent<MarketplaceItemV1OnLigType> = ({
  className = "",
  img,
  name1,
  buttonsSocialLogoEthereum,
  priceAuction,
  title,
  art,
  lable,
  lable1,
  propRight,
  propLeft,
  propBackgroundColor,
  propLeft1,
  propLeft2,
}) => {
  const marketplaceItemV1OnLig1Style: CSSProperties = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  const bg3Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const link3Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const link3Style1: CSSProperties = useMemo(() => {
    return {
      left: propLeft2,
    };
  }, [propLeft2]);

  return (
    <div
      className={`absolute h-full w-[23.59%] top-[0%] right-[76.41%] bottom-[0%] left-[0%] bg-ffffff text-left text-[0.75rem] text-primary font-heading-h4 ${className}`}
      style={marketplaceItemV1OnLig1Style}
    >
      <div
        className="absolute h-[100.22%] w-[100.33%] top-[-0.11%] right-[-0.17%] bottom-[-0.11%] left-[-0.17%] rounded-2xl box-border mix-blend-normal border-[1px] border-solid border-cfdbd5-outline-onlight"
        style={bg3Style}
      />
      <div className="absolute right-[1rem] bottom-[1.563rem] flex flex-row items-center justify-end gap-[0.5rem] text-right text-[0.875rem]">
        <img
          className="w-[1.75rem] relative rounded-[50%] h-[1.75rem] object-cover"
          alt=""
          src={img}
        />
        <div className="relative leading-[1.313rem]">{name1}</div>
      </div>
      <div className="absolute top-[calc(50%_+_129px)] right-[1rem] flex flex-row items-center justify-end gap-[0.5rem] text-right text-[1rem]">
        <img
          className="w-[1rem] relative h-[1rem] object-cover"
          alt=""
          src={buttonsSocialLogoEthereum}
        />
        <b className="relative leading-[1.5rem]">{priceAuction}</b>
      </div>
      <div className="absolute bottom-[4.938rem] left-[1rem] leading-[1.125rem] font-medium text-d5d5b">
        Price
      </div>
      <img
        className="absolute w-[calc(100%_-_30px)] top-[calc(50%_+_165px)] right-[0.938rem] left-[0.938rem] max-w-full overflow-hidden h-[0.063rem] mix-blend-normal"
        alt=""
        src="/line1.svg"
      />
      <div className="absolute bottom-[1.813rem] left-[1rem] leading-[1.125rem] font-medium text-d5d5b">
        Author
      </div>
      <div className="absolute top-[19.75rem] left-[1rem] text-[1.125rem] leading-[1.5rem] font-extrabold">
        {title}
      </div>
      <img
        className="absolute w-full top-[0rem] right-[0rem] left-[0rem] rounded-t-sm rounded-b-none max-w-full overflow-hidden h-[18.875rem] object-cover"
        alt=""
        src={art}
      />
      <ButtonIcon
        icon=""
        lable="24"
        buttonsIconLabelOutlinWidth="5.125rem"
        buttonsIconLabelOutlinPosition="absolute"
        buttonsIconLabelOutlinTop="0.75rem"
        buttonsIconLabelOutlinRight="0.75rem"
        buttonsIconLabelOutlinLeft="unset"
        buttonsIconLabelOutlinHeight="2.875rem"
        bgWidth="101.22%"
        bgRight="-0.61%"
        bgLeft="-0.61%"
        bgBackgroundColor="#fff"
        linkLeft="calc(50% - 22.5px)"
        linkGap="0.5rem"
        iconFontSize="1.125rem"
        lableFontSize="0.875rem"
        lableLineHeight="1.313rem"
      />
      <ButtonIcon
        icon=""
        lable="10:40:57"
        buttonsIconLabelOutlinWidth="8rem"
        buttonsIconLabelOutlinPosition="absolute"
        buttonsIconLabelOutlinTop="0.75rem"
        buttonsIconLabelOutlinRight="unset"
        buttonsIconLabelOutlinLeft="0.75rem"
        buttonsIconLabelOutlinHeight="2.875rem"
        bgWidth="100.78%"
        bgRight="-0.39%"
        bgLeft="-0.39%"
        bgBackgroundColor="#fff"
        linkLeft="calc(50% - 44px)"
        linkGap="0.5rem"
        iconFontSize="1.125rem"
        lableFontSize="0.875rem"
        lableLineHeight="1.313rem"
      />
    </div>
  );
};

export default MarketplaceItemV1OnLig;
