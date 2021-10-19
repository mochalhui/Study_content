import { of } from 'rxjs';
import {map, first} from 'rxjs/operators';
//simple example

of(1, 2, 3)
  .pipe(map((x) => x * x))
  .subscribe((x) => console.log(`value: ${x}`));

of(1, 2, 3)
  .pipe(first())
  .subscribe((x)=> console.log(`${x}hihis`))