import React from 'react';
import dispatcher from './../../helpers/dispatcher';
import ObjectAttributes from './../../stores/ObjectAttributes';
import ItemTypeModal from './ItemTypeModal';
//global theme

//this input appears when adding a new value to an object
export default class extends React.PureComponent {
    render() {
        const { active, theme, rjvId } = this.props;

        return active ? (
            <ItemTypeModal
                rjvId={rjvId}
                theme={theme}
                submit={this.submit}
            />
        ) : null;
    }

    submit = (defaultValue) => {
        const { rjvId } = this.props;
        let request = ObjectAttributes.get(rjvId, 'action', 'new-item-request');
        console.log("add item submit:", request);
        dispatcher.dispatch({
            name: 'VARIABLE_ADDED',
            rjvId: rjvId,
            data: {
                ...request,
                new_value: [...request.existing_value, defaultValue]
            }
        });
    };
}
