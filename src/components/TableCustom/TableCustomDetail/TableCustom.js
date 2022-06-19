import React from "react";
import { useDispatch, useSelector } from "react-redux";

import './TableCustom.css'
import { AiOutlineLayout } from 'react-icons/ai'
import { IoIosOptions } from 'react-icons/io'
import { MdOutlineCircle } from 'react-icons/md'
import { BiBookReader } from 'react-icons/bi'

import { changeIdOptionCustom } from '../../../store/Action'

export default function TableCustom() {
    const dispatch = useDispatch()
    const dbClickOption = useSelector(state => state.dbClickOption)
    const idOptionCustom = useSelector(state => state.idOptionCustom)
    const handleChangeIdOption = (id) => {
        dispatch(changeIdOptionCustom(id))
    }
    return (
        <div className="listOptionCustom">
            <ul className="optionsCustom">
                <li className={"optionCustom " + (idOptionCustom == 0 && !dbClickOption ? "active" : "")} onClick={() => handleChangeIdOption(0)}>
                    <IoIosOptions />
                </li>
                <li className={"optionCustom " + (idOptionCustom == 1 && !dbClickOption ? "active" : "")} onClick={() => handleChangeIdOption(1)}>
                    <AiOutlineLayout />
                </li>
                <li className={"optionCustom " + (idOptionCustom == 2 && !dbClickOption ? "active" : "")} onClick={() => handleChangeIdOption(2)}>
                    <MdOutlineCircle />
                </li>
                <li className={"optionCustom " + (idOptionCustom == 3 && !dbClickOption ? "active" : "")} onClick={() => handleChangeIdOption(3)}>
                    <BiBookReader />
                </li>
            </ul>
        </div>
    )
}