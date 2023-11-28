const formValues = {}
const formValidation = {}

export const validatePassword = (e) => {
  const RegExp = /^(?=.*[a-zа-яё\d])(?=.*[A-ZА-ЯЁ])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return String(e).match(RegExp);
}

export const validateRepPassword = (e) => {
  return e === formValues.password;
}

export const validateEmail = (email) => {
  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return String(email).toLowerCase().match(regExp);
}

export const getValidationStatus = () => {
  return Object.values(formValidation).every((validationStatus) => !!validationStatus)
}

export const setDisabledBtn = (btn, form_id) =>{
  const inputs = document.querySelectorAll(`#${form_id} input`);
  btn.disabled = ![...inputs].every((input) => input.value.trim() !== "") || !getValidationStatus();
}

export const setFormValue = (valueKey, target, validator) => {
  formValues[valueKey] = target.value
  if (validator !== undefined) {
    const isValid = validator(target.value)
    if (!isValid){
      target.classList.add('invalid')
      target.classList.remove('valid')
    }
    else{
      target.classList.remove('invalid')
      target.classList.add('valid')
    }
    formValidation[valueKey] = isValid
  }
}

export const submitSignUpForm = () => {
  if (!getValidationStatus()) {
    console.log("FORM IS INCORRECT")
    return false
  }
  console.log("FORM IS FINE")
  console.log(formValues)
  return true
}

export const submitSignInForm = () => {
  if (!getValidationStatus()) {
    console.log("FORM IS INCORRECT")
    return false
  }
  console.log("FORM IS FINE")
  console.log(formValues)
  return true
}