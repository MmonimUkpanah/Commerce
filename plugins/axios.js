export default function ({ store, app: { $axios }, redirect }) {
    $axios.onRequest((config) => {
      // check if the user is authenticated
      const token = localStorage.getItem('token')
      if (token) {
        // set the Authorization header using the access token
        config.headers.common['Authorization'] =` ${token}`

        console.log(config)
        console.log(token)
        
      } else {
        alert("no token")
      }
  
      return config
    })
  }

