import { useForm } from "react-hook-form";
import EmailIcon from "./s6_emailIcon"
import PhoneIcon from "./s6_phoneIcon"
import Behance from "./s6_behanceIcon"


function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            defaultValues: {
                name: '',
                email: '',
                tel: '',
                subject: '',
                message: ''
            }
        }
    );
    // console.log(errors);
    const reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return (
        <>
            <div className="contactMe">
                <p className="getInTouch">Get In Touch</p>
                <h2 className="title" >Contact</h2>
                <a href="mailto:yunyusudesign@gmail.com" className="contactInfo">
                    <EmailIcon />yunyusudesign@gmail.com
                </a>
                <p className="contactInfo">
                    <PhoneIcon />0933287982
                </p>
                <a href="https://www.behance.net/yunyusu" className="behanceLink" target="_blank" rel="noopener noreferrer"><Behance /><span>Behance</span></a>

            </div>
            <form className="contactForm">
                <input id="nameText" className={`formInput ${errors.name?.message && "errInput"}`} type="text" {...register("name", { required: 'This is required' })} placeholder="Name:" />
                <p className="errTxt">{errors.name?.message}</p>

                <input id="emailText" className={`formInput ${errors.email?.message && "errInput"}`} type="email" {...register("email", {
                    required: 'This is required', pattern: {
                        value: reg,
                        message: "invalid email address"
                    }
                })} placeholder="Email:" />
                <p className="errTxt">{errors.email?.message}</p>

                <input id="telText" className={`formInput ${errors.phone?.message && "errInput"}`} type="tel"
                    {...register("phone",
                        { required: 'This is required', minLength: { value: 10, message: 'Min length is 10' } })
                    } aria-invalid="false" placeholder="Phone:" maxLength="10" />
                <p className="errTxt">{errors.phone?.message}</p>

                <input id="subText" className={`formInput ${errors.subject?.message && "errInput"}`} type="text" {...register("subject", { required: 'This is required' })} aria-invalid="false" placeholder="Subject:" />
                <p className="errTxt">{errors.subject?.message}</p>

                <textarea id="bodyText" className={`formInput ${errors.message?.message && "errInput"}`} {...register("message", { required: 'This is required' })} cols="40" rows="4" aria-required="true" aria-invalid="false" placeholder="Message:" ></textarea>
                <p className="errTxt">{errors.message?.message}</p>
                <button className="submitBtn" type="text" value="Submit" onClick={handleSubmit((data) => {
                    let to = "yunyusudesign@gmail.com";
                    let name = data.name;
                    let email = data.email;
                    let phone = data.phone;
                    let subject = data.subject;
                    let message = data.message;
                    let body = "" + message + '%0A%0A%0A';//%0A是換行 換了三行
                    body += "From：" + name + '%0A';
                    body += "Email：" + email + '%0A';
                    body += "Tel：" + phone + '%0A';
                    window.location = `mailto:${to}?subject=${subject}&body=${body}`
                })} >Submit</button>
            </form>
        </>
    )
}




export default Contact;