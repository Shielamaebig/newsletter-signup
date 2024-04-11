import './Form.css'
function Form() {
    return (
        <form className='form'>
            {/* <label>Enter your name:</label>
            <input type="text" className=""/>
            <button>Subscribe to monthly newsletter</button> */}
                      <label for=""> Email Address </label>
          <input type="text"placeholder="email@gmai.com" className='form-input'></input>
          <button>Subscribe to monthly newsletter</button>
        </form>
    )
}
export default Form;