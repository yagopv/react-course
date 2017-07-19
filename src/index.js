import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
import _ from 'lodash';

const API_KEY = 'AIzaSyAXnA_JoQyyguUD7njI1ArXT1cG59p7_Lg';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {videos: [], selectedVideo: null};

    this.videoSearch('surfboards');
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term)
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({videos, selectedVideo: videos[0]});
    });
  }  
}

ReactDOM.render(<App />, document.querySelector('.container'));