import { LoadingService } from '@/app/lib/services/loading/loading.service';
import { CommonModule, DOCUMENT } from '@angular/common';
import {
  Component,
  DestroyRef,
  Inject,
  OnInit,
  Renderer2,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
  imports: [CommonModule],
  standalone: true,
})
export class LoadingComponent implements OnInit {
  showLoader: boolean = false;
  destroyRef = inject(DestroyRef);

  constructor(
    private renderer: Renderer2,
    public loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.loadingService.showLoader$.subscribe({
      next: (res: boolean) => {
        if(document) {
          if (res) {
            this.showLoader = true;
  
            this.renderer.setStyle(document.body, 'overflow', 'hidden');
          } else {
            this.showLoader = false;
            this.renderer.removeStyle(document.body, 'overflow');
          }
        }
      },
    });
  }
}
