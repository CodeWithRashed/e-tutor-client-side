import PropTypes from 'prop-types';

const LabelGreen = ({children}) => {
  return (
    <div>
      <div className="bg-[#E1F7E3] py-1 px-2 rounded-lg">
        <p className="text-green-700">{children}</p>
      </div>
      
    </div>
  )
}
const LabelBlue = ({children}) => {
  return (
    <div>
      <div className="bg-[#EBEBFF] py-1 px-2 rounded-lg">
        <p className="text-[#342F98]">{children}</p>
      </div>
      
    </div>
  )
}

const LabelMain = ({children}) => {
  return (
    <div>
      <div className="bg-color-primary-light py-1 px-2 rounded-lg">
        <p className="text-color-primary">{children}</p>
      </div>
      
    </div>
  )
}
LabelGreen.propTypes = {
  children: PropTypes.string
}
LabelBlue.propTypes = {
  children: PropTypes.string
}
LabelMain.propTypes = {
  children: PropTypes.string
}
export {LabelGreen, LabelBlue, LabelMain}
