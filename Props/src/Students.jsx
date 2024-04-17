// propsTypes = a mechanism that ensures that the passed value is of the correct data type 
//              age: Proptypes.number

import propTypes from 'prop-types'

// default props = default values for props in case they are not passed from the parent component 
//                 name: "Guest"


function Students(props){
    return(
        <>
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
           {/* <h6>In this lecture we learn about props in react js</h6> */}
        </div>
        </>
    )
}
Students.propTypes = {

    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool,

}

Students.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}
export default Students