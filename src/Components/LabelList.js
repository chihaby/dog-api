import React from 'react';
import axios from 'axios';
import './ImageList.css';

class LabelList extends React.Component {
    state = {
        term : [],
    }

    loadImages = e =>{
        axios.get(`https://dog.ceo/api/breed/${e.target.innerHTML}/images`)
        .then(response => { 
            this.setState({term: response.data.message})
            console.log(response.data.message);
        })
        .catch(error => {
            console.log(error);
        });
    }

    render(){
        return (
            <div>
                <div>
                    {this.props.images.map(image => {
                        return <button     
                                    key={image.id} 
                                    class="ui teal basic button"
                                    value={image.id}
                                    onClick={this.loadImages}
                                >
                                    {image}
                                </button>
                    })}
                </div>
                    {this.state.term.map(imageTerm => {
                        return <img className="ui medium circular image" src={imageTerm} alt="img" style={{float:"left"}}>></img>
                    })}
                <div>
                </div>
            </div>
            )
        }
    }
export default LabelList;
