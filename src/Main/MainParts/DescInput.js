import React from 'react';

const Description = (props) => {
    return (
        <textarea
            onChange={props.handleOnChangeDesc}
            value={props.descValue}
            style={{
                marginTop: '20px',
                resize: 'none',
                rows: '10',
                cols: '10',
                width: '51%',
                height: '200px',
                textAlign: 'center',
                borderRadius: '20px',
                border: '1px solid dodgerblue',
                outline: 'none'
            }}
            placeholder="task description"
        />
    );
}

export default Description;