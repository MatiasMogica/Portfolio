import React from "react"
import { BiHomeSmile } from "@react-icons/all-files/bi/BiHomeSmile"
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser"
import { MdWorkOutline } from "react-icons/md"
import { BiCodeBlock } from "react-icons/bi"
import { GoMailRead } from "react-icons/go"
import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import "./index.css"

export default function NavBar() {

    return (
        <nav>
            <a href="#"><BiHomeSmile size={25} /></a>
            <a href="#about" ><AiOutlineUser size={25} /></a>
            <a href="#projects"><MdWorkOutline size={25} /></a>
            {/* <a href="#services"><BiCodeBlock size={25} /></a> */}
            <a href="#contact"><GoMailRead size={25} /></a>
            <a href="https://github.com/MatiasMogica"><BsGithub size={25} /></a>
            <a href="https://www.linkedin.com/in/matias-mogica-113295240/"><BsLinkedin size={25} /></a>
        </nav>
    )
}