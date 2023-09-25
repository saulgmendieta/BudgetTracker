import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery'
import { SecurityService } from '../security/security.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit{

  constructor(public securityService: SecurityService) {}

  @Input()
  selectedMenu: string;

  
  ngOnInit(): void {
    this.bolding('#'+this.selectedMenu);
    //$(this.el.nativeElement).html('');
  }
  
  bolding(tag: string){
    var valueInRow= $(tag);
    $('.menu-item').each((i, val)=>
    {
      $(val).css('font-weight', 'normal');
    })
    valueInRow.css('font-weight', 'bold');

  }

}
