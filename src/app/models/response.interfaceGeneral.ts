export interface ResponseGeneral {
    info:    Info;
    results: ResultGeneral[];
}

export interface Info {
    count: number;
}

export interface ResultGeneral {
    id:     number;
    nombre: string;
}


