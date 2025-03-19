import { urlApi } from "@/constants/constants";

export function convertToFahranheit(celsius: number): number{
    let response: any;
    const currentUrl = `${urlApi}/${celsius}`;
    fetch(currentUrl)
      .then((res) => response = res.json());
    return response.value;
}