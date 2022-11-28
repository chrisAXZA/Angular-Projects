import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import Pokemon from './pokemon';
// import POKEMONS from './pokemonList';

@Injectable()
export default class PeshomonService {

    constructor(private httpClient: HttpClient) { }

    // getPeshomonById(peshomonId: number): Pokemon | undefined {
    //     return POKEMONS.find((pok) => pok.id === peshomonId);
    // }

    getPeshomonById(peshomonId: number): Observable<Pokemon | undefined> {
        return this.httpClient.get<Pokemon>(`api/pokemons/${peshomonId}`)
            .pipe(
                tap((peshomon) => this.log(peshomon),),
                catchError((error) => {
                    // console.log(error);
                    // return of(undefined);

                    return this.handleError(error, undefined);
                })
            );
    }

    // Angualr-In-Memory returns null instead of the modified object
    // after put query
    // updatePeshomon(peshomon: Pokemon): Observable<Pokemon | undefined> {
    updatePeshomon(peshomon: Pokemon): Observable<null> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json', }),
        };

        return this.httpClient
            .put('api/pokemons', peshomon, httpOptions)
            .pipe(
                tap((peshomon: any) => this.log(peshomon),),
                catchError((error) => this.handleError(error, null),),
            );
    }

    deletePeshomonById(peshomonId: number): Observable<null> {
        return this.httpClient
            .delete(`api/pokemons/${peshomonId}`)
            .pipe(
                tap((peshomon: any) => this.log(peshomon),),
                catchError((error) => this.handleError(error, null),),
            );
    }

    // getPeshomonList(): Pokemon[] { return POKEMONS; }
    getPeshomonList(): Observable<Pokemon[]> {
        // HttpClient can works with data stream that can be typed, in this scenario
        // employing Angular-In-Memory to simulate a server response
        return this.httpClient.get<Pokemon[]>('api/pokemons')
            .pipe(
                tap((peshomonList) => this.log(peshomonList),), // logs response
                catchError((error) => {
                    // if error occurs, logs error + return Observable in order for app to
                    // keep functioning
                    // console.log(error);
                    // return of([]);

                    return this.handleError(error, []);
                }),
            );
    }

    getPeshomonTypeList(): string[] {
        return [
            'Combat',
            'Electric',
            'Fairy',
            'Fire',
            'Flying',
            'Insect',
            'Normal',
            'Plant',
            'Poison',
            'Psy',
            'Water',
        ];
    }

    private log(response: Pokemon[] | Pokemon | undefined) {
        console.table(response);
    }

    private handleError(error: Error, defaultReturn: any) {
        console.error(error);
        return of(defaultReturn);
    }
}
