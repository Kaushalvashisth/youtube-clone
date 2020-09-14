import React, { Component } from 'react';
import {Grid} from '@material-ui/core';

import wetube from './api/wetube';
import {SearchBar,VideoList,VideoDetail} from './components';

class App extends Component {
    state={
        videos:[],
        selectedVideo:null,
    }
    componentDidMount(){
        this.handleSubmit('John cena');
    }
    onVideoSelect =(video)=>{
        this.setState({selectedVideo:video});
    }
    handleSubmit=async (searchTerm)=>{
        const response = await wetube.get('search',{params:{q:searchTerm}});
        // console.log(response.data.items);
        this.setState({videos:response.data.items,selectedVideo:response.data.items[0]});
    }
    render() {
        const {selectedVideo,videos}=this.state;
        return (    
            <Grid justify="center" container spacing={8}>
                <Grid item xs={12}>

                    <Grid container spacing={10}>
                        <Grid item xs={12} md={12}>
                            {/* search bar */}
                            
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={12} md={8} style={{marginBottom:"50px"}}>
                            {/* video details  */}
                            <VideoDetail video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            {/* video list */}
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default App;