import React from 'react';

const CommentForm = (props) => {
    return (
        <div className='field'>
            <form 
                onSubmit={props.submitHandler}
            >
                <label className='label'>
                    <p className='control'>
                    <textarea 
                        type="text" 
                        className='textarea' 
                        placeholder='Add Comment...'
                        value={props.input}
                        onChange={props.inputHandler}
                    />
                    <input 
                        className='button' 
                        type="submit" 
                        value='submit'
                    />
                    </p>
                </label>
                <div>
                </div>
            </form>
        </div>
    );
};

CommentForm.propTypes = {
    submitHandler: React.PropTypes.func.isRequired,
    input: React.PropTypes.string.isRequired,
    inputHandler: React.PropTypes.func.isRequired
};

export default CommentForm;
