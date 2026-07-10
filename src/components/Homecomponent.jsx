const Homecomponent=()=>{
    return(
        <div>
            <h1 class="text-success text-center">Welcome to Kenya</h1>
            <p>Kenya is a beautifual country in East Africa known for its rich culture,wildlife,and natural beauty.</p>
            <h1 class="text-primary">Capital City</h1>
            <p>Nairobi is the capital and largest city of kenya.</p>
            <h1  class="text-primary" >Official Languages</h1>
            <p>English and Kiswahili are the official languages.</p>
            <h1 class="text-primary">Tourist Attractions</h1>
            <ul>
                <b> 

                <li>Maasai Mara</li>
                <li>Mount Kenya</li>
                <li>Diani Beach</li>
                </b>
            </ul>
            <input type="button" value="Learn More"  class="btn btn-success"/>
            <input type="button" value="Visit Kenya"  class="btn btn-primary m-2"/><input type="button" value="Contact"  class="btn btn-danger"/>
            <div class="bg-dark text-light p-4 border border-danger-5 p-4">
            <h1 class="text-warning">WHy Visit Kenya?</h1>
            <p>Kenya offers breathtaking scenery,diverse wildlife, beautiful beaches, and welcoming people.it is one of Africas top travel destinations.</p>
            <h1 class="text-info">Fun Facts</h1>
            <p>Kenya is home to thefamous Great Migration, over40 ethnic groups,and some of the worlds greatest long-distance runnners.</p>
            <input type="button" value="Discover More" class="btn btn-warning" />
            </div>
        </div>
        
    )
}
export default Homecomponent