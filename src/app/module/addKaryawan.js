import React from 'react';
import axios from 'axios';

class AddKaryawan extends React.Component {

    constructor () {
        super();
        // this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
          id: '',
          nama: '',
          alamat: ''
        }

        this.handleIdChange = this.handleIdChange.bind(this);
        this.handleNamaChange = this.handleNamaChange.bind(this);
        this.handleAlamatChange = this.handleAlamatChange.bind(this);
      }
      handleIdChange (evt) {
        this.setState({ id: evt.target.value });
      }
      handleNamaChange (evt) {
        this.setState({ nama: evt.target.value });
      }
      handleAlamatChange (evt) {
        this.setState({ alamat: evt.target.value });
      }
      
    // handleChange (evt) {
    //         this.setState({ [evt.target.name]: evt.target.value });
    // }
    
    // onChange (event) {
    //     console.log(event.target.name); // the name of the form element
    //     console.log(event.target.value); // the value of the form element
    // }

    onSubmit(e){      
        e.preventDefault();

        const karyawan = {
            id: this.state.name,
            nama: this.state.age,
            alamat: this.state.salary
        }
    	axios.post('http://24a31190.ngrok.io/api/pegawai/tambah', karyawan)
        .then(res => console.log(res.data));
        
        // this.setState({
        //     id:'',
        //     nama:'',
        //     alamat:''
        // });
    }      
    
    render(){
        //const { id, nama, alamat } = this.state;
        return(
            <form onSubmit={this.onSubmit}>
                <div className="field is-grouped">
                <label className="label">ID</label>
                    <div className="control">
                        <input className="input" name="id" type="text" placeholder="ID Karyawan" onChange={this.handleIdChange}  />
                    </div>
                </div>
                <div className="field is-grouped">
                <label className="label">Nama</label>
                    <div className="control">
                        <input className="input" name="nama" type="text" placeholder="Text input" onChange={this.handleNamaChange}/>
                    </div>
                </div>
                <div className="field is-grouped">
                <label className="label">Alamat</label>
                    <div className="control">
                        <input className="input" name="alamat" type="text" placeholder="Text input" onChange={this.handleAlamatChange}/>
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
