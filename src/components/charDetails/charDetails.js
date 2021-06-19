import React, {Component} from 'react';
import './charDetails.css';
import GotService from '../../services/gotService';
export default class CharDetails extends Component {

    gotService = new GotService();

    state = {
        char: null
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    updateChar() {
        const {charId} = this.props
        if(!charId) {
            return;
        }

        this.gotService.getCharacter(charId)
            .then(char => {
                this.setState({char})
            })
        // this.foo.bar = 0;
    }

    render() {

        if(!this.state.char) {
            return <span className="select-error">Please select a character</span>
        }

        const {name, gender, born, died, culture} = this.state.char

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span className="t-right">{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span className="t-right">{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span className="t-right">{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span className="t-right">{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}