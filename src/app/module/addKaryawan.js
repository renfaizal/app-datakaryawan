import React, {Component} from 'react';
import axios from 'axios';

class AddKaryawan extends React.Component {
    render(){
        return(
            <div>
                <div className="field is-grouped">
                <label className="label">ID</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Text input" />
                    </div>
                </div>
                <div className="field is-grouped">
                <label className="label">Nama</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Text input" />
                    </div>
                </div>
                <div className="field is-grouped">
                <label className="label">Alamat</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Text input" />
                    </div>
                </div>
                <div className="field">
                <div class="control">
                    <button class="button is-link">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddKaryawan;
