const Extradata = (props) => {
    const changedata = (field,e) => {
        props.getextradata(field, e)
    }
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td><label>Hobbies : </label></td>
                        <td><input type="checkbox" onChange={(e) => changedata("hobby", e.target)} value="Music" />Music<br />
                            <input type="checkbox" onChange={(e) => changedata("hobby", e.target)} value="Reading" />Reading<br />
                            <input type="checkbox" onChange={(e) => changedata("hobby", e.target)} value="Sports" />Sports<br /><br/>
                            <div id="err_hobby" className="invalid-feedback" >{props.checkextra.hobbyerr}</div><br/></td>
                    </tr>
                    <tr>
                        <td><label>Language : </label></td>
                        <td><select onChange={(e) => changedata("language", e.target)} id="txt_language" defaultValue="--Select Language--" className={props.checkextra.language}>
                            <option disabled>--Select Language--</option>
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Gujarati</option>
                        </select>
                            <div id="err_language" className="invalid-feedback" > {props.checkextra.languageerr}</div><br /></td>
                    </tr>
                    <tr>
                        <td><label>Photo : </label></td>
                        <td><input type="file" onChange={(e) => changedata("photo", e.target)} id="txt_photo" className={props.checkextra.photo}></input>
                            <div id="err_photo" className="invalid-feedback" > {props.checkextra.photoerr}</div><br /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Extradata