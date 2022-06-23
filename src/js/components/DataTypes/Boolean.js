import React from 'react';
import DataTypeLabel from './DataTypeLabel';
import Toggle from 'react-toggle'
import "react-toggle/style.css"

//theme
import Theme from './../../themes/getStyle';

export default class extends React.PureComponent {
    render() {
        const type_name = 'bool';
        const { props } = this;

        return (
            <div {...Theme(props.theme, 'boolean')}>
                <div style={{display: "flex", lineHeight: 2, transform: "translate(0, -2px)"}}>
                    <DataTypeLabel type_name={type_name} {...props}/>
                    <div style={{marginTop: 2}}>
                        <Toggle checked={props.value} icons={false} disabled={!props.editMode}
                                onChange={props.onChange}
                                onBlur={props.submitEdit}
                        />
                    </div>
                    <div style={props.value ? {fontSize: 11, marginLeft: 6, color: "green"} : {fontSize: 11, marginLeft: 6, color: "red"}}>
                    {props.value.toString()}
                    </div>
                </div>
            </div>
        );
    }
}
