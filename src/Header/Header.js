import React from 'react';

const header = props => {
    let styles = {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: '3em',
    }

    return <h1 style={styles}>to do list</h1 >
}

export default header;