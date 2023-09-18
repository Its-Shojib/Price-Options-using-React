
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    let {name,features,price} = option;
    return (
        <div className=' bg-slate-300 px-10 flex flex-col py-5 text-center rounded-2xl'>
            <h2>
                <span className='text-3xl'>{price}</span>
                <span className='text-2xl'>/month</span>
            </h2>
            <h2 className='text-3xl'>
                {name}
            </h2>
            <div className='pt-5 flex-grow'>
                {
                    features.map((feature,idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <div className='pt-5'>
                <button className='bg-blue-500 px-5 py-2 rounded-lg hover:bg-green-600'>Buy Now!</button>
            </div>
        </div>
    );
};
PriceOption.propTypes ={
    option: PropTypes.object
}
export default PriceOption;