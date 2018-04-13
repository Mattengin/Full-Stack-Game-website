import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import style from './PostForum.module.scss'
import MainImageUploader from './MainImageUploader';
class imageUploaderBox extends Component {

    ////WIP
   
    render() {
        

        return (
           
            <div>
                <h1>Holder set</h1>
                <MainImageUploader />
            </div>
            
//             <form id="file-upload-form" class="uploader">
//   <input id="file-upload" type="file" name="fileUpload" accept="image/*" />

//   <label for="file-upload" id="file-drag">
//     <img id="file-image" src="#" alt="Preview" class="hidden" />
//     <div id="start">
//       <i class="fa fa-download" aria-hidden="true"></i>
//       <div>Select a file or drag here</div>
//       <div id="notimage" class="hidden">Please select an image</div>
//       <span id="file-upload-btn" class="btn btn-primary">Select a file</span>
//     </div>
//     <div id="response" class="hidden">
//       <div id="messages"></div>
//       <progress class="progress" id="file-progress" value="0">
//         <span>0</span>%
//       </progress>
//     </div>
//   </label>
// </form>
          
        )
    }
}

export default imageUploaderBox;