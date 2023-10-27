/* eslint-disable react/prop-types */
export default function ErrorInput({ text }) {
  return (
    <span className="bg-red-100 text-red-900 rounded p-2 text-sm w-full">
      {text}
    </span>
  );
}
