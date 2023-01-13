export default function Card(props)
{

  let badgeText
   if(props.card.openSpots === 0)
   {
    badgeText="SOLD OUT"
   }
   else if(props.card.openSpots==="Online")
   {
    badgeText= "ONLINE"
   }
    return(

           <div className="Cards">
             {badgeText && <div className="card--badge">{badgeText}</div>}
             <img src={props.card.coverImg} alt="First" className="ImgCard" />
             <div className="CardContainer">
             <div className="RatingDeetz">
             <img src="/Images/RatingStar.png" alt="star" className="ratingstar" />
                <span className="rating">{props.card.stats.rating}</span>
                <span className="reviewCount">({props.card.stats.reviewCount})*</span>
                <span className="Country">{props.card.location}</span>
             </div>
             <p className="TextContent">{props.card.title} </p>
             <p className="price">From {props.card.price}/ person </p>
             </div>
           </div>
    )
}