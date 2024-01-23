import profilePic from './assets/Profile.jpg'
function Card() {
  return(
    <div className="card">
      <img className='card-image' src={profilePic} alt="Profile Picture"></img>
      <h2 className='card-title'>Thunder</h2>
      <p>i'm Learning From YouTube</p>
    </div>
  );
}
export default Card