import Badge from "./Badge";

export default function BadgeList({ badgeList }) {
  return (
    <>
      {badgeList.map((badge) => (
        <Badge key={badge} badge={badge} />
      ))}
    </>
  );
}
