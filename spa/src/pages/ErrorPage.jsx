import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="text-5xl text-white flex flex-col justify-center items-center  bg-zinc-900 rounded p-8 w-full h-full">
      <h1 className="text-9xl">{error.status}</h1>
      <span>{error.statusText}</span>
      <span>{error.data}</span>
    </div>
  );
}
