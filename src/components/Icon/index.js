import React from "react"
import PropTypes from "prop-types"
import capitalize from "lodash/capitalize"

const propTypes = {
  type: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  height: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ])
}
const defaultProps = {
  width: "auto",
  height: "auto"
}

const Icon = props => {
  const { type } = props
  const lowercaseType = type.toLowerCase()
  const srcPath = `/images/${lowercaseType}.svg`
  const path = `${window.location.origin}/jenkins`
  return (
    <div style={{ ...props }} onClick={() => { window.location.href = path }}>
    <img id={lowercaseType} src={srcPath} alt="" {...props} />
    <div className="d-flex justify-content-center">{capitalize(lowercaseType)}</div>
    </div>
  )
}

Icon.propTypes = propTypes
Icon.defaultProps = defaultProps

export default Icon
