const Personal = (props) => {
    const changedata = (field,e) => {
        props.getpersonaldata(field, e)
    }
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td><label>Name : </label></td>
                        <td><input type="text" onChange={(e) => changedata("name", e.target)} id="txt_name" className={props.checkvalidpersonal.name}></input>
                            <div id="err_name" className="invalid-feedback" > {props.checkvalidpersonal.nameerr}</div><br /></td>
                    </tr>
                    <tr>
                        <td><label>Gender : </label></td>
                        <td><input type="radio" name="gender" onChange={(e) => changedata("gender", e.target)} value="Male" checked />Male
                            <input type="radio" name="gender" onChange={(e) => changedata("gender", e.target)} value="Female" />Female</td><br />
                    </tr>
                    <tr>
                        <td><label>Date of Birth : </label></td>
                        <td><input type="date" onChange={(e) => changedata("dob", e.target)} id="txt_dob" className={props.checkvalidpersonal.dob}></input>
                            <div id="err_dob" className="invalid-feedback" > {props.checkvalidpersonal.doberr}</div><br /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Personal