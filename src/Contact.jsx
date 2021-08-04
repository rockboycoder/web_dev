import React, { useState } from "react";


const Contact = () => {
    const [data, setData] = useState({
        FullName: "",
        Phone: "",
        Email: "",
        Message: "",
    });
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };
    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            `My name is ${data.FullName}. My mobile number is ${data.Phone} and email is ${data.Email}, Here is what I want to say ${data.Message}`);
    };
    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Contact us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" 
                            class="form-label">FullName</label>
                            <input type="text" class="form-control" 
                            id="exampleFormControlInput1" 
                            name="FullName"
                            value={data.FullName}
                            onChange={InputEvent}
                            placeholder="enter your name" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" 
                            class="form-label">Phone number</label>
                            <input type="number" class="form-control" 
                            id="exampleFormControlInput1"
                            name="Phone"
                            value={data.Phone}
                            onChange={InputEvent}
                            placeholder="mobile number" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" 
                            class="form-label">Email address</label>
                            <input type="email" class="form-control" 
                            id="exampleFormControlInput1" 
                            name="Email"
                            value={data.Email}
                            onChange={InputEvent}
                            placeholder="name@example.com" />
                        </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3"
                        name="Message"
                        value={data.Message}
                        onChange={}
                        ></textarea>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-outline-primary" type="submit">Submit form</button>
                    </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
};
export default Contact;
