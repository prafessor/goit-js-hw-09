const formEl = document.querySelector('.feedback-form');
let formData = {
  email: "",
  message: "",
};


// action with localStorage
const saveToLS = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
};

const loadFromLS = (key) => {
  try {
    const loadData = localStorage.getItem(key);

    return loadData === null ? undefined : JSON.parse(loadData);
  } catch (err) {
    console.log(err);
  }
};

// fill form`s fields
const fillFormInput = () => {
  const formDataFromLS = loadFromLS('feedback-form-state');

  if(formDataFromLS === undefined) {
    return;
  }

  formData = formDataFromLS;
  for(const key in formDataFromLS){
    formEl.elements[key].value = formDataFromLS[key];
  }
}
fillFormInput();

// Event for form
const onFormFieldInput = evt => {
  const { target: { name , value } } = evt;

  formData[name] = value.trim();
  saveToLS("feedback-form-state", formData);
};

const onFeedbackFormSubmit = evt => {
  evt.preventDefault();

  const {
    elements: {
      email: { value: { length: emailLength } },
      message: { value: { length: messageLength } } }
    } = formEl;

  if(emailLength > 0 & messageLength > 0) {
    console.log(formData);
    formEl.reset();
    formData = {email: "", message: ""};
    localStorage.removeItem("feedback-form-state");
  }
};

formEl.addEventListener('input', onFormFieldInput);
formEl.addEventListener('submit', onFeedbackFormSubmit);