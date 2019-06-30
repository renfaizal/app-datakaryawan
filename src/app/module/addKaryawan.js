import React from 'react';
import axios from 'axios';

class AddKaryawan extends React.Component {

    constructor () {
        super();
        this.state = {
          id: '',
          nama: '',
          alamat: '',
        };

        this.handleChange = this.handleChange.bind(this);
        // this.handleIdChange = this.handleIdChange.bind(this);
        // this.handleNamaChange = this.handleNamaChange.bind(this);
        // this.handleAlamatChange = this.handleAlamatChange.bind(this);
      }
    //   handleIdChange (evt) {
    //     this.setState({ id: evt.target.value });
    //   }
    //   handleNamaChange (evt) {
    //     this.setState({ nama: evt.target.value });
    //   }
    //   handleAlamatChange (evt) {
    //     this.setState({ alamat: evt.target.value });
      
    handleChange (evt) {
            this.setState({ [evt.target.name]: evt.target.value });
    }
    
    onChange (event) {
        console.log(event.target.name); // the name of the form element
        console.log(event.target.value); // the value of the form element
    }

    onSubmit(e){      
        e.preventDefault();

        const karyawan = {
            id: this.state.name,
            nama: this.state.age,
            alamat: this.state.salary,
        }
    	axios.post('http://c457c302.ngrok.io/api/pegawai/', karyawan)
	    .then(res => console.log(res.data));
    }      
    
    render(){
        // const { id, nama, alamat } = this.state;
        return(
            <form onSubmit={this.onSubmit}>
                <div className="field is-grouped">
                <label className="label">ID</label>
                    <div className="control">
                        <input className="input" name="id" type="text" placeholder="ID Karyawan" onChange={this.handleChange}  />
                    </div>
                </div>
                <div className="field is-grouped">
                <label className="label">Nama</label>
                    <div className="control">
                        <input className="input" name="nama" type="text" placeholder="Text input" onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="field is-grouped">
                <label className="label">Alamat</label>
                    <div className="control">
                        <input className="input" name="alamat" type="text" placeholder="Text input" onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="field">
                <div className="control">
                    <button className="button is-link">Submit</button>
                    </div>
                </div>
            </form>
        )
    }
}
export default AddKaryawan;
