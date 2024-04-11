import './Title.css'
import icon from './icon.svg'
import Form from './Form';
function Title() {
    return (
        <div className='header_title'>
            <h1 className='updated'>Stay Updated!</h1>
            <p className='small_spacing'>Join 60,000+ product managers receiving monthly updates on :</p>
            <div className='list'>
                <img src={icon} className='icon'></img>  
                <p>Product Discovery and building what matters</p>
            </div>
            <div className='list'>
                <img src={icon} className='icon'></img>  
                <p>Measuring to ensure updates are success</p>
            </div>
            <div className='list'>
                <img src={icon} className='icon'></img>  
                <p>And much more</p>
            </div>
            <Form></Form>

        </div>
    )
}   
export default Title;