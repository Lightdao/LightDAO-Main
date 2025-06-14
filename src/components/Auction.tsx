import { FunctionComponent } from "react";
import ButtonIconOutline from "./ButtonIconOutline";
import MarketplaceItemV1OnLig from "./MarketplaceItemV1OnLig";

export type AuctionType = {
  className?: string;
};

const Auction: FunctionComponent<AuctionType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[52.25rem] left-[5rem] w-[80rem] h-[33.938rem] text-left text-[1.5rem] text-primary font-heading-h4 ${className}`}
    >
      <div className="absolute top-[0.563rem] left-[0rem] font-extrabold">
        Running auctions
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
      <div className="absolute h-[85.08%] w-full top-[14.92%] right-[0%] bottom-[0%] left-[0%] text-[0.75rem]">
        <MarketplaceItemV1OnLig
          img="/img@2x.png"
          name1="Martina Brito"
          buttonsSocialLogoEthereum="/buttons-social--logo--ethereum@2x.png"
          priceAuction="1.90 Eth"
          title="Right Messages and Memes"
          art="/art@2x.png"
          lable="24"
          lable1="10:40:57"
        />
        <MarketplaceItemV1OnLig
          img="/img@2x.png"
          name1="Langke Zambo"
          buttonsSocialLogoEthereum="/buttons-social--logo--flow@2x.png"
          priceAuction="0.53 Flow"
          title="Free Way to Back Up"
          art="/art@2x.png"
          lable="20"
          lable1="15:32:10"
          propRight="25.47%"
          propLeft="50.94%"
          propBackgroundColor="unset"
          propLeft1="calc(50% - 22.5px)"
          propLeft2="calc(50% - 42.5px)"
        />
        <MarketplaceItemV1OnLig
          img="/img@2x.png"
          name1="Ham Chuwon"
          buttonsSocialLogoEthereum="/buttons-social--logo--flow@2x.png"
          priceAuction="0.45 Flow"
          title="Brick-and-Mortar Travails"
          art="/art@2x.png"
          lable="19"
          lable1="06:41:10"
          propRight="50.94%"
          propLeft="25.47%"
          propBackgroundColor="#fff"
          propLeft1="calc(50% - 21.5px)"
          propLeft2="calc(50% - 43px)"
        />
        <MarketplaceItemV1OnLig
          img="/img@2x.png"
          name1="Shirai Subaru"
          buttonsSocialLogoEthereum="/buttons-social--logo--ethereum@2x.png"
          priceAuction="2.43 Eth"
          title="Patturb and Waymo"
          art="/art@2x.png"
          lable="12"
          lable1="03:39:57"
          propRight="0%"
          propLeft="76.41%"
          propBackgroundColor="unset"
          propLeft1="calc(50% - 21px)"
          propLeft2="calc(50% - 45px)"
        />
      </div>
    </div>
  );
};

export default Auction;
