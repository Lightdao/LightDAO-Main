import { FunctionComponent } from "react";
import MarketplaceItemV1OnLig1 from "./MarketplaceItemV1OnLig1";
import ButtonIconOutline from "./ButtonIconOutline";

export type TrendingType = {
  className?: string;
};

const Trending: FunctionComponent<TrendingType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[109.563rem] left-[5rem] w-[80rem] h-[31.188rem] text-left text-[0.875rem] text-d5d5b font-heading-h4 ${className}`}
    >
      <div className="absolute h-[83.77%] w-full top-[16.23%] right-[0%] bottom-[0%] left-[0%]">
        <MarketplaceItemV1OnLig1
          buttonsSocialLogoFlow="/buttons-social--logo--flow@2x.png"
          titleCopy="0.45 Flow"
          title="May Bring Back"
          art="/art@2x.png"
          author="/author.svg"
        />
        <MarketplaceItemV1OnLig1
          buttonsSocialLogoFlow="/buttons-social--logo--flow@2x.png"
          titleCopy="17.59 Flow"
          title="Agents Were Behind"
          art="/art@2x.png"
          author="/author1.svg"
          propRight="25.47%"
          propLeft="50.94%"
          propBackgroundColor="#fff"
        />
        <MarketplaceItemV1OnLig1
          buttonsSocialLogoFlow="/buttons-social--logo--tezos.svg"
          titleCopy="7 XTZ"
          title="Auto Technology"
          art="/art@2x.png"
          author="/author2.svg"
          propRight="50.94%"
          propLeft="25.47%"
          propBackgroundColor="unset"
        />
        <MarketplaceItemV1OnLig1
          buttonsSocialLogoFlow="/buttons-social--logo--flow@2x.png"
          titleCopy="3 Flow"
          title="Front Desk"
          art="/art@2x.png"
          author="/author3.svg"
          propRight="0%"
          propLeft="76.41%"
          propBackgroundColor="unset"
        />
      </div>
      <div className="absolute top-[0.563rem] left-[0rem] text-[1.5rem] font-extrabold text-primary">
        Trending items
      </div>
      <ButtonIconOutline
        icon=""
        buttonsIconOutlineRestPosition="absolute"
        buttonsIconOutlineRestRight="0rem"
        buttonsIconOutlineRestBottom="unset"
        buttonsIconOutlineRestWidth="2.875rem"
        buttonsIconOutlineRestHeight="2.875rem"
        buttonsIconOutlineRestTop="0rem"
        iconFontSize="1.125rem"
      />
      <ButtonIconOutline
        icon=""
        buttonsIconOutlineRestPosition="absolute"
        buttonsIconOutlineRestRight="3.375rem"
        buttonsIconOutlineRestBottom="unset"
        buttonsIconOutlineRestWidth="2.875rem"
        buttonsIconOutlineRestHeight="2.875rem"
        buttonsIconOutlineRestTop="0rem"
        iconFontSize="1.125rem"
      />
    </div>
  );
};

export default Trending;
