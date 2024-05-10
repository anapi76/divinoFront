export interface ResponseBodega {
    info:    Info;
    results: Result[];
}

export interface Info {
    count: number;
}

export interface Result {
    id:           number;
    nombre:       string;
    direccion:    string;
    poblacion:    string;
    provincia:    string;
    cod_postal:   string;
    email:        string;
    telefono:     string;
    web:          string;
    url:          string;
    denominacion: String;
    vinos:        Vino[];
}

export interface Vino {
    nombre: string;
    url:    string;
}

