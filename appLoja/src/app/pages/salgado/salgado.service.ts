import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { ErrorHandler } from "../../app.error-handler";
import { catchError } from 'rxjs/operators';
import { LOJA_API } from "src/app/app.api";
import { Salgado } from "./salgado.model";

@Injectable()
export class SalgadoService {
    constructor(private http: HttpClient) {}

    listarSalgado(): Observable <Salgado[]> {
        return this.http.get<Salgado[]>(`${LOJA_API}/salgado`)
                        .pipe(catchError(ErrorHandler.handleError));
    }
}