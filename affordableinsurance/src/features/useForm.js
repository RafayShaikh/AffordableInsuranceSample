import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAppData } from './appSlice';

const useForm = (callback, validate) => {
  const dataSlice = useSelector(selectAppData);

  const [values, setValues] = useState({
    firstName: null,
    lastName: null,
    selection: dataSlice?.insuranceName,
    dob: null,
    email: null,
    phone: null,
    address: null,
    street: null,
    city: null,
    state: null,
    zipcode: null,
  });
  const [errors, setErrors] = useState({});
  const [steps, setSteps] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleNext = (e) => {
    let check =
      Object.keys(errors).length - Object.keys(validate(values)).length;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    if (steps == 1 && check == 2) {
=======
    setErrors(validate(values));
    if (steps == 1 && (check == 2 || check == 0)) {
>>>>>>> parent of 71b3738... Merge pull request #22 from RafayShaikh/Rafay-Branch
=======
    setErrors(validate(values));
    if (steps == 1 && (check == 2 || check == 0)) {
>>>>>>> parent of a88404d... FIxed Validation Bug
=======
    setErrors(validate(values));
    if (steps == 1 && (check == 2 || check == 0)) {
>>>>>>> parent of a88404d... FIxed Validation Bug
      setSteps(steps + 1);
    }
    if (steps == 2 && (check == 1 || check == 0)) {
      setSteps(steps + 1);
    }
    if (steps == 3 && (check == 2 || check == 0)) {
      setSteps(steps + 1);
    }
    if (steps == 4 && (check == 2 || check == 0)) {
      setSteps(steps + 1);
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

  return { steps, handleChange, handleSubmit, handleNext, values, errors };
};

export default useForm;
