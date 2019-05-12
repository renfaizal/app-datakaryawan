import React from 'react';

class ViewKaryawan extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      message: null,
      jabatan: [],
      status: {}
    }
  }

  componentDidMount() {
    const apiUrl = 'http://localhost:1234/api/jabatan';
    var bearer = 'Bearer ' +  'Aw4s_g4l4k';

    fetch(apiUrl, {
            method: 'get', 
            headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        }})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            jabatan: result
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
  }

  render() {
    const { error, jabatan} = this.state;

    if(error) {
      return (
        <div>Error: {error.message}</div>
      )
    } else {
      return(
        <div>
          {this.state.status.message }
          
          <div className="table">
            <thead>
              <tr>
                <th>#ID</th>
                <th>Nama Jabatan</th>
              </tr>
            </thead>
            <tbody>
              {jabatan.map(jabatan => (
                <tr key={jabatan.id}>
                  <td>{jabatan.id}</td>
                  <td>{jabatan.nama}</td>
                  <td>
                    {/* <button className="button" variant="info" onClick={() => this.props.editProduct(product.id)}>Edit</button>
                    &nbsp;<button className="button" variant="danger" onClick={() => this.deleteProduct(product.id)}>Delete</button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </div>
        </div>
      )
    }
  }
}

export default ViewKaryawan;
