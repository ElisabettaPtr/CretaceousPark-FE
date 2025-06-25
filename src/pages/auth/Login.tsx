import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const schema = z.object({
    username: z.string().nonempty("Username required."),
    password: z.string().nonempty("Password required."),
    });

type FormData = z.infer<typeof schema>;

function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = async (data: FormData) => {
        setIsLoading(true);
        setErrorMessage(null);

        try {
        const response = await fetch("http://localhost:8080/api/auth/signin", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();

        if (!response.ok) {
            setErrorMessage(responseData || "Invalid credentials.");
        } else {
            localStorage.setItem("token", responseData.token);
            localStorage.setItem("authUserId", String(responseData.id));
            navigate("/");
        }
        } catch (error) {
        console.error("Error:", error);
        setErrorMessage("Error occurred during login.");
        } finally {
        setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-green-800 via-amber-100 to-yellow-900">
            <div className="w-full max-w-lg p-8 space-y-6 bg-amber-50 shadow-2xl rounded-2xl border-2 cretaceous-yellow-border">
                <h2 className="text-3xl font-bold text-center text-green-900 mb-6">Login</h2>
                {errorMessage && (
                <div className="text-red-600 text-center mb-4">
                    {errorMessage}
                </div>
                )}
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
                        {errors.username && (
                            <span className="text-red-600 text-sm">{errors.username.message}</span>
                        )}
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
                        {errors.password && (
                            <span className="text-red-600 text-sm">{errors.password.message}</span>
                        )}
                    </div>
                    <div className="form-control">
                        <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 mt-4 bg-green-900 text-amber-100 font-semibold rounded-lg hover:bg-green-800 transition disabled:opacity-50"
                        >
                            {isLoading ? "Logging in" : "Login"}
                        </button>
                    </div>
                </form>
                <div className="text-center mt-4">
                    <p className="text-sm text-green-900">
                        Don't have an account?{" "}
                        <a href="/register" className="text-yellow-800 hover:underline">
                        Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );

}

export default Login;
