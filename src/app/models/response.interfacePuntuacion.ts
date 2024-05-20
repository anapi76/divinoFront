export interface ResponsePuntuacion {
    info:    Info;
    results: ResultPuntuacion[];
}

export interface Info {
    count: number;
}

export interface ResultPuntuacion {
    id:          number;
    puntos:      number;
    descripcion: string;
}

