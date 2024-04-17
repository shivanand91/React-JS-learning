import Students from './Students'
function App() {

  return (
    <>
    <Students name="Shivanand Kumar" age={20} isStudent={true}/>
    <Students name="Abhishek Kumar" age="20" isStudent={true}/>
    <Students name="Pintu Kumar Sharma"/>
    {/* <Student name="Abhinash Kumar" age="20" isStudent={true}/>
    <Student name="Vishal Kumar" age="20" isStudent={true}/>
    <Student name="Rahul Raj" age="20" isStudent={true}/> */}
    </>
  )
}

export default App
