import React from "react";
import ContentLoader from "react-content-loader";

const MobileSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={200}
    height={130}
    viewBox="0 0 200 130"
    backgroundColor="rgba(36, 59, 38, 0.151)"
    foregroundColor="rgba(19, 26, 16, 0.13)"
    {...props}
  >
    <rect x="2" y="2" rx="2" ry="2" width="198" height="120" />
  </ContentLoader>
);

export default MobileSkeleton;
