import { Produto } from "./produto.model";

import { CINEMA_API } from "../app.api";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { ErrorHandler } from "../app.error-handler";
import { catchError } from 'rxjs/operators';

@Injectable()
export class protudosService {
    constructor(private http: HttpClient) {}

    listarCategorias(): Observable<Produto[]> {
        return this.http.get<Produto[]>(`${CINEMA_API}/produtos`)
                        .pipe(catchError(ErrorHandler.handleError));
    }
}