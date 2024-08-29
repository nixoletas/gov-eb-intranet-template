import { Injectable } from '@angular/core';

interface Link {
  href: string;
  title: string;
  target?: string;
  icon: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  mainLinks: Link[] = [
    
  ];

  systems: Link[] = [
    
  ];

  intranets: Link[] = [
    
  ];

  usefulLinks: Link[] = [
    
  ];

  userHelp: Link[] = [
    
  ];

  constructor() { }
}
