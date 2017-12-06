import React from 'react'
import ReactDOM from 'react-dom'
import {SlideShow} from './slide_show.jsx'
import {MemberContainer} from './members_container.jsx'
import {Input} from './text_input.jsx'
import members from '../json/members.json'
import slides from  '../json/slides.json'

class Container extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return  <div>
                    <div className="slideshow_parent">
                        <SlideShow slides={slides}/>
                    </div>
                    <div>
                        <h1>سرپرست تیم</h1>
                        <MemberContainer members_info={members.slice(14,15)}/>
                    </div>
                    <div>
                        <h1>بنیان گذاران</h1>
                        <MemberContainer members_info={members.slice(0,2)}/>
                    </div>
                    <div>
                        <h1>اعضای ارشد</h1>
                        <MemberContainer members_info={members.slice(2,6)}/>
                    </div>
                    <div className="other_members">
                        <MemberContainer members_info={members.slice(6,14)}/>
                    </div>
                    <h1>تماس با ما</h1>
                    <div className="contact_us">
                        <div className="form">
                            <div className="name">
                                <Input input_type="text"
                                       input_placeholder="لطفا نام خود را وارد کنید."
                                       input_label={"نام"}
                                       input_id="name_input"/>
                            </div>
                            <div className="email">
                                <Input input_type="email"
                                       input_placeholder="لطفا ایمیل خود را وارد کنید."
                                       input_label="ایمیل"
                                       input_id="email_input"/>
                            </div>
                            <div className="textarea">
                                <div className="input_container">
                                    <label htmlFor="message_input">پیام</label>
                                    <textarea className="input_container__input_field"
                                              id="message_input"
                                              placeholder="لطفا پیام خود را وارد کنید.">

                                </textarea>
                                </div>
                            </div>
                        </div>
                        <div className="map">

                        </div>
                        <div className="clear">

                        </div>
                    </div>

                </div>
    }
}

ReactDOM.render(
    <Container/>,
    document.getElementById("main_container")
);