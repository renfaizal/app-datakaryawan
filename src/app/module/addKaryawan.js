import React from 'react';
import axios from 'axios';

class AddKaryawan extends React.Component {

    constructor () {
        super();
        // this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
          nama: '',
          alamat: ''
        }

        this.handleNamaChange = this.handleNamaChange.bind(this);
        this.handleAlamatChange = this.handleAlamatChange.bind(this);
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
        // console.log(this.state.nama)
        // console.log(this.state.alamat)
        const karyawan = {
            // id: this.state.name,
            nama: this.state.nama,
            alamat: this.state.alamat,
            username: 'ren',
            password: '123',
            email: 'test@gmail.com',
            jabatan_id: '450613489735991297',
            divisi_id: '450617489217224705'
        }
    	axios.post('http://53a2f038.ngrok.io/api/pegawai/tambah', karyawan)
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
        // .then(res => console.log(res.data))
        .then(res => console.log(karyawan))
        // axios({method:'post', url: 'http://53a2f038.ngrok.io/api/pegawai/tambah', data:{karyawan}})
        // .then(res => console.log(res.data))
        this.setState({
            // id:'',
            nama:'',
            alamat:''
        })
        // .catch(error =>{
        //     console.log(error);
        // })
    }      
    
    render(){
        //const { id, nama, alamat } = this.state;
        return(
            <form onSubmit={this.onSubmit}>
                <div className="field is-grouped">
                <label className="label">Nama</label>
                    <div className="control">
                        <input className="input" name="nama" type="text" placeholder="Text input" value={this.state.nama} onChange={this.handleNamaChange}/>
                    </div>
                </div>
                <div className="field is-grouped">
                <label className="label">Alamat</label>
                    <div className="control">
                        <input className="input" name="alamat" type="text" placeholder="Text input" value={this.state.alamat} onChange={this.handleAlamatChange}/>
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
