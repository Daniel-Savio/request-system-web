import logo from "../assets/logo da tt-Branco-Verde.png";

export default function Login() {
  return (
    <section className="h-screen w-screen bg-zinc-800 flex relative p-8">
      <div id="signup" className="w-1/2 h-full  text-zinc-50 flex p-8">
        <h1 className="m-auto center ">signup</h1>
      </div>

      <div id="signin" className="w-1/2 h-full  text-zinc-50 flex p-8">
        <h1 className="m-auto center ">login</h1>
      </div>

      <div className="w-1/2 h-[95%] bg-zinc-900 flex flex-col center rounded-lg absolute top-[2%] left-[1%] shadow-xl shadow-indigo-500/40">
        <header>
          <img src={logo} className="w-20 m-5" alt="" />
        </header>

        <h1 className="text-zinc-50 font-univers font-bold text-3xl m-auto">
          Request System
        </h1>
      </div>
    </section>
  );
}
