import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
const obs$ = ajax(`https://api.github.com/users?per_page=5`).pipe(
    map(userResponse => console.log('users:',userResponse)),
    catchError(err => {
        console.log('error:', err);
        return of(err);
    })
).subscribe(x=> console.log('hihi',x))

const obs1$ = ajax.getJSON(`https://api.github.com/users?per_page=5`).pipe(
    map(userResponse => console.log('users:',userResponse)),
    catchError(err => {
        console.log('error:', err);
        return of(err);
    })
).subscribe(x => console.log('here', x))