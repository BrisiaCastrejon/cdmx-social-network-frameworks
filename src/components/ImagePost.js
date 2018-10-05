// dependencias
import React, { Component } from 'react';
import firebase from 'firebase';

class ImagePost extends Component {
  constructor () {
    super();
    this.state = {
      uploadValue: 0,
      image: null
    };
    this.handleUpload = this.handleUpload.bind(this);
  }
  handleUpload (e) {
    const file = e.target.files[0];
    const storageId = firebase.storage().ref(`User-Images/${file.name}`);
    const task = storageId.put(file);

    task.on('state_changed', snapshot => {
      let percetage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      this.setState({
        uploadValue:percetage
      });
    }, error => { 
      console.log(error.message) 
    }, () => {
      this.setState({
        uploadValue:100,
        image:task.snapshot.downloadURL
      })
    })
  }
  render () {
    return (
      <div>
        <progress value={this.state.uploadValue} max='100'></progress>
        <br/>
        <input type='file' onChange={this.handleUpload}/>
        <br/>
        <img width='500px' src={this.state.image} alt=''/>
      </div>
    )
  }
}

export default ImagePost;