import PropTypes from 'prop-types'

const SectionTitle = ({subtitle, title}) => {
  return (
    <div className='mb-10 text-center'>
      <h3 className='text-color-gray'>{subtitle}</h3>
      <h1 className='text-5xl text-color-black '>{title}</h1>
    </div>
  )
}

SectionTitle.propTypes = {
  subtitle: PropTypes.string,
    title: PropTypes.string
}

export default SectionTitle
