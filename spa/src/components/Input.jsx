/* eslint-disable react/prop-types */
export default function Input({ type, placeholder, register, name }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="rounded p-2 w-full"
      {...register(name)}
    />
  );
}
