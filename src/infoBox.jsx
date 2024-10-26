import Card from '@mui/material/Card';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Typography from '@mui/material/Typography';


export default function infoBox({ info }) {
  let imgUrl = "https://plus.unsplash.com/premium_photo-1670527200668-ad4b53a1aefb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  const HOT_URL =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL =
    "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg=";

  return (
    <div>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} {info.humidity > 80
              ? <ThunderstormIcon />
              : info.temp > 15
                ? < WbSunnyIcon />
                : <AcUnitIcon />
            }
          </Typography>
          <Typography variant="body2" color='text.secondary' component={"span"}>
            <p>Temprature :{info.temp}&deg;C</p>
            <p>Humidity :{info.humidity}</p>
            <p>MIN-Temprature :{info.min_temp}&deg;C</p>
            <p>MAX-Temprature :{info.max_temp}&deg;C</p>
            <p>The Weather can be described as <b><i>{info.weather} </i></b> and Feels Like :{info.feels_like}&deg;C</p>

          </Typography>
        </CardContent>

      </Card>
    </div>
  )
}