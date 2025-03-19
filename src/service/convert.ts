import { urlApi } from "@/constants/constants";

export async function convertToFahranheit(celsius: number): Promise<number>{
    let response: any;
    const currentUrl = `${urlApi}/?celsius=${celsius}`;
    await fetch(currentUrl)
      .then(async (res) => response = await res.json());
    return response.value;
}