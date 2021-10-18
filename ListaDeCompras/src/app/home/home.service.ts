import { Produto } from "./home.model";

import { PRODUTO_API } from "../app.api";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { ErrorHandler } from "../app.error-handler";
import { catchError } from 'rxjs/operators';

@Injectable()
export class ProdutosService {
    constructor(private http: HttpClient) {}

    listarCategorias(): Observable<Produto[]> {
        return this.http.get<Produto[]>(`${PRODUTO_API}/produtos`)
                        .pipe(catchError(ErrorHandler.handleError));
    }
}