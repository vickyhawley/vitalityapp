import { Stack } from "@mui/material";
import { MainBtn } from "../Buttons/MainButton/MainBtn";



export function NavBar(){
    return(
        <Stack style={{backgroundColor: '#2F2E2E'}} flexDirection={'row'} alignContent={"flex-start"}>
            <MainBtn title='Personal' type="nav" />
            <MainBtn title='Business' type="nav"/>
            <MainBtn title='Advisors' type="nav"/>
            <MainBtn title='Providers' type="nav"/>
            <MainBtn title='Careers' type="nav"/>
        </Stack>
    )
}