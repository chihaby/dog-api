import React from 'react';

function SearchList (props) {

        return (
            <div>  
                <div>
                    {props.imageSearch.map(imageTerm => {
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
export default SearchList;
