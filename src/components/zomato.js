import './zomato.css';
import bir from './images/biryani1.png'
import par from './images/parotta1..jpg'
import nod from './images/noodle.jpg'

function Foods() {
    const menu = [
        {
            hotal: "Thalapakatti",
            name: "Bun Parotta",
            price: "45rs for plate",
        },
        {
            hotal: "Gowrishanker",

            name: "noodle",
            price: "100rs",
        },
        {
            hotal: "Rusi",
            name: "biryani",
            price: "180 rs"
        },
        {
            hotal: "kfc",
            name: "grill",
            price: "360 rs"
        },
    ]
    return (
        <div>
            <div className='filters'>
                <div className='items'>
                    <select>
                        <option>offers</option>
                    </select>
                    <select>
                        <option>sort</option>
                    </select>
                    <select>
                        <option>New Arrival</option>
                    </select>
                    <select>
                        <option>delivery speed</option>

                    </select>
                </div>
            </div>
            <p className='y'><b>Yenna Bro Mathiyanam Atchi Biryani Onnu Order Potruvoma </b></p>
            <div className='gree'>
                <img src={bir} width={1000} height={500} />
                <p>Vanakkam da mapla!<br></br> Put Some valuable Code <br></br>Get<b> 50% </b> Offer </p>
            </div>
            <div className='fooditems'>
                <div className='dish'>
                    <div className='tot'>
                        <div className='A1'>
                            <img src={par} height={200} width={300}></img></div>
                        <div className='A2'>
                            <p><h1>{menu[0].hotal}</h1></p>
                            <p><h2>{menu[0].name}</h2></p>
                            <p>{menu[0].price}</p>
                        </div>
                    </div>
                </div>

                <div className='dish'>
                    <div className='tot1'>
                        <div className='A1'>
                            <img src={nod} height={200} width={300}></img></div>
                        <div className='A2'>
                            <p><h1>{menu[1].hotal}</h1></p>
                            <p><h2>{menu[1].name}</h2></p>
                            <p>{menu[1].price}</p>
                        </div>
                    </div>
                </div>

                <div className='dish'>
                    <div className='tot2'>
                        <div className='A1'>
                            <img src={bir} height={200} width={300}></img></div>
                        <div className='A2'>
                            <p><h1>{menu[2].hotal}</h1></p>
                            <p><h2>{menu[2].name}</h2></p>
                            <p>{menu[2].price}</p>
                        </div>
                    </div>
                </div>

                <div className='dish'>
                    <div className='tot3'>
                        <div className='A1'>
                            <img src={par} height={200} width={300}></img></div>
                        <div className='A2'>
                            <p><h1>{menu[3].hotal}</h1></p>
                            <p><h2>{menu[3].name}</h2></p>
                            <p>{menu[3].price}</p>
                        </div>

                    </div>

                </div>

            </div>
           

        </div>
    );

};

export default Foods;