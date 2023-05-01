import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
        return (
            <div className='card-container'>
            
            <div className="card" id='only-whey'>
                <header>Only Whey</header>
                <Link to="/OnlyWheyPage">
                <img className='cardImage'
                alt={'protein'} 
                src={'./images/only-whey-final-300x300.png'} />
                </Link>
                <p className='price'>£39.99</p>
                <div className='basketChoice'>
                <input className='amountChoice' type="number" min="1" max="10" value="1" />   
                <button className='addToBasket' onClick="addToBasket()">Add to basket</button>
                </div>
            </div>
            <div className="card" id='after-train1'>
                <header>After Train</header>
                <img className='cardImage' 
                alt={'protein'} 
                src={'./images/1After_Train_Fruit_Punch-1-300x300.png'} />
                <p className='price'>£39.99</p>
                <div className='basketChoice'>
                <input className='amountChoice' type="number" min="1" max="10" value="1" />   
                <button className='addToBasket' onClick="addToBasket()">Add to basket</button>
                </div>
            </div>
            <div className="card" id='after-train2'>
                <header>After Train</header>
                <img className='cardImage'
                alt={'protein'} 
                src={'./images/2After_Train_Raspberry-1-300x300.png'} />
                <p className='price'>£39.99</p>
                <div className='basketChoice'>
                <input className='amountChoice' type="number" min="1" max="10" value="1" />   
                <button className='addToBasket' onClick="addToBasket()">Add to basket</button>
                </div>
            </div>
            <div className="card" id='after-train3'>
                <header>After Train</header>
                <img className='cardImage'
                alt={'protein'} 
                src={'./images/3After_Train_Orange-1-300x300.png'} />
                <p className='price'>£39.99</p>
                <div className='basketChoice'>
                <input className='amountChoice' type="number" min="1" max="10" value="1" />   
                <button className='addToBasket' onClick="addToBasket()">Add to basket</button>
                </div>
            </div>
            
            <div className="card" id='after-train4'>
                <header>After Train</header>
                <img className='cardImage'
                alt={'protein'} 
                src={'./images/advanced-aftertrain-strawberrylime-300x300.png'} />
                <p className='price'>£39.99</p>
                <div className='basketChoice'>
                <input className='amountChoice' type="number" min="1" max="10" value="1" />   
                <button className='addToBasket' onClick="addToBasket()">Add to basket</button>
                </div>
            </div>
            <div className="card" id='stage-ripped'>
                <header>Stage Ripped</header>
                <img className='cardImage'
                alt={'protein'} 
                src={'./images/Stage-Ripped-CGI-300x300.png'} />
                <p className='price'>£39.99</p>
                <div className='basketChoice'>
                <input className='amountChoice' type="number" min="1" max="10" value="1" />   
                <button className='addToBasket' onClick="addToBasket()">Add to basket</button>
                </div>
            </div>
            <div className="card">
                <header>After Train Advanced</header>
                <img className='cardImage'
                alt={'protein'} 
                src={'./images/AFTER-TRAIN-ADVANCED-300x300.png'} />
                <p className='price'>£39.99</p>
                <div className='basketChoice'>
                <input className='amountChoice' type="number" min="1" max="10" value="1" />   
                <button className='addToBasket' onClick="addToBasket()">Add to basket</button>
                </div>
            </div>
            <div className="card" id='after-train'>
                <header>AfterTrain</header>
                <img className='cardImage'
                alt={'protein'} 
                src={'./images/apple-aftertrain-300x300.png'} />
                <p className='price'>£39.99</p>
                <div className='basketChoice'>
                <input className='amountChoice' type="number" min="1" max="10" value="1" />   
                <button className='addToBasket' onClick="addToBasket()">Add to basket</button>
                </div>
            </div>
            <div className="card">
                <header>B4 Extreme</header>
                <img className='cardImage'
                alt={'protein'} 
                src={'./images/b4-candy-extreme-300x300.png'} />
                <p className='price'>£39.99</p>
                <div className='basketChoice'>
                <input className='amountChoice' type="number" min="1" max="10" value="1" />   
                <button className='addToBasket' onClick="addToBasket()">Add to basket</button>
                </div>
            </div>
            <div className="card" id='b4-train'>
                <header>B4-Rio</header>
                <img className='cardImage'
                alt={'protein'} 
                src={'./images/B4-Rio-berry-300x300.png'} />
                <p className='price'>£39.99</p>
                <div className='basketChoice'>
                <input className='amountChoice' type="number" min="1" max="10" value="1" />   
                <button className='addToBasket' onClick="addToBasket()">Add to basket</button>
                </div>
            </div>
            <div className="card" id='b4-train'>
                <header>B4 Tropical</header>
                <img className='cardImage'
                alt={'protein'} 
                src={'./images/B4-tropical-gummy-300x300.png'} />
                <p className='price'>£39.99</p>
                <div className='basketChoice'>
                <input className='amountChoice' type="number" min="1" max="10" value="1" />   
                <button className='addToBasket' onClick="addToBasket()">Add to basket</button>
                </div>
            </div>
            <div className="card">
                <header>Year Round</header>
                <img className='cardImage'
                alt={'protein'} 
                src={'./images/Year-round-300x300.png'} />
                <p className='price'>£39.99</p>
                <div className='basketChoice'>
                <input className='amountChoice' type="number" min="1" max="10" value="1" />   
                <button className='addToBasket' onClick="addToBasket()">Add to basket</button>
                </div>
            </div>
            <div className="card">
                <header>B4 Extreme</header>
                <img className='cardImage'
                alt={'protein'} 
                src={'./images/cap-b4pre-blue-300x300.png'} />
                <p className='price'>£39.99</p>
                <div className='basketChoice'>
                <input className='amountChoice' type="number" min="1" max="10" value="1" />   
                <button className='addToBasket' onClick="addToBasket()">Add to basket</button>
                </div>
            </div>
            <div className="card">
                <header>StagePump</header>
                <img className='cardImage'
                alt={'protein'} 
                src={'./images/cap-stagepump-strawberry-lime-300x300.png'} />
                <p className='price'>£39.99</p>
                <div className='basketChoice'>
                <input className='amountChoice' type="number" min="1" max="10" value="1" />   
                <button className='addToBasket' onClick="addToBasket()">Add to basket</button>
                </div>
            </div>
            <div className="card">
                <header>No Hunger</header>
                <img className='cardImage'
                alt={'protein'} 
                src={'./images/NO-HUNGER-300x300.png'} />
                <p className='price'>£39.99</p>
                <div className='basketChoice'>
                <input className='amountChoice' type="number" min="1" max="10" value="1" />   
                <button className='addToBasket' onClick="addToBasket()">Add to basket</button>
                </div>
            </div>
            <div className="card">
                <header>After Train Advanced</header>
                <img className='cardImage'
                alt={'protein'} 
                src={'./images/orange-mango-advanced-aftertrain-for-web-300x300.png'} />
                <p className='price'>£39.99</p>
                <div className='basketChoice'>
                <input className='amountChoice' type="number" min="1" max="10" value="1" />   
                <button className='addToBasket' onClick="addToBasket()">Add to basket</button>
                </div>
            </div>
            <div className="card">
                <header>PCT</header>
                <img className='cardImage'
                alt={'protein'} 
                src={'./images/PCT-NEW-300x300.png'} />
                <p className='price'>£39.99</p>
                <div className='basketChoice'>
                <input className='amountChoice' type="number" min="1" max="10" value="1" />   
                <button className='addToBasket' onClick="addToBasket()">Add to basket</button>
                </div>
            </div>
            <div className="card">
                <header>Ripped Extreme</header>
                <img className='cardImage'
                alt={'protein'} 
                src={'./images/RIPPED-EXTREME-300x300.png'} />
                <p className='price'>£39.99</p>
                <div className='basketChoice'>
                <input className='amountChoice' type="number" min="1" max="10" value="1" />   
                <button className='addToBasket' onClick="addToBasket()">Add to basket</button>
                </div>
            </div>
            <div className="card">
                <header>Stage Pump</header>
                <img className='cardImage'
                alt={'protein'} 
                src={'./images/STAGE-PUMP-BLUE-FOR-WEB-300x300.png'} />
                <p className='price'>£39.99</p>
                <div className='basketChoice'>
                <input className='amountChoice' type="number" min="1" max="10" value="1" />   
                <button className='addToBasket' onClick="addToBasket()">Add to basket</button>
                </div>
            </div>
            <div className="card">
                <header>Training Plan</header>
                <img className='cardImage'
                alt={'protein'} 
                src={'./images/620-620-traininngplan-1-300x300.jpg'} />
                <p className='price'>£39.99</p>
                <div className='basketChoice'>
                <input className='amountChoice' type="number" min="1" max="10" value="1" />   
                <button className='addToBasket' onClick="addToBasket()">Add to basket</button>
                </div>
            </div>
            <div className="card">
                <header>Bundle-1</header>
                <img className='cardImage'
                alt={'protein'}
                src={'./images/after-adv-and-b4-bundle-300x300.png'} />
                <p className='price'>£39.99</p>
                <div className='basketChoice'>
                <input className='amountChoice' type="number" min="1" max="10" value="1" />   
                <button className='addToBasket' onClick="addToBasket()">Add to basket</button>
                </div>
            </div>
            <div className="card">
                <header>Bundle-2</header>
                <img className='cardImage'
                alt={'protein'} 
                src={'./images/STAGE-RIPPED-NO-HUNGER-300x300.png'} />
                <p className='price'>£39.99</p>
                <div className='basketChoice'>
                <input className='amountChoice' type="number" min="1" max="10" value="1" />   
                <button className='addToBasket' onClick="addToBasket()">Add to basket</button>
                </div>
            </div>
            <div className="card">
                <header>Bundle-3</header>
                <img className='cardImage'
                alt={'protein'} 
                src={'./images/BUNDLE-2-FINAL.png'} />
                <p className='price'>£39.99</p>
                <div className='basketChoice'>
                <input className='amountChoice' type="number" min="1" max="10" value="1" />   
                <button className='addToBasket' onClick="addToBasket()">Add to basket</button>
                </div>
            </div>
        </div>
    )
}

export default Card;
