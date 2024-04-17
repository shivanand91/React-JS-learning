import profilePic from './assets/profile1.jpg'
function Card(){

    //  Inline CSS
    const style = {
        
        // all the attribution must use in camelCase
        textDecoration: "none",
        color: "white",
        padding: "5px",
        borderRadius: "10px",
        border: "2px solid white",
        backgroundColor: "rgb(23, 10, 169)",
    }
  
    return(
        <>
        <div className="card">
            <img src={profilePic} alt="profile picture" />
            <h2>Shivanand Kumar</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum deleniti ipsum unde non maiores aliquid nostrum quos incidunt magni iure nihil distinctio dolorum maxime, atque error doloribus veniam, recusandae reprehenderit.</p>
             {/* this comment line is use for external css */}
             {/* <a href="#" className='button'> Read More</a> */}
             <a href="#" style={style}> Read More</a>
        </div>
        </>
    );
}

export default Card