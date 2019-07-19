import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar' 
import LabelList from './LabelList'
import SearchList from './SearchList'

class App extends React.Component {
    state = { 
        term: '',
        images: []
        };

    load12Breeds = async () => {
    await axios.get('https://dog.ceo/api/breeds/list/all')
    .then(response => { 
            const labels = Object.keys(response.data.message).slice(0, 12);
            this.setState({
                images: labels,
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    loadAllBreeds = async () => {
        await axios.get(`https://dog.ceo/api/breed/hound/images`)
        .then(response => { 
            this.setState({images: response.data.message})            
        })
        .catch(error => {
            console.log(error);
        });
    }

    render () {
        return (
            <div> 
                <div className="ui container" style={{marginTop: '10px'}}>
                    <SearchBar onSubmit={this.load12Breeds()} />  
                    <LabelList images={this.state.images} />    
                    <SearchList onSearch={this.loadAllBreeds} /> 
                </div>
            </div>  
        );
    };
}

export default App;