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
    imagen_historia:   string;
    imagen_uva:   string;
    logo:              string;
    url:               string;
    historia:          string;
    descripcion:       string;
    descripcion_vinos: string;
    region:            string;
    bodegas:           Bodegas[];
    uvas_permitidas:   string[];
}

export interface Bodegas {
    nombre: string;
    web:    string;
}

