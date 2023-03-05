import ContentLoader from "react-content-loader";

const CardSkeleton = (props) => (
  <ContentLoader
    speed={0.5}
    width={250}
    height={300}
    viewBox="0 0 200 300"
    backgroundColor="rgba(36, 59, 38, 0.151)"
    foregroundColor="rgba(19, 26, 16, 0.13)"
    {...props}
  >
    <rect x="10" y="10" rx="8" ry="8" width="180" height="280" />
  </ContentLoader>
);

export default CardSkeleton;
