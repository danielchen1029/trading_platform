import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
