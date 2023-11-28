 import {setFormValue, submitSignUpForm, validateEmail, validatePassword, validateRepPassword,setDisabledBtn} from "./utils.js"

console.log("Document")
console.log(document)

const first_name_id = 'first_name'
const last_name_id = 'last_name'
const password_id = 'password'
const sign_in_password_id = 'sign_in_password'
const password_rep_id = 'password-repeat'
const email_id = 'email'
const sign_in_email_id = 'sign_in_email'

const sign_in_link_id = 'sign_in_link'
const sign_up_form_id = 'sign_up_form'
const sign_in_form_id = 'sign_in_form'
 const go_back_btn_id = 'go_back_btn'


const sign_up_btn = document.getElementById('sign_up_btn');
const go_back_btn = document.getElementById(go_back_btn_id);


sign_up_btn.disabled = true;
let form_id = sign_up_form_id;


const first_name = document.getElementById(first_name_id);
first_name.oninput = (e) => {setFormValue(first_name_id, e.target);setDisabledBtn(sign_up_btn,form_id);}

const last_name = document.getElementById(last_name_id);
last_name.oninput = (e) => {setFormValue(last_name_id, e.target);setDisabledBtn(sign_up_btn,form_id);}

const email = document.getElementById(email_id);
email.oninput = (e) => {setFormValue(email_id, e.target, validateEmail);setDisabledBtn(sign_up_btn,form_id);}

const password = document.getElementById('password');
password.oninput = (e) => {setFormValue(password_id,e.target, validatePassword);setDisabledBtn(sign_up_btn,form_id);}
 const password_rep = document.getElementById('password-repeat');
password_rep.oninput = (e) => {setFormValue(password_rep_id,e.target, validateRepPassword);setDisabledBtn(sign_up_btn,form_id);}

const sign_in_password = document.getElementById('sign_in_password');
const sign_in_email = document.getElementById('sign_in_email');
sign_in_password.oninput = (e) => {setFormValue(sign_in_password_id,e.target);setDisabledBtn(sign_in_btn,form_id);}
sign_in_email.oninput = (e) => {setFormValue(sign_in_email_id, e.target, validateEmail);setDisabledBtn(sign_in_btn,form_id);}


const switch_to_sign_in = document.getElementById(sign_in_link_id);
switch_to_sign_in.onclick = () => {
  document.getElementById(sign_up_form_id).style.display = "none"
  form_id = sign_in_form_id
  document.getElementById(sign_in_form_id).style.display = ""
}

go_back_btn.addEventListener("click", () => {
  document.getElementById(sign_up_form_id).style.display = "block";
  document.getElementById(sign_in_form_id).style.display = "none";
});
sign_up_btn.onclick = (e) => {
  e.preventDefault()
  submitSignUpForm()
}



//49 lalalal