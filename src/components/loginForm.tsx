import { Envelope, LockKey } from "phosphor-react";
import { Link } from "react-router-dom";

export default function loginForm() {
  return (
    <div className="m-auto">
      <h1 className="font-univers font-bold text-5xl text-zinc-50 mb-4 text-center">
        Login
      </h1>

      <form action="submit" className="gap-2 flex flex-col">
        <div>
          <label htmlFor="email" className="font-univers  text-zinc-50">
            {" "}
            E-mail
          </label>
          <div className="border rounded p-2 flex gap-2 items-center w-fit">
            <Envelope className="size-5 text-zinc-300" />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="daniel.savio@treetech.com.br"
              className="outline-none border-solid bg-transparent text-zinc-50 placeholder-zinc-500 w-56"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="font-univers  text-zinc-50">
            {" "}
            Senha
          </label>
          <div className="border rounded p-2 flex gap-2 items-center w-fit">
            <LockKey className="size-5 text-zinc-300" />
            <input
              type="password"
              id="email"
              name="email"
              placeholder="************"
              className="outline-none border-solid bg-transparent text-zinc-50 placeholder-zinc-500 w-56"
              required
            />
          </div>
        </div>

        <button
          className="p-2 rounded-sm mt-4 bg-teal-500 font-semibold text-teal-950"
          type="submit"
        >
          Login
        </button>

        <p className="text-zinc-400 text-sm text-center">
          Não, tem cadastro?
          <Link
            className="p-2 rounded-sm text-zinc-400 text-sm underline font-semibold"
            to="/"
          >
            Cadastrar
          </Link>
        </p>
      </form>
    </div>
  );
}
