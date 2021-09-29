import React from 'react';
import './Cards.css';
import CardItem from './CardItem';



function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={require('../assets/images/img-9.jpg').default}  
                            text='Explore the 277 miles long, 18 miles wide and a mile deep Grand Canyon'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src={require('../assets/images/img-2.jpg').default}
                            text='Bora Bora is very expensive, most travelers say its s worth every penny'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={require('../assets/images/img-3.jpg').default}
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src={require('../assets/images/img-4.jpg').default}
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                            src={require('../assets/images/img-8.jpg').default}
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;