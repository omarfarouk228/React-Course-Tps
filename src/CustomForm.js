import { useState } from "react";

function CustomForm() {
    const [name, setName] = useState('');
    return (
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <br/>
            <span>{name}</span>
      </form> 
    );
}

export default CustomForm;