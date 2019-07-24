import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar' 
import LabelList from './LabelList'
import SearchList from './SearchList'

class App extends React.Component {
    state = { 
        term: '',
        images: [],
        img: []
        };

    load12Breeds = async () => {
    await axios.get('https://dog.ceo/api/breeds/list/all')
    .then(response => { 
            const labels = Object.keys(response.data.message).slice(0, 12);
            this.setState({
                images: labels
            });
        })
        .catch(error => {
            console.log(error);
        });
    }
    
    loadAllBreeds = async (term) => {
        await axios.get("https://dog.ceo/api/breed/"+`${term}`+ "/images")
        .then( response => {
        this.setState({
            img: response.data.message.slice(0,12)
        });
        console.log(this.state.img)
    });

    }

    componentDidMount = () => {
        this.load12Breeds();
    }

    render () {
        return (
            <div> 
                <div className="ui container" style={{marginTop: '10px'}}>
                    <SearchBar onSubmit={this.loadAllBreeds} />  
                    <LabelList 
                        onSuccess={this.load12Breeds}
                        images={this.state.images}
                        />    
                    <SearchList allImages={this.state.img} /> 
                </div>
            </div>  
        );
    };
}

export default App;
