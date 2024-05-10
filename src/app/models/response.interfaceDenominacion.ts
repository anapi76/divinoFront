export interface ResponseDenominacion {
    info:    Info;
    results: Result[];
}

export interface Info {
    count: number;
}

export interface Result {
    id:                number;
    nombre:            string;
    calificada:        boolean;
    creacion:          number | null;
    web:               null | string;
    imagen:            string;
    url:               string;
    historia:          string;
    descripcion:       string;
    descripcion_vinos: string;
    region:            string;
    bodegas:           string[];
    uvas_permitidas:   string[];
}

export interface Bodegas {
    nombre: string;
    url:    string;
}

