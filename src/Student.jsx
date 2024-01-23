import PropTypes from "prop-types"

function Student(props) {
  return(
    <div className="student">
      <p>name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "yes" : "no"}</p>
    </div>
  );
}
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool
};
Student.defaultProps = {
  name :"Guest",
  
  age : 999,
  isStudent : false,
};
export default Student