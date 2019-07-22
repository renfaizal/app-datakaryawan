import React from 'react';
import axios from 'axios';

class AddKaryawan extends React.Component {

    constructor () {
        super();
        // this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
          dataDivisi: [],
          dataJabatan: [],
          nama: '',
          alamat: '',
          email: '',
          jabatan_id:'',
          divisi_id:'',
        }

        this.handleNamaChange = this.handleNamaChange.bind(this);
        this.handleAlamatChange = this.handleAlamatChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleDivisi = this.handleDivisi.bind(this);
        this.handleJabatan = this.handleJabatan.bind(this);
      }

      handleNamaChange (evt) {
        this.setState({ nama: evt.target.value });
      }
      handleAlamatChange (evt) {
        this.setState({ alamat: evt.target.value });
      }
      handleEmailChange (evt) {
        this.setState({ email: evt.target.value });
      }
      handleDivisi(evt) {
        this.setState({ divisi_id: evt.target.value });
      }
      handleJabatan(evt) {
        this.setState({ jabatan_id: evt.target.value });
      }
      
      componentDidMount() {

        axios.get('http://e582704b.ngrok.io/api/divisi/')
        .then((result)=> result.data)
        .then((data)=>{
          return this.setState({
            dataDivisi: data.data,
            isLoaded: false
          })
        })

        axios.get('http://e582704b.ngrok.io/api/jabatan/')

        .then((result)=> result.data)
        .then((data)=>{
          return this.setState({
            dataJabatan: data.data,
            isLoaded: false
          })
        })
      }      

    onSubmit(e){      
        e.preventDefault();
        // console.log(this.state.nama)
        // console.log(this.state.alamat)

        const pegawai = {
            // id: this.state.name,
            nama: this.state.nama,
            alamat: this.state.alamat,
            username: 'ren',
            password: '123',
            email: this.state.email,
            jabatan_id: this.state.jabatan_id,
            divisi_id: this.state.divisi_id
        }

        // const config = {
        //     headers: {
        //         'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
        //     }
        // }

        console.log(pegawai);
    	axios.post('http://e582704b.ngrok.io/api/pegawai/tambah', {
            nama: this.state.nama,
            alamat: this.state.alamat,
            username: 'ren',
            password: '123',
            email: this.state.email,
            jabatan_id: this.state.jabatan_id,
            divisi_id: this.state.divisi_id
        } )
         .then(function (response) {
           console.log(response);
           })
           .catch(function (error) {
            console.log(error);
           })
           .then(res => console.log(pegawai))
        // .then(res => console.log(res.data))
        // .then(res => console.log(karyawan))
        // axios({method:'post', url: 'http://53a2f038.ngrok.io/api/pegawai/tambah', data:{karyawan}})
        //  .then(res => console.log(res.data))
        this.setState({
            // id:'',
            nama:'',
            alamat:'',
            email:''
        })
        // .catch(error =>{
        //     console.log(error);
        // })
    }      
    
    render(){
        const { dataDivisi, dataJabatan} = this.state;
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
                <div className="field is-grouped">
                <label className="label">Alamat Email</label>
                    <div className="control">
                        <input className="input" name="email" type="text" placeholder="Text input" value={this.state.email} onChange={this.handleEmailChange}/>
                    </div>
                </div>                
                <div className="field is-grouped">
                <label className="label">Divisi</label>
                <div className="select">
                    <select onChange={this.handleDivisi}>
                        {
                            dataDivisi.length > 0 ? dataDivisi.map(item => {
                                const {id, nama} = item;
                                return(
                                <option className="is-capitalized" value={id}>{nama}</option>
                                );
                            }) : null
                        }
                    </select>
                </div>
                </div>
                <div className="field is-grouped">
                <label className="label">Jabatan</label>
                <div class="select">
                    <select onChange={this.handleJabatan}>
                        {
                            dataJabatan.length > 0 ? dataJabatan.map(item => {
                                const {id, nama} = item;
                                return(
                                <option className="is-capitalized" value={id}>{nama}</option>
                                );
                            }) : null
                        }
                    </select>
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
