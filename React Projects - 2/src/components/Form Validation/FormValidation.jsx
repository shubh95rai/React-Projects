import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";

function FormValidation() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorData, setErrorData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validateErrors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.username) {
      validateErrors.username = "username is required";
    } else if (formData.username.length <= 3) {
      validateErrors.username = "username must be more than 3 characters";
    }

    if (!formData.email) {
      validateErrors.email = "email is required";
    } else if (!regex.test(formData.email)) {
      validateErrors.email = "email is not valid";
    }

    if (!formData.password) {
      validateErrors.password = "password is required";
    } else if (formData.password.length <= 4) {
      validateErrors.password = "password must be more than 4 characters";
    } else if (formData.password.length > 10) {
      validateErrors.password =
        "password cannot exceed more than 10 characters";
    }

    if (!formData.confirmPassword) {
      validateErrors.confirmPassword = "password is required";
    } else if (formData.confirmPassword !== formData.password) {
      validateErrors.confirmPassword = "password is not matched";
    }

    setErrorData(validateErrors);
  }

  function signedInSuccessfully() {
    if (!Object.keys(errorData).length) {
      return (
        <div className="flex items-center gap-2 rounded bg-neutral-300 px-5 py-2 font-medium">
          <FaCircleCheck /> Signed in successfully
        </div>
      );
    }
  }

  return (
    <main className="flex h-screen items-center justify-center bg-neutral-900 font-inter text-neutral-900">
      <div className="flex flex-col items-center gap-5">
        <section>{signedInSuccessfully()}</section>

        <section className="w-[450px] rounded bg-neutral-300 p-10">
          <h1 className="mb-10 text-4xl font-bold">Login Form</h1>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <label htmlFor="username">Username </label>
              <input
                spellCheck="false"
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className="rounded border border-neutral-500 bg-transparent px-5 py-2.5 outline-none"
              />
              {errorData.username && (
                <p className="text-red-700">{errorData.username}</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email </label>
              <input
                spellCheck="false"
                type="text"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="rounded border border-neutral-500 bg-transparent px-5 py-2.5 outline-none"
              />
              {errorData.email && (
                <p className="text-red-700">{errorData.email}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password">Password</label>
              <input
                spellCheck="false"
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="rounded border border-neutral-500 bg-transparent px-5 py-2.5 outline-none"
              />
              {errorData.password && (
                <p className="text-red-700">{errorData.password}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="confirmPassword">Confirm Password </label>
              <input
                spellCheck="false"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="rounded border border-neutral-500 bg-transparent px-5 py-2.5 outline-none"
              />
              {errorData.confirmPassword && (
                <p className="text-red-700">{errorData.confirmPassword}</p>
              )}
            </div>
            <button className="rounded bg-neutral-900 py-2.5 text-neutral-300">
              Submit
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default FormValidation;
