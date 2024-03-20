import { HandleLogin } from "./HandleLogin";
export function LoginButton() {
  return (
    <form action={HandleLogin} className="inline">
      <button className="bg-pink-300 hover:bg-zinc-300 text-black px-3 py-2 rounded">
        Login
      </button>
    </form>
  );
}
