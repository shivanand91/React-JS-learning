import PropTypes from 'prop-types'
function UserGreeting(props){

        
         if(props.isLoggedIn){
          return <h2 className="loggedIn">Welcome, {props.username}</h2> 
         } 
         else{
             return <h2 className="notLoggedIn">Please log in to continue</h2>
         }
        
}

UserGreeting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: 'Guest'
}

export default UserGreeting