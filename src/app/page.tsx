import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Stack } from "@mui/material";
import { NavBar } from "./Components/Navbar/NavBar";
import { LoginBar } from "./Components/LoginBar/LoginBar";
import { Hero } from "./Components/Hero/Hero";
import defaqto from './assets/defaqto.png';
import { CoverSection } from "./Components/CoverSection/CoverSection";
import { LivelongerSection } from "./Components/LiveLonger/LivelongerSection";


export default function Homepage() {


  return(
      <Stack>
        <NavBar />
         <LoginBar />
         <Hero />
         <Stack flexDirection={'row'} alignItems='center' justifyContent={'space-between'} style={{backgroundColor: '#ffffff', paddingTop: 8, paddingBottom: 8, paddingRight: '12%', paddingLeft: '12%'}}>
          <h2 style={{color: '#000000'}}>Join over 1.9 million Vitality UK members</h2>
          <img src={defaqto.src} alt='' height={75} width={105} />
         </Stack>
         <CoverSection title='What cover do you need?' description='Our award-winning cover can help you live a healthier, longer life.'/>
         <LivelongerSection />
      </Stack>
  )
}
