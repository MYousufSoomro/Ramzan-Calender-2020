import React from 'react';
import Card from './Card';
import Swal from 'sweetalert2'

function SwAlert(){
  Swal.fire({
    title: 'Coming Soon!',
    text: 'The data for the selected city will be available shortly...',
    icon: 'info',
    confirmButtonText: 'Ok'
  })
}

function CityCards() {
  return (
    <center>
      <Card
        CityName="Karachi"
        CityPath="/Karachi"
        CityTitle="View Karachi Ramzan Timings"
        CityImage="https://st4.depositphotos.com/27867620/30426/v/450/depositphotos_304266184-stock-illustration-mazar-quaid-simple-illustration.jpg"
      />

      <Card
        CityName="Rahim Yar Khan"
        CityPath="/RahimYarKhan"
        CityTitle="View Rahim Yar Khan Ramzan Timings"
        CityImage="https://www.houseofpakistan.com/wp-content/uploads/2019/11/imrrages.jpg"
      />

      <Card
        CityName="Islamabad"
        // CityPath="/Islamabad"
        CityTitle="View Islamabad Ramzan Timings"
        CityImage="https://cdn.pixabay.com/photo/2018/04/20/22/32/shah-faisal-masjid-3337226_960_720.png"
        onClick={()=>SwAlert()}
      />

      <Card
        CityName="Lahore"
        // CityPath="/Lahore"
        CityTitle="View Lahore Ramzan Timings"
        CityImage="https://image.flaticon.com/icons/png/512/444/444683.png"
        onClick={()=>SwAlert()}
      />



    </center>
  );
}

export default CityCards;