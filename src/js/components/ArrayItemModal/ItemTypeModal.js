import React from 'react';
import dispatcher from './../../helpers/dispatcher';

import { Add as Cancel, CheckCircle } from './../icons';
//global theme
import Theme from './../../themes/getStyle';

//this input appears when adding a new value to an object
export default class extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            defaultValue: ''
        };
    }

    changeType = (type) => {
        let defaultValue;
        switch (type) {
            case 'string':
                defaultValue = '';
                break;
            case 'integer':
                defaultValue = 0;
                break;
            case 'float':
                defaultValue = 0.1;
                break;
            case 'object':
                defaultValue = {};
                break;
            case 'array':
                defaultValue = [];
                break;
            case 'null':
                defaultValue = null;
                break;
            default :
                defaultValue = '';
                break;
        }
        this.setState({
            defaultValue: defaultValue
        });
    };

    render() {
        const { theme, rjvId } = this.props;

        return (
            <div
                class="key-modal-request"
                {...Theme(theme, 'key-modal-request')}
                onClick={this.closeModal}
            >
                <div
                    {...Theme(theme, 'key-modal')}
                    onClick={e => {
                        e.stopPropagation();
                    }}
                >
                    <div {...Theme(theme, 'key-modal-label')}>Item Type:</div>
                    <div style={{ position: 'relative' }}>
                        <select
                            {...Theme(theme, 'item-type-modal-select')}
                            className="item-type-modal-select"
                            spellCheck={false}
                            defaultValue={"string"}
                            placeholder="..."
                            onChange={e => {
                                this.changeType(e.target.value)
                            }}
                        >
                            <option value="string">string</option>
                            <option value="integer">integer</option>
                            <option value="float">float</option>
                            <option value="object">object</option>
                            <option value="array">array</option>
                            <option value="null">null</option>
                        </select>
                        <CheckCircle
                            {...Theme(theme, 'item-type-modal-submit')}
                            class="item-type-modal-submit"
                            onClick={e => this.submit()}
                        />
                    </div>
                    <span {...Theme(theme, 'key-modal-cancel')}>
                        <Cancel
                            {...Theme(theme, 'key-modal-cancel-icon')}
                            class="key-modal-cancel"
                            onClick={() => {
                                dispatcher.dispatch({
                                    rjvId: rjvId,
                                    name: 'RESET'
                                });
                            }}
                        />
                    </span>
                </div>
            </div>
        );
    }

    closeModal = () => {
        dispatcher.dispatch({
            rjvId: this.props.rjvId,
            name: 'RESET'
        });
    };

    submit = () => {
        this.props.submit(this.state.defaultValue);
    };
}
