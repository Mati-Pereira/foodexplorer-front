import { RotatingLines } from "react-loader-spinner";
import { useTheme } from "styled-components";

const SignoutLoading = () => {
  const {
    colors: { white },
  } = useTheme();
  return (
    <RotatingLines
      strokeColor={white}
      visible={true}
      color={white}
      width="2rem"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
};

export default SignoutLoading;
