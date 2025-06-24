export default function ClickAndCollect () {

    return (
   <>
    <div className="location">
        <input type="radio" name="location1" checked/>
        <label htmlFor="location1">
            <div className="address">
                Edinburgh
                2 Joppa Rd,Edinburgh, EH15 2EU
                Monday to Friday: 10:00am - 5:30pm
                Saturday: 10:00am - 5:30pm
                Sunday: Closed
            </div>
        </label>
    </div>
    <div className="location">
        <input type="radio" name="location1" />
        <label htmlFor="location1">
            <div className="address">
                Falkirk
                44 Cow Wynd, Falkirk, Central Region, FK1 1PU
                Monday to Friday: 10:00am - 5:30pm
                Saturday - By appointment only
                Sunday: Closed
            </div>
        </label>
    </div>
   </>

   
    )
}