import BackedSection from "@/components/backed/BackedSection";

type Props = {
  params: {
    memberId: number;
    fundingId: number;
  };
};

export default function BackedPage({ params: { memberId, fundingId } }: Props) {
  return (
    <main className="w-full max-w-7xl mx-auto">
      <BackedSection fundingId={fundingId} memberId={memberId} />
    </main>
  );
}
