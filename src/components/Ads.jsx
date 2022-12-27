import { useEffect } from "react";
import { getPromoImg } from "../helpers/getPromoImg";

export const Ads = ({ setLoading }) => {
  const { urlImg,  BrandName, LoadingTime }= getPromoImg()
  console.log("renderizado Ads")

  useEffect(() => {
      setTimeout(() => {
        setLoading(false)
    }, LoadingTime);
  }, []);

  return( 
  <div >
    <h4>{`Se esta cargando el menu de ${BrandName} en ${LoadingTime.toString().slice(0,1)} segundos`}</h4>
    <img src={urlImg} alt="none" /> 
  </div> 
  )
}


