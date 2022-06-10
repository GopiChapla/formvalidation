const Contact = (props) => {
    const changedata = (field,e) => {
        props.getcontactdata(field, e)
    }

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td><label>Email : </label></td>
                        <td><input type="email" onChange={(e) => changedata("email", e.target)} id="txt_email" className={props.checkvalidcontact.email}></input>
                            <div id="err_email" className="invalid-feedback" > {props.checkvalidcontact.emailerr}</div><br /></td>
                    </tr>
                    <tr>
                        <td><label>Phone Number : </label></td>
                        <td><input type="number" onChange={(e) => changedata("phone", e.target)} id="txt_phone" className={props.checkvalidcontact.phone}></input>
                            <div id="err_phone" className="invalid-feedback" > {props.checkvalidcontact.phoneerr}</div><br /></td>
                    </tr>
                    <tr>
                        <td><label>Address : </label></td>
                        <td><textarea rows="4" onChange={(e) => changedata("address", e.target)} id="txt_address" className={props.checkvalidcontact.address}></textarea>
                            <div id="err_address" className="invalid-feedback" > {props.checkvalidcontact.addresserr}</div><br /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Contact