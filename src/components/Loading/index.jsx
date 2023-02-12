import { ThreeDots } from "react-loader-spinner";
import { useTheme } from "styled-components";

const Loading = () => {
  const {
    colors: { white },
  } = useTheme();
  return (
    <ThreeDots
      color={white}
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    />
  );
};

export default Loading;
