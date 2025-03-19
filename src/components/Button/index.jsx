import { convertToFahranheit } from "@/service/convert";

export default function Button({degraus}) {
    function handleClick() {
        const value = convertToFahranheit(degraus);
        alert(`O valor convertido é ${value}`);
    }
    return(
        <div>
            <button
                className="bg-[#FFD700] text-[#010188] font-bold input_padding rounded cursor-pointer"
                onClick={handleClick}
            >Converter</button>
        </div>
    );
}