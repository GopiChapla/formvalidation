const Contact = (props) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td><label>Email : </label></td>
                        <td><input type="email" onChange={(e) => props.getdata("email", e.target)} id="txt_email"></input>
                            <div id="err_email" className="invalid-feedback" > </div><br /></td>
                    </tr>
                    <tr>
                        <td><label>Phone Number : </label></td>
                        <td><input type="number" onChange={(e) => props.getdata("phone", e.target)} id="txt_phone"></input>
                            <div id="err_phone" className="invalid-feedback" > </div><br /></td>
                    </tr>
                    <tr>
                        <td><label>Address : </label></td>
                        <td><textarea rows="4" onChange={(e) => props.getdata("address", e.target)} id="txt_address"></textarea>
                            <div id="err_address" className="invalid-feedback" > </div><br /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Contact