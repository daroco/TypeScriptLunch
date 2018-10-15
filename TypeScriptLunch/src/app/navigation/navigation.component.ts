import { Component, OnInit } from '@angular/core';
import INavigationPage from '../INavigationPage';
import NavigationPage from '../NavigationPage';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
  pages = Array<INavigationPage>();
  constructor() {
    this.pages.push(
      new NavigationPage({
        title: 'What is JavaScript',
        url: '/what-is-javascript',
        //children: [
        //  {
        //    title: 'Downsides',
        //    url: '/javascript-downsides'
        //  }
        //]
      }),
      new NavigationPage({
        title: 'What is TypeScript',
        url: '/what-is-typescript',
      }),
      new NavigationPage({
        title: 'Setting up TypeScript',
        url: '/setting-up-typescript',
      }),
      new NavigationPage({
        title: 'How TypeScript works',
        url: '/how-typescript-works',
      }),
      new NavigationPage({
        title: 'Examples',
        url: '/examples',
      })

    
    );

  }

  ngOnInit() {
  }

}
