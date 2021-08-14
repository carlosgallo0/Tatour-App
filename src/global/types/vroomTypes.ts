export interface coordinates {
    latitude:number,
    longitude:number
}
export interface position {
    x:number,
    y:number
}


export interface JobsProps {
    id: number;
    service: number;
    location: coordinates; // isso deve mudar, na verdade é um array de 2 numeros
    time_windows: number[];

}