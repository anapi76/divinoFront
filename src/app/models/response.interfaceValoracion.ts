export interface ResponseValoracion {
    info: Info;
    results: ResultValoracion[];
}
export interface Info {
    count: number;
}
export interface ResultValoracion {
    usuario: string;
    vino: string;
    puntuacion: string;
    comentarios: string;
}


