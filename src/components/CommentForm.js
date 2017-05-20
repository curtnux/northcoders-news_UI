import React from 'react';

const CommentForm = (props) => {
    return (
        <div>
        <article className='field'>
            <form 
            onSubmit={props.submitHandler}
            >
                <label className='label'>Comments
                    <p className='control'>
                    <textarea 
                        type="text" 
                        className='textarea' 
                        placeholder='Add Comment...'
                        value={props.input}
                        onChange={props.inputHandler}
                    />
                    </p>
                </label>
                    <input 
                        className='button is-dark' 
                        type="submit" 
                        value='submit'
                    />
            </form>
        </article>
        </div>
    );
};

export default CommentForm;