import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    const INTI_URl = "https://images.unsplash.com/photo-1673191898695-8252d409d82c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
   // const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdCUyMHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D"; 
    const HOT_URL = "https://generated-assets.prod.myninja.ai/2518a2a5-213c-45c6-96f3-1e621eab1ac5/70856f65-6451-4fb9-9d8e-4344afc42f8c_0.png";
   const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1603321544554-f416a9a11fcf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW55fGVufDB8fDB8fHww";
    return(
        <div className="InfoBox">
         <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
       
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='icon'>
          {info.city}&nbsp;{
            info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}</p>
          <p>Max Temp = {info.tempMax}</p>
          <p>
            The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
          </p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
    
}