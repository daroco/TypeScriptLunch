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
      })
    );

  }

  ngOnInit() {
  }

}
