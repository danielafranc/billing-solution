// useForm.js
import { useState } from 'react';
import { useFormik } from 'formik';

const useForm = (initialValues, validationSchema, onSubmit) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return formik;
};

export default useForm;
