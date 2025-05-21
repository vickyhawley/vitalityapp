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
        <Stack flexDirection={'row'} justifyContent='space-between' alignItems='center' style={{flex: 1, backgroundColor: '#F1F1F1', paddingTop: 8, paddingBottom: 8, paddingLeft: 12, paddingRight: 12}}>
            <Stack flexDirection={'row'} alignItems={'center'}>  
            <img src={logo.src} alt='red logo vitality' height={55} width={55}/>
            <MainBtn title='Health insurance' type='dropdown' onClick={() => handleClick('health')} icon={activeType == 'health' ? <Close color={'red'}/> : <ChevronDown color={'black'}/> }/>
            <MainBtn title='Life insurance' type='dropdown' onClick={() => handleClick('life')} icon={activeType == 'life' ? <Close color={'red'}/> : <ChevronDown color={'black'}/>}/>
            <MainBtn title='Rewards' type='dropdown' onClick={() => handleClick('rewards')} icon={activeType == 'rewards' ? <Close color={'red'}/> : <ChevronDown color={'black'}/>}/>
            <MainBtn title='Support' type='dropdown' onClick={() => handleClick('support')} icon={activeType == 'support' ? <Close color={'red'}/> : <ChevronDown color={'black'}/>}/>
        
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