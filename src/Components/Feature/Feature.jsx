
import PropTypes from 'prop-types';
import { AiFillCheckCircle } from 'react-icons/ai'
const Feature = ({feature}) => {
    return (
        <div className='text-left'>
            <p className='flex items-center justify-start gap-2 text-xl'> <AiFillCheckCircle></AiFillCheckCircle> {feature}</p>
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string
}
export default Feature;