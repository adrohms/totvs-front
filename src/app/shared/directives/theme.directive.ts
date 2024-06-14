import { Directive, ElementRef, HostListener, OnInit, Input, Renderer2 } from '@angular/core';

interface IStyles {
  backgroundColor: string,
  color: string
}

interface IThemes {
  theme: string,
  styles: IStyles
}

@Directive({
  selector: '[totvsTheme]',
})
export class ThemeDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @Input() totvsTheme: string = '';

  private themeStyles: IThemes[] = [
    {
      theme: 'primary',
      styles: {
        backgroundColor: 'brown',
        color: 'white'
      }
    }
  ]

  ngOnInit(): void {
    console.log("Init Dirrect")
    console.log(this.totvsTheme);

    this.themeStyles.forEach( themeStyle => {
      if(themeStyle.theme === this.totvsTheme) {
        const styleProperties: string[] = Object.keys(themeStyle.styles);
        const styleValues: string[] = Object.values(themeStyle.styles);

        for(let i = 0; i <= styleProperties.length; i++) {
          console.log(styleProperties);
          console.log(styleValues);
          this.renderer.setStyle(this.el.nativeElement, styleProperties[i], styleValues[i]);
        }
      }
    })

  }

/*   @HostListener('mouseenter') onMouseEnter() {
    this.highlight('brown');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  } */

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
