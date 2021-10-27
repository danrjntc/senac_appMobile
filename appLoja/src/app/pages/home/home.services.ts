import { LOJA_API } from "../../app.api";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { ErrorHandler } from "../../app.error-handler";
import { catchError } from 'rxjs/operators';
import { Novidades } from "./home.model";

@Injectable()
export class NovidadesService {
    constructor(private http: HttpClient) {}

    listarNovidades(): Observable<Novidades[]> {
        return this.http.get<Novidades[]>(`${LOJA_API}/Novidades`)
                        .pipe(catchError(ErrorHandler.handleError));
    }
}