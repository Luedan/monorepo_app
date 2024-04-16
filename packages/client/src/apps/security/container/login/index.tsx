import { useState } from "react";
import { handleLogin } from "../../libs/login/handleLogin";

export default function LoginContainer() {
  const [values, setValues] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const data = await handleLogin(values)

    if (data?.access_token) {
      console.log(data?.access_token);
    }

    // setValues({ email: "", password: "" });
  };

  return (
    <div className="w-screen h-screen bg-slate-300 flex items-center justify-center">
      <div className="flex flex-col w-full max-w-md mx-auto p-4 rounded-lg shadow-md bg-white">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ingresa tu email"
          value={values?.email || ""}
          onChange={handleChange}
        />

        <label
          htmlFor="password"
          className="block text-gray-700 font-bold mb-2"
        >
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ingresa tu contraseña"
          value={values?.password || ""}
          onChange={handleChange}
        />

        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
}
