import { RotatingLines } from "react-loader-spinner";
import { useTheme } from "styled-components";

const SignoutLoading = () => {
  const {
    colors: { white },
  } = useTheme();
  return (
    <RotatingLines
      visible={true}
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

export default SignoutLoading;
