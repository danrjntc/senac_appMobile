import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { ErrorHandler } from "../../app.error-handler";
import { catchError } from 'rxjs/operators';
import { LOJA_API } from "src/app/app.api";
import { Home } from "./home.model";
import { throwError } from 'rxjs';

@Injectable()
export class HomeService {
    constructor(private http: HttpClient) {}

    listarHome(): Observable<Home[]> {
        return this.http.get<Home[]>(`${LOJA_API}/novidades`)
                        .pipe(catchError(ErrorHandler.handleError));
    }
}