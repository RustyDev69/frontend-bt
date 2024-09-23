import axios from 'axios';
import { createEffect, type Component } from 'solid-js';


const App: Component = () => {
  async function login() {
    try {
      const response = await axios.post("https://hope.codechefvit.com/login/user", { email: "vedant.matanhelia@gmail.com", password: "]%-pmK" })
      console.log(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  async function dashboard() {
    try {
      const response = await axios.get("https://hope.codechefvit.com/me", { withCredentials: true })
      console.log(response.data);
    } catch (err) {
      console.log(err)
    }
  }

  async function refresh() {
    try {
      const response = await axios.post("https://hope.codechefvit.com/refresh", {}, { withCredentials: true })
      console.log(response.data);
    } catch (err) {
      console.log(err)
    }
  }

  createEffect(() => {
    login()
    setTimeout(() => refresh(), 2000);
    setTimeout(() => dashboard(), 3000);
  })
  return (
    <div class='otpless-login-page'></div>
  );
};

export default App;
