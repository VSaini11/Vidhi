import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

export default function QouteSection(){
    return (
        <div className="section quote">
            <p className="qoute-text"><FontAwesomeIcon icon={faQuoteLeft} /> "Food is not just about taste; it’s about memories, culture, and a way of connecting with people."</p>
            <p className="qoute-auther">- Vikas Khanna</p>
        </div>
    )
}