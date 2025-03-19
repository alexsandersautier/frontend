'use client';

export default function Input({degraus, setDegraus}){
    return(
        <div>
            <input 
                className="bg-white input_padding outline rounded w-100"
                type="text" 
                placeholder="Digite a temperatura em celsius"
                value={degraus}
                onChange={(e)=> setDegraus(e.target.value)}
            />
        </div>
    );
}