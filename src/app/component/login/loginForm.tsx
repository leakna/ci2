import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Define validation schema with yup
const schema = yup
  .object({
    email: yup.string().required("Email is required").email("Invalid format"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
  })
  .required();

const SignIn = () => {
  // Set up form handling
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [isDisable, setDisable] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Asynchronous function to fetch and compare data
  const fetchUserData = async (email: string, password: string) => {
    try {
      // Fetch from Next.js API route
      const response = await fetch("https://your-restful-endpoint/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const users = await response.json();

      // Compare with fetched data
      const user = users.find(
        (user: any) => user.email === email && user.password === password
      );

      return user;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  };

  // Handle form submission
  const onSubmit = async (data: any) => {
    setDisable(true);
    setErrorMessage(null);

    // Fetch and compare user data
    const user = await fetchUserData(data.email, data.password);
    if (user) {
      // If user data matches
      setSuccess(true);
      reset();
    } else {
      // If user data does not match
      setErrorMessage("SignIn Unsuccessful");
      setSuccess(false);
    }

    setDisable(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Signup</h1>
        <div className="my-2 text-left">
          <p>Email</p>
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <input
            className="w-80 text-black"
            type="email"
            {...register("email")}
            data-testid="email"
          />
        </div>
        <div className="my-2 text-left">
          <p>Password</p>
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <input
            className="w-80 text-black"
            type="password"
            {...register("password")}
            data-testid="password"
          />
        </div>
        <button type="submit" disabled={isDisable}>
          Signup
        </button>
        {isSuccess && <p className="text-green-500">SignIn Success</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default SignIn;
