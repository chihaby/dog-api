import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar' 
import LabelList from './LabelList'
import SearchList from './SearchList'

class App extends React.Component {
    state = { 
        term: '',
        images: [],
        imageSearch: []
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
    
    loadAllBreeds = () => {
            let url =  "https://dog.ceo/api/breed/"+`${this.state.term}`+ "/images";
            fetch(url)
            .then( response => {
                console.log(response)
                this.setState({
                    imageSearch: response.message
                });
            });
        
        console.log(this.state.term);
        console.log(this.state.imageSearch);
    };

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
                    <SearchList allBreeds={this.state.imageSearch} /> 
                </div>
            </div>  
        );
    };
}

export default App;
// `${this.state.term}`