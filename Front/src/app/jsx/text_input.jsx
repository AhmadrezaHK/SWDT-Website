import React from 'react'

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input_value : ''
        };
        this.handle_input = this.handle_input.bind(this);
    }

    handle_input (event){
        let value = event.target.value;

        this.setState(prevState => {
            return {input_value:value}
        });
    }

    render(){
        return(
            <div className="input_container">
                <label htmlFor={this.props.input_id}>{this.props.input_label}</label>
                <input  className="input_container__input_field"
                        id={this.props.input_id}
                        type={this.props.input_type}
                        placeholder={this.props.input_placeholder}
                        onChange={this.handle_input}
                        value={this.state.input_value}
                        spellCheck={false}/>

                <span className="input_container__bottom_border">
                     { this.state.input_value.replace(/ /g, "\u00a0") }
                </span>
            </div>
        )
    }
}

module.exports = {
  Input : Input
};