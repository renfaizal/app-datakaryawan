import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class ViewKaryawan extends React.Component {
  constructor(props) {
    super(props);
    this.hapusPegawai = this.hapusPegawai.bind(this);

    this.state = {
      items: []
    };

  }

  componentDidMount() {
  
    axios.get('http://e582704b.ngrok.io/api/pegawai/')

    .then((result)=> result.data)
    .then((data)=>{
      return this.setState({
        items: data.data,
        isLoaded: false
      })
    })
  }

  hapusPegawai(id) {
    // e.preventDefault();
    console.log(id)
    axios.post('http://e582704b.ngrok.io/api/pegawai/hapus/'+id.id)
    .then(res => console.log(res.data));
  }

  render() {
    const { items} = this.state;
    console.log(items)
    if (items == null) {
      return(      
          <div>         
            <center>
              DATA KOSONG
            </center>
          </div>
      )
    } else {
      return(
          <div>
            <div className="table">
              <thead>
                <tr>
                  <th>#ID</th>
                  <th>Nama Karyawan</th>
                  <th>Alamat</th>
                  <th>Jabatan</th>
                  <th>Divisi</th>
                  <th>Operasi</th>
                </tr>
              </thead>
              <tbody>
              {
                items.length > 0 ? items.map(item => {
                  const {id, nama, alamat, jabatan, divisi} = item;
                  return(
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{nama}</td>
                      <td>{alamat}</td>
                      <td className="is-capitalized">{jabatan}</td>
                      <td className="is-capitalized">{divisi}</td>
                      <td>
                        <div className="field is-grouped">
                          <div className="control">
                            <button type="submit" className="button is-link" onClick={() => this.hapusPegawai({id})} >
                              Delete
                            </button>
                          </div>
                          <div className="control">
                            <button className="button is-link" >
                              Edit
                            </button>
                          </div>                          
                        </div>
                      </td>
                    </tr>
                  );
                }) : null
              }  
              </tbody>
            </div>
          </div>
      )
    } 
  }
}

export default ViewKaryawan;
