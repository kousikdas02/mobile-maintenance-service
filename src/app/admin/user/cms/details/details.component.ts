import { Component, ViewChild, afterNextRender, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { defer, shareReplay } from 'rxjs';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {

  form!: FormGroup;
  @ViewChild('editor') private textEditor!: HTMLElement;
  private activeRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private param = toSignal(this.activeRoute.params);

  

  constructor() {
    afterNextRender(() => {
      this.editor();
      this.createForm();
    });
    effect(() => {
      const _param = this.param();
      _param && _param['slug'] && this.getDetails(_param['slug'])
    });

  }



  protected updateParam(): void {
    this.router.navigate(['/admin/cms/contact'], {
      relativeTo: this.activeRoute,
      queryParamsHandling: 'merge',
    });
  }

  private editor(): void {
    if (!this.textEditor) return (() => { setTimeout(() => { this.editor() }, 100) })();
  //  const quillCSS$ = defer(() =>
  //  import('!!raw-loader!quill/dist/quill.core.css')
  //   import('quill/dist/quill.snow').then((m) => {
  //     // const style = document.createElement('style');
  //     // style.innerHTML = m.default;
  //     // document.head.appendChild(style);
  //   })
  // ).pipe(shareReplay({ bufferSize: 1, refCount: true }));

  }

  private createForm(): void {

  }


  private getDetails(slug: string): void {
    console.log(slug);
  }

}
