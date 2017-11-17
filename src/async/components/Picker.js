import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Picker extends Component {
    render() {
        const {value, onChange, onBlur, options} = this.props

        return (
            <span>
                <h1>{value}</h1>
                <select onBlur={e=> onBlur(e.target.value) } onChange={e => onChange(e.target.value)} value={value}>
                    {options.map(option => (
                        <option value={option} key={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </span>
        )
    }
}

Picker.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    value: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
}