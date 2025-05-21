import { Stack } from "@mui/material";
import { MainBtn } from "../Buttons/MainButton/MainBtn";



export function NavBar(){
    return(
        <Stack tabIndex={0} style={{backgroundColor: '#2F2E2E'}} flexDirection={'row'} alignContent={"flex-start"}>
            <MainBtn onClick={() => {}} ariaLabel="Open Personal page" title='Personal' type="nav" />
            <MainBtn onClick={() => {}} ariaLabel="Open Business page" title='Business' type="nav"/>
            <MainBtn onClick={() => {}} ariaLabel="Open Advisors page" title='Advisors' type="nav"/>
            <MainBtn onClick={() => {}} ariaLabel="Open Providers page" title='Providers' type="nav"/>
            <MainBtn onClick={() => {}} ariaLabel="Open Careers page" title='Careers' type="nav"/>
        </Stack>
    )
}