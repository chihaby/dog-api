import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar' 
import LabelList from './LabelList'

class App extends React.Component {
    state = { images: [] };

    // getAllBreeds = () => {
    //     axios.get('https://dog.ceo/api/breeds/list/all')
    //     .then(response => { 
    //             const displayLabels = Object.keys(response.data.message).slice(0, 12);
    //             this.setState({images: displayLabels})
    //             console.log(displayLabels);
    //             // this.setState({images: labels});
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // }

    loadAllBreeds = async () => {
    await axios.get('https://dog.ceo/api/breeds/list/all')
    .then(response => { 
            const labels = Object.keys(response.data.message).slice(0, 12);
            console.log(labels);
            this.setState({images: labels});
    })
    .catch(error => {
        console.log(error);
    });

}

    render () {
        return (
            <div> 
                <div className="ui container" style={{marginTop: '10px'}}>
                    <SearchBar onSubmit={this.loadAllBreeds} />
                    <LabelList images={this.state.images}/>                    
                </div>
            </div>  
        );
    };
}

export default App;