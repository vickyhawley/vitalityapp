"use client";
import {useState } from "react"


export type dropDownType = 'health' | 'life' | 'rewards' | 'support' | 'none'

export function useSectionState(){
    const [activeType, setActiveType] = useState<dropDownType>('none')

    const handleClick = (type: dropDownType) => { 
        if(type === activeType){
           return setActiveType('none')
        }
       
        return setActiveType(type)
    }

    return{
        activeType,
        handleClick,
    }
    
}