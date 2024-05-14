export interface ResponseVino {
    info:    Info;
    results: ResultVino[];
}

export interface Info {
    count: number;
}

export interface ResultVino {
    id:           number;
    nombre:       string;
    descripcion:  string;
    notaCata:     string;
    imagen:       string;
    url:          string;
    color:        String;
    azucar:       null | string;
    espumoso:     null|string;
    maduracion:   string|string;
    sabor:        null | string;
    cuerpo:       string | null;
    boca:         string | null;
    uvas:         Uva[];
    maridajes:    string[];
    puntuaciones: any[];
}

export interface Uva {
    nombre:     string;
    porcentaje: number | null;
}

