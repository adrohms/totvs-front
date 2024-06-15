import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[totvsZipCodeFormatter]'
})
export class ZipCodeFormatterDirective {
  constructor(private el: ElementRef, private renderer: Renderer2, private control: NgControl) {}

  @HostListener('input', ['$event'])
  onInput(event: any): void {
    let input = event.target;
    let unformatedValue = input.value.replace(/\D/g, ''); // Remove non-numeric characters
    let formatedValue;

    // Format as 74.000-000
    if (unformatedValue.length > 0) {
      formatedValue = unformatedValue.replace(/^(\d{2})(\d{3})(\d{3})$/, '$1.$2-$3');
    }

    this.renderer.setProperty(input, 'value', formatedValue);

    // Update the form control's value without formatting
    this.control.control?.setValue(unformatedValue);
  }

  @HostListener('blur', ['$event'])
  onBlur(event: any): void {
    // When the input loses focus, format it one last time for display
    const input = event.target;
    let value = input.value.replace(/\D/g, ''); // Remove non-numeric characters

    if (value.length > 0) {
      value = value.replace(/^(\d{2})(\d{3})(\d{3})$/, '$1.$2-$3');
    }

    this.renderer.setProperty(input, 'value', value);
  }

}
