import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
// const CLOUDINARY_UPLOAD_URL = "cloudinary://696543129926915:wtdhnZTtjn5E7m2v91ysuIpxWts@secondcommand"
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/secondcommand/upload';
const CLOUDINARY_UPLOAD_PRESET = 'secondcommand_preset'; 
export default class ContactForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      uploadedFileUrls: [],
      uploadedFiles: []
    };
  }


//
  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);

    upload.end((err, response) => {
      if (err) {
        // console.error(err);
        //add err to the errors for render
      }

      if (response.body.secure_url !== '') {
        let newArray = this.state.uploadedFileUrls
        newArray.push(response.body.secure_url)

        this.setState({
          uploadedFileUrls: newArray
        })
        
      }
    });
  }

  onImageDrop(files) {
    let newArray = this.state.uploadedFiles
    newArray.push(files[0])
    this.setState({
      uploadedFiles: newArray
    })
    this.handleImageUpload(files[0]);
  }

  previewPics () {
    return (
      this.state.uploadedFileUrls.map((uploadedFileUrl, i) => (
        <div className='preview-pic-container' key={i}>
          <img className='preview-pic' src={this.state.uploadedFileUrls[i]} />
          <p className='preview-pic-name'>{this.state.uploadedFiles[i].name}</p>
        </div>
      ))
    )
  }

  render() {

    return(
      <div className='assets-container'>
        <div className='upload-box-container'>
          <div className='input-type-container'><label className='input-field-label'>Project assets </label></div>
          <div className='image-upload-container'>
            <div className="FileUpload">
              <Dropzone
                className='dropzone'
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop.bind(this)}>
                <p className='file-upload-instructions'>Drop an image here or click to find.</p>
              </Dropzone>
            </div>
          </div>
        </div>
        <div className='preview-pictures-container'>
          {this.state.uploadedFileUrls[0] ? this.previewPics() : null}
        </div>
      </div>
    )
  }
}

