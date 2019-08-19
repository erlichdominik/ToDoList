import React from 'react';

const ButtonSubmit = (props) => {
    return (
        <button
            className="submit-btn"
            type="submit"
            onClick={props.handleSubmitButton}
            style={{
                width: '51%',
                marginTop: '20px',
                height: '50px',
                border: 'none',
                backgroundColor: 'dodgerblue',
                fontSize: '2em',
                textTransform: 'uppercase',
                borderRadius: '20px',
                outline: 'none'
            }}
        > Submit
    </button>
    );
}

export default ButtonSubmit;