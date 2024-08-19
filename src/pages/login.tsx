import logo from "../assets/logo da tt-Branco-Verde.png";
import LoginForm from "../components/loginForm";
import Lottie from "react-lottie";
import animationData from "../../public/login.json";

export default function Login() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="h-screen w-screen flex flex-col center bg-gray-950 bg-pattern bg-no-repeat bg-contain	relative p-8">
      <LoginForm></LoginForm>
      <img
        src={logo}
        style={{ verticalAlign: "text-bottom" }}
        className="mx-auto w-16"
        alt="logo treetech"
      />
    </section>
  );
}
