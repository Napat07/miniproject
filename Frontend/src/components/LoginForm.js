import React from 'react'
import auth from '../firebase'
import './LoginForm.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav';
import '../App.css'
import Footer from './Footer'
class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      message: '',
      currentUser: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          currentUser: user
        })
      }
    })
  }

  onChange = e => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  onSubmit = e => {
    e.preventDefault()

    const { email, password } = this.state
    auth
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        this.setState({
          currentUser: response.user
        })
      })
      .catch(error => {
        this.setState({
          message: error.message
        })
      })
  }

  logout = e => {
    e.preventDefault()
    auth.signOut().then(response => {
      this.setState({
        currentUser: null
      })
    })
  }

  render() {
    const { message, currentUser } = this.state

    if (currentUser) {
      return (
        <div class="All">
          <div >
            <div class='black-color'>
              <div class='right'>
                <button className="button is-danger" onClick={this.logout}>Logout</button>
              </div>
            </div>
            <div class='center'>
              <div class='black-color'>
                <img src='/logo-big.PNG' class='round_image' width="800" height="1000" />
              </div>
              <Nav />
            </div>

          </div>

          <Footer />
        </div>
      )
    }
    return (
      <section className="section container">
        <div class="center">
          <img src="/logo-head.PNG" width="400" height="400" class="round_image" />
        </div>
        &nbsp;
        <h1>Login</h1>
        <div className="columns is-centered">
          <div className="column is-half">
            <form onSubmit={this.onSubmit}>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    name="email"
                    onChange={this.onChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    name="password"
                    onChange={this.onChange}
                  />
                </div>
              </div>

              {message ? <p className="help is-danger">{message}</p> : null}

              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-success">Sign in</button>
                </div>
                <div className="control">
                  <button className="button is-danger">Sign up</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default LoginForm
