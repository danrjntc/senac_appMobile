import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { ErrorHandler } from "../../app.error-handler";
import { catchError } from 'rxjs/operators';
import { LOJA_API } from "src/app/app.api";
import { Doce } from "./doce.model";
import { throwError } from 'rxjs';

@Injectable()
export class DoceService {
    constructor(private http: HttpClient) {}

    listarDoce(): Observable<Doce[]> {
        return this.http.get<Doce[]>(`${LOJA_API}/doce`)
                        .pipe(catchError(ErrorHandler.handleError));
    }
}