import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these cool projects I am working on!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src="./William-Portfolio/images/DoorDash Robot.png"
                    text="The DoorDash DoorDasher"
                    desc="A remote controlled robot that drives down and picks up my DoorDash delivery table"
                    label="Engineering"
                    path="/projects/doordash-robot"
                    />
                    <CardItem 
                    src="./William-Portfolio/images/Athenian Lunch.png"
                    text="The Athenian Lunch Menu"
                    desc="Don't you hate needing to go to 3 different webpages to check out the lunch menu? Why not have an app that makes it just a click away!"
                    label="Software"
                    path="/projects/athenian-lunch"
                    />


                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards

