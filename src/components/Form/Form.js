import React from "react";

import "./Form.css"


const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('');

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className="form">

            {/* <input
                className={'input'}
                type="text"
                placeholder={'Стра'}
                value={country}
                onChange={onChangeCountry}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'улица'}
                value={country}
                onChange={onChangeCountry}
            />
            <section
                value={subject}
                onChange={onChangeSubject}
                className={'select'}>
                <option value={'physical'} />
                <option value={'legal'} />
            </section> */}
            form
        </div>
    );
};

export default Form;