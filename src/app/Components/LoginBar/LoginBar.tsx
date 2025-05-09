import { Stack } from "@mui/material";
import { MainBtn } from "../Buttons/MainButton/MainBtn";
import logo from '../../assets/vitality-logo-ellipse-pink.svg';


export function LoginBar(){
    return(
        <Stack flexDirection={'row'} justifyContent='space-between' alignItems='center' style={{flex: 1, backgroundColor: '#ffffff', paddingTop: 8, paddingBottom: 8, paddingLeft: 12, paddingRight: 12}}>
            <Stack flexDirection={'row'} alignItems={'center'}>  
            <img src={logo.src} alt='red logo vitality' height={55} width={55}/>
            <MainBtn title='Health insurance' type='dropdown'/>
            <MainBtn title='Life insurance' type='dropdown'/>
            <MainBtn title='Rewards' type='dropdown'/>
            <MainBtn title='Support' type='dropdown'/>
        
            </Stack>
            <Stack>
            <div style={{display: 'flex', flexDirection: 'row', gap: 4, marginRight: 24}}>
                <MainBtn title='login' type='login'/>
                <MainBtn title='Get a Quote' type="quote" />
            </div>
            </Stack>
        
        </Stack>
    )
}