import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-clipboard',
  standalone: true,
  imports: [],
  templateUrl: './clipboard.component.html',
  styleUrl: './clipboard.component.css',
})
export class ClipboardComponent {
  @ViewChild('npmInstallCopyButton', { static: true })
  npmInstallCopyButton!: ElementRef;
  @ViewChild('defaultIcon', { static: true }) defaultIcon!: ElementRef;
  @ViewChild('successIcon', { static: true }) successIcon!: ElementRef;
  @ViewChild('defaultTooltipMessage', { static: true })
  defaultTooltipMessage!: ElementRef;
  @ViewChild('successTooltipMessage', { static: true })
  successTooltipMessage!: ElementRef;
  @ViewChild('tooltip', { static: true }) tooltip!: ElementRef;

  constructor(private renderer: Renderer2) {}

  copyToClipboard(): void {
    const inputElement = this.npmInstallCopyButton.nativeElement;
    const inputValue = inputElement.value;

    navigator.clipboard.writeText(inputValue).then(() => {
      this.showSuccess();
      setTimeout(() => this.resetToDefault(), 2000);
    });
  }

  showSuccess(): void {
    this.renderer.addClass(this.defaultIcon.nativeElement, 'hidden');
    this.renderer.removeClass(this.successIcon.nativeElement, 'hidden');
    this.renderer.addClass(this.defaultTooltipMessage.nativeElement, 'hidden');
    this.renderer.removeClass(
      this.successTooltipMessage.nativeElement,
      'hidden'
    );
    this.tooltip.nativeElement.classList.add('visible', 'opacity-100');
  }

  resetToDefault(): void {
    this.renderer.removeClass(this.defaultIcon.nativeElement, 'hidden');
    this.renderer.addClass(this.successIcon.nativeElement, 'hidden');
    this.renderer.removeClass(
      this.defaultTooltipMessage.nativeElement,
      'hidden'
    );
    this.renderer.addClass(this.successTooltipMessage.nativeElement, 'hidden');
    this.tooltip.nativeElement.classList.remove('visible', 'opacity-100');
  }
}
