import { FunctionComponent } from "react";
import ActiveButton from "./ActiveButton";
import HeroCollectionItem from "./HeroCollectionItem";
import HeroCollectionItemLight from "./HeroCollectionItemLight";

export type ExploreAndCollectNFTsContainerType = {
  className?: string;
};

const ExploreAndCollectNFTsContainer: FunctionComponent<
  ExploreAndCollectNFTsContainerType
> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[7.75rem] left-[5rem] w-[80rem] h-[42rem] text-center text-[1.5rem] text-ffffff font-heading-h4 ${className}`}
    >
      <div className="absolute top-[0rem] left-[0rem] w-[39.25rem] h-[42rem] text-[2.625rem]">
        <img
          className="absolute top-[0rem] left-[0rem] w-[39.25rem] h-[42rem] object-cover"
          alt=""
          src="/bg@2x.png"
        />
        <div className="absolute top-[27.313rem] left-[calc(50%_-_257px)] w-[32.125rem] h-[6.688rem]">
          <div className="absolute top-[calc(50%_-_53.5px)] left-[0.58%] font-extrabold">
            Explore and collect NFTs
          </div>
          <div className="absolute w-[90.66%] top-[55.14%] left-[4.67%] text-[1rem] leading-[1.5rem] inline-block">{`Our marketplace is the world's first and largest NFT market for independent creators worldwide `}</div>
        </div>
        <ActiveButton
          lable="See 340,590 items"
          buttonsLabelFilledActiHeight="2.875rem"
          buttonsLabelFilledActiPosition="absolute"
          buttonsLabelFilledActiTop="calc(50% + 240px)"
          buttonsLabelFilledActiRight="unset"
          buttonsLabelFilledActiWidth="15.063rem"
          buttonsLabelFilledActiLeft="calc(50% - 121px)"
          lableLeft="22.74%"
          lableFontSize="0.875rem"
          lableLineHeight="1.313rem"
        />
      </div>
      <HeroCollectionItem
        trendyRobot="Trendy Robot"
        byXuanJingyi="by Xuan Jingyi"
      />
      <HeroCollectionItemLight
        img="/img@2x.png"
        trendyRobot="Mutant Sqaure"
        byXuanJingyi="by Marco Alves"
      />
      <HeroCollectionItemLight
        img="/img@2x.png"
        trendyRobot="Meta Angels"
        byXuanJingyi="by Pan Su"
        propTop="0rem"
        propLeft="61.125rem"
        propLeft1="25.17%"
        propLeft2="39.07%"
      />
      <HeroCollectionItemLight
        img="/img@2x.png"
        trendyRobot="Immersive Toys"
        byXuanJingyi="by Julian Gruber"
        propTop="21.75rem"
        propLeft="61.125rem"
        propLeft1="19.21%"
        propLeft2="32.12%"
      />
    </div>
  );
};

export default ExploreAndCollectNFTsContainer;
