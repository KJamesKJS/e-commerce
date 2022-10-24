export default function validateAddressForm(values, setErrors) {
  const errors = {};

  //name

  if (!values.name) {
    errors.name = 'Name required';
  } else if (values.name?.length < 3) {
    errors.name = 'The name must have at least 3 characters';
  } else if (!/^[A-Za-z]+(?:[ _-][A-Za-z]+)*$/i.test(values.name)) {
    errors.name = 'The name is invalid';
  }

  //lastName

  if (!values.lastName) {
    errors.lastName = 'last name required';
  } else if (values.lastName?.length < 3) {
    errors.lastName = 'Last name must have at least 3 characters';
  } else if (!/^[A-Za-z]+(?:[ _-][A-Za-z]+)*$/i.test(values.lastName)) {
    errors.lastName = 'Last name is not valid';
  }

  //email

  if (!values.email) {
    errors.email = 'Email required';
  } else if (values.email?.length < 3) {
    errors.email = 'The email must have at least 3 characters';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'The email is not valid';
  }

  //address

  if (!values.address) {
    errors.address = 'address required';
  } else if (values.address?.length < 3) {
    errors.address = 'The address must have at least 3 characters';
  }

  //city

  if (!values.city) {
    errors.city = 'required city';
  } else if (values.city?.length < 3) {
    errors.city = 'The city must have at least 3 characters';
  } else if (!/^[A-Za-z]+(?:[ _-][A-Za-z]+)*$/i.test(values.city)) {
    errors.city = 'The city is invalid';
  }

  //state

  if (!values.state) {
    errors.state = 'Province/State required';
  } else if (values.state?.length < 3) {
    errors.state = 'The field must have at least 3 characters';
  } else if (!/^[A-Za-z]+(?:[ _-][A-Za-z]+)*$/i.test(values.state)) {
    errors.state = 'The field is not valid';
  }

  if (!values.zip) {
    errors.zip = 'zip code required';
  } else if (values.zip?.length < 4 || values.zip?.length > 6) {
    errors.zip = 'Zip code must be 4-6 characters long';
  } else if (!/^[0-9]{4,6}$/i.test(values.zip)) {
    errors.zip = 'Zip code is not valid';
  }

  //phoneNumber

  if (!values.phoneNumber) {
    errors.phoneNumber = 'phone required';
  } else if (
    values.phoneNumber?.length < 8 ||
    values.phoneNumber?.length > 10
  ) {
    errors.phoneNumber = 'The phone must have 8 to 10 characters';
  } else if (!/^[0-9]{8,10}$/i.test(values.phoneNumber)) {
    errors.phoneNumber = 'The phone is invalid';
  }

  setErrors(errors);

  return Object.keys(errors).length === 0 ? true : false;
}
