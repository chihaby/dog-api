import React from 'react';

loadImages = () => {
    console.log('yes loading');
}

const LabelList = props => {
    const labels = props.images.map(image => {
        return <button 
                    key={image.id} 
                    class="ui teal basic button"
                    onClick={loadImages}
                >
                    {image}
                </button>
    });
    return <div>{labels}</div>
};

export default LabelList;