"use client";
import { Stack } from "@mui/material";
import { MainBtn } from "../Buttons/MainButton/MainBtn";
import logo from '../../assets/vitality-logo-ellipse-pink.svg';
import { ChevronDown } from "../Icons/ChevronDown/ChevronDown";
import { useState } from "react";
import { Close } from "../Icons/Close/Close";

interface iLoginBar {
    dropDownType: (string: dropDown) => void;
}

type dropDown = 'health' | 'life' | 'rewards' | 'support' | 'none'

export function LoginBar({dropDownType}: iLoginBar){
    const [activeType, setActiveType] = useState<dropDown>()
  
    const handleClick = (type: dropDown) => {
        setActiveType(type)
        dropDownType(type)
    }

    return(
        <Stack flexDirection={'row'} justifyContent='space-between' alignItems='center' style={{flex: 1, backgroundColor: '#F1F1F1', paddingTop: 8, paddingBottom: 8, paddingLeft: 12, paddingRight: 12}}>
            <Stack flexDirection={'row'} alignItems={'center'}>  
            <img src={logo.src} alt='red logo vitality' height={55} width={55}/>
            <MainBtn title='Health insurance' type='dropdown' onClick={() => activeType === 'health' ?  handleClick('none') : handleClick('health')} icon={activeType == 'health' ? <Close color={'red'}/> : <ChevronDown color={'black'}/> }/>
            <MainBtn title='Life insurance' type='dropdown' onClick={() => activeType === 'life' ?  handleClick('none') : handleClick('life')} icon={activeType == 'life' ? <a onClick={() => handleClick('none')}><Close color={'red'}/></a> : <ChevronDown color={'black'}/>}/>
            <MainBtn title='Rewards' type='dropdown' onClick={() => activeType === 'rewards' ?  handleClick('none') : handleClick('rewards')} icon={activeType == 'rewards' ? <a onClick={() => handleClick('none')}><Close color={'red'}/></a> : <ChevronDown color={'black'}/>}/>
            <MainBtn title='Support' type='dropdown' onClick={() => activeType === 'support' ?  handleClick('none') : handleClick('support')} icon={activeType == 'support' ? <a onClick={() => handleClick('none')}><Close color={'red'}/></a> : <ChevronDown color={'black'}/>}/>
        
            </Stack>
            <Stack>
            <div style={{display: 'flex', flexDirection: 'row', gap: 4, marginRight: 24}}>
                <MainBtn title='login' type='login' onClick={() => {}}/>
                <MainBtn title='Get a Quote' type="quote"  onClick={() => {}}/>
            </div>
            </Stack>
        
        </Stack>
    )
}