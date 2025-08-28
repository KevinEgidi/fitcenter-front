import { useState } from "react";

export function useFormValidation(initialValues = {}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setValues({ ...values, [field]: value });
  };

  const handleResetForm = (initialValues) => {
    setValues(initialValues);
    setErrors({});
  }

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const minLength = /.{6,}/.test(password);
    const uppercase = (password.match(/[A-Z]/g) || []).length >= 2;
    const number = /[0-9]/.test(password);
    return minLength && uppercase && number;
  };

  const validateName = (name) => /^[A-Za-zÀ-ÿ\s]+$/.test(name);

  const validatePhone = (phone) => /^[0-9]+$/.test(phone);

  const validateForm = (fields = []) => {
    const newErrors = {};

    fields.forEach((field) => {
      const value = values[field];
      switch (field) {
        case "email":
          if (!value) newErrors.email = "El email es obligatorio";
          else if (!validateEmail(value)) newErrors.email = "Email inválido";
          break;
        case "password":
          if (!value) newErrors.password = "La contraseña es obligatoria";
          else if (!validatePassword(value))
            newErrors.password =
              "Contraseña debe tener 6 caracteres, 2 mayúsculas y un número";
          break;
        case "nombre":
        case "apellido":
          if (!value) newErrors[field] = `${field} es obligatorio`;
          else if (!validateName(value))
            newErrors[field] = `${field} solo debe contener letras`;
          break;
        case "celular":
          if (!value) newErrors.celular = "Celular es obligatorio";
          else if (!validatePhone(value))
            newErrors.celular = "Celular solo debe contener números";
          break;
        default:
          break;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    values,
    errors,
    handleChange,
    validateForm,
    setValues,
    setErrors,
    handleResetForm,
  };
}