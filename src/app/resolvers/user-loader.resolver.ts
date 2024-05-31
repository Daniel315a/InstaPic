import { ResolveFn } from '@angular/router';
import { forkJoin, map, of } from 'rxjs';

export const userLoaderResolver: ResolveFn<boolean> = (route, state) => {
  const obser = of('pasa 1');
  const obser2 = of('pasa 3');
  const obser3 = of('pasa 2');
  
  return forkJoin([obser, obser2, obser3]).pipe(
    map(() => {
      return true; 
    })
  );
};
