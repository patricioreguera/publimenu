import clients  from "../data/clients.json";

export const getPromoImg = () => {
    const LoadingTime = 4000; // Set the Ads time
    const date = new Date()
    const minutes = date.getMinutes()
    console.log("Ejecutado getPromo")

    if (
        minutes % 2 === 0 ){
        return  {
            "urlImg": clients[0].img ,
            "BrandName": clients[0].brandName ,
            "LoadingTime": LoadingTime 
        }
        } else {
            return {
            "urlImg": clients[1].img ,
            "BrandName": clients[1].brandName ,
            "LoadingTime": LoadingTime 
            }
        }

};
