import { Stack } from "@mui/material";
import { MainBtn } from "../Buttons/MainButton/MainBtn";


export function LoginBar(){
    return(
        <Stack flexDirection={'row'} justifyContent='space-between' alignItems='center' style={{flex: 1, backgroundColor: '#ffffff'}}>
            <Stack flexDirection={'row'}>
            <p style={{padding: 24, color: '#000000'}}>LOGO</p>
        
            <div style={{display: 'flex', flexDirection: 'row'}}><MainBtn title='HealthInsurance' type='dropdown'/>
            <MainBtn title='Life Insurance' type='dropdown'/>
            <MainBtn title='Rewardse' type='dropdown'/>
            <MainBtn title='Support' type='dropdown'/></div>
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