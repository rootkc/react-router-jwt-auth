import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { Label } from 'components'

const FieldContainer = ({ name, label, type }) => (
  <div>
    <Label name={name}>{ label }</Label>
    <Field name={name} component="input" type={type} />
  </div>

)

FieldContainer.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
}

FieldContainer.defaultProps = {
  type: 'text',
}

export default FieldContainer
