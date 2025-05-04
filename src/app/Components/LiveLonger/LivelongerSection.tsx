import { Stack } from "@mui/material";
import { CallToAction } from "../Content/CallToAction/CallToAction";


export function LivelongerSection(){

    return(
        <Stack alignItems='center' justifyContent='center' style={{backgroundColor: '#F4F7FA', padding: 32}}>
            <CallToAction 
            backgroundColor="#33404D" 
            titleColor="white" 
            descriptionColor="white" 
            btnTitle="Get the full story" 
            title="How can Vitality help you live longer?" 
            description='Our life insurance doesnt just pay out when youre gone. We also give you all the tools you need to enjoy healthier, longer life while youre here. Up to five years longer when you get active with Vitality.'/>
        </Stack>
    )
}