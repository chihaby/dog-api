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
                                    style={{margin: 'auto',
                                            marginLeft: '50px',
                                            float:'left',
                                            width: '150px', 
                                            height: '70px', 
                                            margin: '1%',
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                >
                                {image}
                                </button>
                    })}
                </div>
                    {this.state.term.map(imageTerm => {
                        return <img 
                                    key={imageTerm.id} 
                                    class="ui medium circular image" 
                                    src={imageTerm} alt="img"  
                                    style={{float:'left', 
                                            width: '250px', 
                                            height: '250px', 
                                            margin: '2%',
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                    }}
                                />
                    })}
                <div>
                </div>
            </div>
            )
        }
    }
export default LabelList;
