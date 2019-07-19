import React from 'react';
import axios from 'axios';

class SearchList extends React.Component {
    state = {
        term : [],
    }

    getImages = () =>{
        axios.get(`https://dog.ceo/api/breed/hound/images`)
        .then(response => { 
            this.setState({term: response.data.message})
            console.log(this.state.term);
        })
        .catch(error => {
            console.log(error);
        });
    }

    render(){
        return (
            <div>
                <div>
                    {this.state.term.map(imageTerm => {
                    return <img 
                                key={imageTerm.id} 
                                class="ui medium circular image" 
                                src={imageTerm} 
                                alt="img"  
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
                </div>
            </div>
            )
        }
    }
export default SearchList;
