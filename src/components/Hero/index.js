import React, {useState} from 'react'
import Navbar from '../Navbar'
import SideBar from '../SideBar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements'

const Hero = () => {

   const[isOpen, setIsOpen] = useState(false);

   const toggle = () =>{
      setIsOpen(!isOpen)
   }
  return (
        <HeroContainer>
           <Navbar  toggle={toggle} />
           <SideBar isOpen={isOpen} toggle={toggle}/>
           <HeroContent>
              <HeroItems>
                <HeroH1>Greatest Pizza Ever</HeroH1>
                <HeroP>Ready in 60 seconds</HeroP>
                <HeroBtn>Place order now!</HeroBtn>
              </HeroItems>
           </HeroContent> 
        </HeroContainer>
    )
}

export default Hero