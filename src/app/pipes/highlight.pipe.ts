import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
  standalone: true  
})
export class HighlightPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, search: string): SafeHtml {
    debugger;
    if (!search) {
      return value;
    }
    const regex = new RegExp(search, 'gi');
    const highlightedText = value.replace(regex, (match) => `<span class="bg-danger">${match}</span>`);
    return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
  }
}
