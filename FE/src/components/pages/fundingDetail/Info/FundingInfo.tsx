import { FundingDetail } from "@/Model/Funding";
import FundingDetailBtnSection from "./FundingDetailBtnSection";
import FundingInfoCost from "./FundingInfoCost";
import FundingInfoTag from "./FundingInfoTag";
import InfoDate from "./InfoDate";
import InfoHeader from "./InfoHeader";
import InfoOption from "./InfoOption";
import InfoDonate from "./InfoDonate";

export default function FundingInfo({
  fundingData,
}: Readonly<{
  fundingData: FundingDetail;
}>) {
  const {
    coin,
    funding: {
      university,
      curMoney,
      endTime,
      estimateStartTime,
      fundingId,
      goalMoney,
      rate,
      shortDescription,
      startTime,
      title,
      type,
    },
    isMine, //TODO: 여부에 따라 버튼 다르게 보여주기
    member,
    options,
  } = fundingData;
  return (
    <section className="w-[35.375rem] flex flex-col shrink-0">
      <FundingInfoTag member={member} type={type} university={university} />
      <InfoHeader title={title} shortDescription={shortDescription} />
      <InfoDate
        curMoney={curMoney}
        endTime={endTime}
        estimateStartTime={estimateStartTime}
        goalMoney={goalMoney}
        startTime={startTime}
        rate={rate}
      />
      {type === "GIFT" && <InfoOption options={options} />}
      {type === "DONATE" && <InfoDonate />}
      <FundingInfoCost coin={coin} type={type} />
      <FundingDetailBtnSection fundingId={fundingId} type={type} />
    </section>
  );
}
