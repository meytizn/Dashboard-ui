"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type SignUpFormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignUp() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>();

  const password = watch("password");

  const onSubmit = async (data: SignUpFormData) => {
    try {
      // Your API request here
      // await registerUser(data);

      toast.success("Account created successfully!");
       router.push("/");

      console.log(data);
      reset();
    } catch (error) {
      toast.error("Registration failed!");
    }
  };

  return (
    <div>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md space-y-5 rounded-xl border p-6 shadow"
    >
      <h1 className="text-center text-2xl font-bold">Sign Up</h1>

      <div>
        <label
          htmlFor="username"
          className="mb-2 block text-sm font-medium"
        >
          Username
        </label>

        <input
          id="username"
          type="text"
          placeholder="Enter your username"
          className="w-full rounded-md border px-3 py-2"
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters",
            },
          })}
        />

        {errors.username && (
          <p className="mt-1 text-sm text-red-500">
            {errors.username.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Gmail
        </label>

        <input
          id="email"
          type="email"
          placeholder="example@gmail.com"
          className="w-full rounded-md border px-3 py-2"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email",
            },
          })}
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="password" className="mb-2 block text-sm font-medium">
          Password
        </label>

        <input
          id="password"
          type="password"
          placeholder="********"
          className="w-full rounded-md border px-3 py-2"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />

        {errors.password && (
          <p className="mt-1 text-sm text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="mb-2 block text-sm font-medium"
        >
          Confirm Password
        </label>

        <input
          id="confirmPassword"
          type="password"
          placeholder="********"
          className="w-full rounded-md border px-3 py-2"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === password || "Passwords do not match",
          })}
        />

        {errors.confirmPassword && (
          <p className="mt-1 text-sm text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        {isSubmitting ? "Creating Account..." : "Sign Up"}
      </button>
    </form>
 </div>
  );
}