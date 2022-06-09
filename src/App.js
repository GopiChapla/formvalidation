import { useEffect, useState } from 'react';
import './App.css';
import Contact from './Contact';
import Extradata from './Extradata';
import Personal from './Personal';

function App() {
  const [personaldata, setPersonaldata] = useState({ name: '', gender: '', dob: '' })
  const [contactdata, setContactdata] = useState({ email: '', phone: '', address: '' })
  const [extradata, setExtradata] = useState({ hobby: [], language: '', photo: '' })
  const [valid, setValid] = useState([])

  const getpersonaldata = (key, data) => {
    setPersonaldata(prevState => ({
      ...prevState,
      [key]: data.value
    }));
  }

  const getcontactdata = (key, data) => {
    setContactdata(prevState => ({
      ...prevState,
      [key]: data.value
    }));
  }

  const getExtradata = (key, data) => {
    if (data.type != "checkbox") {
      setExtradata(prevState => ({
        ...prevState,
        [key]: data.value
      }));
    }
    else {
      const hobbies = extradata.hobby
      if (data.checked == true) {
        hobbies.push(data.value)
      }
      else {
        hobbies.splice(hobbies.indexOf(data.value), 1)
      }
      setExtradata(prevState => ({
        ...prevState,
        [key]: hobbies
      }));
    }
  }

  const checkdata = () => {
    const name = document.getElementById("txt_name")
    const dob = document.getElementById("txt_dob")
    const email = document.getElementById("txt_email")
    const phone = document.getElementById("txt_phone")
    const address = document.getElementById("txt_address")
    const language = document.getElementById("txt_language")
    const photo = document.getElementById("txt_photo")
    const errname = document.getElementById("err_name")
    const errdob = document.getElementById("err_dob")
    const erremail = document.getElementById("err_email")
    const errphone = document.getElementById("err_phone")
    const erraddress = document.getElementById("err_address")
    const errlanguage = document.getElementById("err_language")
    const errphoto = document.getElementById("err_photo")
    setValid([])
    if (personaldata.name === "") {
      name.className = "form-control is-invalid"
      errname.innerHTML = "*Please Enter a Name"
      valid.push(false)
    }
    else if (!((/^[a-zA-Z ]{2,30}$/).test(personaldata.name))) {
      name.className = "form-control is-invalid"
      errname.innerHTML = "*Please Enter a Valid Name"
      valid.push(false)
    }
    else {
      name.className = ""
      errname.innerHTML = ""
    }

    if (personaldata.dob === "") {

      dob.className = "form-control is-invalid"
      errdob.innerHTML = "*Please Enter a Date of Birth"
      valid.push(false)
    }
    else {
      dob.className = ""
      errdob.innerHTML = ""
    }

    if (contactdata.email === "") {
      email.className = "form-control is-invalid"
      erremail.innerHTML = "*Please Enter a Email"
      valid.push(false)
    }
    else if (!((/^[a-zA-Z0-9_]+@[a-zA-Z0-9]+\.[A-Za-z]+$/).test(contactdata.email))) {
      email.className = "form-control is-invalid"
      erremail.innerHTML = "*Please Enter a Valid Email"
      valid.push(false)
    }
    else {
      email.className = ""
      erremail.innerHTML = ""
    }

    if (contactdata.phone === "") {
      phone.className = "form-control is-invalid"
      errphone.innerHTML = "*Please Enter Phone Number"
      valid.push(false)
    }
    else if (contactdata.phone.length !== 10) {
      phone.className = "form-control is-invalid"
      errphone.innerHTML = "*Please Enter Valid Phone Number"
      valid.push(false)
    }
    else {
      phone.className = ""
      errphone.innerHTML = ""
    }

    if (contactdata.address === "") {
      address.className = "form-control is-invalid"
      erraddress.innerHTML = "*Please Enter Address"
      valid.push(false)
    }
    else {
      address.className = ""
      erraddress.innerHTML = ""
    }

    if (extradata.language === "") {
      language.className = "form-control is-invalid"
      errlanguage.innerHTML = "*Please Choose Language"
      valid.push(false)
    }
    else {
      language.className = ""
      errlanguage.innerHTML = ""
    }

    if (extradata.photo === "") {
      photo.className = "form-control is-invalid"
      errphoto.innerHTML = "*Please select photo"
      valid.push(false)
    }
    else {
      photo.className = ""
      errphoto.innerHTML = ""
    }

    if (valid.length === 0) {
      document.getElementById("liveToast").style.display = "block"
    }
  }

  const close = () => {
    document.getElementById("liveToast").style.display = "none"

  }
  
  return (
    <div className="App">
      <Personal getdata={getpersonaldata} />
      <Contact getdata={getcontactdata} />
      <Extradata getdata={getExtradata} />
      <button className='btn btn-danger' onClick={() => checkdata()}>Submit</button>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-header">
            <strong className="me-auto">Info</strong>
            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" onClick={() => close()}></button>
          </div>
          <div className="toast-body">
            welcome {personaldata.name}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
