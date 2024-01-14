"use client";
import usePledge from "@/hooks/usePledge";
import CostInfo from "./CostInfo";
import InfoSection from "../../common/InfoSection";
import OptinsSection from "./OptinsSection";
import { getLocalData } from "@/utils/localData";
import Receipt from "../../common/Receipt";

export default function Pledge({ fundingId }: Readonly<{ fundingId: number }>) {
  const { data, isLoading } = usePledge({ fundingId });
  if (isLoading || !data) return <div>로딩중</div>;
  const { funding, member, supporter } = data.response;
  const { options } = getLocalData();

  return (
    <>
      <InfoSection funding={funding} member={member} />
      <Receipt>
        <OptinsSection
          supporter={supporter}
          options={options}
          type={funding.fundingType}
        />
        <CostInfo
          type={funding.fundingType}
          fundingId={fundingId}
          address={supporter.address}
        />
      </Receipt>
    </>
  );
}
