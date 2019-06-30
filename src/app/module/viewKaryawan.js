import React from 'react';
import axios from 'axios';

class ViewKaryawan extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    // const apiUrl = 'http://c457c302.ngrok.io/api/jabatan/';
    // //var token = 'Aw4s_g4l4k';
    // //var requestHeaders = {'Authorization':'Bearer '+ token};
    // fetch(apiUrl)
    //   .then(res => {
    //     console.log(res.json())
    //   })
    //   .then(parsedJSON => parsedJSON.results.map(data => (
    //     {
    //       id: '${data.id}',
    //       nama: '${data.nama}',
    //     })
    //   )
    //   )
    //   .then(items => this.setState({
    //     items,
    //     isLoaded: false
    //   }))
    //  // .catch(error => console.log('parsing data failed'),error)
    axios.get('http://c457c302.ngrok.io/api/pegawai/')
    .then((result)=> result.data)
    .then((data)=>{
      return this.setState({
        items: data.data,
        isLoaded: false
      })
    })
  }

  render() {
    const { items} = this.state;

      return(
        <div>
          
          <div className="table">
            <thead>
              <tr>
                <th>#ID</th>
                <th>Nama Karyawan</th>
                <th>Nama Alamat</th>
              </tr>
            </thead>
            <tbody>
            {
              items.length > 0 ? items.map(item => {
                const {id, nama, alamat} = item;
                return(
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{nama}</td>
                    <td>{alamat}</td>
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


export default ViewKaryawan;
