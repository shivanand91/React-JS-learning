import UserGreeting from './UserGreeting'
function App() {

  return (
    <>
     <UserGreeting  isLoggedIn={false} username="Shivanand" />
     <UserGreeting  isLoggedIn={true} username="Shivanand" />
     <UserGreeting  isLoggedIn={true} />
    </>
  )
}

export default App
