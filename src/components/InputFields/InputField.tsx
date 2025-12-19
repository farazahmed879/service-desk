"use client";

import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  options?: string[];
  textarea?: boolean;
  rows?: number;
  registerOptions?: any;   
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
  options,
  textarea = false,
  rows = 3,
  registerOptions = {},  
}) => {
  return (
    <div className="flex flex-col w-full">
      <label className="mb-1 font-semibold text-gray-700">{label}</label>

      {textarea ? (
        <textarea
          {...register(name, registerOptions)}   
          placeholder={placeholder}
          rows={rows}
          className="border border-gray-300 rounded-lg p-2 w-full bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />

      ) : options ? (
        <select
          {...register(name, registerOptions)}   
          className="border border-gray-300 rounded-lg p-2 w-full bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        >
          <option value="">Select {label}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      ) : (
        <input
          {...register(name, registerOptions)}   
          type={type}
          placeholder={placeholder}
          className="border border-gray-300 rounded-lg p-2 w-full bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        required
        />
      )}

      {error && (
        <p className="text-red-500 text-sm mt-1">{String(error.message)}</p>
      )}
    </div>
  );
};

export default InputField;

/* "use client";

import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  options?: string[];
  textarea?: boolean;
  rows?: number;
    registerOptions = {},

}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
  options,
  textarea = false,
  rows = 3,
}) => {
  return (
    <div className="flex flex-col w-full">
      <label className="mb-1 font-semibold text-gray-700">{label}</label>

      {textarea ? (
        <textarea
          {...register(name, { required: `${label} is required` })}
          placeholder={placeholder}
          rows={rows}
          className="border border-gray-300 rounded-lg p-2 w-full bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
        
      ) : options ? (
        <select
          {...register(name, { required: `${label} is required` })}
          className="border border-gray-300 rounded-lg p-2 w-full bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        >
          <option value="">Select {label}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      ) : (
        <input
          {...register(name, { required: `${label} is required` })}
          type={type}
          placeholder={placeholder}
          className="border border-gray-300 rounded-lg p-2 w-full bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      )}

      {error && (
        <p className="text-red-500 text-sm mt-1">{String(error.message)}</p>
      )}
    </div>
  );
};

export default InputField;
 */