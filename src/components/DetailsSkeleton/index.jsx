import React from "react";
import ContentLoader from "react-content-loader";

const DetailsSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={600}
    height={300}
    viewBox="0 0 600 300"
    backgroundColor="rgba(36, 59, 38, 0.151)"
    foregroundColor="rgba(19, 26, 16, 0.13)"
    {...props}
  >
    <rect x="340" y="7" rx="2" ry="2" width="232" height="29" />
    <rect x="6" y="5" rx="2" ry="2" width="300" height="300" />
    <rect x="341" y="91" rx="2" ry="2" width="232" height="29" />
    <rect x="337" y="276" rx="2" ry="2" width="232" height="29" />
    <rect x="338" y="182" rx="2" ry="2" width="232" height="29" />
  </ContentLoader>
);

export default DetailsSkeleton;
