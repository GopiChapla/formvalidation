const Extradata = (props) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td><label>Hobbies : </label></td>
                        <td><input type="checkbox" onChange={(e) => props.getdata("hobby", e.target)} value="Music" />Music<br />
                            <input type="checkbox" onChange={(e) => props.getdata("hobby", e.target)} value="Reading" />Reading<br />
                            <input type="checkbox" onChange={(e) => props.getdata("hobby", e.target)} value="Sports" />Sports<br /><br /></td>
                    </tr>
                    <tr>
                        <td><label>Language : </label></td>
                        <td><select onChange={(e) => props.getdata("language", e.target)} id="txt_language" defaultValue="--Select Language--">
                            <option disabled>--Select Language--</option>
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Gujarati</option>
                        </select>
                            <div id="err_language" className="invalid-feedback" > </div><br /></td>
                    </tr>
                    <tr>
                        <td><label>Photo : </label></td>
                        <td><input type="file" onChange={(e) => props.getdata("photo", e.target)} id="txt_photo"></input>
                            <div id="err_photo" className="invalid-feedback" > </div><br /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Extradata