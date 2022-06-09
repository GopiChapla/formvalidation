const Personal = (props) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td><label>Name : </label></td>
                        <td><input type="text" onChange={(e) => props.getdata("name", e.target)} id="txt_name"></input>
                            <div id="err_name" className="invalid-feedback" > </div><br /></td>
                    </tr>
                    <tr>
                        <td><label>Gender : </label></td>
                        <td><input type="radio" name="gender" onChange={(e) => props.getdata("gender", e.target)} value="Male" checked />Male
                            <input type="radio" name="gender" onChange={(e) => props.getdata("gender", e.target)} value="Female" />Female</td><br />
                    </tr>
                    <tr>
                        <td><label>Date of Birth : </label></td>
                        <td><input type="date" onChange={(e) => props.getdata("dob", e.target)} id="txt_dob"></input>
                            <div id="err_dob" className="invalid-feedback" > </div><br /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Personal