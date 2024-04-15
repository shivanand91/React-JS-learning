import profilePic from './assets/profile1.jpg'
function Card(){
  
    return(
        <>
        <div className="card">
            <img src={profilePic} alt="profile picture" />
            <h2>Shivanand Kumar</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum deleniti ipsum unde non maiores aliquid nostrum quos incidunt magni iure nihil distinctio dolorum maxime, atque error doloribus veniam, recusandae reprehenderit.</p>
        </div>
        </>
    );
}

export default Card