import { urlApi } from "@/constants/constants";

export function convertToFahranheit(celsius: number): number{
    let response: any;
    fetch(urlApi)
      .then((res) => response = res.json());
    return response.value;
}