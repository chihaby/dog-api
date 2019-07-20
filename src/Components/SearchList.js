import React from 'react';
// import axios from 'axios';

class SearchList extends React.Component {
    state = {
        term : '',
        imageSearch: []
    }

    getImages = () => {
        let url =  "https://dog.ceo/api/breed/"+`${this.state.term}`+"/images";
        fetch(url).then(response => response.json())
        .then((response) => {
            this.setState({
                imageSearch: response.message.slice(1,10)
            });
        });
    
    console.log(this.state.imageSearch);
};

    render(){
        return (
            <div>  
                <div>
                {this.getImages}
                {console.log(this.state.term)}
                {console.log(this.props.allBreeds)}
                    {this.state.imageSearch.map(imageTerm => {
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
//      `${this.state.term}` 