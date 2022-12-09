import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import Pokemon from './pokemon';
// import POKEMONS from './pokemonList';

@Injectable()
export default class PeshomonService {
    peshomons: Pokemon[];

    constructor(private httpClient: HttpClient) {
        this.peshomons = JSON.parse(localStorage.getItem('peshomons')!);
    }

    // ngOnInit() {
    //     this.peshomons = JSON.parse(localStorage.getItem('peshomons')!);
    // }

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

    findPeshomonByName(peshomonName: string): Observable<Pokemon | undefined> {
        return this.httpClient.get<Pokemon[]>(`api/pokemons/?name=${peshomonName}`)
            .pipe(
                tap((peshomon) => this.log(peshomon),),
                catchError((error) => {
                    // console.log(error);
                    // return of(undefined);

                    return this.handleError(error, undefined);
                })
            );
    }

    // Angualar-In-Memory returns null instead of the modified object after post query
    addPeshomon(peshomon: Pokemon): Observable<Pokemon> {
        // this.peshomons = JSON.parse(localStorage.getItem('peshomons')!);
        this.peshomons.push(peshomon);
        localStorage.setItem('peshomons', JSON.stringify(this.peshomons));

        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json', }),
        };

        // post query will return newly created Peshomon
        return this.httpClient
            .post<Pokemon>('api/pokemons', peshomon, httpOptions)
            .pipe(
                tap((peshomon: any) => this.log(peshomon),),
                catchError((error) => this.handleError(error, null),),
            );
    }

    // Angualar-In-Memory returns null instead of the modified object after put query
    // updatePeshomon(peshomon: Pokemon): Observable<Pokemon | undefined> {
    updatePeshomon(peshomon: Pokemon): Observable<null> {
        // this.peshomons = JSON.parse(localStorage.getItem('peshomons')!);
        const index = this.peshomons.findIndex((p) => p.id === peshomon.id);
        this.peshomons.splice(index, 1, peshomon);
        localStorage.setItem('peshomons', JSON.stringify(this.peshomons));

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
        // this.peshomons = JSON.parse(localStorage.getItem('peshomons')!);
        // console.log(this.peshomons);

        const index = this.peshomons.findIndex((p) => p.id === peshomonId);
        this.peshomons.splice(index, 1);
        localStorage.setItem('peshomons', JSON.stringify(this.peshomons));

        return this.httpClient
            .delete(`api/pokemons/${peshomonId}`)
            .pipe(
                tap((peshomon: any) => this.log(peshomon),),
                catchError((error) => this.handleError(error, null),),
            );
    }

    searchPeshomonList(input: string): Observable<Pokemon[]> {
        if (input.length < 2) {
            return of([]);
        }

        return this.httpClient
            .get<Pokemon[]>(`api/pokemons/?name=${input}`) // executes query on peshomon name parameter
            .pipe(
                tap((peshomon: any) => this.log(peshomon),),
                catchError((error) => this.handleError(error, []),),
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
