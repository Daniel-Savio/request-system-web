import logo from "../assets/logo da tt-Branco-Verde.png";
import SignUpForm from "../components/signUpForm";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../../public/login.json";
import { useRef } from "react";

export default function Signup() {
  const animationRef = useRef<LottieRefCurrentProps>(null);

  return (
    <section className="h-screen w-screen flex flex-col center bg-gray-950 bg-pattern bg-no-repeat bg-contain	relative p-8">
      <header>
        <h1 className="font-univers text-2xl text-zinc-50 font-bold">
          {" "}
          Sistema de Requisições
        </h1>
      </header>
      <div className="w-fit m-auto relative">
        <SignUpForm></SignUpForm>
        <Lottie
          onComplete={() => {
            animationRef.current?.goToAndPlay(50, true);
          }}
          lottieRef={animationRef}
          loop={false}
          className="w-40 absolute -right-28 -bottom-16"
          animationData={animationData}
        />
      </div>
      <img
        src={logo}
        style={{ verticalAlign: "text-bottom" }}
        className="mx-auto w-16"
        alt="logo treetech"
      />
    </section>
  );
}
