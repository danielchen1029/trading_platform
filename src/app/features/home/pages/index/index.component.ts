import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit, OnDestroy {
  roadMap: { title: string; items: string[] }[] = [
    {
      title: '2021 Q4',
      items: [
        'Y Pool - Cross-chain liquidity',
        'Launch XY Token',
        'DAO and veXY governance',
        'GalaXY Kats Public Mint',
      ],
    },
    {
      title: '2021 Q4',
      items: [
        'Y Pool - Cross-chain liquidity',
        'Launch XY Token',
        'DAO and veXY governance',
        'GalaXY Kats Public Mint',
      ],
    },
    {
      title: '2021 Q4',
      items: [
        'Y Pool - Cross-chain liquidity',
        'Launch XY Token',
        'DAO and veXY governance',
        'GalaXY Kats Public Mint',
      ],
    },
    {
      title: '2021 Q4',
      items: [
        'Y Pool - Cross-chain liquidity',
        'Launch XY Token',
        'DAO and veXY governance',
        'GalaXY Kats Public Mint',
      ],
    },
    {
      title: '2021 Q4',
      items: [
        'Y Pool - Cross-chain liquidity',
        'Launch XY Token',
        'DAO and veXY governance',
        'GalaXY Kats Public Mint',
      ],
    },
  ];
  roadMapResponsive = [
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '559px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  @ViewChild('nav') navEleRef?: ElementRef<Element>;

  @HostListener('window:scroll')
  watchScroll() {
    this.scroll$.next(window.scrollY);
  }

  private scroll$ = new Subject<number>();
  constructor() {}

  ngOnInit(): void {
    this.scroll$
      .pipe(debounceTime(100))
      .subscribe((y) => this.dealWithScroll(y));
  }

  ngOnDestroy(): void {
    this.scroll$.complete();
  }

  private dealWithScroll(scrollY: number): void {
    if (scrollY >= 900) {
      this.navEleRef?.nativeElement.setAttribute('style', 'display: block');
    } else {
      this.navEleRef?.nativeElement.setAttribute('style', 'display: none');
    }
  }
}
