import clients  from "./clients.json";
// esta funcion solo devuelve la url a mostrar para la publicidad

export const getPromoImg = () => {

const date = new Date()
const minutes = date.getMinutes()

   if (
    minutes % 2 === 0 ){
    return [clients[0].img,clients[0].Name]
    } else {
        return [clients[1].img,clients[1].Name]
    }

};
