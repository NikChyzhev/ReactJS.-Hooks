import React, { useState } from "react";
import Contact from "./contact";

const contactsList = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];

const Contacts = () => {
    const [contacts] = useState(contactsList);

    const [search, setSearch] = useState("");
    const [checkedMale, setCheckedMale] = useState(true);
    const [checkedFemale, setCheckedFemale] = useState(true);
    const [checkedNoGender, setCheckedNoGender] = useState(true);


    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    const handleChangeMale = (e) => {
        setCheckedMale(!checkedMale)
    }
    const handleChangeFemale = (e) => {
        setCheckedFemale(!checkedFemale)
    }
    const handleChangeNoGender = (e) => {
        setCheckedNoGender(!checkedNoGender)
    }

    let checkedBoxes = {
        "male": checkedMale,
        "female": checkedFemale,
        "undefined": checkedNoGender,
    }
    
    const contactsFiltered = contacts.filter((contact) => {
        const filterCheck = (contact.firstName + contact.lastName + contact.phone)
        .toLowerCase()
        .includes(search.toLowerCase());

        const checkBoxesCheck = checkedBoxes[String(contact.gender)];
        
        return filterCheck && checkBoxesCheck;
    });
  
    return (
        <div>
            <div>
                <input placeholder="search name OR phone" className="search" onChange={handleSearchChange} />
            </div>
            <div id="checkboxes">
                <label htmlFor="male">
                    <input 
                    type="checkbox" 
                    checked={checkedMale}
                    onChange={handleChangeMale} />
                    male
                </label>
                <label htmlFor="female">
                    <input 
                    type="checkbox"
                    checked={checkedFemale}
                    onChange={handleChangeFemale} />
                    female
                </label>
                <label htmlFor="noGender">
                    <input 
                    type="checkbox"
                    checked={checkedNoGender}
                    onChange={handleChangeNoGender} />
                    no gender
                </label>
            </div>
            <div>
                {contactsFiltered.map((component, index) => <Contact data={component} key={index} />)}
            </div>
        </div>
    )
}

export default Contacts;