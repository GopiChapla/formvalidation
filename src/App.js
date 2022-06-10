import { useState } from 'react';
import './App.css';
import Contact from './Contact';
import Extradata from './Extradata';
import Personal from './Personal';

function App() {
  const [personaldata, setPersonaldata] = useState({ name: '', gender: '', dob: '' })
  const [contactdata, setContactdata] = useState({ email: '', phone: '', address: '' })
  const [extradata, setExtradata] = useState({ hobby: [], language: '', photo: '' })
  const [validpersonaldata, setValidpersonaldata] = useState({ name: '', nameerr: '', dob: '', doberr: '' })
  const [validcontactdata, setValidcontactdata] = useState({ email: '', emailerr: '', phone: '', phoneerr: '', address: '', addresserr: '' })
  const [validextradata, setValidextradata] = useState({ hobby:'',hobbyerr: '', language: '', languageerr: '', photo: '', photoerr: '' })
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
    console.log(contactdata.address)
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

  const close = () => {
    document.getElementById("liveToast").style.display = "none"

  }


  const checkdata = () => {

    setValid([])
    //Name Validation
    if (personaldata.name === "") {

      setValidpersonaldata(prevState => ({
        ...prevState,
        name: "form-control is-invalid",
        nameerr: "*Please Enter Name"
      }))
      valid.push(false)
    }
    else if (!((/^[a-zA-Z ]{2,30}$/).test(personaldata.name))) {
      setValidpersonaldata(prevState => ({
        ...prevState,
        name: "form-control is-invalid",
        nameerr: "*Please Enter Valid Name"
      }))
      valid.push(false)
    }
    else {
      setValidpersonaldata(prevState => ({
        ...prevState,
        name: "",
        nameerr: ""
      }))
    }

    //Birthdate Validation
    if (personaldata.dob === "") {

      setValidpersonaldata(prevState => ({
        ...prevState,
        dob: "form-control is-invalid",
        doberr: "*Please Choose Birthdate"
      }))
      valid.push(false)
    }
    else {
      setValidpersonaldata(prevState => ({
        ...prevState,
        dob: "",
        doberr: ""
      }))
    }

    //Email Validation
    if (contactdata.email === "") {
      setValidcontactdata(prevState => ({
        ...prevState,
        email: "form-control is-invalid",
        emailerr: "*Please Enter Email"
      }))
      valid.push(false)
    }
    else if (!((/^[a-zA-Z0-9_]+@[a-zA-Z0-9]+\.[A-Za-z]+$/).test(contactdata.email))) {
      setValidcontactdata(prevState => ({
        ...prevState,
        email: "form-control is-invalid",
        emailerr: "*Please Enter Valid Email"
      }))
      valid.push(false)
    }
    else {
      setValidcontactdata(prevState => ({
        ...prevState,
        email: "",
        emailerr: ""
      }))
    }

    //Phone Number Validation
    if (contactdata.phone === "") {
      setValidcontactdata(prevState => ({
        ...prevState,
        phone: "form-control is-invalid",
        phoneerr: "*Please Enter Phone Number"
      }))
      valid.push(false)
    }
    else if (contactdata.phone.length !== 10) {
      setValidcontactdata(prevState => ({
        ...prevState,
        phone: "form-control is-invalid",
        phoneerr: "*Please Enter Valid Phone Number"
      }))
      valid.push(false)
    }
    else {
      setValidcontactdata(prevState => ({
        ...prevState,
        phone: "",
        phoneerr: ""
      }))
    }

    //Address Validation
    if (contactdata.address === "") {
      setValidcontactdata(prevState => ({
        ...prevState,
        address: "form-control is-invalid",
        addresserr: "*Please Enter Address"
      }))
      valid.push(false)
    }
    else {
      setValidcontactdata(prevState => ({
        ...prevState,
        address: "",
        addresserr: ""
      }))
    }

    //Hobby Validation
    if (extradata.hobby.length === 0) {
      setValidextradata(prevState => ({
        ...prevState,
        hobby:"form-check-input",
        hobbyerr: "*Please Select at least 1"
      }))
      valid.push(false)
    }
    else {
      setValidextradata(prevState => ({
        ...prevState,
        hobby:'',
        hobbyerr: ""
      }))
    }

    //Language Validation
    if (extradata.language === "") {
      setValidextradata(prevState => ({
        ...prevState,
        language: "form-control is-invalid",
        languageerr: "*Please Choose Language"
      }))
      valid.push(false)
    }
    else {
      setValidextradata(prevState => ({
        ...prevState,
        language: "",
        languageerr: ""
      }))
    }

    //Photo Validation
    if (extradata.photo === "") {
      setValidextradata(prevState => ({
        ...prevState,
        photo: "form-control is-invalid",
        photoerr: "*Please Choose Photo"
      }))
      valid.push(false)
    }
    else {
      setValidextradata(prevState => ({
        ...prevState,
        photo: "",
        photoerr: ""
      }))
    }


    if (valid.length === 0) {
      document.getElementById("liveToast").style.display = "block"
    }
  }



  return (
    <div className="App">
      <Personal getpersonaldata={getpersonaldata} checkvalidpersonal={validpersonaldata} />
      <Contact getcontactdata={getcontactdata} checkvalidcontact={validcontactdata} />
      <Extradata getextradata={getExtradata} checkextra={validextradata} />
      <button className='btn btn-danger' onClick={() => checkdata()}>Submit</button>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-header">
            <strong className="me-auto">Info</strong>
            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" onClick={() => close()}></button>
          </div>
          <div className="toast-body" style={{ color: "green" }}>
            welcome {personaldata.name}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
