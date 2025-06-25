import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from 'react';

const schema = z.object({
  username: z.string().min(3, "Username must contain at least 3 characters."),
  email: z.string().email("Insert a valid email address."),
  password: z.string().min(6, "Password must contain at least 6 characters."),
  role: z.string().nonempty("Please select a role."),
});

type FormData = z.infer<typeof schema>;

function Register() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    const payload = {
      ...data,
      role: [data.role],
    };

    try {
      const response = await fetch('http://localhost:8080/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const responseData = await response.json();

      if (!response.ok) {
        if (responseData.message === "Email already in use") {
          setError("email", { message: "Email already in use." });
        } else if (responseData.message === "Username already in use") {
          setError("username", { message: "Username already in use." });
        } else {
          alert(responseData.message);
        }
      } else {
        setSuccessMessage("User registered successfully!");
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error('Error:', error);
      alert("Error occurred during registration.");
    } finally {
      setIsLoading(false);
    }
  };


  const handleRedirect = () => window.location.href = "/login";
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-green-800 via-amber-100 to-yellow-900">
      <div className="w-full max-w-lg p-8 space-y-6 bg-amber-50 shadow-2xl rounded-2xl border-2 cretaceous-yellow-border">
        {isModalOpen && (
          <div className="modal modal-open">
            <div className="modal-box bg-green-100 border-l-4 border-green-500 text-green-700 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Signup completed</h2>
              <p className="text-lg mb-4">{successMessage}</p>
              <div className="flex justify-end space-x-4">
                <button
                  className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700"
                  onClick={handleRedirect}
                >
                  Go to Login
                </button>
                <button
                  className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <h2 className="text-3xl font-bold text-center text-green-900 mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-green-900">Username</span>
            </label>
            <input
              type="text"
              {...register("username")}
              placeholder="Insert username"
              className="input input-bordered w-full bg-white border-green-900 text-green-900 placeholder:text-green-700"
            />
            {errors.username && <span className="text-red-600 text-sm">{errors.username.message}</span>}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-green-900">Email</span>
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="Insert email"
              className="input input-bordered w-full bg-white border-green-900 text-green-900 placeholder:text-green-700"
            />
            {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-green-900">Password</span>
            </label>
            <input
              type="password"
              {...register("password")}
              placeholder="Insert password"
              className="input input-bordered w-full bg-white border-green-900 text-green-900 placeholder:text-green-700"
            />
            {errors.password && <span className="text-red-600 text-sm">{errors.password.message}</span>}
          </div>

          <select
            {...register("role")}
            className="select select-bordered w-full bg-white border-green-900 text-green-900"
          >
            <option value="">-- Select a role --</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <div className="form-control">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 mt-4 bg-green-900 text-amber-100 font-semibold rounded-lg hover:bg-green-800 transition disabled:opacity-50"
            >
              {isLoading ? 'Signing up...' : 'Sign up'}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-green-900">
            Already have an account?{" "}
            <a href="/login" className="text-yellow-800 hover:underline">
              Go to login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
