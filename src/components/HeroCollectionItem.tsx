import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type HeroCollectionItemType = {
  className?: string;
  trendyRobot?: string;
  byXuanJingyi?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propLeft1?: CSSProperties["left"];
  propLeft2?: CSSProperties["left"];
};

const HeroCollectionItem: FunctionComponent<HeroCollectionItemType> = ({
  className = "",
  trendyRobot,
  byXuanJingyi,
  propTop,
  propLeft,
  propLeft1,
  propLeft2,
}) => {
  const collectionsItemV1OnLigStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const trendyRobotStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const byXuanJingyiStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft2,
    };
  }, [propLeft2]);

  return (
    <div
      className={`absolute top-[0rem] left-[40.75rem] w-[18.875rem] h-[20.25rem] text-center text-[1.5rem] text-ffffff font-heading-h4 ${className}`}
      style={collectionsItemV1OnLigStyle}
    >
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/img@2x.png"
      />
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm [background:linear-gradient(0deg,_#000,_rgba(0,_0,_0,_0))] opacity-[0.4] mix-blend-normal" />
      <div
        className="absolute bottom-[2.875rem] left-[23.84%] font-extrabold"
        style={trendyRobotStyle}
      >
        {trendyRobot}
      </div>
      <div
        className="absolute bottom-[1.438rem] left-[34.11%] text-[0.875rem] leading-[1.313rem]"
        style={byXuanJingyiStyle}
      >
        {byXuanJingyi}
      </div>
    </div>
  );
};

export default HeroCollectionItem;
