import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  // Initial form values
  const initialValues = {
    email: "",
    password: "",
  };

  // Form validation schema
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  // Formik form handling
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, actions) => {
      console.log("Login Info:", values);
      actions.resetForm();
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
        {/* Adjusted to max-w-sm for a smaller container, added shadow-lg for shadow effect */}
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Login to Your Account
        </h2>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            {formik.errors.email && formik.touched.email && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            {formik.errors.password && formik.touched.password && (
              <p className="mt-1 text-sm text-red-500">
                {formik.errors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-gray-800 rounded-md shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ backgroundColor: "#1F2937" }} // Custom button background color
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
