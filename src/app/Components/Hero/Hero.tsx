import { CallToAction } from "../Content/CallToAction/CallToAction";


export function Hero(){
    return(
        <div style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#F41B5D', paddingTop: '5%', paddingBottom: '5%', paddingRight: '10%', paddingLeft: '10%'}}>
            <CallToAction title='Live longer with Vitality insurance' 
            description="Get covered. Get healthier. And get this - you could live up to 5 years longer when you get active with Vitality"
            btnTitle="Get a quote in minutes"/>


        </div>
    )
}