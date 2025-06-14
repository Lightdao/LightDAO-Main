import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type HeroCollectionItemLightType = {
  className?: string;
  img?: string;
  trendyRobot?: string;
  byXuanJingyi?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propLeft1?: CSSProperties["left"];
  propLeft2?: CSSProperties["left"];
};

const HeroCollectionItemLight: FunctionComponent<
  HeroCollectionItemLightType
> = ({
  className = "",
  img,
  trendyRobot,
  byXuanJingyi,
  propTop,
  propLeft,
  propLeft1,
  propLeft2,
}) => {
  const collectionsItemV1OnLig1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const trendyRobot1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const byXuanJingyi1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft2,
    };
  }, [propLeft2]);

  return (
    <div
      className={`absolute top-[21.75rem] left-[40.75rem] w-[18.875rem] h-[20.25rem] text-center text-[1.5rem] text-ffffff font-heading-h4 ${className}`}
      style={collectionsItemV1OnLig1Style}
    >
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={img}
      />
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm [background:linear-gradient(0deg,_#000,_rgba(0,_0,_0,_0))] opacity-[0.4] mix-blend-normal" />
      <div
        className="absolute bottom-[2.875rem] left-[20.86%] font-extrabold"
        style={trendyRobot1Style}
      >
        {trendyRobot}
      </div>
      <div
        className="absolute bottom-[1.438rem] left-[33.11%] text-[0.875rem] leading-[1.313rem]"
        style={byXuanJingyi1Style}
      >
        {byXuanJingyi}
      </div>
    </div>
  );
};

export default HeroCollectionItemLight;
