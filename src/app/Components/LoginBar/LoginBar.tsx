"use client";
import { Stack } from "@mui/material";
import { MainBtn } from "../Buttons/MainButton/MainBtn";
import logo from '../../assets/vitality-logo-ellipse-pink.svg';
import { ChevronDown } from "../Icons/ChevronDown/ChevronDown";
import { Close } from "../Icons/Close/Close";
import { dropDownType } from "@/app/Hooks/useSectionState";
interface iLoginBar{
    activeType: dropDownType;
    handleClick: (type: dropDownType) => void;
}
export function LoginBar({activeType, handleClick}:iLoginBar){

    return(
        <Stack tabIndex={0} flexDirection={'row'} justifyContent='space-between' alignItems='center' style={{flex: 1, backgroundColor: '#F1F1F1', paddingTop: 8, paddingBottom: 8, paddingLeft: 12, paddingRight: 12}}>
            <Stack tabIndex={0} flexDirection={'row'} alignItems={'center'}>  
            <img src={logo.src} alt='red logo vitality' height={55} width={55}/>
            <MainBtn ariaLabel="Show health insurance mega menu" aria-expanded={activeType === 'health'} title='Health insurance' type='dropdown' onClick={() => handleClick('health')} icon={activeType == 'health' ? <Close color={'red'}/> : <ChevronDown color={'black'}/> }/>
            <MainBtn ariaLabel="Show life insurance mega menu" aria-expanded={activeType === 'life'} title='Life insurance' type='dropdown' onClick={() => handleClick('life')} icon={activeType == 'life' ? <Close color={'red'}/> : <ChevronDown color={'black'}/>}/>
            <MainBtn ariaLabel="Show rewards mega menu" aria-expanded={activeType === 'rewards'} title='Rewards' type='dropdown' onClick={() => handleClick('rewards')} icon={activeType == 'rewards' ? <Close color={'red'}/> : <ChevronDown color={'black'}/>}/>
            <MainBtn ariaLabel="Show support mega menu" aria-expanded={activeType === 'support'} title='Support' type='dropdown' onClick={() => handleClick('support')} icon={activeType == 'support' ? <Close color={'red'}/> : <ChevronDown color={'black'}/>}/>
        
            </Stack>
            <Stack tabIndex={0}>
            <div tabIndex={0} style={{display: 'flex', flexDirection: 'row', gap: 4, marginRight: 24}}>
                <MainBtn ariaLabel="Login to app" title='login' type='login' onClick={() => {}}/>
                <MainBtn ariaLabel="Get quote" title='Get a Quote' type="quote"  onClick={() => {}}/>
            </div>
            </Stack>
        
        </Stack>
    )
}