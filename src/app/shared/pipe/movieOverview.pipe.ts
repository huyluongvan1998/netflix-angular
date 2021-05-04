import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shortenOverview' })
export class ShortenOverview implements PipeTransform {
  transform(value?: string | null): string | undefined {
    return value?.split(' ').slice(0, 20).join(' ');
  }
}
