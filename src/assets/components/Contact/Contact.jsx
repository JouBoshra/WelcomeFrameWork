import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Minus, Star } from "lucide-react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import "./Contact.css";

export default function Contact() {
  const { navHeight } = useOutletContext();

  const [inputs, setInputs] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { id, value } = event.target;
    setInputs((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      validateField(id, value);
    }
  };

  const validateField = (id, value) => {
    let errorMsg = "";
    if (value.trim() === "") {
      errorMsg = "This field is required";
    } else if (id === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errorMsg = "Invalid email address";
    } else if (id === "age" && (isNaN(value) || value < 0 || value > 120)) {
      errorMsg = "Enter a valid age";
    } else if (id === "password" && value.length < 6) {
      errorMsg = "Password must be at least 6 characters";
    }
    setErrors((prev) => ({ ...prev, [id]: errorMsg }));
    return errorMsg === "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    Object.keys(inputs).forEach((key) => {
      if (!validateField(key, inputs[key])) {
        newErrors[key] = true;
      }
    });
    if (Object.keys(newErrors).length === 0) {
      console.log("Form is valid, submitting data:", inputs);
      // Submit data logic here
    }
  };

  const anyErrors = Object.keys(errors).some((key) => errors[key]);

  return (
    <div style={{ paddingTop: `${navHeight}px` }}>
      <h2 className="pt-8 text-3xl lg:text-5xl md:text-4xl font-bold uppercase text-center">
        Contact Section
      </h2>
      <div className="lineHome flex flex-row items-center justify-center gap-4 m-auto text-center">
        <Minus size={100} strokeWidth={1.75} />
        <Star size={50} strokeWidth={1.75} />
        <Minus size={100} strokeWidth={1.75} />
      </div>
      <form onSubmit={handleSubmit}>
        {["name", "age", "email", "password"].map((field) => (
          <Box
            key={field}
            sx={{ "& > :not(style)": { m: 1 } }}
            className="flex flex-wrap p-4 flex-col items-center align-middle justify-center"
          >
            <Box
              sx={{ display: "flex", alignItems: "flex-end" }}
              className="w-full max-w-sm"
            >
              <AccountCircle sx={{ color: "#1BB998", mr: 1, my: 0.5 }} />
              <TextField
                id={field}
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                variant="standard"
                value={inputs[field]}
                onChange={handleChange}
                className="w-full"
                error={!!errors[field]}
                helperText={errors[field]}
                type={field === "password" ? "password" : "text"} // Set type based on field name
                sx={{
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "#1BB998",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: errors[field] ? "red" : "#1BB998",
                  },
                  "& .MuiInputBase-input": { color: "#1BB998" },
                  "& .MuiInputLabel-root": { color: "#1BB998" },
                }}
              />
            </Box>
          </Box>
        ))}
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: anyErrors ? "red" : "#1BB998",
              color: "white",
              "&:hover": {
                bgcolor: anyErrors ? "darkred" : "blue",
                color: "white",
                transition: "background-color 0.3s ease-in-out",
              },
              m: 2,
            }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
}
