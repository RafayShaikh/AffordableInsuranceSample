export default function validateInfo(values) {
  let errors = {};

  if (!values.firstName || !values.firstName.trim()) {
    errors.firstName = 'First Name required';
  } else if (!/^[A-Za-z]+/.test(values.firstName.trim())) {
    errors.firstName = 'Enter a valid name';
  }

  if (!values.lastName || !values.lastName.trim()) {
    errors.lastName = 'Last Name required';
  } else if (!/^[A-Za-z]+/.test(values.lastName.trim())) {
    errors.lastName = 'Enter a valid name';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.phone) {
    errors.phone = 'Phone required';
  }
  if (!values.dob) {
    errors.dob = 'Date of Birth required';
  }
  if (!values.street) {
    errors.street = 'Street required';
  }
  if (!values.city) {
    errors.city = 'City required';
  }
  if (!values.state) {
    errors.state = 'State required';
  }
  if (!values.zipcode) {
    errors.zipcode = 'Zipcode required';
  }

  return errors;
}
