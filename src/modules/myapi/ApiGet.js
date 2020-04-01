import { connect} from 'react-redux'
import * as selectors from '../apiDemo/apiDemo.selectors'
import React, {Component} from 'react'
// import axios from 'axios'
import MyApiDisplay from '../myapi/MyApiDisplay'
import {apiDataItem,userEdit} from '../apiDemo/apiDemo.actions'
import EditForm from '../APIDISPLAY/Editform'

const mapDispatchToProps = {
    apiDataItem,userEdit
    
  }
  
  const mapStateToProps = state => ({
    data: selectors.getApiItem(state)
  })

class ApiGet extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showapi: true,
        user_id:'',
        name: '',
        address: '',
        phoneNo: '',
        country:''
    };
  }
//   const obj=[{studentId:1,name:"swati",address:"gwl",country:"India"}]

  

  componentDidMount() {
    debugger
    
    
    /*axios.get('https://c575efab.ngrok.io/api/Student').then(res => {
      console.log(res.data, "console")
      debugger
      this.props.apiDataItem(res.data)
    })*/
  }
  debugger
  editApi = id => {
    this.setState({
        // alert(checking)
      showapi: false
    });

    const apiUser = this.props.data.find(each => each.id === id);
    
    alert("edit data");

    this.setState({
      id: apiUser.id,
      name:apiUser.name,
      address: apiUser.address,
      phoneNo: apiUser.phoneNo,
      country: apiUser.country,


    });

    const user_id = apiUser.id;
    const name = apiUser.name;
    const address= apiUser.address;
    const phoneNo = apiUser.phoneNo;
    const country = apiUser.country
    const userData = {
      user_id,
      name,
      address,
      phoneNo,
      country
    };

    this.props.userEdit(userData);
  };

  changeName = event => {
    this.setState({
      name: event.target.value
    });
  }

  changeAddress = event => {
    this.setState({
      address: event.target.value
    });
  }

  changePhoneNo = event => {
    this.setState({
      phoneNo: event.target.value
    });
  }
  changeCountry=event=>{
      this.setState({
          country:event.target.value
      })
  }
 
  render() {
    debugger
    console.log(this.props.data, "fdfdf")
    return(
        this.state.showapi === true ? (
        <
        MyApiDisplay data = {
          this.props.data
        }
        editApi = {
            this.editApi
          }
    />
    ) : ( <
        EditForm changeName = {
          this.changeName
        }
        changeAddress = {
          this.changeAddress
        }
        changePhoneNo = {
          this.changePhoneNo
        }
        changeCountry = {
            this.changeCountry
          }
        name = {
          this.state.name
        }
        address = {
          this.state.address
        }
        phoneNo = {
          this.state.phoneNo
        }
        contry = {
            this.state.country
          }
        submit = {
          this.submit
        }

        />
      )

    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ApiGet)
