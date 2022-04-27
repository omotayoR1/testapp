const Moviecard = ({newmoves}) => {
    return ( 
        <div className="moviecard" key={newmoves.ID}>
            <div className="move">
              <div className="img">
                  <img src={newmoves.Poster !== 'N/A' ? newmoves.Poster : 'https://via.placeholder.com/300'} alt="movieposter"/>
              </div>
              <div className="title">
                   <p>{newmoves.Title}</p>
              </div>
            </div>
        </div>
     );
}
 
export default Moviecard;