import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAppData } from './appSlice';

const useForm = (callback, validate) => {
  const dataSlice = useSelector(selectAppData);

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    selection: dataSlice?.insuranceName,
    dob: '',
    email: '',
    phone: '',
    address: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
  });
  const [errors, setErrors] = useState({});
  const [steps, setSteps] = useState(1);
  const [counter, setCounter] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleNext = (e) => {
    setCounter(true);
    let check =
      Object.keys(errors).length - Object.keys(validate(values)).length;
    console.log(Object.keys(errors).length);
    console.log(Object.keys(validate(values)).length);

    if (steps == 1 && check == 2) {
      setSteps(steps + 1);
      setErrors({});
    }
    if (steps == 2 && check == 1) {
      setSteps(steps + 1);
      setErrors({});
    }
    if (steps == 3 && check == 2) {
      setSteps(steps + 1);
      setErrors({});
    }
    if (steps == 4 && check == 2) {
      setSteps(steps + 1);
      setErrors({});
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);
  useEffect(() => {
    setCounter(false);
    setErrors(validate(values));
  }, [steps]);

  return {
    counter,
    steps,
    handleChange,
    handleSubmit,
    handleNext,
    values,
    errors,
  };
};

export default useForm;
