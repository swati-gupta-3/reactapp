import { connect} from 'react-redux'
import * as selectors from '../displayDemo/displayDemo.selectors'
import React, {Component} from 'react'
import axios from 'axios'
import ApiDisplay from '../APIDISPLAY/apiDisplay'
import {apiDataItem,userEdit} from '../displayDemo/displayDemo.actions'
// import EditForm from './Editform'
const mapDispatchToProps = {
  apiDataItem,
  userEdit
}

const mapStateToProps = state => ({
  data: selectors.getApiItem(state)
})

class ApiToShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showapi: true,
      user_name: '',
      user_username: '',
      user_email: ''
    };
  }

  componentDidMount() {
    debugger
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      console.log(res.data, "console")
      debugger
      this.props.apiDataItem(res.data)
    })
  }
  editApi = id => {
    this.setState({
      showapi: false
    });

    const apiUser = this.props.data.find(each => each.id === id);
    console.log(apiUser, "through_id")
    alert("edit data");

    this.setState({
      user_id: apiUser.id,
      user_name: apiUser.name,
      user_username: apiUser.username,
      user_email: apiUser.email,

    });

    const user_id = apiUser.id;
    const user_name = apiUser.name;
    const user_username = apiUser.username;
    const user_email = apiUser.email;
    const user_address = apiUser.address.city;
    const userData = {
      user_id,
      user_name,
      user_username,
      user_email,
      user_address
    };

    this.props.userEdit(userData);
  };

  changeUserName = event => {
    this.setState({
      user_name: event.target.value
    });
  }

  changeUserUsername = event => {
    this.setState({
      user_username: event.target.value
    });
  }

  changeUserEmail = event => {
    this.setState({
      user_email: event.target.value
    });
  }

  save = event => {
    event.preventDefault();
    const {
      user_id,
      user_name,
      user_username,
      user_email

    } = this.state;

    const userdata = {
      user_id,
      user_name,
      user_username,
      user_email
    };
    this.props.userEdit(userdata);

    this.setState({
      showapi: false
    });
  };


  render() {
    debugger
    console.log(this.props.data, "fdfdf")
    return (
        this.state.showapi === true ? (

          <
          ApiDisplay data = {
            this.props.data
          }

          editApi = {
            this.editApi
          }

          />
        ) : ( <
          EditForm changeUserName = {
            this.changeUserName
          }
          changeUserUsername = {
            this.changeUserUsername
          }
          changeUserEmail = {
            this.changeUserEmail
          }
          user_name = {
            this.state.user_name
          }
          user_username = {
            this.state.user_username
          }
          user_email = {
            this.state.user_email
          }
          save = {
            this.save
          }

          />
        )
      

   

    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ApiToShow)
