import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

const customerSchema = z.object({
    firstname: z.string().min(1, "Firstname is required"),
    lastname: z.string().min(1, "Lastname is required"),
    birthdate: z.string().min(1, "Birthdate is required"),
});

type CustomerFormData = z.infer<typeof customerSchema>;

function CustomerForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const authUserId = Number(localStorage.getItem("authUserId")) || null;
    console.log("CustomerForm - User ID:", authUserId);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CustomerFormData>({
        resolver: zodResolver(customerSchema),
    });

    const onSubmit = async (data: CustomerFormData) => {
        if (!authUserId) {
            alert("User not logged in!");
            return;
        }

        setIsLoading(true);

        const token = localStorage.getItem("token");

        const payload = {
            ...data,
            authUserId,
            walletId: null,
        };

        try {
            const response = await fetch("http://localhost:8080/api/customer/save-self", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const resp = await response.json();
                alert("Error: " + (resp.message || "Failed to save customer data"));
            } else {
                setSuccessMessage("Customer data saved successfully!");
            }
        } catch (error) {
            alert("Unexpected error saving customer data.");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-green-800 via-amber-100 to-yellow-900">
            <div className="w-full max-w-lg p-8 space-y-6 bg-amber-50 shadow-2xl rounded-2xl border-2 cretaceous-yellow-border">
                <h2 className="text-3xl font-bold text-center text-green-900 mb-6">Complete your profile</h2>

                {successMessage && (
                    <div className="p-4 mb-6 bg-green-100 border-l-4 border-green-500 text-green-700 rounded-lg">
                        {successMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-green-900">First Name</span>
                        </label>
                        <input
                            {...register("firstname")}
                            type="text"
                            placeholder="Insert first name"
                            className="input input-bordered w-full bg-white border-green-900 text-green-900 placeholder:text-green-700"
                        />
                        {errors.firstname && (
                            <span className="text-red-600 text-sm">{errors.firstname.message}</span>
                        )}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-green-900">Last Name</span>
                        </label>
                        <input
                            {...register("lastname")}
                            type="text"
                            placeholder="Insert last name"
                            className="input input-bordered w-full bg-white border-green-900 text-green-900 placeholder:text-green-700"
                        />
                        {errors.lastname && (
                            <span className="text-red-600 text-sm">{errors.lastname.message}</span>
                        )}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-green-900">Birthdate</span>
                        </label>
                        <input
                            {...register("birthdate")}
                            type="date"
                            className="input input-bordered w-full bg-white border-green-900 text-green-900 placeholder:text-green-700"
                        />
                        {errors.birthdate && (
                            <span className="text-red-600 text-sm">{errors.birthdate.message}</span>
                        )}
                    </div>

                    <div className="form-control">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 mt-4 bg-green-900 text-amber-100 font-semibold rounded-lg hover:bg-green-800 transition disabled:opacity-50"
                        >
                            {isLoading ? "Saving..." : "Save"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CustomerForm;
