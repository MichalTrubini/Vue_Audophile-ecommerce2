const validateForm = (formData: any) => {

  const regex =
  /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/;

  const formDataValidation = {
    name: false,
    email: false,
    phone: false,
    address: false,
    zip: false,
    city: false,
    country: false,
    paymentMethod: false,
    eMoneyNumber: false,
    eMoneyPin: false,
  };

  for (let key in formData) {
    if (
      formData[key as keyof typeof formData] === "" ||
      formData[key as keyof typeof formData] === null
    ) {
      formDataValidation[key as keyof typeof formDataValidation] =
        true;
    } else {
      formDataValidation[key as keyof typeof formDataValidation] =
        false;
    }
  }
  if (regex.test(formData.email) === false) formDataValidation.email = true;
  
  return formDataValidation;
};

export default validateForm;