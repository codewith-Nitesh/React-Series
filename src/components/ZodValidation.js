// import React, { useState } from "react";
// import * as z from "zod";

// const ZodValidation = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState({});

//   const loginSchema = z.object({
//     email: z.string().email("Invalid email address"),
//     password: z.string().min(6, "Password must be at least six characters"),
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const result = loginSchema.safeParse(formData);

//     if (!result.success) {
//       const errorField = result.error.formErrors.fieldErrors;
//       setError(errorField);
//       return;
//     }

//     console.log("Valid data:", formData);
//   };

//   const changeHandle = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div>
//       <h1>ZOD VALIDATION</h1>
//       <form
//         onSubmit={handleSubmit}
//         style={{
//           border: "1px solid black",
//           height: "200px",
//           width: "400px",
//           margin: "auto",
//           padding: "1rem",
//           display: "flex",
//           flexDirection: "column",
//           gap: "1rem",
//         }}
//       >
//         <input
//           type="email"
//           value={formData.email}
//           onChange={changeHandle}
//           name="email"
//           placeholder="Enter Email"
//         />
//         {error.email && <p style={{ color: "red" }}>{error.email}</p>}

//         <input
//           type="password"
//           value={formData.password}
//           onChange={changeHandle}
//           name="password"
//           placeholder="Enter Password"
//         />
//         {error.password && <p style={{ color: "red" }}>{error.password}</p>}

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ZodValidation;

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const ZodValidation = () => {
  const schemaValidation = z.object({
    name: z
      .string()
      .min(1, "Name is Required")
      .refine((val) => val[0] === val[0].toUpperCase(), {
        message: "first letter of the name should be capital",
      }),
    age: z.coerce.number().refine((age) => age >= 18, {
      message: "age should be equal or greater than 18",
    }),
    address: z.coerce
      .string()
      .transform((val) => val.charAt(0).toUpperCase() + val.slice(1)),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaValidation),
  });

  const onSubmit = (data) => {
    console.log('Valid Data : ', data)
  };

  return (
    <>
      <div>Zod validation</div>
      {/* <h1>hi</h1> */}

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Name: </label>
            <input {...register("name")} />
            <p style={{color:'red'}}>{errors.name?.message}</p>
          </div>
          <div>
            <label>age: </label>
            <input {...register("age")} />
            <p style={{color:'red'}}>{errors.age?.message}</p>
          </div>
          <div>
            <label>address: </label>
            <input {...register("address")} />
            <p style={{color:'red'}}>{errors.address?.message}</p>
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
};

export default ZodValidation;
